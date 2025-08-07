"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

export default function FloatingParticles({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(59, 130, 246, 0.3)", // blue-500
      "rgba(99, 102, 241, 0.3)", // indigo-500
      "rgba(139, 92, 246, 0.2)", // violet-500
      "rgba(59, 130, 246, 0.1)", // blue-500 lighter
    ];

    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 10,
    }));

    setParticles(newParticles);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.5, 0.5, 1],
            opacity: [0.3, 0.8, 0.3, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
