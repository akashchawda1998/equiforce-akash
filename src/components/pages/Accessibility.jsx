import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Download, CheckCircle, FileText, AlertCircle } from "lucide-react";

const Accessibility = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement | EquiForce Solutions</title>
        <meta
          name="description"
          content="EquiForce Solutions Inc. is committed to making our website and services usable by everyone, including people with disabilities. Read our Accessibility Statement."
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen w-full pt-20">
        {/* HERO */}
        <section
          className="bg-[#000E24] text-white py-16 text-center"
          aria-labelledby="accessibility-page-title"
        >
          <h1
            id="accessibility-page-title"
            className="text-3xl md:text-5xl font-extrabold mt-6"
          >
            Accessibility <span className="text-[#d97706]">Statement</span>
          </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-lg">
            EquiForce Solutions Inc. &middot; equiforce.ai &middot; Standard: WCAG 2.1 Level AA
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/accessibility-policy"
              className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b46002] text-white font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-white text-xs md:text-sm"
            >
              <FileText size={18} aria-hidden="true" /> View Digital Accessibility Policy
            </Link>
            <Link
              to="/accessibility-checklist"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-xl border border-white/20 transition-all focus-visible:ring-2 focus-visible:ring-white text-xs md:text-sm"
            >
              <CheckCircle size={18} aria-hidden="true" /> View Compliance Checklist
            </Link>
          </div>
        </section>

        {/* POLICY & CHECKLIST DOWNLOAD BANNER */}
        <section className="max-w-4xl mx-auto px-4 -mt-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle size={28} className="text-green-600 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-gray-900 text-base">Digital Accessibility Policy & Compliance Checklist</h3>
                <p className="text-xs text-gray-500">WCAG 2.1 Level AA Core Policy Documents (Dated July 30, 2026)</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/accessibility-policy"
                className="bg-[#000E24] text-white text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                Policy View
              </Link>
              <a
                href="/docs/EquiForce_Digital_Accessibility_Policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d97706] text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#b46002] transition inline-flex items-center gap-1"
              >
                <Download size={13} aria-hidden="true" /> Policy Doc
              </a>
              <a
                href="/docs/EquiForce_Website_Accessibility_Compliance_Checklist.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-2 rounded-lg hover:bg-slate-200 transition inline-flex items-center gap-1"
              >
                <Download size={13} aria-hidden="true" /> Checklist Doc
              </a>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="w-full px-4 md:px-10 lg:px-20 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto border border-gray-100">

            {/* 1. Commitment */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Accessibility at EquiForce
              </h2>
              <p>
                EquiForce Solutions Inc. is committed to making our website and services usable by everyone, including people with disabilities. We want every visitor and client to be able to find information about our services, contact us, and use our reporting tools — regardless of how they access the web.
              </p>
            </div>

            {/* 2. Standard */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                The standard we follow
              </h2>
              <p>
                We are working to conform to the{" "}
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b45309] underline hover:opacity-80 font-medium"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA
                </a>
                , published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with visual, auditory, physical, speech, cognitive, and neurological disabilities.
              </p>
            </div>

            {/* 3. Conformance Status */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Conformance status
              </h2>
              <p>
                <strong className="text-gray-900">
                  equiforce.ai is partially conformant with WCAG 2.1 Level AA.
                </strong>{" "}
                "Partially conformant" means that some parts of the content do not fully conform to the accessibility standard. We are actively working to close remaining gaps and we track them internally with assigned owners and target dates. We do not rely on third-party accessibility overlays or widgets for legal compliance, building native keyboard, contrast, and assistive technology support directly into our codebase.
              </p>
            </div>

            {/* 4. Known Limitations */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Known limitations
              </h2>
              <p className="mb-3">
                Despite our efforts, some limitations may remain. Below is a description of known issues and what we are doing about them. Please contact us if you encounter a problem that is not listed here:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2 text-gray-600">
                <li>
                  <strong>Legacy Downloadable Documents:</strong> Some PDF documents and historical whitepapers published prior to August 2026 may not be fully tagged for screen readers. <em>What we are doing:</em> We remediate these upon request and by priority order. Contact us at <a href="mailto:accessibility@equiforce.ai" className="text-[#b45309] underline">accessibility@equiforce.ai</a> for an accessible version of any document.
                </li>
                <li>
                  <strong>Complex Data Visualizations:</strong> Interactive performance charts and GIPS composite report graphs in product walkthroughs are currently receiving supplemental table text alternatives. <em>What we are doing:</em> We are actively updating graph templates to expose accessible table data alternatives.
                </li>
                <li>
                  <strong>Third-Party Embedded Components:</strong> Embedded scheduling and external analytics tools are monitored and vendor VPATs are maintained.
                </li>
              </ul>
            </div>

            {/* 5. How we assessed this website */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                How we assessed this website
              </h2>
              <p>
                EquiForce assessed the accessibility of equiforce.ai by self-evaluation together with manual keyboard and screen-reader testing carried out by the EquiForce web team, completed on <strong>August 28, 2026</strong>.
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs md:text-sm space-y-2">
                <p><strong>Technologies relied on:</strong> HTML, CSS, JavaScript, and WAI-ARIA.</p>
                <p><strong>Tested environments:</strong> Recent versions of Chrome, Firefox, Safari, and Edge used together with NVDA, JAWS, VoiceOver (macOS & iOS), and TalkBack (Android).</p>
              </div>
            </div>

            {/* 6. Contact & SLA */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-4">
              <h2 className="font-bold text-xl text-gray-900">
                Contact us about accessibility
              </h2>
              <p className="text-sm text-gray-600">
                If you have difficulty accessing any page, feature, or document on equiforce.ai, please tell us. We will provide the information you need in a format that works for you, at no cost to you, and we will use what you tell us to fix the underlying problem. We aim to acknowledge accessibility feedback within <strong>five (5) business days</strong>.
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="text-[#d97706] shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Email: </strong>
                    <a
                      href="mailto:accessibility@equiforce.ai"
                      className="text-[#b45309] underline hover:opacity-80 font-semibold"
                    >
                      accessibility@equiforce.ai
                    </a>{" "}
                    (or <a href="mailto:contact@equiforce.ai" className="text-[#b45309] underline">contact@equiforce.ai</a>)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="text-[#d97706] shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Phone: </strong>
                    <a
                      href="tel:+16268388118"
                      className="text-[#b45309] underline hover:opacity-80"
                    >
                      +1-626-838-8118
                    </a>
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-[#d97706] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <address className="not-italic">
                    <strong>Mail: </strong>
                    EquiForce Solutions Inc.
                    <br />
                    1575 Westwood Blvd, Ste 302
                    <br />
                    Los Angeles, CA 90024
                    <br />
                    United States
                  </address>
                </li>
              </ul>
            </div>

            {/* 7. Escalation */}
            <div className="border-t border-gray-100 pt-6">
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                If you are not satisfied with our response
              </h2>
              <p>
                You may escalate your concern to our <strong>Executive Sponsor — Accessibility</strong> at{" "}
                <a
                  href="mailto:contact@equiforce.ai"
                  className="text-[#b45309] underline hover:opacity-80 font-semibold"
                >
                  contact@equiforce.ai
                </a>.
              </p>
            </div>

            {/* 8. Assessment & Governance Info */}
            <div className="border-t border-gray-100 pt-6">
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Review information
              </h2>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 w-36 shrink-0">Standard:</dt>
                  <dd>WCAG 2.1 Level AA</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 w-36 shrink-0">Status:</dt>
                  <dd className="text-gray-900 font-semibold">Partially conformant — active remediation tracking</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 w-36 shrink-0">Last reviewed:</dt>
                  <dd>August 28, 2026</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 w-36 shrink-0">Next review:</dt>
                  <dd>Annually and after any major redesign, platform migration, or completed audit.</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="font-bold text-base text-gray-700 mb-2">Disclaimer</h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                This accessibility statement is a drafting aid and public representation of our compliance posture. It is not legal advice and does not constitute a legally binding representation of full conformance. EquiForce Solutions Inc. recommends review by qualified accessibility counsel before any public conformance claim is published.
              </p>
            </div>

          </div>

          {/* Back nav */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Link
              to="/"
              className="inline-block text-sm text-[#b45309] underline hover:opacity-80 font-semibold"
            >
              &larr; Back to EquiForce Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accessibility;
