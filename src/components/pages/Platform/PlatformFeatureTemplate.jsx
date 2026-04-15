import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// ✅ Images
import r1 from "./../../../assets/images/recon1.png";
import r2 from "./../../../assets/images/recon2.png";

import g1 from "./../../../assets/images/gips1.png";
import g2 from "./../../../assets/images/gips2.png";
import g3 from "./../../../assets/images/gips3.png";

import p1 from "./../../../assets/images/performance1.png";
import p2 from "./../../../assets/images/performance2.png";
import p3 from "./../../../assets/images/performance3.png";

import ai1 from "./../../../assets/images/ai1.png";
import ai2 from "./../../../assets/images/ai2.png";
import ai3 from "./../../../assets/images/ai3.png";

// ─── DATA ─────────────────────────────────────
const allData = [
  {
    id: "operations",
    img: [r1, r2],
    title: "Investment Operations & Reconciliation",
    description:
      "Investment data reconciliation across internal systems and custodian sources.",
  },
  {
    id: "performance",
    img: [p1, p2, p3],
    title: "Performance Measurement",
    description:
      "IBOR, ABOR, and PBOR returns and attribution at security, portfolio, and composite levels.",
  },
  {
    id: "gips",
    img: [g1, g2, g3],
    title: "GIPS® Composite Management",
    description:
      "End-to-end composite management — built to deliver reliable, compliant performance reporting.",
  },
  {
    id: "ai-reporting",
    img: [ai1, ai2, ai3],
    title: "AI-Powered Investment Reporting",
    description:
      "Intelligent investment reporting that surfaces accurate insights into every reporting layer.",
  },
];

// ─── FEATURE SECTION ──────────────────────────
const FeatureSection = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <>
      <div id={item.id} className="pt-20 pb-5 md:pt-20 md:pb-10">      <div
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"
          }`}
      >
        {/* TEXT */}
        <div
          className="w-full md:w-1/2 flex flex-col gap-4"
          data-aos={isEven ? "fade-right" : "fade-left"}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d97706]/10 flex items-center justify-center text-[#d97706] font-bold">
              {index + 1}
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-[#000E24]">
            {item.title}
          </h2>

          <p className="text-gray-500 text-base md:text-lg">
            {item.description}
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="w-full md:w-1/2"
          data-aos={isEven ? "fade-left" : "fade-right"}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false} // ❗ disable arrows on mobile
            grabCursor={true}
            className="w-full"
          >
            {item.img.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full ">
                  <img
                    src={img}
                    alt={`slide-${i}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </div>
    </>
  );
};

// ─── MAIN PAGE ────────────────────────────────
const PlatformAllFeaturesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

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
    <div className="min-h-screen bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {allData.map((item, index) => (
          <FeatureSection key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PlatformAllFeaturesPage;