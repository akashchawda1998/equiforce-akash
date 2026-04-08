import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Animation helpers (from your original code)
const makeVariants = (fromX, delay = 0) => ({
  hidden: { opacity: 0, x: fromX, y: 10 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
  exit: {
    opacity: 0,
    x: fromX * 0.4,
    y: -10,
    transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
  },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] },
  },
});

const VP = { once: false, margin: "-90px" };

// ─── Updated Feature Data ──────────────────────────────────────────────
const performanceData = {
  id:"operations",
  badge: "Performance",
  titleStart: "Performance",
  titleHighlight: "Measurement",
  heroDescription:
    "Holdings-based (IBOR) and Transaction-based (ABOR/PBOR) return and attribution at security-, portfolio-, and composite levels.",
  iconEmoji: "📈",
  features: [
    {
      tag: "",
      
      title: "Investment Operations & Reconciliation",
      description:
        "Investment data reconciliation across internal systems and custodian sources.",
      emoji: "📊",
      cardLabel: "Daily Performance",
      stats: [
        { icon: "⚡", label: "Real-time" },
        { icon: "🌍", label: "Multi-currency" },
        { icon: "✅", label: "Fully reconciled" },
      ],
      metrics: [
        { value: "99.98%", label: "Accuracy rate" },
        { value: "<2s", label: "Calculation time" },
        { value: "100+", label: "Portfolios supported" },
      ],
    },
  ],
};

const gipsData = {
    id:"performance",
  badge: "Compliance",
  titleStart: "GIPS Composite",
  titleHighlight: "Management",
  heroDescription:
    "Structured composite construction and maintenance built for investment operations workflows.",
  iconEmoji: "🛡️",
  features: [
    {
      tag: "",
      title: "Performance Measurement",
      description:
        "IBOR, ABOR, and PBOR returns and attribution at security, portfolio, and composite levels.",
      emoji: "🏗️",
      cardLabel: "Composites Built",
      stats: [
        { icon: "🤖", label: "Fully automated" },
        { icon: "📋", label: "Rule-based" },
        { icon: "🔒", label: "GIPS compliant" },
      ],
      metrics: [
        { value: "100%", label: "Automation rate" },
        { value: "0", label: "Manual steps" },
        { value: "50+", label: "Composites maintained" },
      ],
    },
  ],
};

const operationsData = {
  id:"gips",
  badge: "Operations",
  titleStart: "Investment",
  titleHighlight: "Operations",
  heroDescription:
    "Investment data reconciliation across custodians and systems of record.",
  iconEmoji: "⚙️",
  features: [
    {
      tag: "",
      title: "GIPS Composite Management",
      description:
        "End-to-end composite management — built to deliver reliable, compliant performance reporting.",
      emoji: "🔀",
      cardLabel: "Trade STP Rate",
      stats: [
        { icon: "🏦", label: "Multi-custodian" },
        { icon: "⚡", label: "STP" },
        { icon: "✅", label: "Zero errors" },
      ],
      metrics: [
        { value: "98%+", label: "STP rate" },
        { value: "0", label: "Manual confirmations" },
        { value: "5000+", label: "Trades processed daily" },
      ],
    },
  ],
};

const aiReportingData = {
  id:"ai-reporting",
  badge: "AI",
  titleStart: "AI-Powered",
  titleHighlight: "Reporting",
  heroDescription:
    "Intelligent, automated investment reporting that surfaces insights and streamlines manual effort.",
  iconEmoji: "✨",
  features: [
    {
      tag: "",
      title: "AI-Powered Investment Reporting",
      description:
        "Intelligent investment reporting that surfaces accurate insights into every reporting layer.",
      emoji: "💬",
      highlights: [
        "Chat-based query interface",
        "Auto-generates charts and tables from questions",
        "Context-aware follow-up suggestions",
      ],
      cardLabel: "Queries Answered",
      stats: [
        { icon: "🧠", label: "AI-powered" },
        { icon: "⚡", label: "Instant" },
        { icon: "📊", label: "Dynamic charts" },
      ],
      metrics: [
        { value: "<3 sec", label: "Response time" },
        { value: "∞", label: "Query types" },
        { value: "1000+", label: "Reports generated" },
      ],
    },
  ],
};



// ─── Visual card component ─────────────────────────────────────────────────────
const FeatureVisualCard = ({ feature, isEven }) => {
  const accent = isEven
    ? "from-[#eef7f8] to-[#f0f9ff]"
    : "from-[#fff8f0] to-[#fffbf5]";
  const border = isEven ? "border-[#d4ecee]" : "border-[#f5e0c3]";

  return (
    <div
      className={`relative rounded-3xl bg-gradient-to-br ${accent} border ${border} p-8 overflow-hidden min-h-[340px] flex flex-col justify-between`}
    >
      {/* Decorative blob */}
      <div
        className={`absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 ${
          isEven ? "bg-[#1d9e75]" : "bg-[#d97706]"
        }`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-white/80 flex items-center justify-center text-3xl mb-6"
        >
          {feature.iconEmoji}
        </motion.div>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(feature.stats || feature.features[0]?.stats || []).map((s, i) => (
            <motion.span
              key={i}
              variants={fadeUp(0.28 + i * 0.09)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
              className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-sm border border-white/60 text-[#000E24] text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              <span className="text-[#d97706]">{s.icon}</span>
              {s.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Mini data card */}
      <motion.div
        variants={fadeUp(0.38)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={VP}
        className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60"
      >
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
          {feature.features[0]?.cardLabel || feature.cardLabel || "Quick Insight"}
        </p>
        <div className="flex items-end gap-4">
          {(feature.features[0]?.metrics || feature.metrics || []).map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.44 + i * 0.07)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
            >
              <p className="text-2xl font-black text-[#000E24]">{m.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Single feature section with zig-zag layout ───────────────────────────────
const FeatureSection = ({ feature, index ,id}) => {
   const isEven = index % 2 === 0;
  const textFromX = isEven ? -70 : 70;
  const cardFromX = isEven ? 70 : -70;
  const highlights = feature.features[0]?.highlights || [];

  return (
    <div className="relative md:py-24"  id={id}>
      {/* Connector line */}
      {index > 0 && (
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#d97706]/30 to-transparent"
        />
      )}

      <div
        className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${
          isEven ? "" : "md:[direction:rtl]"
        }`} 
      >
        {/* Text side */}
        <motion.div
          variants={makeVariants(textFromX)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="[direction:ltr] flex flex-col gap-6"
        >
          {/* Step badge */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d97706]/10 text-[#d97706] text-sm font-black border border-[#d97706]/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[#d97706] text-sm font-semibold tracking-widest uppercase">
              {feature.features[0]?.tag || ""}
            </span>
          </motion.div>

          <motion.h2
            variants={makeVariants(textFromX, 0.05)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
            className="text-3xl md:text-4xl font-black text-[#000E24] leading-tight"
          >
            {feature.features[0]?.title || feature.titleStart + " " + feature.titleHighlight}
          </motion.h2>

          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
            className="text-gray-500 text-lg leading-relaxed"
          >
            {feature.features[0]?.description || feature.heroDescription}
          </motion.p>

          {/* Highlight bullets */}
          {highlights.length > 0 && (
            <ul className="flex flex-col gap-3 mt-2">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp(0.2 + i * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  exit="exit"
                  viewport={VP}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#d97706]/10 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5.5L4 7.5L8 3"
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">{h}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Learn more link */}
          <motion.div
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#d97706] font-bold text-sm mt-4 group w-fit"
            >
              Learn more
              <svg
                className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual / Card side */}
        <motion.div
          variants={makeVariants(cardFromX, 0.1)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="[direction:ltr]"
        >
          <FeatureVisualCard feature={feature} isEven={isEven} />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Main page component ────────────────────────────────────────────────
const PlatformAllFeaturesPage = () => {
  const allData = [
    performanceData,
    gipsData,
    operationsData,
    aiReportingData,
  ];

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          const navbarOffset = 100;

          const top =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbarOffset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white pt-10 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {allData.map((data, index) => (
          <FeatureSection
            key={data.id}
            id={data.id}
            feature={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatformAllFeaturesPage;