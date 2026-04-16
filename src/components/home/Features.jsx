import React from "react";
import { Link } from "react-router-dom";

/* ---------------- ICONS ---------------- */

const InvestmentOpsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="13" height="24" rx="2" stroke="#08636b" strokeWidth="1.8" fill="none" />
    <line x1="6" y1="14" x2="13" y2="14" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="18" x2="13" y2="18" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="22" x2="10" y2="22" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="26" x2="13" y2="26" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="24" y="8" width="13" height="24" rx="2" stroke="#08636b" strokeWidth="1.8" fill="none" />
    <line x1="27" y1="14" x2="34" y2="14" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="27" y1="18" x2="34" y2="18" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="22" x2="34" y2="22" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="27" y1="26" x2="34" y2="26" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="17" x2="24" y2="17" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" />
    <polyline points="19,14.5 16,17 19,19.5" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="16" y1="23" x2="24" y2="23" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" />
    <polyline points="21,20.5 24,23 21,25.5" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const PerformanceMeasurementIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="34" x2="35" y2="34" stroke="#08636b" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="8" y="24" width="5" height="10" rx="1" fill="#14b8a6" opacity="0.35" />
    <line x1="10.5" y1="24" x2="10.5" y2="19" stroke="#08636b" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="16" y="17" width="5" height="12" rx="1" fill="#14b8a6" opacity="0.55" />
    <line x1="18.5" y1="17" x2="18.5" y2="12" stroke="#08636b" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="24" y="21" width="5" height="8" rx="1" fill="#14b8a6" opacity="0.4" />
    <line x1="26.5" y1="21" x2="26.5" y2="17" stroke="#08636b" strokeWidth="1.6" strokeLinecap="round" />
    <polyline points="8,28 16,19 24,22 32,11" stroke="#FF8000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="29,9 32,11 30,14" stroke="#FF8000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const GipsCompositeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4 A16 16 0 0 1 35.1 23" stroke="#08636b" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M35.1 23 A16 16 0 0 1 7.2 29" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M7.2 29 A16 16 0 0 1 20 4" stroke="#FF8000" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="20" cy="20" r="7" stroke="#08636b" strokeWidth="1.6" fill="none" opacity="0.45" />
    <circle cx="20" cy="20" r="3" fill="#08636b" />
    <line x1="20" y1="4" x2="20" y2="13" stroke="#08636b" strokeWidth="1.3" strokeDasharray="2 2" opacity="0.6" />
    <line x1="35.1" y1="23" x2="27.4" y2="21" stroke="#14b8a6" strokeWidth="1.3" strokeDasharray="2 2" opacity="0.6" />
    <line x1="7.2" y1="29" x2="14" y2="23.5" stroke="#FF8000" strokeWidth="1.3" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

const AiPoweredReportingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="16" height="16" rx="3" stroke="#08636b" strokeWidth="2" fill="rgba(8,99,107,0.07)" />
    <line x1="17.5" y1="12" x2="17.5" y2="28" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="22.5" y1="12" x2="22.5" y2="28" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="12" y1="17.5" x2="28" y2="17.5" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="12" y1="22.5" x2="28" y2="22.5" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="16" y1="12" x2="16" y2="6" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="12" x2="20" y2="6" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="12" x2="24" y2="6" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="28" x2="16" y2="34" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="28" x2="20" y2="34" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="28" x2="24" y2="34" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="16" x2="6" y2="16" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="20" x2="6" y2="20" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="24" x2="6" y2="24" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="16" x2="34" y2="16" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="20" x2="34" y2="20" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="24" x2="34" y2="24" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <path d="M21.5 15 L18.5 20.5 H21 L18 25" stroke="#FF8000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
          GIPS® Composite <br />  Management
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
    <section className="bg-[#000E24] py-10" id="features">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        <span className="bg-[#d97706] text-white px-4 py-1 rounded-full text-xs uppercase">
          Core Solutions
        </span>

        <h2 className="text-3xl font-bold text-white mt-4 mb-4">
          Our Firm <span className="text-[#d97706]">Solutions</span>
        </h2>

        <p className="text-blue-100/80 max-w-2xl mx-auto mb-8 text-sm">
          EquiForce delivers specialized solutions across investment operations,
          performance measurement,  GIPS® composite management and AI reporting.
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