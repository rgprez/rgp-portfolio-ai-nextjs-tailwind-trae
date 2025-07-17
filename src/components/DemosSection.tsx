"use client";
import React from "react";
import Image from "next/image";


const DemosSection = () => {
  return (
    <section
      className="py-16"
    >
      <h2
        className="text-3xl font-bold text-gray-900 text-center mb-8"
      >
        Demos & Case Studies
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Demo 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src="/images/demo-thumb-1.jpg"
            alt="Demo Thumbnail 1"
            width={400}
            height={250}
            className="rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            AI-Powered Content Generation
          </h4>
          <p className="text-gray-600 mb-4">
            See how AI can rapidly generate high-quality marketing copy, blog
            posts, and social media content.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            View Demo
          </a>
        </div>

        {/* Demo 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src="/images/demo-thumb-2.jpg"
            alt="Demo Thumbnail 2"
            width={400}
            height={250}
            className="rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Automated Customer Support Chatbot
          </h4>
          <p className="text-gray-600 mb-4">
            Experience a smart chatbot that handles customer inquiries, reduces
            response times, and improves satisfaction.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            View Demo
          </a>
        </div>

        {/* Demo 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src="/images/demo-thumb-3.jpg"
            alt="Demo Thumbnail 3"
            width={400}
            height={250}
            className="rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Personalized Learning Platform
          </h4>
          <p className="text-gray-600 mb-4">
            Explore an adaptive e-learning system that tailors content and pace
            to individual student needs.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            View Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
