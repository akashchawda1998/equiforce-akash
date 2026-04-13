import React from "react";
import { Link } from "react-router-dom";

/* ---------------- ICONS ---------------- */

const InvestmentOpsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="3" y="8" width="13" height="24" rx="2" stroke="#08636b" strokeWidth="1.8" />
    <line x1="6" y1="14" x2="13" y2="14" stroke="#14b8a6" strokeWidth="1.5" />
    <line x1="6" y1="18" x2="13" y2="18" stroke="#14b8a6" strokeWidth="1.5" />
    <rect x="24" y="8" width="13" height="24" rx="2" stroke="#08636b" strokeWidth="1.8" />
    <line x1="27" y1="14" x2="34" y2="14" stroke="#14b8a6" strokeWidth="1.5" />
    <line x1="16" y1="17" x2="24" y2="17" stroke="#FF8000" strokeWidth="2" />
  </svg>
);

const PerformanceMeasurementIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <line x1="6" y1="34" x2="35" y2="34" stroke="#08636b" strokeWidth="1.8" />
    <rect x="8" y="24" width="5" height="10" fill="#14b8a6" opacity="0.35" />
    <rect x="16" y="17" width="5" height="12" fill="#14b8a6" opacity="0.55" />
    <polyline points="8,28 16,19 24,22 32,11" stroke="#FF8000" strokeWidth="2.2" fill="none" />
  </svg>
);

const GipsCompositeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#08636b" strokeWidth="3" />
    <circle cx="20" cy="20" r="7" stroke="#14b8a6" strokeWidth="2" />
    <circle cx="20" cy="20" r="3" fill="#FF8000" />
  </svg>
);

const AiPoweredReportingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="12" y="12" width="16" height="16" rx="3" stroke="#08636b" strokeWidth="2" />
    <path d="M21.5 15 L18.5 20.5 H21 L18 25" stroke="#FF8000" strokeWidth="2.2" fill="none" />
  </svg>
);

/* ---------------- DATA ---------------- */

const features = [
  {
    title: (
      <>
        Investment Operations & Reconciliation
      </>
    ),
    desc: "Investment data reconciliation across internal systems and custodian sources.",
    icon: InvestmentOpsIcon,
    link: "/performance-measurement#operations",
  },
  {
    title: (
      <>
        Performance <br /> Measurement
      </>
    ),
    desc: "IBOR, ABOR, and PBOR returns and attribution at security, portfolio, and composite levels.",
    icon: PerformanceMeasurementIcon,
    link: "/performance-measurement#performance",
  },
  {
    title: (
      <>
         GIPS-focused Composite Management
      </>
    ),
    desc: "End-to-end composite management — built to deliver reliable, compliant performance reporting.",
    icon: GipsCompositeIcon,
    link: "/performance-measurement#gips",
  },
  {
    title: (
      <>
        AI-Powered Investment Reporting
      </>
    ),
    desc: "Intelligent investment reporting that surfaces accurate insights into every reporting layer.",
    icon: AiPoweredReportingIcon,
    link: "/performance-measurement#ai-reporting",
  },
];

/* ---------------- COMPONENT ---------------- */

const Features = () => {
  return (
    <section className="bg-[#000E24] py-10">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        <span className="bg-[#d97706] text-white px-4 py-1 rounded-full text-xs uppercase">
          Core Solutions
        </span>

        <h2 className="text-3xl font-bold text-white mt-4 mb-4">
          Our Firm <span className="text-[#d97706]">Solutions</span>
        </h2>

        <p className="text-blue-100/80 max-w-2xl mx-auto mb-8 text-sm">
          EquiForce delivers specialized solutions across investment operations,
          performance measurement, GIPS composite management, and AI reporting.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.link}
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col text-left"
              >
                <div className="mb-4">
                  <Icon />
                </div>

                <h3 className="text-lg font-bold text-[#000E24] mb-3 group-hover:text-[#d97706]">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 flex-grow">
                  {item.desc}
                </p>

                <div className="text-[#d97706] font-semibold text-xs">
                  Explore →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;