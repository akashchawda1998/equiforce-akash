import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import logo from "../../assets/images/logoorg.png";
import DemoModal from "../common/DemoModal";

const NAVY = "#000E24";

/* ---------------- CUSTOM ICONS ---------------- */
const PerformanceMeasurementIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="34" x2="35" y2="34" stroke="#08636b" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="8" y="24" width="5" height="10" rx="1" fill="#14b8a6" opacity="0.35" />
    <line x1="10.5" y1="24" x2="10.5" y2="19" stroke="#08636b" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="16" y="17" width="5" height="12" rx="1" fill="#14b8a6" opacity="0.55" />
    <line x1="18.5" y1="17" x2="18.5" y2="12" stroke="#08636b" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="24" y="21" width="5" height="8" rx="1" fill="#14b8a6" opacity="0.4" />
    <line x1="26.5" y1="21" x2="26.5" y2="17" stroke="#08636b" strokeWidth="1.6" strokeLinecap="round" />
    <polyline points="8,28 16,19 24,22 32,11" stroke="#FF8000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="29,9 32,11 30,14" stroke="#FF8000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const GipsCompositeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4 A16 16 0 0 1 35.1 23" stroke="#08636b" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M35.1 23 A16 16 0 0 1 7.2 29" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M7.2 29 A16 16 0 0 1 20 4" stroke="#FF8000" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="20" cy="20" r="7" stroke="#08636b" strokeWidth="1.6" fill="none" opacity="0.45" />
    <circle cx="20" cy="20" r="3" fill="#08636b" />
    <line x1="20" y1="4" x2="20" y2="13" stroke="#08636b" strokeWidth="1.3" strokeDasharray="2 2" opacity="0.6" />
    <line x1="35.1" y1="23" x2="27.4" y2="21" stroke="#14b8a6" strokeWidth="1.3" strokeDasharray="2 2" opacity="0.6" />
    <line x1="7.2" y1="29" x2="14" y2="23.5" stroke="#FF8000" strokeWidth="1.3" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

const ConsultingServicesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 13.5V10.5C15 9.4 15.9 8.5 17 8.5H23C24.1 8.5 25 9.4 25 10.5V13.5"
      stroke="#08636b"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="7"
      y="13.5"
      width="26"
      height="18"
      rx="3.5"
      stroke="#08636b"
      strokeWidth="2.2"
      fill="none"
    />
    <line
      x1="8"
      y1="20.5"
      x2="32"
      y2="20.5"
      stroke="#14b8a6"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <polyline
      points="11.5,25.5 16,20.5 20,23 25.5,17"
      stroke="#FF7A00"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="22.5,17 25.5,17 25.5,20"
      stroke="#FF7A00"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const AiPoweredReportingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="16" height="16" rx="3" stroke="#08636b" strokeWidth="2" fill="rgba(8,99,107,0.07)" />
    <line x1="17.5" y1="12" x2="17.5" y2="28" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="22.5" y1="12" x2="22.5" y2="28" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="12" y1="17.5" x2="28" y2="17.5" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="12" y1="22.5" x2="28" y2="22.5" stroke="#14b8a6" strokeWidth="0.9" opacity="0.4" />
    <line x1="16" y1="12" x2="16" y2="6" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="12" x2="20" y2="6" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="12" x2="24" y2="6" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="28" x2="16" y2="34" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="28" x2="20" y2="34" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="28" x2="24" y2="34" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="16" x2="6" y2="16" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="20" x2="6" y2="20" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="24" x2="6" y2="24" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="16" x2="34" y2="16" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="20" x2="34" y2="20" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="24" x2="34" y2="24" stroke="#08636b" strokeWidth="2" strokeLinecap="round" />
    <path d="M21.5 15 L18.5 20.5 H21 L18 25" stroke="#FF8000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const servicesList = [
  {
    title: "Performance and Attribution",
    link: "/performance-measurement#performance",
    icon: PerformanceMeasurementIcon,
  },
  {
    title: "GIPS® Composite Management",
    link: "/performance-measurement#gips",
    icon: GipsCompositeIcon,
  },
  {
    title: "Consulting Services",
    link: "/performance-measurement#consulting",
    icon: ConsultingServicesIcon,
  },
  {
    title: "AI-Powered Investment Reporting",
    link: "/performance-measurement#ai-reporting",
    icon: AiPoweredReportingIcon,
  },
];

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop menu states
  const [platformOpen, setPlatformOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile menu states
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Refs for focus management
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close menu and return focus to hamburger button
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Return focus to the hamburger toggle after a tick
    setTimeout(() => menuButtonRef.current?.focus(), 50);
  }, []);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (menuOpen) {
          closeMenu();
        } else {
          setPlatformOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Focus trap for mobile menu overlay
  useEffect(() => {
    if (!menuOpen || !mobileMenuRef.current) return;

    // Move focus into the overlay when it opens
    const FOCUSABLE = [
      'a[href]', 'button:not([disabled])', 'input', 'select', 'textarea',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    const focusableEls = Array.from(
      mobileMenuRef.current.querySelectorAll(FOCUSABLE)
    ).filter((el) => !el.closest('[aria-hidden="true"]'));

    if (focusableEls.length) focusableEls[0].focus();

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, [menuOpen]);

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
                  className="text-xs uppercase flex items-center gap-1 hover:text-[#d97706] transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
                >
                  Services
                  <FiChevronDown
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${platformOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {platformOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 cursor-default z-50">
                    <div className="w-[380px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,14,36,0.14)] border border-gray-100 overflow-hidden text-left">
                      {/* Services List */}
                      <div className="p-2.5 space-y-1">
                        {servicesList.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={idx}
                              to={item.link}
                              onClick={() => setPlatformOpen(false)}
                              className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f2faf9] border border-transparent hover:border-[#c5ece9]/70 transition-all duration-200"
                            >
                              <div className="flex items-center gap-3.5 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#dff4f3] group-hover:bg-[#d0efed] group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs border border-teal-200/40">
                                  <div className="w-8 h-8 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                    <Icon />
                                  </div>
                                </div>
                                <span className="font-bold text-[#000E24] text-sm group-hover:text-[#d97706] transition-colors leading-snug">
                                  {item.title}
                                </span>
                              </div>
                              <FiArrowRight
                                className="text-xs text-[#d97706] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-2"
                                aria-hidden="true"
                              />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom Quick-Action Banner */}
                      <div className="bg-[#f8fcfa] border-t border-gray-100 p-2.5">
                        <Link
                          to="/contact#contactus"
                          onClick={() => setPlatformOpen(false)}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white border border-gray-200/80 hover:border-[#08636b]/40 hover:bg-[#eef7f8] group transition-all duration-200 shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-[#08636b]/10 text-[#08636b] flex items-center justify-center group-hover:scale-105 transition-transform">
                              <FiPhone className="text-xs" aria-hidden="true" />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#000E24] text-xs group-hover:text-[#08636b] transition-colors leading-tight">
                                Book a Meeting
                              </h4>
                              <p className="text-[10px] text-gray-500 leading-tight">
                                Schedule a 1-on-1 discovery call
                              </p>
                            </div>
                          </div>
                          <FiArrowRight className="text-xs text-[#08636b] group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </Link>
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
                className="text-xs uppercase px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold shadow-md hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#d97706] to-[#3b82f6] text-white"
                to="/contact"
              >
                Request a Demo
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                ref={menuButtonRef}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu-overlay"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
                className="md:hidden text-2xl p-1 z-[60] text-white focus-visible:ring-2 focus-visible:ring-[#d97706]"
              >
                {menuOpen ? <FiX className="text-[#000E24]" aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay — focus-trapped when open */}
        <div
          id="mobile-menu-overlay"
          ref={mobileMenuRef}
          role="dialog"
          aria-label="Navigation menu"
          aria-hidden={!menuOpen}
          className={`fixed inset-0 bg-white z-[55] transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 overflow-y-auto pb-10">
            <div
              className="flex flex-col gap-6 font-bold text-lg"
              style={{ color: NAVY }}
            >
              {/* Mobile Accordion for Services */}
              <div>
                <button
                  type="button"
                  aria-expanded={mobilePlatformOpen}
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#d97706] transition-colors"
                >
                  Services{" "}
                  <FiChevronDown
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      mobilePlatformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobilePlatformOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 mt-3 ml-1 pb-2">
                    {servicesList.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.link}
                          onClick={closeMenu}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f2faf9] transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#dff4f3] flex items-center justify-center shrink-0 shadow-xs">
                            <Icon />
                          </div>
                          <span className="text-sm font-bold text-[#000E24] hover:text-[#d97706] leading-tight">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}

                    <div className="pt-2 border-t border-gray-100 mt-1 flex flex-col gap-2">
                      <Link
                        to="/contact#contactus"
                        onClick={closeMenu}
                        className="text-xs font-semibold text-[#08636b] hover:text-[#d97706] flex items-center gap-1.5 px-2.5 py-1"
                      >
                        <FiPhone className="text-sm" aria-hidden="true" /> Book a Meeting
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about" onClick={closeMenu} className="hover:text-[#d97706] transition-colors">Our Company</Link>
              <Link to="/team" onClick={closeMenu} className="hover:text-[#d97706] transition-colors">Meet our Team</Link>
              <Link to="/insights" onClick={closeMenu} className="hover:text-[#d97706] transition-colors">Insights</Link>

              <Link to="/contact" onClick={closeMenu} className="hover:text-[#d97706] transition-colors">
                Contact
              </Link>

              <hr className="border-gray-100 my-2" />

              <Link
                to="https://app.equiforce.ai/"
                className="text-gray-500 hover:text-[#d97706] transition-colors"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                to="/contact"
                className="w-full py-3.5 text-center block rounded-full text-white shadow-lg active:scale-95 transition-all duration-300 font-bold bg-gradient-to-r from-[#d97706] to-[#3b82f6]"
                onClick={closeMenu}
              >
                Request a Demo
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