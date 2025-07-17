"use client";

import Image from "next/image";

import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import DemosSection from "../components/DemosSection";
import AudienceBenefitsSection from "../components/AudienceBenefitsSection";

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
