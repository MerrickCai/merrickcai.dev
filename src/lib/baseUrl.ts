function getBaseUrl() {
  if (process.env.NODE_ENV === "production") {
    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      throw new Error("Missing NEXT_PUBLIC_BASE_URL environment variable");
    }
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  return "http://localhost:3000";
}

const baseUrl = getBaseUrl();

export default baseUrl;
