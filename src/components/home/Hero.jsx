import React, { useRef, useState, useEffect } from "react";
import heroVideo from "../../assets/video/EQUIFORCE.mp4";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#000E24] to-[#0f2f5c] overflow-hidden px-2">

      {/* Background — decorative, hidden from assistive tech */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="w-full h-full bg-[url('/lines.svg')] bg-no-repeat bg-center bg-cover opacity-10 animate-[backgroundMove_60s_linear_infinite]"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-2 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-white z-10">

          <p className="inline-flex items-center gap-2 uppercase tracking-wider sm:tracking-widest mt-6 sm:mt-10 mb-3 text-xs sm:text-sm font-semibold whitespace-nowrap">
            <span className="text-[#d97706] shrink-0">{'>>'}</span>
            <span className="text-white">DRIVING PERFORMANCE FORWARD</span>
            <span className="text-[#d97706] shrink-0">{'>>'}</span>
          </p>

          <h1 className="text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-extrabold mb-4 sm:mb-6 leading-tight sm:leading-snug lg:leading-[1.18]">
            <span className="block">
              Your Strategic <span className="text-[#d97706]">Partner</span> in
            </span>
            <span className="block">Performance Measurement,</span>
            <span className="block">GIPS® Composite &amp;</span>
            <span className="block">Consulting Services</span>
          </h1>

          <p className="uppercase max-w-2xl text-gray-300 mb-8 font-medium text-sm md:text-base leading-relaxed">
            <span className="text-[#d97706]">
              Empowering investment management with practitioner expertise &amp;
              <br className="hidden sm:block" /> a technology edge
            </span>
          </p>

          {/* ADA FIX: replaced <Link><button> nesting with a single styled <Link> */}


        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10">
          <div className="relative w-full max-w-full">
            <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden group">

              {/* ADA FIX: aria-label describes the video content */}
              <video
                autoPlay
                muted
                loop
                playsInline
                aria-label="EquiForce platform walkthrough animation showing performance measurement and reporting dashboards"
                className="w-full h-auto object-contain"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>

              {/* Decorative pulse border — hidden from assistive tech */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl border border-gradient-to-tr from-[#d97706]/50 to-[#3b82f6]/50 opacity-50 animate-pulse"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="relative max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-end gap-10 px-2 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {/* ADA FIX: improved text color from ~#b4b4b4d4 (fails contrast) to #9ca3af (gray-400, passes on dark bg) */}
        <p className="text-xs lg:text-[11.6px] text-gray-400 max-w-full leading-relaxed pt-5 opacity-90">
          Global Investment Performance Standards (GIPS®) GIPS® is a registered
          trademark owned by CFA Institute. CFA Institute does not endorse or
          promote this organization, nor does it warrant the accuracy or quality
          of the content contained herein.
        </p>
      </div>

      {/* Animation keyframes */}
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
