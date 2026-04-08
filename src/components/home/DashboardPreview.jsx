import SinglePlatformImg from "../../assets/images/dashboard.jpeg";

const NAVY = "#000E24";

const badges = [
  // Left Side
  {
    text: "Performance Measurement",
    icon: "☁️",
    pos: "top-[15%] -left-4 md:-left-12",
    delay: "100",
  },
  {
    text: "GIPS Composite Management",
    icon: "🕒",
    pos: "top-[60%] -left-8 md:-left-20",
    delay: "200",
  },

  // Right Side
  {
    text: "AI-Powered Reporting",
    icon: "📖",
    pos: "top-[15%] -right-4 md:-right-12",
    delay: "400",
  },

  {
    text: "Investment Operations & Reconciliation",
    icon: "👥",
    pos: "bottom-[40%] -right-4 md:-right-12",
    delay: "600",
  },
];

const DashboardPreview = () => {
  return (
    <section className="py-2 md:py-12 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto flex flex-col  overflow-hidden py-2"
            style={{ color: NAVY }}
          >
            <span
              className="block"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              The Single <span className="text-[#d97706]"> Investment Operations Platform & Consulting Partner </span> for your firm
            </span>

            {/* <span
              className="block"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              Firm's <span className="text-[#d97706]">Deserve</span>
            </span> */}
          </h2>
        </div>

        {/* Image & Badges Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Dashboard Image with Mac-like frame */}
          <div
            className="relative z-10 shadow-xl rounded-2xl overflow-hidden border border-gray-100"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={SinglePlatformImg}
              alt="EquiForce Dashboard"
              className="w-full h-auto"
            />
          </div>

          {/* Floating Badges (desktop only) */}
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`absolute z-20 hidden sm:flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-50 whitespace-nowrap transition-transform hover:scale-105 ${badge.pos}`}
              data-aos="fade-up"
              data-aos-delay={badge.delay}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="font-bold text-sm md:text-base text-slate-700">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Badges (simplified grid) */}
        <div className="grid grid-cols-2 gap-4 mt-12 sm:hidden">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <span className="text-sm">{badge.icon}</span>
              <span className="font-bold text-xs text-slate-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;