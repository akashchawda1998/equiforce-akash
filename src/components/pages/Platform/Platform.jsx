import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Layers, RefreshCcw, BrainCircuit, CheckCircle } from "lucide-react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
};

// --- Data ---
const SOLUTIONS = [
  {
    id: "performance",
    icon: TrendingUp,
    link: "/performance-measurement",
    title: "Performance Measurement",
    desc: "Calculate time-weighted and money-weighted returns with absolute precision across all your portfolios.",
    features: ["Daily Returns", "Benchmark Comparisons", "Attribution Analysis"]
  },
  {
    id: "composite",
    icon: Layers,
    link: "/gips-composite",
    title: "Composite Management",
    desc: "Automate your composite construction and ensure complete compliance with Global Investment Performance Standards.",
    features: ["Automated Assignment", "Audit-Ready Trails", "Account Disclosures"]
  },
  {
    id: "operations",
    icon: RefreshCcw,
    link: "/investment-operations",
    title: "Investment Operations",
    desc: "Streamline your middle and back-office workflows with intelligent reconciliation and automated processing.",
    features: ["Trade Matching", "Cash Management", "Position Reconciliation"]
  },
  {
    id: "ai-reporting",
    icon: BrainCircuit,
    link: "/ai-reporting",
    title: "AI-Powered Reporting",
    desc: "Leverage artificial intelligence to generate dynamic, actionable reports for your team and clients.",
    features: ["Natural Language Insights", "Custom Dashboards", "Automated Distribution"]
  },
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-white text-[#000E24] overflow-hidden pt-28 pb-10">

      {/* ─── HERO SECTION ─── */}
      <section id="hero" className="relative px-6 lg:px-16 pb-20 max-w-screen-xl mx-auto text-center">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d97706] rounded-full opacity-10 blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#000E24] rounded-full opacity-10 blur-[80px] -z-10"></div>

        <motion.div 
          variants={containerVariants} initial="hidden" animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#eef7f8] border border-[#d0f0f5] rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#d97706]"></span>
            <span className="text-sm font-bold tracking-widest text-[#000E24] uppercase">The EquiForce Platform</span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="font-black text-5xl md:text-7xl leading-tight mb-6">
              Precision-Engineered for <br/>
              <span className="text-[#d97706] bg-clip-text text-transparent bg-gradient-to-r from-[#d97706] to-[#fbbf24]">
                Investment Operations
              </span>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            One unified platform for performance measurement, composite management, fund reconciliation, and AI-powered reporting.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-[#000E24] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#d97706] hover:-translate-y-1 transition-all">
              Request a Demo
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SOLUTIONS ZIG-ZAG ─── */}
      <section id="solutions" className="bg-gray-50 py-24 px-6 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#000E24] mb-4">Core Capabilities</h2>
            <p className="text-gray-600 text-lg">Click to explore our purpose-built solutions in detail.</p>
          </motion.div>

          <div className="space-y-24">
            {SOLUTIONS.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={s.id}
                  id={s.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${!isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Image / Icon */}
                  <div className="flex-shrink-0 w-48 h-48 bg-[#fff8f0] rounded-3xl flex items-center justify-center text-[#d97706] text-6xl md:text-7xl">
                    <s.icon size={64} />
                  </div>

                  {/* Content */}
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold text-[#000E24] mb-4">{s.title}</h3>
                    <p className="text-gray-600 mb-6">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-[#000E24] font-semibold">
                          <CheckCircle size={16} className="text-[#d97706]" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={s.link} className="text-[#d97706] font-bold flex items-center gap-2 group hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="cta" className="py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#000E24] mb-6">Ready to Modernize?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Join investment management firms who trust EquiForce for precision-engineered operations.
          </p>
          <Link to="/contact" className="inline-block bg-[#d97706] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#b46002] hover:-translate-y-1 transition-all">
            Book a Demo Today
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Platform;