import React from "react";
import { Link, useLocation } from "react-router-dom";

import AIReporting from "./../../../assets/images/AIReporting1.png";
import PerformanceManagement from "./../../../assets/images/PerformanceManagement1.png";
import GIPS from "./../../../assets/images/GIPS1.png";
import Recon from "./../../../assets/images/recon1.png";

// ─── DATA IN YOUR EXACT SEQUENCE ───────────────

const allData = [
  {
    id: "operations",
    img: Recon,
    title: "Investment Operations & Reconciliation",
    description:
      "Investment data reconciliation across internal systems and custodian sources.",
  },
  {
    id: "performance",
    img: PerformanceManagement,
    title: "Performance Measurement",
    description:
      "IBOR, ABOR, and PBOR returns and attribution at security, portfolio, and composite levels.",
  },
  {
    id: "gips",
    img: GIPS,
    title: "GIPS-focused Composite Management",
    description:
      "End-to-end composite management — built to deliver reliable, compliant performance reporting.",
  },
  {
    id: "ai-reporting",
    img: AIReporting,
    title: "AI-Powered Investment Reporting",
    description:
      "Intelligent investment reporting that surfaces accurate insights into every reporting layer.",
  },
];

// ─── SECTION (ZIG-ZAG FIXED) ───────────────

const FeatureSection = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div id={item.id} className="relative md:pt-20 pb-15">

      <div
        className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${
          isEven ? "" : "md:[direction:rtl]"
        }`}
      >

        {/* TEXT SIDE */}
        <div className="[direction:ltr] flex flex-col gap-6">

          {/* NUMBER */}
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#d97706]/10 flex items-center justify-center text-[#d97706] font-bold">
              {index + 1}
            </span>
          </span>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-black text-[#000E24]">
            {item.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-lg">
            {item.description}
          </p>

          {/* LINK */}
          {/* <Link
            to="/contact"
            className="text-[#d97706] font-bold text-sm"
          >
            Explore →
          </Link> */}
        </div>

        {/* IMAGE SIDE */}
        <div className="[direction:ltr]">
          <div className="rounded-sm overflow-hidden border shadow-sm">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

// ─── MAIN PAGE ───────────────

const PlatformAllFeaturesPage = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white pt-10 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">

        {allData.map((item, index) => (
          <FeatureSection
            key={item.id}
            item={item}
            index={index}
          />
        ))}

      </div>
    </div>
  );
};

export default PlatformAllFeaturesPage; 