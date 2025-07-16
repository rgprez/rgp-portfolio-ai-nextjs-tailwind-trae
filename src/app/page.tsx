"use client";

import Image from "next/image";
import { fadeInUp } from "../animations/variants";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import DemosSection from "../components/DemosSection";
import AudienceBenefitsSection from "../components/AudienceBenefitsSection";

const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH3 = dynamic(
  () => import("motion/react").then((mod) => mod.motion.h3),
  { ssr: false }
);
const MotionSection = dynamic(
  () => import("motion/react").then((mod) => mod.motion.section),
  { ssr: false }
);
const MotionP = dynamic(
  () => import("motion/react").then((mod) => mod.motion.p),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Demos Section */}
      <DemosSection />

      {/* Audience Benefits Section */}
      <AudienceBenefitsSection />
    </div>
  );
}
