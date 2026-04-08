import AboutHero from "../about/AboutHero";
import AboutIntro from "../about/AboutIntro";
import Team from "../about/Team";
import AboutFeatures from "../about/AboutFeatures";
import AboutTestimonials from "../about/AboutTestimonials";

import icon1 from "../../assets/images/ani-image1.webp";
import icon2 from "../../assets/images/ani-image2.webp";
import icon3 from "../../assets/images/ani-image3.webp";
import icon4 from "../../assets/images/ani-image4.webp";

const About = () => {
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

      {/* Final section softer */}
     

    </div>
  );
};

export default About;