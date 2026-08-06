import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiArrowRight, FiPhone, FiUsers } from "react-icons/fi";
import logo from "../../assets/images/logoorg.png";
import DemoModal from "../common/DemoModal";

const NAVY = "#000E24";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop menu states
  const [platformOpen, setPlatformOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile menu states
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setPlatformOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Fixed Navbar with solid #000E24 background - No Scroll Animation */}
      <nav aria-label="Main Navigation" className="fixed top-0 left-0 w-full z-50 bg-[#000E24] py-2 shadow-lg border-b border-white/10 px-2">
        <div className="max-w-screen-2xl mx-auto px-2 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo matching the provided image exactly */}
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="EquiForce Home">
              <img src={logo} className="h-10 md:h-12" alt="EquiForce Logo" />
              <div className="flex flex-col justify-center mt-1">
                <span className="text-lg md:text-[22px] text-white font-black tracking-widest uppercase leading-none">
                  EquiForce
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8 font-semibold items-center text-white">
              <Link to="/" className="text-xs uppercase hover:text-[#d97706] transition-all">
                Home
              </Link>

              <div
                className="relative h-full py-4 flex items-center"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={platformOpen}
                  aria-haspopup="true"
                  onClick={() => setPlatformOpen(!platformOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPlatformOpen(!platformOpen);
                    }
                  }}
                  className="text-xs uppercase flex items-center hover:text-[#d97706] transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
                >
                  Solutions
                  <FiChevronDown
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${platformOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {platformOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 cursor-default z-50">
                    <div className="w-[780px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden text-left">
                      <div className="bg-white p-8 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                          <Link
                            to="/performance-measurement#performance"
                            onClick={() => setPlatformOpen(false)}
                            className="group block"
                          >
                            <h4 className="font-bold text-[#000E24] text-base group-hover:text-[#d97706] transition-colors">
                              Performance Measurement
                            </h4>
                            <p className="text-sm text-gray-500 mt-1 leading-snug">IBOR, ABOR and PBOR returns and attribution at security, portfolio, and composite levels.</p>
                          </Link>

                          <Link
                            to="/performance-measurement#gips"
                            onClick={() => setPlatformOpen(false)}
                            className="group block"
                          >
                            <h4 className="font-bold text-[#000E24] text-base group-hover:text-[#d97706] transition-colors">
                              GIPS® Composite Management
                            </h4>
                            <p className="text-sm text-gray-500 mt-1 leading-snug">End-to-end composite management — built to deliver reliable, compliant performance reporting.</p>
                          </Link>

                          <Link
                            to="/performance-measurement#ai-reporting"
                            onClick={() => setPlatformOpen(false)}
                            className="group block"
                          >
                            <h4 className="font-bold text-[#000E24] text-base group-hover:text-[#d97706] transition-colors">
                              AI-Powered Investment Reporting
                            </h4>
                            <p className="text-sm text-gray-500 mt-1 leading-snug">Intelligent investment reporting that surfaces accurate insights into every reporting layer.</p>
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          {/* Consulting Solutions */}
                          <Link
                            to="/consultant"
                            onClick={() => setPlatformOpen(false)}
                            className="bg-[#eef7f8] rounded-2xl p-5 flex justify-between items-center group hover:bg-[#d4ecee] hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-105 transition">
                                <FiUsers className="text-[#000E24] text-lg" aria-hidden="true" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#000E24] text-sm">
                                  Consulting Solutions
                                </h4>
                                <p className="text-xs text-gray-500">
                                  Get expert guidance
                                </p>
                              </div>
                            </div>
                            <FiArrowRight className="text-[#000E24] text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Link>

                          {/* Book Meeting */}
                          <Link
                            to="/contact#contactus"
                            onClick={() => setPlatformOpen(false)}
                            className="bg-[#eef7f8] rounded-2xl p-5 flex justify-between items-center group hover:bg-[#d4ecee] hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-105 transition">
                                <FiPhone className="text-[#000E24] text-lg" aria-hidden="true" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#000E24] text-sm">
                                  Book a Meeting
                                </h4>
                                <p className="text-xs text-gray-500">
                                  Schedule a call
                                </p>
                              </div>
                            </div>
                            <FiArrowRight className="text-[#000E24] text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-xs uppercase hover:text-[#d97706] transition-all">
                Our Company
              </Link>

              <Link to="/team" className="text-xs uppercase hover:text-[#d97706] transition-all">
                Meet Our Team
              </Link>

              <Link to="/insights" className="text-xs uppercase hover:text-[#d97706] transition-all">
                Insights
              </Link>

              <Link to="/contact#contactus" className="text-xs uppercase hover:text-[#d97706] transition-all">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-6">
              <Link
                to="https://app.equiforce.ai"
                className="text-xs uppercase hidden sm:block font-bold text-white hover:text-[#d97706] transition-all"
              >
                Sign In
              </Link>

              <Link
                className="text-xs uppercase px-3 py-2 md:px-5 md:py-2.5 rounded-xl font-bold shadow-md hover:scale-105 transition-all bg-[#d97706] text-white hover:bg-[#b46002]"
                to="/contact"
              >
                Try for Free
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl p-1 z-[60] text-white focus-visible:ring-2 focus-visible:ring-[#d97706]"
              >
                {menuOpen ? <FiX className="text-[#000E24]" aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          aria-hidden={!menuOpen}
          className={`fixed inset-0 bg-white z-[55] transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 overflow-y-auto pb-10">
            <div
              className="flex flex-col gap-6 font-bold text-lg"
              style={{ color: NAVY }}
            >
              {/* Mobile Accordion for Platform */}
              <div>
                <button
                  type="button"
                  aria-expanded={mobilePlatformOpen}
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#d97706] transition-colors"
                >
                  Solutions{" "}
                  <FiChevronDown
                    aria-hidden="true"
                    className={`transition-transform ${mobilePlatformOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${mobilePlatformOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="flex flex-col gap-4 text-base font-medium text-gray-600 mt-4 ml-4 pb-2">
                    <Link to="/performance-measurement#performance" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Performance Measurement</Link>
                    <Link to="/performance-measurement#gips" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors"> GIPS® Composite Management</Link>
                    <Link to="/performance-measurement#ai-reporting" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">AI-Powered Investment Reporting</Link>
                    <Link to="/consultant" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Consulting Solutions</Link>
                  </div>
                </div>
              </div>

              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Our Company</Link>
              <Link to="/team" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Meet our Team</Link>
              <Link to="/insights" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Insights</Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">
                Contact
              </Link>

              <hr className="border-gray-100 my-2" />

              <Link
                to="https://app.equiforce.ai/"
                className="text-gray-500 hover:text-[#d97706] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/contact"
                className="w-full py-4 text-center block rounded-xl text-white shadow-lg active:scale-95 transition-transform bg-[#d97706] hover:bg-[#b46002]"
                onClick={() => setMenuOpen(false)}
              >
                Try for Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <DemoModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Navbar;