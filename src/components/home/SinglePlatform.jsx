import React from "react";
import SinglePlatformImg from "../../assets/images/dashboard.jpeg";

const SinglePlatform = () => {
  const NAVY = "#000E24";

  const badges = [
    // Left Side
    { text: "Performance Measurement", icon: "☁️", pos: "top-[15%] -left-4 md:-left-12", delay: "100" },
    { text: "Real-time data", icon: "🕒", pos: "top-[40%] -left-8 md:-left-20", delay: "200" },
    { text: "Enterprise scale", icon: "🏢", pos: "bottom-[20%] -left-4 md:-left-12", delay: "300" },
    // Right Side
    { text: "Single book of record", icon: "📖", pos: "top-[15%] -right-4 md:-right-12", delay: "400" },
    { text: "Security-first", icon: "🛡️", pos: "top-[45%] -right-8 md:-right-20", delay: "500" },
    { text: "Universal team access", icon: "👥", pos: "bottom-[20%] -right-4 md:-right-12", delay: "600" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-16 md:mb-24" data-aos="fade-up">
          <h2 
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto"
            style={{ color: NAVY }}
          >
            The Single Platform That Your Firm's Ambitions Deserve
          </h2>
        </div>

        {/* Image & Badges Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Dashboard Image */}
          <div className="relative z-10 shadow-xl rounded-lg overflow-hidden border border-gray-100" data-aos="zoom-in">
            <img 
              src={SinglePlatformImg} 
              alt="EquiForce Dashboard" 
              className="w-full h-auto"
            />
          </div>

          {/* Floating Badges */}
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`absolute z-20 hidden sm:flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-50 whitespace-nowrap transition-transform hover:scale-105 ${badge.pos}`}
              data-aos="fade-right"
              data-aos-delay={badge.delay}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="font-bold text-sm md:text-base text-slate-700">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile Badges (Simplified grid for small screens) */}
        <div className="grid grid-cols-2 gap-4 mt-12 sm:hidden">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="text-sm">{badge.icon}</span>
              <span className="font-bold text-xs text-slate-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePlatform;