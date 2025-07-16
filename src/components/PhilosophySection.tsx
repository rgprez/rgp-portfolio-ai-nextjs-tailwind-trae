"use client";
import React from "react";
import dynamic from "next/dynamic";
import { fadeInUp } from "../animations/variants";

const MotionSection = dynamic(
  () => import("motion/react").then((mod) => mod.motion.section),
  { ssr: false }
);
const MotionH3 = dynamic(
  () => import("motion/react").then((mod) => mod.motion.h3),
  { ssr: false }
);
const MotionP = dynamic(
  () => import("motion/react").then((mod) => mod.motion.p),
  { ssr: false }
);

const PhilosophySection = () => {
  return (
    <MotionSection
      className="py-16 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <MotionH3
        className="text-3xl font-bold text-gray-900 text-center mb-8"
        variants={fadeInUp}
      >
        The Human Side of AI
      </MotionH3>
      <MotionP
        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
        variants={fadeInUp}
      >
        This site is built on a simple but powerful belief:{" "}
        <strong className="font-bold">
          Technology should expand our humanity, not replace it.
        </strong>
      </MotionP>
      <MotionP
        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-center"
        variants={fadeInUp}
      >
        AI isn't here to take jobs or replace people—it's here to clear the
        noise, the repetition, the bottlenecks. When we work alongside
        intelligent systems, something remarkable happens: we get time back.
        Time to create, to learn, to lead. Time to do the work only humans can
        do—empathetic, strategic, imaginative.
      </MotionP>
      <MotionP
        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-center"
        variants={fadeInUp}
      >
        For businesses, this means growth without burnout. Your team doesn't
        shrink—it stretches. Each person becomes more capable, because they're
        supported by systems that take care of the rest. Productivity increases.
        Cost-efficiency improves. And morale soars, because work starts to feel
        like progress again.
      </MotionP>
      <MotionP
        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-center"
        variants={fadeInUp}
      >
        This site was built with AI, yes—but guided by purpose, vision, and
        craft. It's proof of what happens when creativity and computation
        collaborate. And it's just the beginning.
      </MotionP>
    </MotionSection>
  );
};

export default PhilosophySection;
