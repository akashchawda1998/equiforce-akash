import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Download, ArrowLeft, ShieldCheck, FileText, CheckCircle2, AlertTriangle, Users, Lock, Clock } from "lucide-react";

const AccessibilityPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Digital Accessibility Policy | EquiForce Solutions</title>
        <meta
          name="description"
          content="Official EquiForce Solutions Inc. Digital Accessibility Policy. Standard: WCAG 2.1 Level AA covering all digital products, services, and platform reporting output."
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        {/* HERO SECTION */}
        <section className="bg-[#000E24] text-white py-16 px-4 md:px-8 text-center relative">
          <div className="max-w-5xl mx-auto">
            <Link to="/accessibility" className="inline-flex items-center gap-2 text-sm text-[#d97706] hover:underline mb-4 font-semibold">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Accessibility Statement
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Digital Accessibility <span className="text-[#d97706]">Policy</span>
            </h1>
            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
              EquiForce Solutions Inc. &middot; Standard: WCAG 2.1 Level AA &middot; Version 1.0 &middot; Effective July 30, 2026
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/docs/EquiForce_Digital_Accessibility_Policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b46002] text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-white"
              >
                <Download size={18} aria-hidden="true" /> Download Official Policy Document (HTML / PDF)
              </a>
            </div>
          </div>
        </section>

        {/* POLICY METADATA BAR */}
        <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#d97706] shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Standard</p>
                <p className="text-sm font-bold text-gray-800">WCAG 2.1 Level AA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-[#d97706] shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Policy Owner</p>
                <p className="text-sm font-bold text-gray-800">Accessibility Program Owner</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#d97706] shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Feedback SLA</p>
                <p className="text-sm font-bold text-gray-800">5 Business Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="text-[#d97706] shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Overlay Rule</p>
                <p className="text-sm font-bold text-red-600">Prohibited as Primary</p>
              </div>
            </div>
          </div>
        </section>

        {/* POLICY BODY */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-12 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base border border-gray-100">

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#000E24] mb-3">1. Purpose & Policy Statement</h2>
              <p className="mb-4">
                This Policy establishes how EquiForce Solutions Inc. ("EquiForce" or the "Company") designs, builds, procures, publishes, and maintains digital products, services, and content so that they are usable by people with disabilities.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-gray-600">
                <li>Set a single, testable technical standard so that "accessible" means the same thing to every team.</li>
                <li>Assign named accountability, so that accessibility is owned rather than assumed.</li>
                <li>Define how the Company responds when someone tells us they cannot use something we built.</li>
                <li>Create a durable, dated record of a good-faith accessibility program.</li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs md:text-sm">
                <strong>Legal Context:</strong> ADA Title III (place of public accommodation), California Unruh Civil Rights Act ($4,000 minimum statutory damages per violation), ADA Title II client procurement flow-down, and ADA Title I employment obligations.
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#000E24] mb-3">3. Scope & Digital Properties Covered</h2>
              <p className="mb-3">This Policy applies across all digital touchpoints:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-gray-600">
                <li>Public website at <code>equiforce.ai</code>, landing pages, and gated content.</li>
                <li>EquiForce Platform UI and authenticated client portal.</li>
                <li><strong>Generated Reporting Output:</strong> Reports, dashboards, PDFs (performance measurement, GIPS composite reporting, AI investment reporting) generated by the Platform. <em>Accessibility must be engineered directly into generation templates.</em></li>
                <li>Careers pages, job postings, ATS systems, and email campaigns.</li>
                <li>Third-party embedded components (chat, consent banners, scheduling).</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#000E24] mb-3">4. The Standard & Prohibition of Overlays</h2>
              <p className="mb-4">
                EquiForce adopts <strong>WCAG 2.1 Level AA</strong> as its technical standard across all 50 success criteria.
              </p>
              <div className="bg-amber-50 border-l-4 border-[#d97706] p-4 rounded-r-xl text-amber-900 text-xs md:text-sm">
                <strong>Overlays Prohibited:</strong> EquiForce will not use an Overlay product (accessiBe, UserWay, AudioEye, etc.) to satisfy, or represent that it satisfies, any requirement of this Policy. Conformance must be achieved natively in code, markup, and design.
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#000E24] mb-3">5. Governance Roles & Responsibilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm">Executive Sponsor</h3>
                  <p className="text-xs text-gray-600 mt-1">Owns Policy at executive level. Approves audit plans and exceptions &gt;90 days. Has release-hold authority.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm">Accessibility Program Owner</h3>
                  <p className="text-xs text-gray-600 mt-1">Day-to-day owner. Maintains defect register, exception register, inbox (accessibility@equiforce.ai), and statement.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm">Engineering & Design Leads</h3>
                  <p className="text-xs text-gray-600 mt-1">Enforce release gate checks in CI, design contrast tokens, focus states, and component library semantics.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm">Product & Marketing Owners</h3>
                  <p className="text-xs text-gray-600 mt-1">Ensure report generation templates and published content (captions, alt text, transcripts) satisfy WCAG 2.1 AA.</p>
                </div>
              </div>
            </div>



            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-[#000E24] mb-3">6. Defect Severity & Remediation Targets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs md:text-sm">
                <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                  <span className="font-extrabold text-red-700 block text-base">Critical</span>
                  <p className="text-gray-700 mt-1">Prevents Core User Journey completion.</p>
                  <p className="font-bold text-red-800 mt-2">10 Business Days</p>
                  <p className="text-[11px] text-gray-500">(Alternate access in 3 days)</p>
                </div>
                <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                  <span className="font-extrabold text-orange-700 block text-base">High</span>
                  <p className="text-gray-700 mt-1">Materially impairs Core User Journey.</p>
                  <p className="font-bold text-orange-800 mt-2">30 Calendar Days</p>
                </div>
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
                  <span className="font-extrabold text-blue-700 block text-base">Medium</span>
                  <p className="text-gray-700 mt-1">Level AA failure outside core journey.</p>
                  <p className="font-bold text-blue-800 mt-2">60 Calendar Days</p>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
                  <span className="font-extrabold text-gray-700 block text-base">Low</span>
                  <p className="text-gray-700 mt-1">Minimal practical impact.</p>
                  <p className="font-bold text-gray-800 mt-2">90 Days / Next Release</p>
                </div>
              </div>
            </div>



          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityPolicy;
