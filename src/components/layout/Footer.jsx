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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12  items-start pb-8 border-b border-gray-100">

          {/* LEFT CTA */}
          <div className="md:col-span-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-[#000E24] leading-tight mb-6">
              Transform Your Investment <br className="hidden sm:block" />
              Operations with <br className="hidden sm:block" />
              EquiForce Solutions
            </h2>

            <Link
              to="/contact"
              className="inline-block bg-[#d97706] hover:shadow-xl hover:shadow-orange-500/20 text-white px-7 py-2 rounded-xl font-semibold transition-all hover:-translate-y-1"
            >
              Try for Free
            </Link>
          </div>

          {/* RIGHT GRID (4-4-2-2) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12  text-gray-600 text-sm">

            {/* Solutions (4) */}
            <div className="md:col-span-5">
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-5">
                Solutions
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/performance-measurement#operations" className="hover:text-[#d97706]">
                    Investment Operations & Reconciliation
                  </Link>
                </li>
                <li>
                  <Link to="/performance-measurement#performance" className="hover:text-[#d97706]">
                    Performance Measurement
                  </Link>
                </li>
                <li>
                  <Link to="/performance-measurement#gips" className="hover:text-[#d97706]">
                    GIPS-focused Composite Management
                  </Link>
                </li>
                <li>
                  <Link to="/performance-measurement#ai-reporting" className="hover:text-[#d97706]">
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
                  <FiMail className="text-[#d97706]" />
                  <a href="mailto:contact@equiforcesolutions.com" className="group-hover:text-[#d97706] break-all">
                    contact@equiforcesolutions.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <FiPhone className="text-[#d97706]" />
                  <a href="tel:+16268388118" className="group-hover:text-[#d97706]">
                    +1-626-838-8118
                  </a>
                </li>
              </ul>
            </div>

           

          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-[13px]">

          <p className="text-center md:text-left">
            ©2026 <span className="font-semibold text-gray-600">EquiForce Solutions</span> · All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500">
            <Link to="/privacy-policy" className="hover:text-[#d97706]">
              Privacy Policy
            </Link>
            <span className="hidden md:block">|</span>
            <Link to="/terms-of-service" className="hover:text-[#d97706]">
              Terms of Service
            </Link>
            <span className="hidden md:block">|</span>

             <Link to="/gips-focused" className="hover:text-[#d97706]">
              GIPS-focused
            </Link>

            
          </div>
  
          
          {/* Scroll to Top */}
          {show && (
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#000E24] hover:bg-[#d97706] text-white shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FiArrowUp size={18} />
              </button>
            </div>
          )}
        </div>

      </div>
    </footer>
  );
};

export default Footer;