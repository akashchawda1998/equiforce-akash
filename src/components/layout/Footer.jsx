import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-5 items-start pb-8 border-b border-gray-100">

          {/* LEFT */}
          <div className="md:col-span-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#000E24] leading-tight mb-6">
              Transform Your Investment <br className="hidden sm:block" />
              Operations with <br className="hidden sm:block" />
              EquiForce Solutions
            </h2>

            <Link
              to="/contact"
              className="inline-block bg-[#d97706] 
              hover:shadow-xl hover:shadow-orange-500/20 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1"
            >
              Try for Free
            </Link>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-y-10  text-gray-600 text-sm ">

            {/* Solutions */}
            <div className="min-w-0">
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5">
                Solutions
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/performance-measurement#operations" className="hover:text-[#d97706] transition-colors whitespace-nowrap ">
                    Investment Operations & Reconciliation
                  </Link>
                </li>
                <li>
                  <Link to="/performance-measurement#performance" className="hover:text-[#d97706] transition-colors whitespace-nowrap ">
                    Performance Measurement
                  </Link>
                </li>
                <li>
                  <Link to="/performance-measurement#gips" className="hover:text-[#d97706] transition-colors whitespace-nowrap">
                     GIPS-focused Composite Management
                  </Link>
                </li>
                <li>
                  <Link to="/performance-measurement#ai-reporting" className="hover:text-[#d97706] transition-colors ">
                    AI-Powered Investment Reporting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="min-w-0  md:text-center ">
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5 ">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="hover:text-[#d97706] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-[#d97706] transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#d97706] transition-colors">
                    Contact&nbsp;&nbsp;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3  md:justify-start group">
                  <FiMail className="text-[#d97706]" />
                  <a href="mailto:contact@equiforcesolutions.com" className="group-hover:text-[#d97706] transition-colors">
                    contact@equiforcesolutions.com
                  </a>
                </li>
                <li className="flex items-center gap-3 md:justify-start group">
                  <FiPhone className="text-[#d97706]" />
                  <a href="tel:+16268388118" className="group-hover:text-[#d97706] transition-colors">
                    +1-626-838-8118
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
      <div className="relative pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-[13px]">

  {/* LEFT: COPYRIGHT */}
  <p className="text-center md:text-left">
    ©2026 <span className="font-semibold text-gray-600">EquiForce Solutions</span> · All rights reserved.
  </p>

  {/* CENTER: LINKS */}
  <div className="flex items-center gap-2 text-gray-500">
    <Link
      to="/privacy-policy"
      className="hover:text-[#d97706] transition-colors"
    >
      Privacy Policy
    </Link>
    <span className="hidden md:block">|</span>
    <Link
      to="/terms-of-service"
      className="hover:text-[#d97706] transition-colors"
    >
      Terms of Service
    </Link>
  </div>

  {/* SCROLL BUTTON */}
  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-6">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-11 h-11 flex items-center justify-center rounded-full 
      bg-[#000E24] hover:bg-[#d97706] text-white shadow-lg 
      hover:scale-110 transition-all duration-300"
    >
      <FiArrowUp size={18} />
    </button>
  </div>

</div>
      </div>
    </footer>
  );
};

export default Footer;