import React from "react";
import { Link } from "react-router-dom";

/* ---------------- ICONS ---------------- */

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

const ConsultingServicesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Briefcase Handle */}
    <path
      d="M15 13.5V10.5C15 9.4 15.9 8.5 17 8.5H23C24.1 8.5 25 9.4 25 10.5V13.5"
      stroke="#08636b"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Briefcase Body */}
    <rect
      x="7"
      y="13.5"
      width="26"
      height="18"
      rx="3.5"
      stroke="#08636b"
      strokeWidth="2.2"
      fill="none"
    />

    {/* Horizontal Seam Line */}
    <line
      x1="8"
      y1="20.5"
      x2="32"
      y2="20.5"
      stroke="#14b8a6"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* Orange Upward Trend Arrow */}
    <polyline
      points="11.5,25.5 16,20.5 20,23 25.5,17"
      stroke="#FF7A00"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="22.5,17 25.5,17 25.5,20"
      stroke="#FF7A00"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
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
        Performance and <br className="hidden sm:inline" />
        Attribution
      </>
    ),
    titleText: "Performance and Attribution",
    desc: "Comprehensive multi-asset performance measurement and attribution across unlimited classification hierarchies. Analyze IBOR, ABOR and PBOR performance, contribution, and attribution through flexible reporting and AI-powered insights.",
    icon: PerformanceMeasurementIcon,
    link: "/performance-measurement#performance",
  },
  {
    title: (
      <>
        GIPS® Composite <br className="hidden sm:inline" />
        Management
      </>
    ),
    titleText: "GIPS® Composite Management",
    desc: "A powerful rules-based composite engine that streamlines composite performance management, security-level contribution and attribution, analytics and GIPS® compliance. Includes verifier-ready reporting, policy and procedure management, and automated prospect distribution tracking.",
    icon: GipsCompositeIcon,
    link: "/performance-measurement#gips",
  },
  {
    title: (
      <>
        Consulting <br className="hidden sm:inline" />
        Services
      </>
    ),
    titleText: "Consulting Services",
    desc: "Empowering institutional asset managers, wealth managers, hedge funds and private market investment firms with institutional-grade performance, attribution, GIPS® composite management and operational expertise.",
    icon: ConsultingServicesIcon,
    link: "/consultant",
  },
  {
    title: (
      <>
        AI-Powered <br className="hidden sm:inline" />
        Investment Reporting
      </>
    ),
    titleText: "AI-Powered Investment Reporting",
    desc: "Intelligent investment reporting that surfaces accurate insights across every layer of the reporting process.",
    icon: AiPoweredReportingIcon,
    link: "/performance-measurement#ai-reporting",
  },
];

/* ---------------- COMPONENT ---------------- */

const Features = () => {
  return (
    <section className="bg-[#000E24] py-12 md:py-16" id="features">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Our Firm <span className="text-[#d97706]">Solutions</span>
        </h2>

        <p className="text-blue-100/80 max-w-3xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          EquiForce delivers specialized solutions across Performance and Attribution, GIPS® Composite Management, Consulting Services and AI-Powered Investment Reporting        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.link}
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col text-left"
              >
                <div className="flex items-center gap-3.5 mb-5 min-h-[60px]">
                  <div className="w-14 h-14 rounded-full bg-[#D6F5F2] flex items-center justify-center shrink-0 border border-teal-200/40 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-teal-500/10 transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#000E24] group-hover:text-[#d97706] leading-snug min-h-[48px] flex flex-col justify-center">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">
                  {item.desc}
                </p>

                <div className="text-[#d97706] font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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