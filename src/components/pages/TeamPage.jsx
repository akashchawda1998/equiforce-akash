import React from "react";
import Team from "../about/Team";


const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Spacer for Fixed Navbar */}
      <div className="h-18 bg-[#000E24]"></div>

      {/* Header Section */}
      <section className="bg-[#000E24] py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" data-aos="fade-down">
            Meet the Experts Behind <span className="text-[#d97706]">EquiForce</span>
          </h1>
          <p className="text-gray-300 text-md md:text-sm leading-relaxed" data-aos="fade-up">
  Our team blends  fintech, asset management and AI expertise to shape the future of finance.
</p>
        </div>
      </section>

      {/* The Team Component */}
        <Team />

    </div>
  );
};

export default TeamPage;