import "server-only";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
if (!url || !token) throw new Error("Missing Upstash Redis environment variables");

export const redis = new Redis({ url, token });

const buckets = {
  default: new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(10, "1 m") }),
  write: new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(5, "1 m") }),
  read: new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(50, "1 m") }),
} as const;

type Bucket = keyof typeof buckets;

export async function canPass(bucket: Bucket = "default", identifier: string = "api") {
  const result = await buckets[bucket].limit(`${bucket}:${identifier}`);
  return { success: result.success, reset: result.reset };
}
