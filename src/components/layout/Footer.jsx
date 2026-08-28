import { FiArrowUp, FiMail, FiLinkedin, FiPhone } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="py-8 md:py-12 bg-white border-t border-gray-100 rounded-t-[3rem] mx-4 md:mx-6 lg:mx-10 mt-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12  items-start pb-8 border-b border-gray-100">
          {/* LEFT CTA */}
          <div className="md:col-span-4 text-center md:text-left">
           
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-[#000E24] leading-tight mb-6">
              Transform Your Performance Measurement
              Operations with <br className="hidden sm:block" />
              EquiForce
            </h2>

            <Link
              to="/contact"
              className="inline-block bg-[#d97706] hover:shadow-xl hover:shadow-orange-500/20 text-white px-7 py-2 rounded-xl font-semibold transition-all hover:-translate-y-1"
            >
              Try for Free
            </Link>
          </div>

          {/* RIGHT GRID (4-4-2-2) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-10 md:gap-0 text-gray-600 text-sm">            <div className="md:col-span-5 md:mb-2">
            <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {/* <li>
                <Link
                  to="/performance-measurement#operations"
                  className="hover:text-[#d97706]"
                >
                  Investment Operations & Reconciliation
                </Link>
              </li> */}
              <li>
                <Link
                  to="/performance-measurement#performance"
                  className="hover:text-[#d97706]"
                >
                  Performance Measurement
                </Link>
              </li>
              <li>
                <Link
                  to="/performance-measurement#gips"
                  className="hover:text-[#d97706]"
                >
                  GIPS® Composite Management
                </Link>
              </li>
              <li>
                <Link
                  to="/performance-measurement#ai-reporting"
                  className="hover:text-[#d97706]"
                >
                  AI-Powered Investment Reporting
                </Link>
              </li>
            </ul>
          </div>

            {/* Company (4) */}
            <div className="md:col-span-2">
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="hover:text-[#d97706]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-[#d97706]">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/about#partner" className="hover:text-[#d97706]">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#d97706]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch (2) */}
            <div className="md:col-span-4">
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <FiMail className="text-[#d97706]" aria-hidden="true" />
                  <a
                    href="mailto:contact@equiforce.ai"
                    className="group-hover:text-[#d97706] break-all"
                  >
                    contact@equiforce.ai
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <FiPhone className="text-[#d97706]" aria-hidden="true" />
                  <a
                    href="tel:+16268388118"
                    className="group-hover:text-[#d97706]"
                  >
                    +1-626-838-8118
                  </a>
                </li>

                  <li className="flex items-center gap-3 group">
     <div className="">
    <a
      href="https://www.linkedin.com/company/equiforcesolutions/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow EquiForce on LinkedIn (opens in new tab)"
      className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#004182] transition duration-300 shadow-sm hover:shadow-md"
    >
      <FaLinkedinIn className="text-white" aria-hidden="true" />
      Follow us on LinkedIn
    </a>
  </div>
    </li>

              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative pt-8 md:pt-10 flex flex-col lg:flex-row items-center justify-between gap-4 text-gray-600 text-[13px]">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-center lg:text-left">
            <p>
              ©2026{" "}
              <span className="font-semibold text-gray-800">EquiForce</span>
              {" "}· All rights reserved.
            </p>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <Link to="/accessibility" className="hover:text-[#d97706] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#d97706] rounded px-1">
              Accessibility
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <Link to="/accessibility-policy" className="hover:text-[#d97706] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#d97706] rounded px-1">
              Accessibility Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <Link to="/accessibility-checklist" className="hover:text-[#d97706] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#d97706] rounded px-1">
              Compliance Checklist
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-gray-600">
            <Link to="/privacy-policy" className="hover:text-[#d97706] transition-colors focus-visible:ring-2 focus-visible:ring-[#d97706] rounded px-1">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <Link to="/terms-of-service" className="hover:text-[#d97706] transition-colors focus-visible:ring-2 focus-visible:ring-[#d97706] rounded px-1">
              Terms of Service
            </Link>
          </div>



          {/* Scroll to Top */}
          {show && (
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-6">
              <button
                type="button"
                aria-label="Scroll to top of page"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#000E24] hover:bg-[#d97706] text-white shadow-lg hover:scale-110 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#d97706]"
              >
                <FiArrowUp size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
