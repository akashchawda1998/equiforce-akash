import React from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Mail, 
  Zap, 
  Users, 
  TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";

// Theme Colors
const NAVY = "#000E24";
const ORANGE = "#d97706";
const MINT_BG = "#eff9fb";
const MINT_LABEL_BG = "#ccf1f5";
const GRAY_TEXT = "#555555";

const benefits = [
  {
    title: "Innovate at the Edge",
    desc: "Work with cutting-edge AI and cloud technologies to solve complex problems in investment operations.",
    icon: Zap,
  },
  {
    title: "Collaborative Culture",
    desc: "Join a team of industry experts and forward-thinking engineers who value mentorship and teamwork.",
    icon: Users,
  },
  {
    title: "Accelerated Growth",
    desc: "We invest in your professional development with continuous learning opportunities and clear career paths.",
    icon: TrendingUp,
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Financial Data Analyst",
    department: "Product & Analytics",
    location: "New York, NY",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Product Implementation Specialist",
    department: "Customer Success",
    location: "Remote",
    type: "Full-Time",
  },
  {
    id: 4,
    title: "AI & Machine Learning Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
  },
];

const Careers = () => {
  return (
    <div 
      className="min-h-screen pt-24 pb-0 overflow-hidden flex flex-col"
      style={{ backgroundColor: MINT_BG }}
    >
      {/* 1. HERO SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-20 md:mb-24 pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6" style={{ color: ORANGE }}>
          Join Our Team
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color: NAVY }}>
          Build the Future of <br className="hidden md:block" />
          <span style={{ color: ORANGE }}>Investment Technology</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed font-medium" style={{ color: GRAY_TEXT }}>
          At EquiForce Solutions, we are looking for passionate innovators to help us revolutionize performance measurement, reporting, and operational efficiency for the world's leading investment firms.
        </p>
      </section>

      {/* 2. WHY JOIN US (Benefits) */}
      {/* <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: MINT_LABEL_BG }}>
                  <Icon size={28} style={{ color: ORANGE }} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{item.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: GRAY_TEXT }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* 3. OPEN POSITIONS */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24 flex-grow w-full">
        <div className="mb-10 text-center border-b border-gray-200 pb-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider" style={{ color: NAVY }}>Open Roles</h2>
        </div>

        <div className="flex flex-col gap-4">
          {openPositions.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#d97706] transition-colors" style={{ color: NAVY }}>
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium" style={{ color: GRAY_TEXT }}>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                    <Briefcase size={16} style={{ color: ORANGE }} /> {job.department}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                    <MapPin size={16} style={{ color: ORANGE }} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                    <Clock size={16} style={{ color: ORANGE }} /> {job.type}
                  </span>
                </div>
              </div>

              <a 
                href="mailto:contact@equiforcesolutions.com"
                className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 text-white" 
                style={{ backgroundColor: NAVY }}
              >
                Apply Now <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW TO APPLY CTA (Matches your uploaded image exactly) */}
      <section className="w-full py-16 md:py-20 mt-auto" style={{ backgroundColor: NAVY }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
            <Mail size={32} style={{ color: ORANGE }} />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't see a perfect fit?
          </h2>
          
          <p className="text-white/80 mb-8 max-w-2xl mx-auto font-medium">
            We are always looking for exceptional talent. Send your resume and a brief introduction telling us how you can make an impact at EquiForce.
          </p>

          {/* EXACT MATCH TO THE UPLOADED IMAGE (Orange Monospace text on dark navy) */}
          <div className="inline-block bg-black/20 px-6 py-4 rounded-xl border border-white/5">
            <a 
              href="mailto:contact@equiforcesolutions.com" 
              className="font-mono text-xl md:text-3xl lg:text-4xl tracking-wide hover:opacity-80 transition-opacity break-all"
              style={{ color: ORANGE }}
            >
              contact@equiforcesolutions.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;