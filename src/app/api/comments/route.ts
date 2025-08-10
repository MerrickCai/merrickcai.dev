import type { Comment } from "@/app/comments/types/comments.types";
import { redis, canPass } from "@/lib/redis";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import formatWaitTime from "@/lib/utils/formatWaitTime";
import { boxLog } from "@/lib/console/boxLog";

const indexKey = "comments:index:by_time";

export async function GET() {
  try {
    const identifier = await getClientIdentifier();

    // Check read rate limit
    const { success, reset } = await canPass("read", identifier);

    if (!success) {
      const waitTime = formatWaitTime(reset);
      return NextResponse.json(
        { error: `You're reading too quickly. Please wait ${waitTime} before fetching comments again.` },
        { status: 429 },
      );
    }

    // Fetch comment keys from the time index (latest first, descending)
    const commentKeys = await redis.zrange<string[]>(indexKey, 0, -1, { rev: true });

    // For pagination (to be implemented):
    // const offset = Number(new URL(req.url).searchParams.get("offset") ?? 0);
    // const limit = Number(new URL(req.url).searchParams.get("limit") ?? 20);
    // const commentKeys = await redis.zrange(indexKey, { rev: true, offset, count: offset + limit - 1 });
    // return { comments, nextOffset: offset + commentKeys.length };

    if (commentKeys.length === 0) {
      return NextResponse.json([]);
    }

    // Fetch comment data in bulk to reduce round trips
    const pipe = redis.pipeline();
    commentKeys.forEach((key) => pipe.hgetall(key));
    const results = await pipe.exec<(Comment | null)[]>();

    const comments: Comment[] = [];
    const staleCommentKeys: string[] = [];

    results.forEach((data, idx) => {
      // If the data is not found or is empty, mark the key for removal
      if (!data || Object.keys(data).length === 0) {
        staleCommentKeys.push(commentKeys[idx]);
        return;
      }
      // If the comment is not public, skip it
      if (data.status !== "public") return;

      comments.push({
        id: data.id,
        name: data.name,
        // email: data.email,
        comment: data.comment,
        createdAt: Number(data.createdAt),
        status: data.status,
      });
    });

    // Remove stale comment keys from the index
    if (staleCommentKeys.length) {
      await redis.zrem(indexKey, ...staleCommentKeys);
    }

    boxLog("Fetched public comments from Redis in Route Handler:", comments);

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json([], { status: 500 });
  }
}

async function getClientIdentifier(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  return forwardedFor?.split(",")[0].trim() || realIp || forwardedFor || "anonymous";
}

// For admin delete actions:
// redis.hdel(`comment:${id}`) + redis.zrem(indexKey, `comment:${id}`)

// export async function DELETE(req: Request) {
//   const auth = req.headers.get("authorization");
//   if (!auth || auth.split(" ")[1] !== process.env.ADMIN_TOKEN) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
//   const { id } = await req.json();
//   const key = id.startsWith("comment:") ? id : `comment:${id}`;

//   await Promise.all([redis.del(key), redis.zrem(indexKey, key)]);
//   return NextResponse.json({ ok: true });
// }
