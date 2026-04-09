import React from "react";

const PartnerSection = () => {
  return (
    <section className="relative py-12 md:py-15 bg-[#000E24] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-[#d97706]/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[420px] h-[420px] bg-indigo-600/30 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted Technology <span className="text-[#d97706]">Partner</span> 
          </h2>
        </div>

        {/* CARD */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT - LOGO */}
            <div className="flex justify-center ">
              <div className="relative group">
                
                {/* subtle glow on hover */}
                <div className="absolute inset-0 bg-[#d97706]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>

                <img
                  src="https://www.goldenrtech.com/logor.png"
                  alt="Golden R Technologies"
                  className="relative w-44 md:w-56 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="text-left">

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Golden R Technologies
              </h3>

              <p className="text-gray-300 leading-relaxed text-base md:text-md">
                Delivering{" "}
                <span className="text-[#d97706] font-semibold">reliable</span> and{" "}
                <span className="text-[#d97706] font-semibold">
                  resilient software solutions
                </span>
                , Golden R Technologies helps businesses achieve meaningful
                results through innovation and precision.
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed mb-8">
                With a strong commitment to responsiveness, resourcefulness, and
                problem-solving, they build long-term partnerships and drive
                exceptional{" "}
                <span className="text-[#d97706] font-semibold">ROI</span>.
              </p>

              {/* CTA */}
              <a
                href="https://www.goldenrtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-xl 
                text-sm bg-[#d97706] text-white 
                hover:bg-[#b45309] hover:shadow-lg hover:shadow-orange-500/20 
                transition-all duration-300 hover:-translate-y-1"
              >
                Visit Website →
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;