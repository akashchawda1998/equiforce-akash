import Benefits from "../home/Benefits";
import DashboardPreview from "../home/DashboardPreview";
import FAQ from "../home/FAQ";
import Features from "../home/Features";
import Hero from "../home/Hero";
import HowItWorks from "../home/HowItWorks";
import Integrations from "../home/Integrations";
import Newsletter from "../home/Newsletter";
import Pricing from "../home/Pricing";
import SinglePlatform from "../home/SinglePlatform";
import Testimonials from "../home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />

      {/* 👇 Important: wrap sections for smooth reveal */}
      <div data-aos="fade-up" data-aos-delay="100">
        <DashboardPreview />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Features />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <HowItWorks />
      </div>

      {/* <div data-aos="fade-up" data-aos-delay="250">
        <Benefits />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Pricing />
      </div>

      
      <div data-aos="fade-up" data-aos-delay="350">
        <Testimonials />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <FAQ />
      </div> */}

      {/* <div data-aos="fade-up" data-aos-delay="450">
        <Integrations />
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <Newsletter />
      </div> */}
     
    </>
  );
};

export default Home;
