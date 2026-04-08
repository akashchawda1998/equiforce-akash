import ContactHero from "../contact/ContactHero";
import ContactMap from "../contact/ContactMap";

import icon1 from "../../assets/images/ani-image1.webp";
import icon2 from "../../assets/images/ani-image2.webp";

const Contact = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 🔹 Minimal floating visuals */}
      <img
        src={icon1}
        className="absolute top-28 left-10 w-10 opacity-40 animate-float"
        data-aos="fade-down"
        data-aos-delay="100"
      />
      <img
        src={icon2}
        className="absolute bottom-28 right-10 w-12 opacity-40 animate-float delay-300"
        data-aos="fade-up"
        data-aos-delay="300"
      />

      {/* 🔹 Hero (form / heading area) */}
      <div data-aos="fade-up" data-aos-delay="100">
        <ContactHero />
      </div>

      {/* 🔹 Map / Location */}
      <div data-aos="fade-up" data-aos-delay="200">
        <ContactMap />
      </div>
    </div>
  );
};

export default Contact;
