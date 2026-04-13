import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import TeamPage from "./components/pages/TeamPage";
import SignIn from "./components/pages/SignIn";
import Platform from "./components/pages/Platform/Platform";
import Careers from "./components/pages/Careers";
import PlatformFeatureTemplate from "./components/pages/Platform/PlatformFeatureTemplate";
import {
  performanceData,
  gipsData,
  operationsData,
  aiReportingData,
} from "./components/pages/Platform/platformData";
import PrivacyNotice from "./components/pages/Notice";
import Consultant from "./components/about/Consultant";
import TermsOfService from "./components/pages/TermsOfService";
import GipsDisclaimer from "./components/pages/GipsDisclaimer";

// Helper component to handle conditional Footer rendering
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/signin"];

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {children}
      {/* Only show Footer if the current path is NOT in the hideFooterPaths array */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#eefbff] overflow-hidden">
      {/* 🌈 Soft Gradient Blobs (BEHIND CONTENT) */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-[#00C2CB] opacity-20 blur-[120px] rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a78bfa] opacity-20 blur-[120px] rounded-full"></div>

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        <BrowserRouter>
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/services" element={<Services />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyNotice />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/gips-focused" element={<GipsDisclaimer />} />
              <Route path="/consultant" element={<Consultant />} />

              <Route
                path="/performance-measurement"
                element={<PlatformFeatureTemplate data={performanceData} />}
              />
              <Route
                path="/gips-composite"
                element={<PlatformFeatureTemplate data={gipsData} />}
              />
              <Route
                path="/investment-operations"
                element={<PlatformFeatureTemplate data={operationsData} />}
              />
              <Route
                path="/ai-reporting"
                element={<PlatformFeatureTemplate data={aiReportingData} />}
              />
            </Routes>
          </LayoutWrapper>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
