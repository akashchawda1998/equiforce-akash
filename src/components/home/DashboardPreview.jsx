import SinglePlatformImg from "../../assets/images/bgdashboard.png";

const NAVY = "#000E24";

/* ================= ICONS ================= */
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

/* ================= BADGES ================= */

const badges = [
  {
    text: "Investment Operations & Reconciliation",
    icon: <InvestmentOpsIcon />,
    pos: "top-[15%] -left-4 md:-left-12",
    delay: "100",
  },
  {
    text: "Performance Measurement",
    icon: <PerformanceMeasurementIcon />,
    pos: "top-[60%] -left-8 md:-left-20",
    delay: "200",
  },
  {
    text: "GIPS-focused Composite Management",
    icon: <GipsCompositeIcon />,
    pos: "top-[15%] -right-4 md:-right-12",
    delay: "400",
  },
  {
    text: "AI-Powered Investment Reporting",
    icon: <AiPoweredReportingIcon />,
    pos: "bottom-[40%] -right-4 md:-right-12",
    delay: "600",
  },
];

/* ================= COMPONENT ================= */

const DashboardPreview = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-2">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto"
            style={{ color: NAVY }}
          >
            The Single{" "}
            <span className="text-[#d97706]">
              Investment Operations Platform & Consulting Partner
            </span>{" "}
            for your firm
          </h2>
        </div>

        {/* Image Section */}
        <div className="relative max-w-5xl mx-auto">

          <div className="relative z-10  rounded-2xl overflow-hidden border border-gray-100">
            <img
              src={SinglePlatformImg}
              alt="Dashboard"
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Badges */}
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`group border border-[#d97706] absolute z-20 hidden sm:flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl whitespace-nowrap transition hover:scale-105 ${badge.pos}`}
            >
              <span className="w-8 h-8 flex items-center justify-center">
                {badge.icon}
              </span>
              <span className="font-bold text-sm md:text-sm text-slate-700">
                {badge.text}
              </span>
            </div>
          ))}

        </div>

        {/* Mobile Badges */}
        <div className="grid grid-cols-2 gap-4 mt-10 sm:hidden">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl border"
            >
              <span className="w-8 h-8 flex items-center justify-center">
                {badge.icon}
              </span>
              <span className="font-bold text-xs text-slate-600">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;