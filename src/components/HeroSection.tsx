"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Animated Headline with Enhanced Glitch Effect */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
          The Digital Signature of Ramon Guillermo Pérez
        </h1>

        {/* Subheadline with Enhanced Clip Reveal Animation */}
        <p className="text-xl md:text-2xl lg:text-3xl text-color-foreground/90 font-light mb-10">
          Not just a portfolio — a preview of what's possible.
        </p>

        {/* Body Text with Enhanced Staggered Fade-Up */}
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 text-color-foreground/80 font-light">
          This isn't a static collection of past work—it's an invitation into
          the future. You step in and instantly feel momentum. Powered by
          intelligent collaboration, the site itself becomes proof of how fast
          ideas, stories, and strategies can come to life.
        </p>

        {/* Enhanced CTA Button with Glow Effect */}
        <button
          className="mt-12 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-10 py-5 rounded-full text-lg font-medium shadow-[0_0_15px_rgba(79,70,229,0.45)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] transition-all duration-300 ease-out"
          aria-label="View My Work"
        >
          View My Work
        </button>
       </div>
    </section>
  );
};

export default HeroSection;
