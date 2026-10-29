import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiCheckCircle,
  FiX,
  FiArrowRight,
  FiSend,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiHome,
  FiChevronRight
} from "react-icons/fi";
import careersHandshake from "../../assets/images/careers_handshake.jpg";

const Careers = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Single opening data as specified
  const job = {
    title: "Business Development Consultant (Commission-Based)",
    department: "Sales & Client Growth",
    location: "Remote (U.S.-based), with occasional travel",
    type: "Independent contractor, commission-based",
    status: "Actively Hiring • Immediate Opening",
    aboutEquiForce:
      "EquiForce helps investment management firms with purpose-built technology for performance measurement, GIPS® composite management, and AI-powered investment reporting. We’re more than a software provider. Our team brings over 150 years of combined investment operations expertise, and we work as a strategic partner and consultant to our clients. By integrating AI into the reporting process, we help firms operate with greater accuracy, confidence, and a competitive edge.",
    theRole: [
      "We’re looking for a proactive, relationship-driven business development professional to grow EquiForce’s presence among small and mid-sized asset managers and RIA firms. You’ll own the sales cycle from first conversation to signed client: finding the right firms, understanding their performance and composite reporting challenges, and showing how EquiForce solves them.",
      "This is a primarily remote role, with travel for prospect meetings, client visits, and industry events."
    ],
    whatYoullDo: [
      "Identify and engage small and mid-sized asset managers and RIAs through outbound outreach, referrals, and your own network",
      "Lead consultative discovery conversations to understand each firm’s performance, GIPS®, and reporting needs",
      "Present EquiForce’s solutions, demos, and proposals to senior decision-makers such as CCOs, COOs, CFOs, and firm principals",
      "Manage your pipeline from first contact through close, with accurate forecasting",
      "Represent EquiForce at industry conferences and events",
      "Share market and customer insights with our team to inform product and positioning"
    ],
    requiredQualifications: [
      "5+ years in B2B sales, business development, or consultative selling, ideally in financial services, fintech, data and analytics, or enterprise software",
      "A proven record of building your own pipeline and winning new business",
      "Excellent written and verbal communication, including experience presenting to executives",
      "Strong self-direction and organization; you do well without day-to-day oversight"
    ],
    preferredQualifications: [
      "Familiarity with performance measurement, attribution, GIPS® composite reporting, or investment reporting products",
      "Knowledge of financial markets and investment operations workflows",
      "An existing network among asset managers, RIAs, consultants, or related service providers",
      "Experience selling AI-enabled or data-driven solutions"
    ],
    compensation: [
      "Commission on new client acquisitions and performance milestones",
      "Incentive bonuses for referrals, strategic wins, and long-term client retention",
      "Growth path: as EquiForce expands, this role may transition into a salaried position with potential equity, based on performance, alignment, and strategic contribution"
    ],
    howToApply:
      "Email your resume to contact@equiforce.ai. Please include a short note describing your sales experience and any existing relationships in the asset management space.",
    legalNotice:
      "Applicants must be legally authorized to work in the United States without the need for employer sponsorship, now or in the future."
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
        <title>Careers &amp; Opportunities | EquiForce Investment Intelligence</title>
        <meta
          name="description"
          content="Explore career opportunities at EquiForce. Current opening: Business Development Consultant (Commission-Based). Join our team in transforming investment operations and reporting."
        />
      </Helmet>

      {/* ─── TOP SECTION: NAVY HERO BANNER WITH BREADCRUMB ─── */}
      <section className="bg-[#000E24] text-white pt-24 pb-12 md:pt-28 md:pb-16 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex justify-center">
            <ol className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <li className="flex items-center gap-1.5">
                <Link
                  to="/"
                  className="hover:text-[#d97706] transition-colors flex items-center gap-1"
                >
                  <FiHome size={12} className="text-[#d97706]" /> Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-500">
                <FiChevronRight size={11} />
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#d97706] transition-colors"
                >
                  Company
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-500">
                <FiChevronRight size={11} />
              </li>
              <li className="text-[#d97706] font-semibold" aria-current="page">
                Careers
              </li>
            </ol>
          </nav>

          {/* Page Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2.5 tracking-tight">
            Careers &amp; <span className="text-[#d97706]">Opportunities</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Join our team of investment operations leaders and modern fintech innovators.
          </p>
        </div>

        {/* Ambient subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#d97706]/10 blur-3xl pointer-events-none"></div>
      </section>

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-10 flex-grow w-full">

        {/* ─── WE ARE HIRING SPLIT CARD (Exact match to reference image) ─── */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">

            {/* Left: Handshake Photo */}
            <div className="md:col-span-5 relative min-h-[260px] sm:min-h-[300px] md:min-h-full overflow-hidden bg-slate-100">
              <img
                src={careersHandshake}
                alt="EquiForce Career Partnership & Trust"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000E24]/60 via-transparent to-transparent md:hidden"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-white/50 shadow-sm text-xs font-semibold text-[#000E24] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <FiUsers className="text-[#d97706]" /> Practitioner Culture
                </span>
                <span className="text-gray-500 font-normal">Remote-First</span>
              </div>
            </div>

            {/* Right: WE ARE HIRING! Content */}
            <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#d97706] bg-amber-50 border border-amber-200/60 w-fit mx-auto md:mx-0 mb-3.5">
                <FiZap size={13} /> Current Hiring
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#000E24] tracking-tight uppercase leading-tight mb-2.5">
                WE ARE HIRING!
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Please see below for positions available.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 mb-6 border-t border-slate-100 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <FiCheckCircle className="text-[#d97706] shrink-0" size={15} />
                  <span>150+ Years Combined Expertise</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <FiCheckCircle className="text-[#d97706] shrink-0" size={15} />
                  <span>Purpose-Built Investment FinTech</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <FiCheckCircle className="text-[#d97706] shrink-0" size={15} />
                  <span>Autonomous &amp; High-Impact</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <FiCheckCircle className="text-[#d97706] shrink-0" size={15} />
                  <span>Uncapped Earning &amp; Growth Path</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="#open-role"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200 bg-gradient-to-r from-[#d97706] to-[#3b82f6]"
                >
                  View Open Position <FiArrowRight size={14} />
                </a>
                <a
                  href="mailto:contact@equiforce.ai?subject=General%20Career%20Inquiry%20-%20EquiForce"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <FiMail className="text-[#d97706]" /> General Inquiry
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ─── AVAILABLE POSITIONS SECTION (Single Active Opening) ─── */}
        <section id="open-role" className="space-y-4">

          {/* Section Sub-header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              AVAILABLE POSITIONS
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
              1 Active Opening
            </span>
          </div>

          {/* The Single Opening Card */}
          <div className="bg-white rounded-3xl border border-amber-300/80 shadow-lg shadow-amber-500/5 ring-1 ring-amber-300/50 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-xl">

            {/* Top Row: Badges & Department */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d97706] to-[#b45309] text-white shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Active Opening
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  {job.department}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <FiMapPin size={13} className="text-[#d97706]" /> {job.location}
                </span>
              </div>
            </div>

            {/* Job Title */}
            <h4 className="text-2xl sm:text-3xl font-bold text-[#000E24] leading-tight mb-4">
              {job.title}
            </h4>

            {/* Role Summary */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              We’re looking for a proactive, relationship-driven business development professional to grow EquiForce’s presence among small and mid-sized asset managers and RIA firms. You’ll own the sales cycle from first conversation to signed client: finding the right firms, understanding their performance and composite reporting challenges, and showing how EquiForce solves them.
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#d97706] mb-2.5">
                  <FiBriefcase size={16} />
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#000E24] mb-1">
                  Consultative Discovery
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Present EquiForce solutions, demos, and proposals directly to CCOs, COOs, CFOs, and firm principals.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#d97706] mb-2.5">
                  <FiTrendingUp size={16} />
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#000E24] mb-1">
                  Competitive Rewards
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Generous commission on new client acquisitions, performance milestones, and client retention bonuses.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#d97706] mb-2.5">
                  <FiShield size={16} />
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#000E24] mb-1">
                  Executive Growth Path
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Potential transition to a salaried position with equity as EquiForce expands its national footprint.
                </p>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                <span>Employment Type: </span>
                <strong className="text-slate-800">{job.type}</strong>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {/* Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#000E24] hover:bg-[#0a1f3d] shadow-md transition-all active:scale-95"
                >
                  <FiBriefcase size={15} className="text-[#d97706]" />
                  <span>View Full Job Description</span>
                </button>

                {/* Direct Apply Button */}
                <a
                  href={`mailto:contact@equiforce.ai?subject=Application:%20${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#b45309] hover:to-[#d97706] shadow-md hover:shadow-orange-500/25 transition-all active:scale-95"
                >
                  <FiSend size={15} />
                  <span>Apply via Email</span>
                </a>
              </div>
            </div>

          </div>


        </section>

      </div>

      {/* ─── JOB DESCRIPTION MODAL (ADA Compliant Portal) ─── */}
      {modalOpen && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-modal-title"
          className="fixed inset-0 z-[9999] bg-slate-950/75 backdrop-blur-md overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative my-auto flex flex-col max-h-[90vh] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-[#000E24] text-white shrink-0 relative">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close job description modal"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-[#d97706]"
              >
                <FiX size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2 flex-wrap pr-10">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#d97706] text-white">
                  {job.status}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {job.department}
                </span>
              </div>

              <h2 id="job-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-3 pr-8">
                {job.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-[#d97706]" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiClock className="text-[#d97706]" /> {job.type}
                </span>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-slate-800 text-sm leading-relaxed">

              {/* About EquiForce */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#000E24] border-l-4 border-[#d97706] pl-2.5 mb-2.5">
                  About EquiForce
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {job.aboutEquiForce}
                </p>
              </div>

              {/* The Role */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#000E24] border-l-4 border-[#d97706] pl-2.5 mb-2.5">
                  The Role
                </h4>
                <div className="text-slate-600 text-sm leading-relaxed space-y-2.5">
                  {job.theRole.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* What You'll Do */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#000E24] border-l-4 border-[#d97706] pl-2.5 mb-3">
                  What You’ll Do
                </h4>
                <ul className="space-y-2.5">
                  {job.whatYoullDo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-amber-50 text-[#d97706] flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                        <FiCheckCircle size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We're Looking For */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#000E24] border-l-4 border-[#d97706] pl-2.5 mb-3">
                  What We’re Looking For
                </h4>

                <div className="space-y-4">
                  {/* Required */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/70">
                    <span className="font-bold text-xs uppercase tracking-wider text-[#000E24] block mb-2.5">
                      Required
                    </span>
                    <ul className="space-y-2">
                      {job.requiredQualifications.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#000E24] mt-2 shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preferred */}
                  <div className="bg-amber-50/40 p-4 sm:p-5 rounded-2xl border border-amber-200/60">
                    <span className="font-bold text-xs uppercase tracking-wider text-amber-900 block mb-2.5">
                      Preferred
                    </span>
                    <ul className="space-y-2">
                      {job.preferredQualifications.map((pref, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-2 shrink-0"></span>
                          <span>{pref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compensation & Growth */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#000E24] border-l-4 border-[#d97706] pl-2.5 mb-2.5">
                  Compensation &amp; Growth
                </h4>
                <ul className="space-y-2">
                  {job.compensation.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-2 shrink-0"></span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Apply Box */}
              <div className="bg-gradient-to-br from-[#000E24] to-[#0a1f3d] text-white p-6 sm:p-7 rounded-2xl shadow-md border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div>
                    <h5 className="text-base font-bold text-white flex items-center gap-2">
                      <FiMail className="text-[#d97706]" /> How to Apply
                    </h5>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      {job.howToApply}
                    </p>
                  </div>

                  <a
                    href={`mailto:contact@equiforce.ai?subject=Application:%20${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 hover:scale-105 active:scale-95"
                  >
                    <FiSend size={14} /> Apply via Email
                  </a>
                </div>

                <p className="border-t border-white/10 pt-3 text-xs text-slate-400 italic">
                  {job.legalNotice}
                </p>
              </div>
            </div>

            {/* Modal Sticky Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 hidden sm:inline">
                Direct resume and notes to <strong className="text-slate-700">contact@equiforce.ai</strong>
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:contact@equiforce.ai?subject=Application:%20${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#000E24] hover:bg-[#0a1f3d] transition-all"
                >
                  <FiSend size={13} /> Apply Now
                </a>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

      {/* Inline Keyframes for smooth modal transition */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Careers;