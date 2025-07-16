"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { typing } from "../animations/variants";

const MotionH2 = dynamic(
  () => import("motion/react").then((mod) => mod.motion.h2),
  { ssr: false }
);

const MotionSpan = dynamic(
  () => import("motion/react").then((mod) => mod.motion.span),
  { ssr: false }
);

interface TypingTextProps {
  text: string;
  className?: string;
  glitchEffect?: boolean;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  className = "",
  glitchEffect = true,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  // Split text into array of characters
  const characters = Array.from(text);

  // Glitch effect timing
  useEffect(() => {
    if (!glitchEffect) return;

    // Initial glitch after typing completes
    const initialTimeout = setTimeout(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, characters.length * 50 + 500);

    // Random glitches
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [glitchEffect, characters.length]);

  return (
    <MotionH2
      className={`relative ${className}`}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <MotionSpan
          key={`${char}-${index}`}
          variants={typing}
          custom={index}
          className={`inline-block ${isGlitching ? "glitch" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </MotionSpan>
      ))}

      {/* Glitch overlay */}
      {glitchEffect && isGlitching && (
        <span
          className="absolute inset-0 overflow-hidden opacity-70 before:content-[''] before:absolute before:top-0 before:left-[-5px] before:w-[2px] before:h-full before:bg-blue-400"
          style={{
            textShadow: "2px 0 #ff00ea, -2px 0 #00c3ff",
            clipPath: "inset(10% 0 70% 0)",
            animation: "glitch-anim 0.2s infinite",
          }}
        >
          {text}
        </span>
      )}

      <style jsx global>{`
        @keyframes glitch-anim {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-5px, 5px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(5px, -5px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(5px, 5px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(-5px, 5px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-5px, -5px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(5px, 5px);
          }
        }

        .glitch {
          position: relative;
          animation: shake 0.1s linear;
        }

        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(1px, 1px);
          }
          50% {
            transform: translate(-1px, -1px);
          }
          75% {
            transform: translate(-1px, 1px);
          }
          100% {
            transform: translate(1px, -1px);
          }
        }
      `}</style>
    </MotionH2>
  );
};

export default TypingText;
