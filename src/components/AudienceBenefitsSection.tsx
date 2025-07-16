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
const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionP = dynamic(
  () => import("motion/react").then((mod) => mod.motion.p),
  { ssr: false }
);

const AudienceBenefitsSection = () => {
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
        Who Benefits?
      </MotionH3>
      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={fadeInUp}
      >
        {/* Benefit 1 */}
        <MotionDiv className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Founders & Startups
          </h4>
          <MotionP className="text-gray-600">
            Rapidly prototype, launch, and iterate on AI-powered products and
            features without extensive in-house AI expertise.
          </MotionP>
        </MotionDiv>

        {/* Benefit 2 */}
        <MotionDiv className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Marketing & Content Teams
          </h4>
          <MotionP className="text-gray-600">
            Automate content creation, personalize campaigns, and analyze
            performance with intelligent tools that amplify your reach.
          </MotionP>
        </MotionDiv>

        {/* Benefit 3 */}
        <MotionDiv className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Product Managers & Innovators
          </h4>
          <MotionP className="text-gray-600">
            Integrate AI seamlessly into existing products, discover new
            opportunities, and deliver cutting-edge user experiences.
          </MotionP>
        </MotionDiv>

        {/* Benefit 4 */}
        <MotionDiv className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Agencies & Consultants
          </h4>
          <MotionP className="text-gray-600">
            Leverage AI to deliver more efficient, data-driven solutions for
            clients, expanding your service offerings and competitive edge.
          </MotionP>
        </MotionDiv>

        {/* Benefit 5 */}
        <MotionDiv className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Educators & Trainers
          </h4>
          <MotionP className="text-gray-600">
            Create adaptive learning environments, automate administrative
            tasks, and provide personalized feedback to students.
          </MotionP>
        </MotionDiv>

        {/* Benefit 6 */}
        <MotionDiv className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Anyone Ready for the Future of Work
          </h4>
          <MotionP className="text-gray-600">
            Explore how AI can augment human potential, streamline workflows,
            and unlock new levels of creativity and productivity.
          </MotionP>
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default AudienceBenefitsSection;
