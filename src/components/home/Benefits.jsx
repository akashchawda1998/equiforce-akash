import { useState } from "react";
import wave from "../../assets/images/bg-wave.png";
import benefitImg from "../../assets/images/image-tab1.jpg";

import { Shield, CheckCircle, Zap, Brain, BarChart3 } from "lucide-react";

const tabs = [
  { name: "Operational Accuracy", icon: CheckCircle },
  { name: "Efficiency & Automation", icon: Zap },
  { name: "Data Security & Compliance", icon: Shield },
  { name: "AI-Powered Intelligence", icon: Brain },
  { name: "Better Decision Making", icon: BarChart3 },
];

const Benefits = () => {
  const [active, setActive] = useState(0);

  return (
    <section 
      className="relative  overflow-hidden"
      style={{ background: "radial-gradient(circle, rgba(35, 60, 106, 1) 40%, rgba(25, 112, 125, 1) 100%)" }}
    >
      {/* Wave */}
      <img
        src={wave}
        alt="background wave"
        className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none mix-blend-overlay"
      />

      {/* ✅ Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 text-center relative z-10">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white mb-6 border border-white/20 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs font-semibold">
            Key Benefits
          </span>
        </div>

        {/* Heading - Text changed to white to contrast with dark background */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Delivering Accuracy, <span className="text-[#d97706]">Efficiency</span> <br className="hidden sm:block" />&
          Intelligent Investment <span className="text-[#d97706]">Operations</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/80 max-w-2xl mx-auto mb-10 md:mb-14 font-medium">
          EquiForce enables investment firms to operate with confidence by
          combining automation, compliance, and AI-driven insights.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;

            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`group cursor-pointer transition-all duration-300
        px-4 md:px-6 py-4 md:py-6 rounded-2xl min-w-[140px] sm:min-w-[160px] text-center border

        ${
          active === index
            ? "bg-white border-[#d97706] shadow-[0_10px_30px_rgba(217,119,6,0.25)] scale-105"
            : "bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:shadow-md"
        }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 flex items-center justify-center rounded-full transition

          ${
            active === index
              ? "bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white shadow-md"
              : "bg-white/20 text-[#d97706]"
          }`}
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <p
                  className={`text-xs md:text-sm font-bold tracking-wide
          ${active === index ? "text-gray-900" : "text-white/90"}`}
                >
                  {tab.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content - Converted to Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
          {/* Left */}
          <div className="text-left">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-5 leading-snug">
              Achieve Precision & Confidence in Investment Operations
            </h3>

            <p className="text-white/80 mb-8 leading-relaxed text-sm md:text-base">
              With EquiForce, investment firms gain full control over their
              operations — ensuring data accuracy, regulatory compliance, and
              streamlined workflows powered by intelligent automation.
            </p>

            <ul className="text-white/90 font-medium text-sm md:text-base space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#d97706]">✔</span> Ensure data accuracy across all systems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#d97706]">✔</span> Reduce operational risk and manual effort
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#d97706]">✔</span> Maintain compliance with industry standards
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#d97706]">✔</span> Leverage AI for smarter investment decisions
              </li>
            </ul>

            <button className="w-full sm:w-auto bg-[#d97706] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-[#b46002] hover:scale-105 transition-all duration-300">
              Try for Free
            </button>
          </div>

          {/* Right */}
          <div className="relative flex justify-center items-center mt-6 lg:mt-0">
            {/* Glow Background */}
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#2dd4bf] opacity-20 blur-[100px] rounded-full"></div>

            {/* Image */}
            <img
              src={benefitImg}
              alt="investment benefits"
              className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Play Button Pulse Overlay */}
            <div className="absolute flex items-center justify-center z-20">
              {/* Outer pulse ring */}
              <span className="absolute inline-flex h-24 w-24 rounded-full bg-[#d97706]/40 animate-ping"></span>

              {/* Second ring */}
              <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#d97706]/60 animate-pulse"></span>

              {/* Main button */}
              <button className="relative z-10 w-16 h-16 rounded-full bg-white shadow-[0_0_20px_rgba(217,119,6,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-[#d97706]"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;