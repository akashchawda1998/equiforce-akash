import React from "react";
import { Link } from "react-router-dom";

/**
 * SOC 2 Type 1 Shield Badge Component
 * Designed in accordance with enterprise brand guidelines:
 * - Background: Navy (#0A1A2F)
 * - Accent stroke: Blue (#2D7FF9)
 * - Text: White (#FFFFFF)
 * - Icon: White/Light Gray (#E8E8E8)
 */
const Soc2Badge = ({ className = "", compact = false }) => {
  if (compact) {
    return (
      <Link
        to="/security"
        aria-label="EquiForce SOC 2 Type 1 Security & Compliance Details"
        className={`group inline-flex items-center gap-2.5 bg-[#0A1A2F] border border-[#2D7FF9]/60 hover:border-[#2D7FF9] px-3.5 py-2 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 ${className}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-[#2D7FF9] group-hover:scale-110 transition-transform shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#0A1A2F" />
          <path d="m9 12 2 2 4-4" stroke="#2D7FF9" strokeWidth="2.5" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#2D7FF9] leading-none mb-0.5">
            AICPA SOC 2
          </p>
          <p className="text-xs font-bold text-white leading-none">
            TYPE 1 COMPLIANT
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/security"
      aria-label="EquiForce SOC 2 Type 1 Security & Compliance Details"
      className={`group inline-flex items-center gap-3 bg-[#0A1A2F] border border-[#2D7FF9]/60 hover:border-[#2D7FF9] p-3.5 rounded-2xl shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 ${className}`}
    >
      {/* SHIELD ICON EMBLEM */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-b from-[#122A48] to-[#0A1A2F] border border-[#2D7FF9]/50 group-hover:border-[#2D7FF9] group-hover:shadow-[0_0_12px_rgba(45,127,249,0.4)] transition-all shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-[#E8E8E8] group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#0A1A2F" stroke="#2D7FF9" strokeWidth="1.5" />
          <path d="m9 12 2 2 4-4" stroke="#2D7FF9" strokeWidth="2.5" />
        </svg>
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2D7FF9] group-hover:text-blue-400 transition-colors">
            AICPA SOC 2
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2D7FF9]"></span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
            AUDITED
          </span>
        </div>
        <span className="text-xs font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors">
          SOC 2 TYPE 1 COMPLIANT
        </span>
        <span className="text-[10px] text-gray-400 group-hover:text-blue-300 transition-colors mt-0.5 flex items-center gap-1 font-medium">
          Security & Compliance Details &rarr;
        </span>
      </div>
    </Link>
  );
};

export default Soc2Badge;
