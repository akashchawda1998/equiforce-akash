import React from "react";

const PartnerSection = () => {
  return (
    <section className="relative py-12 md:py-15  overflow-hidden" id="partner">

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-[#d97706]/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[420px] h-[420px] bg-indigo-600/30 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Trusted Technology <span className="text-[#d97706]">Partner</span>
          </h2>
        </div>

        {/* CARD */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT - LOGO */}
            <div className="flex flex-col items-center justify-center text-center">

              <div className="relative group">
                <div className="absolute inset-0 bg-[#d97706]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>

                <img
                  src="https://www.goldenrtech.com/logor.png"
                  alt="Golden R Technologies"
                  className="relative w-44 md:w-56 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CLICK TEXT */}
              <a
                href="https://www.goldenrtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-[#d97706] hover:underline"
              >
                Click to Golden R website →
              </a>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="text-left text-gray-300 leading-relaxed">

              <p className="mb-4 text-gray-500">
                Equiforce Solutions retains full responsibility for the design,
                development, and operation of its application stack.
              </p>

              <p className="text-gray-500">
                Golden R Technology provides ancillary support in cloud
                infrastructure setup and automation to enhance operational
                reliability.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;