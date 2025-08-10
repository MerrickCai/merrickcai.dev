"use server";

import type { Comment, ActionState } from "@/app/comments/types/comments.types";
import { boxLog } from "@/lib/console/boxLog";
import formatWaitTime from "@/lib/utils/formatWaitTime";
import { redis, canPass } from "@/lib/redis";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

const indexKey = "comments:index:by_time";

export async function createComment(prevState: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const identifier = await getClientIdentifier();

    // Check write rate limit
    const { success, reset } = await canPass("write", identifier);

    if (!success) {
      const waitTime = formatWaitTime(reset);
      return {
        success: false,
        error: `You're posting too quickly. Please wait ${waitTime} before posting another comment.`,
        message: "",
      };
    }

    // Extract and pre-clean
    const rawName = (formData.get("name") as string) ?? "";
    const rawEmail = (formData.get("email") as string) ?? "";
    const rawComment = (formData.get("comment") as string) ?? "";

    const name = rawName.trim();
    const email = rawEmail.trim().toLowerCase();
    const comment = rawComment.trim();

    // Validate input parameters
    const validationResult = validateCommentParams(name, email, comment);
    if (!validationResult.isValid) {
      return {
        success: false,
        error: validationResult.error,
        message: "",
      };
    }

    // Assemble: Create new comment
    const commentId = crypto.randomUUID();
    const createdAt = Date.now();
    const newComment: Comment = {
      id: commentId,
      name,
      email,
      comment,
      createdAt,
      status: "public", // Default status to public, I might change this later
    };

    // Use Redis Transaction to ensure atomicity
    const commentKey = `comment:${commentId}`;

    // Transaction (Upstash multi-command packaging)
    const multi = redis.multi();

    // Store comment as HASH
    multi.hset(commentKey, {
      id: newComment.id,
      name: newComment.name,
      email: newComment.email,
      comment: newComment.comment,
      createdAt: String(newComment.createdAt),
      status: newComment.status,
    });

    // 2. Add to time index (sorted by creation time)
    multi.zadd(indexKey, { score: createdAt, member: commentKey });

    // Execute transaction
    await multi.exec();

    // Revalidate path
    revalidatePath("/comments");

    boxLog("Created new comment successfully:", newComment);

    return {
      success: true,
      error: "",
      message: "Comment posted successfully!",
    };
  } catch (error) {
    console.error("Error creating comment:", error);
    return {
      success: false,
      error: "Something went wrong on our end. Please try again in a moment.",
      message: "",
    };
  }
}

async function getClientIdentifier(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  return forwardedFor?.split(",")[0].trim() || realIp || forwardedFor || "anonymous";
}

function validateCommentParams(name: string, email: string, comment: string): { isValid: boolean; error: string } {
  // Check required fields
  if (!name || !email || !comment) {
    return {
      isValid: false,
      error: "Please fill in all required fields: name, email, and comment.",
    };
  }

  // Check name length
  if (name.length > 100) {
    return {
      isValid: false,
      error: `Name is too long. Please keep it under 100 characters (currently ${name.length}).`,
    };
  }

  // Check comment length
  if (comment.length > 1000) {
    return {
      isValid: false,
      error: `Comment is too long. Please keep it under 1000 characters (currently ${comment.length}).`,
    };
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 256) {
    return {
      isValid: false,
      error: "Please enter a valid email address (max 256 characters).",
    };
  }

  return {
    isValid: true,
    error: "",
  };
}
