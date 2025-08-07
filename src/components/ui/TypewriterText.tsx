"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

export default function TypewriterText({ texts, speed = 100, pause = 2000, className = "" }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), pause);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, speed, pause]);

  return (
    <div className={className}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-full w-0.5 bg-current"
      />
    </div>
  );
}
