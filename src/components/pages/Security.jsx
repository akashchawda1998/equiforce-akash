import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ShieldCheck, CheckCircle2, Lock, Server, FileText, ArrowRight, Eye, RefreshCw, UserCheck } from "lucide-react";

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const securityControls = [
    {
      title: "Documented & Enforced Security Policies",
      description: "Comprehensive governance frameworks governing data handling, access management, and operational security.",
      icon: FileText,
    },
    {
      title: "Role-Based Access Controls (RBAC)",
      description: "Strict principle of least privilege access, multi-factor authentication, and centralized access governance.",
      icon: UserCheck,
    },
    {
      title: "Continuous Cloud Monitoring",
      description: "Real-time infrastructure monitoring, intrusion detection, automated vulnerability scanning, and alert orchestration.",
      icon: Server,
    },
    {
      title: "Secure Software Development",
      description: "DevSecOps processes including automated code analysis, peer reviews, and strict dependency auditing.",
      icon: Lock,
    },
    {
      title: "Incident Response & Change Management",
      description: "Formalized incident triage protocols, automated failover capabilities, and structured production change controls.",
      icon: RefreshCw,
    },
    {
      title: "Vendor-Risk Oversight & Governance",
      description: "Rigorous third-party risk assessments and ongoing audit monitoring of all enterprise service providers.",
      icon: Eye,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Helmet>
        <title>Security & Compliance | SOC 2 Type 1 Certified | EquiForce</title>
        <meta
          name="description"
          content="EquiForce has successfully completed its SOC 2 Type 1 audit by an independent accredited auditor. Learn about our institutional-grade security, controls, and compliance standards."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-[#0B2341] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* SOC 2 BADGE EMBLEM */}
          <div className="inline-flex items-center gap-2 bg-[#0A1A2F] border border-[#2D7FF9] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(45,127,249,0.3)]">
            <ShieldCheck size={16} className="text-[#2D7FF9]" />
            AICPA SOC 2 TYPE 1 COMPLIANT
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Security & <span className="text-[#2D7FF9]">Compliance</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-xl font-normal leading-relaxed">
            EquiForce has successfully completed its SOC 2 Type 1 examination, reflecting our unwavering commitment to security, operational integrity, and institutional-grade investment technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-semibold text-gray-200">
            <span className="bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-lg">
              Built for trust
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-lg">
              Built for accuracy
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="bg-[#2D7FF9]/20 border border-[#2D7FF9]/50 text-blue-200 px-3.5 py-1.5 rounded-lg">
              Built for institutional standards
            </span>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2D7FF9]/15 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 -mt-10 relative z-20">
        {/* SOC 2 BANNER CARD */}
        <div className="bg-[#0A1A2F] border border-[#2D7FF9]/50 rounded-3xl p-6 md:p-10 text-white shadow-2xl mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
            {/* LARGE SHIELD GRAPHIC */}
            <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-b from-[#122A48] to-[#0A1A2F] border-2 border-[#2D7FF9] shadow-[0_0_30px_rgba(45,127,249,0.4)] shrink-0">
              <div className="text-center">
                <ShieldCheck size={36} className="text-[#2D7FF9] mx-auto mb-1" />
                <span className="text-[10px] font-black tracking-widest uppercase text-white block">SOC 2</span>
                <span className="text-[9px] font-bold text-[#2D7FF9] tracking-wider block">TYPE 1</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                SOC 2 Type 1 Examination Completed
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                EquiForce has successfully completed a SOC 2 Type I audit conducted by an independent, accredited third‑party auditor. This assessment validates that our security controls, policies, and procedures are designed in accordance with the AICPA’s Trust Services Criteria for Security.
              </p>
            </div>
          </div>
        </div>

        {/* OVERVIEW CONTENT */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 space-y-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">
              Institutional-Grade Security Program
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              As a performance analytics platform serving institutional asset managers, we maintain a disciplined, control‑driven operating environment that supports the confidentiality, integrity, and protection of client data.
            </p>
          </div>

          {/* CONTROLS GRID */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Our Security Program Includes:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityControls.map((control, idx) => {
                const IconComponent = control.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition-all duration-200 flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-blue-100/60 text-[#2D7FF9] group-hover:bg-[#2D7FF9] group-hover:text-white transition-colors shrink-0">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-base mb-1">
                        {control.title}
                      </h5>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {control.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SOC 2 TYPE II ROADMAP & REQUEST REPORT */}
          <div className="bg-gradient-to-r from-gray-900 to-[#0B2341] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">
                <CheckCircle2 size={14} /> SOC 2 Type II Underway
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">
                Need Access to Our SOC 2 Audit Report?
              </h4>
              <p className="text-gray-300 text-xs md:text-sm max-w-xl">
                Our SOC 2 Type II audit is underway, with completion expected in early 2027. Clients and prospects may request our full SOC 2 report under NDA.
              </p>
            </div>

            <Link
              to="/contact#contactus"
              className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b46002] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 active:scale-95"
            >
              Request SOC 2 Report <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
