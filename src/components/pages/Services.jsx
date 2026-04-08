import SolutionsHero from "../solutions/SolutionsHero";
import SolutionsFeatures from "../solutions/SolutionsFeatures";
import SolutionsSteps from "../solutions/SolutionsSteps";
import SolutionsFAQ from "../solutions/SolutionsFAQ";
import SolutionsTestimonials from "../solutions/SolutionsTestimonials";

import icon1 from "../../assets/images/ani-image1.webp";
import icon2 from "../../assets/images/ani-image2.webp";

const Services = () => {
  return (
    <div className="relative overflow-hidden">

      {/* 🔹 Minimal Floating Elements (keep it subtle here) */}
      <img 
        src={icon1} 
        className="absolute top-32 left-10 w-10 opacity-50 animate-float"
        data-aos="fade-down"
        data-aos-delay="100"
      />
      <img 
        src={icon2} 
        className="absolute bottom-32 right-10 w-12 opacity-50 animate-float delay-300"
        data-aos="fade-up"
        data-aos-delay="300"
      />

      {/* 🔹 Optional Hero (recommended for this page) */}
      <div data-aos="fade-up" data-aos-delay="100">
        <SolutionsHero />
      </div>

      {/* 🔹 Core Value Section */}
      <div data-aos="fade-up" data-aos-delay="150">
        <SolutionsFeatures />
      </div>

      {/* 🔹 Process Flow */}
      <div data-aos="fade-up" data-aos-delay="200">
        <SolutionsSteps />
      </div>

      {/* 🔹 Objection Handling */}
      <div data-aos="fade-up" data-aos-delay="250">
        <SolutionsFAQ />
      </div>

      {/* 🔹 Social Proof (final trust) */}
      <div data-aos="fade-up" data-aos-delay="300">
        <SolutionsTestimonials />
      </div>

    </div>
  );
};

export default Services;