import baseUrl from "@/lib/baseUrl";

export async function getVisitorCount(): Promise<number> {
  try {
    const response = await fetch(`${baseUrl}/api/visitors`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      next: { revalidate: 3600 }, // One hour revalidation
    });

    if (!response.ok) {
      console.error(`Failed to fetch visitor count: ${response.status}`);
      return 0;
    }

    const data: { count: number } = await response.json();
    return data.count;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return 0;
  }
}

export async function incrementVisitorCount(): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}/api/visitors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to increment visitor count: ${response.status}`);
    }
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
  }
}
