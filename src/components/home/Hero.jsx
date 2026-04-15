import React, { useRef, useState, useEffect } from "react";
import heroVideo from "../../assets/video/video.mp4";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";

function Hero() {
  // const [isMuted, setIsMuted] = useState(true);
  const [isMuted, setIsMuted] = useState(true);



  return (
      <div className="relative w-full bg-gradient-to-b from-[#000E24] to-[#0f2f5c] overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/lines.svg')] bg-no-repeat bg-center bg-cover opacity-10 animate-[backgroundMove_60s_linear_infinite]"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-white z-10">
          
          <p className="uppercase text-[#d97706] tracking-widest mt-10 mb-3 text-sm font-semibold">
            Nearly 3 Decades of Industry Expertise
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug">
            Your Strategic <span className="text-[#d97706]">Partner</span> in
            <br className="hidden sm:block" />
            <span>
              {" "}
              Investment Ops, Performance & GIPS® Composite Reporting
            </span>
          </h1>

          <p className="uppercase max-w-lg text-gray-300 mb-8 font-medium text-sm md:text-base">
            <span className="text-[#d97706]">
              Empowering investment management with practitioner expertise & a
              technology edge
            </span>
          </p>

          <Link to="/contact">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d97706] to-[#3b82f6] hover:scale-105 transition-transform duration-300 font-medium shadow-lg">
              Request a Demo
            </button>
          </Link>

        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10">
          <div className="relative w-full max-w-full">
            <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden group">
              
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-contain"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>

              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-gradient-to-tr from-[#d97706]/50 to-[#3b82f6]/50 opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER (ALIGNED PROPERLY) */}
      <div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-end gap-10 px-6 md:px-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        
        <p className="text-xs text-[#b4b4b4d4] max-w-full leading-relaxed pt-5  opacity-80">
          Global Investment Performance Standards (GIPS®) GIPS® is a registered
          trademark owned by CFA Institute. CFA Institute does not endorse or
          promote this organization, nor does it warrant the accuracy or quality
          of the content contained herein.
        </p>

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes backgroundMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
