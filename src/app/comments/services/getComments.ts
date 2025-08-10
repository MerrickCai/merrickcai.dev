import type { Comment } from "@/app/comments/types/comments.types";
import { boxLog } from "@/lib/console/boxLog";
import baseUrl from "@/lib/baseUrl";

export async function getComments(): Promise<Comment[]> {
  try {
    const response = await fetch(`${baseUrl}/api/comments`, { cache: "force-cache" });

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const comments: Comment[] = await response.json();

    boxLog(`Fetched comments:`, comments);

    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}
