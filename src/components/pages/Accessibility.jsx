import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";


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

      <div className="bg-gray-50 min-h-screen w-full">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="bg-[#0B2341] text-white py-20 text-center"
          aria-labelledby="accessibility-page-title"
        >
          <h1
            id="accessibility-page-title"
            className="text-3xl md:text-5xl font-bold mt-12"
          >
            Accessibility <span className="text-[#d97706]">Statement</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-lg">
            EquiForce Solutions Inc. · equiforce.ai
          </p>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <section className="w-full px-4 md:px-10 lg:px-20 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto">


            {/* 1. Our commitment */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Accessibility at EquiForce
              </h2>
              <p>
                EquiForce Solutions Inc. is committed to making our website and
                services usable by everyone, including people with disabilities. We
                want every visitor and client to be able to find information about our
                services, contact us, and use our reporting tools — regardless of how
                they access the web.
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
                  className="text-[#b45309] underline hover:opacity-80"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA
                </a>
                , published by the World Wide Web Consortium (W3C). These guidelines
                explain how to make web content more accessible to people with visual,
                auditory, physical, speech, cognitive, and neurological disabilities.
              </p>
            </div>

            {/* 3. Current status */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Current status
              </h2>
              <p>
                <strong>
                  equiforce.ai is not yet fully conformant with WCAG 2.1 Level AA.
                </strong>{" "}
                We have begun a structured review of our website and are correcting
                the issues we identify. We will update this statement, including the
                assessment date below, as that work progresses.
              </p>
            </div>

            {/* 4. What we are doing */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                What we are doing
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Assessing equiforce.ai against WCAG 2.1 Level AA using both
                  automated testing tools and manual review, including keyboard-only
                  navigation and screen-reader testing.
                </li>
                <li>
                  Building accessibility requirements into our design and development
                  process, so that new pages and features are reviewed before release.
                </li>
                <li>
                  Training the people who design, build, and publish our content.
                </li>
                <li>
                  Reviewing accessibility with the third-party providers whose tools
                  appear on our website, including chat, analytics, and booking
                  services.
                </li>
                <li>
                  Tracking identified issues as development tickets with assigned
                  owners and target completion dates.
                </li>
              </ul>
            </div>

            {/* 5. If you have trouble */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                If you have trouble using this site
              </h2>
              <p>
                If you have difficulty accessing any page, feature, or document on
                equiforce.ai, please tell us. We will provide the information you need
                in a format that works for you, at no cost to you, and we will use
                what you tell us to fix the underlying problem.
              </p>
            </div>

            {/* 6. Contact */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-4">
              <h2 className="font-bold text-xl text-gray-900">
                Contact us about accessibility
              </h2>
              <p className="text-sm text-gray-600">
                To help us respond quickly, please include the web address of the
                page, what you were trying to do, and — if you know it — the browser,
                device, and any assistive technology you were using.
              </p>

              <ul className="space-y-4">
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
                      className="text-[#b45309] underline hover:opacity-80"
                    >
                      contact@equiforce.ai
                    </a>
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

              <p className="text-sm text-gray-600 pt-2 border-t border-gray-200">
                We aim to acknowledge accessibility feedback within{" "}
                <strong>five (5) business days</strong>.
              </p>
            </div>

            {/* 7. Escalation */}
            <div>
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                If you are not satisfied with our response
              </h2>
              <p>
                You may escalate your concern to our{" "}
                <strong>Executive Sponsor — Accessibility</strong> at{" "}
                <a
                  href="mailto:contact@equiforce.ai"
                  className="text-[#b45309] underline hover:opacity-80"
                >
                  contact@equiforce.ai
                </a>
                .
              </p>
            </div>


            {/* Review information */}
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
                  <dd>Partially conformant — active remediation in progress</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 w-36 shrink-0">Last reviewed:</dt>
                  <dd>August 21, 2026</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 w-36 shrink-0">Next review:</dt>
                  <dd>
                    Annually and after any major redesign, platform migration, or
                    completed audit.
                  </dd>
                </div>
              </dl>
            </div>


            <div className="border-t border-gray-100 pt-6">
              <h2 className="font-bold text-base text-gray-700 mb-2">Disclaimer</h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                This accessibility statement is a public representation of our
                compliance posture and commitment to accessibility. It is not legal
                advice and does not constitute a legally binding representation of
                full conformance. EquiForce Solutions Inc. recommends review by
                qualified accessibility counsel before any public conformance claim is
                made.
              </p>
            </div>

          </div>

          {/* Back nav */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Link
              to="/"
              className="inline-block text-sm text-[#b45309] underline hover:opacity-80"
            >
              ← Back to EquiForce Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accessibility;
