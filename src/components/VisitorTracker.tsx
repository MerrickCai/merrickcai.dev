"use client";

import { useEffect } from "react";
import { incrementVisitorCount } from "@/services/visitorService";

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await incrementVisitorCount();
      } catch (error) {
        console.error("Failed to track visitor:", error);
      }
    };

    trackVisitor();
  }, []);

  // This component doesn't render anything
  return null;
}
