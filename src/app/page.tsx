"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp } from "../animations/variants";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <motion.section
        className="text-center py-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-4"
          variants={fadeInUp}
        >
          The Digital Signature of Ramon Guillermo Pérez
        </motion.h2>
        <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
          Not just a portfolio — a preview of what's possible.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4"
          variants={fadeInUp}
        >
          This isn't a static collection of past work—it's an invitation into
          the future. You step in and instantly feel momentum. Powered by
          intelligent collaboration, the site itself becomes proof of how fast
          ideas, stories, and strategies can come to life.
        </motion.p>
        <motion.button
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          variants={fadeInUp}
        >
          View My Work
        </motion.button>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h3
          className="text-3xl font-bold text-gray-900 text-center mb-8"
          variants={fadeInUp}
        >
          The Human Side of AI
        </motion.h3>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
          variants={fadeInUp}
        >
          This site is built on a simple but powerful belief:{" "}
          <strong className="font-bold">
            Technology should expand our humanity, not replace it.
          </strong>
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-center"
          variants={fadeInUp}
        >
          AI isn't here to take jobs or replace people—it's here to clear the
          noise, the repetition, the bottlenecks. When we work alongside
          intelligent systems, something remarkable happens: we get time back.
          Time to create, to learn, to lead. Time to do the work only humans can
          do—empathetic, strategic, imaginative.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-center"
          variants={fadeInUp}
        >
          For businesses, this means growth without burnout. Your team doesn't
          shrink—it stretches. Each person becomes more capable, because they're
          supported by systems that take care of the rest. Productivity
          increases. Cost-efficiency improves. And morale soars, because work
          starts to feel like progress again.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-center"
          variants={fadeInUp}
        >
          This site was built with AI, yes—but guided by purpose, vision, and
          craft. It's proof of what happens when creativity and computation
          collaborate. And it's just the beginning.
        </motion.p>
      </motion.section>

      {/* Demos Section */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h3
          className="text-3xl font-bold text-gray-900 text-center mb-8"
          variants={fadeInUp}
        >
          Prototypes of Possibility
        </motion.h3>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
          variants={fadeInUp}
        >
          Forget polished case studies—I'm presenting living demos, lightweight
          AI-powered "agents" that showcase what's possible now:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-2">
              Creative Content Assistant
            </h4>
            <p className="text-gray-700">
              Transforms video or audio content—like shows, interviews,
              tutorials, or DJ sets—into ready-made social clips complete with
              titles, captions, and hashtags. From hours to headlines in
              seconds.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-2">Smart Sprint Planner</h4>
            <p className="text-gray-700">
              Reads project files and auto-generates the next sprint plan,
              keeping your team aligned and focused.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-2">
              Touchpoint Generator (preview)
            </h4>
            <p className="text-gray-700">
              Converts internal knowledge into onboarding steps, email copy, or
              FAQ support in one intelligent flow.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Audience Benefits Section */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h3
          className="text-3xl font-bold text-gray-900 text-center mb-8"
          variants={fadeInUp}
        >
          What's In It for You
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-2">Decision-makers</h4>
            <p className="text-gray-700">
              A compelling vision of new efficiencies—leaderboards built-in,
              content ready to publish, workflows that think for you.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-2">Tech leads</h4>
            <p className="text-gray-700">
              Clean, declarative systems built with modern stacks, ready to
              integrate.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeInUp}
          >
            <h4 className="text-xl font-bold mb-2">Employees & Users</h4>
            <p className="text-gray-700">
              Smarter tools support daily work, reducing friction and unlocking
              creativity.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-center py-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          This single-page experience is just the beginning. Scroll down to
          explore the live demos, or reach out directly to schedule a hands-on
          walkthrough. Let's start transforming how your digital
          presence—including media, marketing, and operations—interacts, adapts,
          and amazes.
        </motion.p>
      </motion.section>
    </div>
  );
}
