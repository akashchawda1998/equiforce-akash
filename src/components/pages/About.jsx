import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutHero from "../about/AboutHero";
import AboutIntro from "../about/AboutIntro";
import Team from "../about/Team";
import AboutFeatures from "../about/AboutFeatures";
import AboutTestimonials from "../about/AboutTestimonials";

import icon1 from "../../assets/images/ani-image1.webp";
import icon2 from "../../assets/images/ani-image2.webp";
import icon3 from "../../assets/images/ani-image3.webp";
import icon4 from "../../assets/images/ani-image4.webp";
import PartnerSection from "../home/PartnerSection";

const About = () => {
  // About component ke andar sabse upar add karo
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      setTimeout(() => {
        const el = document.getElementById(id);

        if (el) {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [hash]);
  return (
    <div className="relative overflow-hidden">
      {/* 🔹 Subtle Floating Icons (lighter than Home) */}

      {/* 🔹 Sections */}

      <div data-aos="fade-up" data-aos-delay="100">
        <AboutHero />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <AboutIntro />
      </div>

      {/* Team feels better with slightly stronger entry */}

      <div data-aos="fade-up" data-aos-delay="250">
        <AboutFeatures />
      </div>

      <PartnerSection />

      {/* Final section softer */}
    </div>
  );
};

export default About;
