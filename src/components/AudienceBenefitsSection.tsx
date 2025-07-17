"use client";
import React from "react";


const AudienceBenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Who Benefits?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Founders & Startups
          </h4>
          <p className="text-gray-600">
            Rapidly prototype, launch, and iterate on AI-powered products and
            features without extensive in-house AI expertise.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Marketing & Content Teams
          </h4>
          <p className="text-gray-600">
            Automate content creation, personalize campaigns, and analyze
            performance with intelligent tools that amplify your reach.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Product Managers & Innovators
          </h4>
          <p className="text-gray-600">
            Integrate AI seamlessly into existing products, discover new
            opportunities, and deliver cutting-edge user experiences.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Agencies & Consultants
          </h4>
          <p className="text-gray-600">
            Leverage AI to deliver more efficient, data-driven solutions for
            clients, expanding your service offerings and competitive edge.
          </p>
        </div>

        {/* Benefit 5 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Educators & Trainers
          </h4>
          <p className="text-gray-600">
            Create adaptive learning environments, automate administrative
            tasks, and provide personalized feedback to students.
          </p>
        </div>

        {/* Benefit 6 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Anyone Ready for the Future of Work
          </h4>
          <p className="text-gray-600">
            Explore how AI can augment human potential, streamline workflows,
            and unlock new levels of creativity and productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudienceBenefitsSection;
