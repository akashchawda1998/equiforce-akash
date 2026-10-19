import React from "react";

/* ---------------- ICONS ---------------- */

const ConsultantsIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TechnologyIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
);

const AiIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 2C10 6 7 9 3 9C7 9 10 12 10 16C10 12 13 9 17 9C13 9 10 6 10 2Z" />
    <path d="M18 14C18 16.5 16 18 14 18C16 18 18 19.5 18 22C18 19.5 20 18 22 18C20 18 18 16.5 18 14Z" />
  </svg>
);

/* ---------------- DATA ---------------- */

const differentiators = [
  {
    title: "Consultants, Not Just Vendors",
    desc: "Technology alone does not solve operational challenges. Our team combines decades of hands-on investment operations and performance expertise with practical implementation experience to help clients achieve measurable results.",
    icon: ConsultantsIcon,
    accentColor: "bg-[#d97706]",
  },
  {
    title: "Purpose-Built Technology",
    desc: "Built by practitioners for practitioners, EquiForce is engineered to support the complexities of institutional investment operations, from data reconciliation through performance, attribution, composites and reporting.",
    icon: TechnologyIcon,
    accentColor: "bg-[#08636b]",
  },
  {
    title: "AI at the Core",
    desc: "Native AI capabilities automate repetitive processes, enhance reporting efficiency and uncover insights that empower better investment decision-making.",
    icon: AiIcon,
    accentColor: "bg-[#d97706]",
  },
];

const Differentiators = () => {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden" id="differentiators">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
          Our <span className="text-[#d97706]">Differentiators</span>
        </h2>

        {/* Subtext */}
        <p className="text-black max-w-3xl mx-auto mb-12 text-center text-sm md:text-base leading-relaxed">
          What sets EquiForce apart from conventional software vendors
        </p>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col text-left"
              >
                {/* Top Border Accent Stripe */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 ${item.accentColor} transition-colors`}
                />

                {/* Header: Icon Badge + Title */}
                <div className="flex items-center gap-4 mb-5 min-h-[52px]">
                  <div
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#08636b] to-[#14b8a6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#08636b]/30 border border-teal-200/25 group-hover:scale-105 group-hover:shadow-[#08636b]/50 transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, var(--primary, #08636b) 0%, var(--primary-bright, #14b8a6) 100%)" }}
                  >
                    <Icon />
                  </div>
                  <h3 className="text-[#000E24] text-lg sm:text-xl font-bold leading-tight group-hover:text-[#08636b] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] flex-grow">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;