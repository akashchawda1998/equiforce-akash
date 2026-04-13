import React from "react";

const GipsDisclaimer = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      {/* HERO */}
      <section className="bg-[#0B2341] text-white py-14 sm:py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-10 md:mt-12 leading-tight">
            GIPS <span className="text-[#d97706]">Disclaimer</span>
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Standardized language for platform, marketing, consulting &
            documentation
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-3 sm:px-4 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base">

          <p>
            This page provides standardized GIPS® disclaimer language for use
            across your platform, marketing materials, consulting engagements,
            and client-facing documentation. Review with your attorney and the
            CFA Institute trademark guidelines before final use.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-3">
              1. Platform UI — Dashboard & System Footer
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p>
                Equiforce Solutions software is designed to support firms in
                implementing the Global Investment Performance Standards
                (GIPS®). Use of this platform does not constitute GIPS
                compliance or GIPS verification. GIPS compliance is the sole
                responsibility of the investment firm. GIPS® is a registered
                trademark of CFA Institute. CFA Institute does not endorse or
                promote this software, nor does it warrant the accuracy or
                quality of content contained herein.
              </p>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-3">
              2. Website & Marketing Materials
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p>
                Equiforce Solutions provides software and consulting services to
                assist investment firms in implementing processes consistent
                with the Global Investment Performance Standards (GIPS®).
                Equiforce Solutions is not a GIPS verification firm and does not
                verify, certify, or opine on a firm's GIPS compliance status.
                Only independent verifiers may perform GIPS verification.
                GIPS® is a registered trademark of CFA Institute.
              </p>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-3">
              3. Consulting Engagement Disclaimer
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p>
                The services provided by Equiforce Solutions are intended to
                assist the Client in developing, documenting, and implementing
                processes aligned with the GIPS® standards. Equiforce Solutions
                is not providing a legal opinion, compliance certification, or
                GIPS verification. GIPS compliance is the responsibility of the
                Client. Equiforce Solutions strongly recommends that the Client
                engage an independent, qualified GIPS verifier to assess
                compliance. GIPS® is a registered trademark of CFA Institute.
                CFA Institute has not been involved in the preparation of, and
                does not endorse or review, the services provided hereunder.
              </p>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-3">
              4. Report & Deliverable Footer
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p>
                This document was prepared by Equiforce Solutions for
                informational and implementation support purposes only. It does
                not constitute GIPS verification or a compliance opinion.
                GIPS® is a registered trademark of CFA Institute.
              </p>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-3">
              5. Sales / Proposal Disclaimer
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p>
                Equiforce Solutions offers SaaS technology and advisory services
                to support GIPS® implementation. We do not perform GIPS
                verification services. Our platform and consulting are designed
                to help your firm build and maintain a compliant infrastructure;
                ultimate compliance determination requires independent
                verification. GIPS® is a registered trademark of CFA Institute.
              </p>
            </div>
          </div>

          {/* LIST */}
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-3">
              6. What You Must Not Claim
            </h2>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                States or implies your software guarantees or certifies GIPS
                compliance.
              </li>
              <li>
                Uses “GIPS Verified” or “GIPS Certified” in reference to your
                product.
              </li>
              <li>
                Implies CFA Institute endorses, partners with, or has reviewed
                your platform.
              </li>
              <li>
                Uses GIPS® as part of your company or product name without CFA
                Institute written approval.
              </li>
            </ul>
          </div>

       

        </div>
      </section>
    </div>
  );
};

export default GipsDisclaimer;