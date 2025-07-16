"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { fadeInUp } from "../animations/variants";
import TypingText from "./TypingText";
import ClipRevealText from "./ClipRevealText";
import HeroBackground from "./HeroBackground";

const MotionSection = dynamic(
  () => import("motion/react").then((mod) => mod.motion.section),
  { ssr: false }
);
const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionP = dynamic(
  () => import("motion/react").then((mod) => mod.motion.p),
  { ssr: false }
);
const MotionButton = dynamic(
  () => import("motion/react").then((mod) => mod.motion.button),
  { ssr: false }
);

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for 3D background interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Enhanced mouse tracking for 3D background interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position (0-1 range)
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MotionSection
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      {/* 3D Neural Network Background */}
      <HeroBackground mousePosition={mousePosition} />

      {/* Content Container with Enhanced Spacing */}
      <MotionDiv
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={fadeInUp}
      >
        {/* Animated Headline with Enhanced Glitch Effect */}
        <TypingText
          text="The Digital Signature of Ramon Guillermo Pérez"
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600"
          glitchEffect={true}
        />

        {/* Subheadline with Enhanced Clip Reveal Animation */}
        <ClipRevealText
          text="Not just a portfolio — a preview of what's possible."
          className="text-xl md:text-2xl lg:text-3xl text-color-foreground/90 font-light mb-10"
          delay={1.5}
        />

        {/* Body Text with Enhanced Staggered Fade-Up */}
        <MotionP
          className="text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 text-color-foreground/80 font-light"
          variants={fadeInUp}
          transition={{ delay: 2, duration: 0.7 }}
        >
          This isn't a static collection of past work—it's an invitation into
          the future. You step in and instantly feel momentum. Powered by
          intelligent collaboration, the site itself becomes proof of how fast
          ideas, stories, and strategies can come to life.
        </MotionP>

        {/* Enhanced CTA Button with Glow Effect */}
        <MotionButton
          className="mt-12 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-10 py-5 rounded-full text-lg font-medium shadow-[0_0_15px_rgba(79,70,229,0.45)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] transition-all duration-300 ease-out"
          variants={fadeInUp}
          transition={{ delay: 2.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(79, 70, 229, 0.7)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          View My Work
        </MotionButton>
      </MotionDiv>
    </MotionSection>
  );
};

export default HeroSection;
