import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Check, ChevronDown, CheckCircle2, Download, FileText } from "lucide-react";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


// ✅ Images from src/assets/slidesimage
// Performance & Attribution
import accountsReturn from "../../../assets/slidesimage/Accounts Return.png";
import securityReturns from "../../../assets/slidesimage/Security Returns.png";
import portfolioContribution from "../../../assets/slidesimage/Portfolio Contribution.png";
import contributionAnalysis from "../../../assets/slidesimage/Contribution Analysis.png";
import performanceAttribution from "../../../assets/slidesimage/Performance Attribution.png";
import performanceStatistics from "../../../assets/slidesimage/Performance Statistics.png";
import performancePeriodLock from "../../../assets/slidesimage/Performance Period Lock.png";

// GIPS® Composite Management
import compositeDashboard from "../../../assets/slidesimage/Composite Dashboard.png";
import compositeRiskStats from "../../../assets/slidesimage/Composite Risk Statistics.png";
import verificationReadyDashboard from "../../../assets/slidesimage/Verification-Ready Dashboard.png";
import gipsReporting from "../../../assets/slidesimage/GIPS® Reporting.png";
import gipsVerificationReport from "../../../assets/slidesimage/GIPS® Verification Report.png";
import gipsPolicyProcedure from "../../../assets/slidesimage/GIPS® Policy & Procedure (Version Control).png";
import gipsComplianceCheck from "../../../assets/slidesimage/GIPS® Presentation Compliance Check.png";
import distributionLog from "../../../assets/slidesimage/Distribution Log.png";

// AI-Powered Investment Reporting
import executiveDashboard from "../../../assets/slidesimage/Executive Dashboard.png";
import performanceReporting from "../../../assets/slidesimage/Performance Reporting.png";

// ─── CUSTOM ICONS ─────────────────────────────
const PerformanceMeasurementIcon = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 13.5V10.5C15 9.4 15.9 8.5 17 8.5H23C24.1 8.5 25 9.4 25 10.5V13.5"
      stroke="#08636b"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
    <line
      x1="8"
      y1="20.5"
      x2="32"
      y2="20.5"
      stroke="#14b8a6"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
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
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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

// ─── DATA ─────────────────────────────────────
const allData = [
  {
    id: "performance",
    icon: PerformanceMeasurementIcon,
    img: [
      // accountsReturn,
      portfolioContribution,
      // securityReturns,
      // contributionAnalysis,
      // performanceAttribution,
      performanceStatistics,
      // performancePeriodLock,
    ],
    title: "Performance & Attribution",
    description:
      "Comprehensive multi-asset performance measurement and attribution across unlimited classification hierarchies. Analyze IBOR, ABOR and PBOR performance, contribution and attribution through flexible reporting and AI-powered insights.",
    points: [
      {
        highlight: "Time-Weighted (TWRR) and Money-Weighted (IRR) returns",
        text: "at the security, portfolio and multi-level classification levels",
      },
      {
        highlight: "Unlimited user-defined classifications",
        text: "for flexible performance analysis",
      },
      {
        highlight: "Performance contribution and attribution",
        text: "versus benchmarks, model portfolios or composites",
      },
      {
        highlight: "AI-powered insights and audit trail",
        text: "to validate performance calculations",
      },
      {
        highlight: "Support for multiple exchange rates,",
        text: "pricing sources and valuation methodologies",
      },
      {
        highlight: "Interactive dashboards",
        text: "and institutional-grade reporting",
      },
    ],
  },
  {
    id: "gips",
    icon: GipsCompositeIcon,
    img: [
      compositeDashboard,
      compositeRiskStats,
      // verificationReadyDashboard,
      gipsReporting,
      // gipsVerificationReport,
      // gipsPolicyProcedure,
      // gipsComplianceCheck,
      distributionLog,
    ],
    title: "GIPS® Composite Management",
    description:
      "A powerful rules-based composite engine that streamlines composite performance management, security-level contribution and attribution, analytics and GIPS® compliance. Includes verifier-ready reporting, policy and procedure management, and automated prospect distribution tracking.",
    points: [
      {
        highlight: "Fully integrated performance measurement",
        text: "and rules-based composite management platform",
      },
      {
        highlight: "Available as a stand-alone",
        text: "rules-based composite management solution",
      },
      {
        highlight: "AI-powered chat assistant",
        text: "for instant performance and attribution analysis",
      },
      {
        highlight: "AI-powered GIPS® verification readiness",
        text: "and validation support",
      },
      {
        highlight: "Centralized policy and procedure",
        text: "management",
      },
      {
        highlight: "Automated prospect tracking",
        text: "and distribution monitoring",
      },
      {
        highlight: "Streamlined composite construction,",
        text: "maintenance and compliance oversight",
      },
    ],
  },
  {
    id: "consulting",
    icon: ConsultingServicesIcon,
    img: [
      verificationReadyDashboard,
      // performanceAttribution,
      // gipsPolicyProcedure,
      executiveDashboard,
    ],
    title: "Consulting Services",
    description:
      "Empowering institutional asset managers, wealth managers, hedge funds and private market investment firms with institutional-grade performance, attribution, GIPS® composite managementNOT  and operational expertise.",
    accordion: [
      {
        title: "Performance Measurement Reviews",
        desc: "Evaluate calculation methodologies, workflows, policies and reporting to identify gaps and strengthen operational best practices across performance and attribution.",
      },
      {
        title: "GIPS® Composite Management & Verification Readiness Reviews",
        desc: "Establish, review, and maintain composite data, controls and procedures that support GIPS compliance. Assess workflow gaps, enhance processes and prepare firms for initial or ongoing independent verification by identifying issues before the verifier arrives.",
      },
      {
        title: "Outsourced Performance Support",
        desc: "Provide experienced performance professionals to supplement internal teams — on a temporary or ongoing basis — to ensure continuity, expertise and operational efficiency.",
      },
      {
        title: "Custom Client Reporting & FactSheet Development",
        desc: "Create fully customized FactSheets, ScoreCards, and reporting packages aligned with your firm’s investment philosophy, data structures and stakeholder needs. Solutions include automated workflows, dynamic visualizations, and scalable templates that elevate client communication and reduce operational burden.",
      },
    ],
  },
  {
    id: "ai-reporting",
    icon: AiPoweredReportingIcon,
    img: [
      executiveDashboard,
      performanceReporting,
      gipsReporting,
    ],
    title: "AI-Powered Investment Reporting",
    description:
      "Intelligent investment reporting that surfaces accurate insights across every layer of the reporting process.",
  },
];

// ─── FEATURE SECTION ──────────────────────────
const FeatureSection = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const Icon = item.icon;
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <>

      <div id={item.id} className="pt-20 pb-5 md:pt-20 md:pb-10">
        <div
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"
            }`}
        >
          {/* TEXT */}
          <div
            className="w-full md:w-1/2 flex flex-col gap-4"
            data-aos={isEven ? "fade-right" : "fade-left"}
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              {Icon && (
                <div className="w-4 h-4 md:w-10 md:h-10 rounded-full bg-[#dff4f3] flex items-center justify-center shrink-0 border border-teal-200/50 shadow-xs">
                  <div className="w-7 h-4 md:w-8 md:h-8 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    <Icon />
                  </div>
                </div>
              )}
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#000E24] leading-tight">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-500 text-base md:text-md">
              {item.description}
            </p>

            {/* Bullet Pointers (no cards) */}
            {item.points && item.points.length > 0 && (
              <ul className="space-y-2.5 pt-1">
                {item.points.map((point, pIdx) => {
                  const isObj = typeof point === "object" && point !== null;
                  const highlight = isObj ? point.highlight : null;
                  const text = isObj ? point.text || point.desc : point;

                  return (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-gray-700 text-sm md:text-[15px] leading-relaxed"
                    >
                      <span
                        className="w-5 h-5 rounded-full bg-[#dff4f3] text-[#08636b] flex items-center justify-center shrink-0 mt-0.5 border border-teal-200/60 shadow-2xs"
                        aria-hidden="true"
                      >
                        <Check size={11} className="stroke-[3]" />
                      </span>
                      <span className="leading-snug">
                        {highlight ? (
                          <>
                            <strong className="font-semibold text-[#000E24]">
                              {highlight}
                            </strong>{" "}
                            <span>{text}</span>
                          </>
                        ) : (
                          <span>{text}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Accordion (e.g. Consulting Services) */}
            {item.accordion && item.accordion.length > 0 && (
              <div className="space-y-2.5 pt-1">
                {item.accordion.map((acc, aIdx) => {
                  const isOpen = openAccordion === aIdx;
                  return (
                    <div
                      key={aIdx}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                        ? "bg-white border-[#d97706]/50 shadow-sm"
                        : "bg-white/70 border-gray-200 hover:bg-white hover:border-gray-300"
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isOpen ? null : aIdx)}
                        className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-4 text-left cursor-pointer transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-[#000E24] text-sm sm:text-[15px] leading-snug">
                          {acc.title}
                        </span>
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                            ? "bg-[#d97706] text-white rotate-180"
                            : "bg-gray-100 text-gray-500"
                            }`}
                        >
                          <ChevronDown
                            size={14}
                            className="stroke-[2.5]"
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-0">
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-2.5">
                            {acc.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {item.id === "consulting" && (
              <div className="pt-2">
                <Link
                  to="/consultant"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#d97706] hover:text-[#b45309] transition-colors group"
                >
                  Meet Our Principal Consultants
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* SLIDER */}
          <div
            className="w-full md:w-1/2 relative"
            data-aos={isEven ? "fade-left" : "fade-right"}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={true}
              grabCursor={true}
              className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-white group/slider [&_.swiper-button-prev]:w-9 [&_.swiper-button-prev]:h-9 sm:[&_.swiper-button-prev]:w-10 sm:[&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:bg-white/90 [&_.swiper-button-prev]:backdrop-blur-sm [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:shadow-md [&_.swiper-button-prev]:border [&_.swiper-button-prev]:border-gray-200/80 [&_.swiper-button-prev]:text-[#000E24] hover:[&_.swiper-button-prev]:bg-[#000E24] hover:[&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:transition-all [&_.swiper-button-prev]:left-3 [&_.swiper-button-prev:after]:text-sm sm:[&_.swiper-button-prev:after]:text-base [&_.swiper-button-prev:after]:font-bold [&_.swiper-button-next]:w-9 [&_.swiper-button-next]:h-9 sm:[&_.swiper-button-next]:w-10 sm:[&_.swiper-button-next]:h-10 [&_.swiper-button-next]:bg-white/90 [&_.swiper-button-next]:backdrop-blur-sm [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:shadow-md [&_.swiper-button-next]:border [&_.swiper-button-next]:border-gray-200/80 [&_.swiper-button-next]:text-[#000E24] hover:[&_.swiper-button-next]:bg-[#000E24] hover:[&_.swiper-button-next]:text-white [&_.swiper-button-next]:transition-all [&_.swiper-button-next]:right-3 [&_.swiper-button-next:after]:text-sm sm:[&_.swiper-button-next:after]:text-base [&_.swiper-button-next:after]:font-bold"
            >
              {item.img.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full">
                    <img
                      src={img}
                      alt={`${item.title} Slide ${i + 1}`}
                      className="w-full h-auto object-contain rounded-xl select-none"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

// ─── DOWNLOAD BROCHURE SECTION (SHORT & COMPACT) ───────────
const DownloadBrochureHero = () => {
  return (
    <section
      aria-label="Official Solutions Brochure Download"
      className="relative rounded-2xl bg-gradient-to-r from-[#000E24] via-[#051c38] to-[#001433] text-white p-5 sm:p-6 shadow-xl border border-white/10 mt-24 md:mt-28 mb-8 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Decorative Accent */}
      <div
        className="absolute top-0 right-0 w-72 h-full bg-[#d97706]/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left: Icon + Text */}
        <div className="flex items-start sm:items-center gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl bg-white/10 text-[#d97706] flex items-center justify-center border border-amber-400/30 shrink-0 shadow-sm">
            <FileText size={22} aria-hidden="true" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d97706] mb-1">
              <span>Official Solutions Brochure</span>
              <span className="text-gray-400 font-normal">· Enterprise Edition (PDF)</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
              Comprehensive Investment Operations &amp; Performance Overview
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 font-normal mt-1 leading-relaxed max-w-2xl">
              Performance &amp; Attribution, GIPS® Composite Management, Consulting Services &amp; AI-Powered Reporting.
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
          <a
            href="/docs/equiforce.pdf"
            download="equiforce.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-amber-900/30 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-200 bg-gradient-to-r from-[#d97706] to-[#3b82f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
            aria-label="Download EquiForce Company Brochure (PDF)"
          >
            <Download size={15} className="shrink-0" aria-hidden="true" />
            <span>Download Brochure</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
          >
            <span>Demo</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── MAIN PAGE ────────────────────────────────
const PlatformAllFeaturesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white px-4 md:px-10">
      <div className="max-w-9xl mx-auto">
        {/* Top-side Download Brochure Section */}
        <DownloadBrochureHero />

        {/* Services & Capabilities Sections */}
        {allData.map((item, index) => (
          <FeatureSection key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PlatformAllFeaturesPage;