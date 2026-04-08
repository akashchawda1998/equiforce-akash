import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi"; // Added Mail and Phone icons
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
    <footer className="py-6 md:py-8 bg-white border-t border-gray-100 rounded-t-[3rem] mx-4 md:mx-6 lg:mx-10 mt-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-4 border-b border-gray-100">

          {/* LEFT: MISSION STATEMENT */}
          <div className="md:col-span-5 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000E24] leading-tight mb-8">
              Transform Your Investment <br className="hidden sm:block" />
              Operations with <br className="hidden sm:block" />
              EquiForce Solutions
            </h2>

            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#d97706] to-[#d97706] 
              hover:shadow-xl hover:shadow-orange-500/20 text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
            >
              Try for Free
            </Link>
          </div>

          {/* RIGHT: LINKS & CONTACT */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-600 text-sm">

            {/* Solutions */}
            <div>
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-6">Solutions</h4>
              <ul className="space-y-4">
                <li className="mb-2"><Link to="/performance-measurement#operations" className="hover:text-[#d97706] transition-colors">Investment Operations & Reconciliation</Link></li>
                <li className="mb-2"><Link to="/performance-measurement#performance" className="hover:text-[#d97706] transition-colors">Performance Measurement</Link></li>
                <li className="mb-2"><Link to="/performance-measurement#gips" className="hover:text-[#d97706] transition-colors">GIPS Composite Management</Link></li>
                <li className="mb-2"><Link to="/performance-measurement#ai-reporting" className="hover:text-[#d97706] transition-colors">AI-Powered Investment Reporting</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
              <ul className="space-y-4">
                <li className="mb-2"><Link to="/about" className="hover:text-[#d97706] transition-colors">About Us</Link></li>
                <li className="mb-2"><Link to="/team" className="hover:text-[#d97706] transition-colors">Our Team</Link></li>
                <li className="mb-2"><Link to="/contact" className="hover:text-[#d97706] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info (As requested by Jane) */}
            <div>
              <h4 className="text-[#000E24] font-bold uppercase tracking-widest text-xs mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center md:justify-start group">
                  <FiMail className="text-[#d97706]" />
                  <a href="mailto:contact@equiforcesolutions.com" className="group-hover:text-[#d97706] transition-colors">
                    contact@equiforcesolutions.com
                  </a>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group">
                  <FiPhone className="text-[#d97706]" />
                  <a href="tel:+16268388118" className="group-hover:text-[#d97706] transition-colors">
                    US +1-626-838-8118
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-[13px]">

          {/* PRIVACY & TERMS */}
          <div className="flex gap-6 flex-wrap justify-center md:justify-start font-medium">
            <p className="text-center md:text-right">
            ©2026 <span className="font-bold text-gray-600">EquiForce Solutions</span> · All rights reserved.
          </p>
          </div>

          {/* SCROLL BUTTON */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-6 mb-4 md:mb-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[#000E24] hover:bg-[#d97706] text-white shadow-xl 
              hover:scale-110 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </button>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;