"use client";

import React from "react";
import dynamic from "next/dynamic";

const MotionP = dynamic(
  () => import("motion/react").then((mod) => mod.motion.p),
  { ssr: false }
);

interface ClipRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ClipRevealText: React.FC<ClipRevealTextProps> = ({
  text,
  className = "",
  delay = 0.5,
}) => {
  return (
    <MotionP
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay,
      }}
    >
      {text}
    </MotionP>
  );
};

export default ClipRevealText;
