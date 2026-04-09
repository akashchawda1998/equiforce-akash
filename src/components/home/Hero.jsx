import React from "react";
import heroVideo from "../../assets/video/Heroivideo.mp4";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#000E24] to-[#0f2f5c] overflow-hidden">

      {/* Subtle Animated Background Lines */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/lines.svg')] bg-no-repeat bg-center bg-cover opacity-10 animate-[backgroundMove_60s_linear_infinite]"></div>
      </div>

<div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-white z-10">
          <p className="uppercase text-[#d97706] tracking-widest mt-10 mb-3 text-sm md:text-sm font-semibold">
            Nearly 3 Decades of Industry Expertise
          </p>
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight  lg:text-left">
  Your Strategic <span className="text-[#d97706]">Partner</span> in<br className="hidden sm:block" />
  Investment Ops, Performance & GIPS
</h1>
          <p className="uppercase max-w-lg text-gray-300 mb-8 font-medium text-sm md:text-base">
            <span className="text-[#d97706]">
              Empowering investment management with practitioner expertise & technology edge
            </span>
          </p>

        <Link to="/contact">  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d97706] to-[#3b82f6] hover:scale-105 transition-transform duration-300 font-medium shadow-lg">
            Request a Demo
          </button>
          </Link>
        </div>

        {/* RIGHT SIDE VIDEO CARD */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10">
          <div className="relative w-full max-w-lg">
            {/* Glassmorphic Video Card */}
            <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-500 hover:scale-105"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              {/* Subtle Neon Glow */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-gradient-to-tr from-[#d97706]/50 to-[#3b82f6]/50 opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes backgroundMove {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  );
}

export default Hero;