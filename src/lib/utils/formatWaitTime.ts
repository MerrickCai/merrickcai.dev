export default function formatWaitTime(resetTimestamp: number): string {
  const waitTime = Math.ceil((resetTimestamp - Date.now()) / 1000);
  if (waitTime <= 60) return `${waitTime} seconds`;
  const minutes = Math.ceil(waitTime / 60);
  return `${minutes} minute${minutes > 1 ? "s" : ""}`;
}
