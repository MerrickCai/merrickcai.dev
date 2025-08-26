import { redis, canPass } from "@/lib/redis";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import formatWaitTime from "@/lib/utils/formatWaitTime";
import { boxLog } from "@/lib/console/boxLog";

const visitorsCountKey = "site:visitors:count";
const visitorIpPrefix = "site:visitor:ip:";

// GET - Fetch visitor count
export async function GET() {
  try {
    const identifier = await getClientIdentifier();

    // Check read rate limit
    const { success, reset } = await canPass("read", identifier);

    if (!success) {
      const waitTime = formatWaitTime(reset);
      return NextResponse.json(
        { error: `You're reading too quickly. Please wait ${waitTime} before fetching visitor count again.` },
        { status: 429 },
      );
    }

    // Fetch visitor count
    const count = (await redis.get<number>(visitorsCountKey)) || 0;

    boxLog("Fetched visitor count from Redis:", { count });

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// POST - Increment visitor count (deduplicated by IP)
export async function POST() {
  try {
    const identifier = await getClientIdentifier();

    // Check write rate limit
    const { success, reset } = await canPass("write", identifier);

    if (!success) {
      const waitTime = formatWaitTime(reset);
      return NextResponse.json(
        { error: `You're submitting too quickly. Please wait ${waitTime} before visiting again.` },
        { status: 429 },
      );
    }

    // Check if this IP has visited within the last hour
    const ipKey = `${visitorIpPrefix}${identifier}`;
    const isNewVisitor = await redis.set(ipKey, "1", { ex: 3600, nx: true }); // 3600 seconds = 1 hour

    if (isNewVisitor) {
      // Only increment if this is a new visitor
      const newCount = await redis.incr(visitorsCountKey);

      boxLog("New visitor registered:", {
        ip: identifier,
        newCount,
        timestamp: new Date().toLocaleString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function getClientIdentifier(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  return forwardedFor?.split(",")[0].trim() || realIp || forwardedFor || "anonymous";
}
