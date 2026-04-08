import React from "react";

const differentiators = [
  {
    title: "Consultants, Not Just Vendors",
    desc: "We are investment operations practitioners with nearly 30 years of hands-on experience — advising, implementing, and optimizing alongside our clients.",
  },
  {
    title: "Purpose-Built Technology",
    desc: "Every feature is engineered for back- and middle-office investment management workflows — covering reconciliation, performance, composites, and reporting.",
  },
  {
    title: "AI at the Core",
    desc: "AI technologies natively embedded — automating reporting workflows and surfacing deep insights into every layer of investment reporting.",
  },
];

const Differentiators = () => {
  return (
    <section className="py-12 md:py- 8:py-10 relative overflow-hidden bg-[#fff]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Label - Updated to Differentiators */}
        {/* <div className="flex justify-center md:justify-start mb-4">
          <span className="text-[#d97706] text-sm font-black tracking-[0.2em] uppercase">
            Our Differentiators
          </span>
        </div> */}

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-black text-[#000E24] mb-6 text-center md:text-center">
         Our   <span className="text-[#d97706]">Differentiators</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-7xl mb-12 text-center md:text-center text-lg">
          We combine deep industry expertise with next-generation technology to 
          transform your investment operations.
        </p>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative border border-gray-200 bg-[#f4f6f8] rounded-2xl p-8 shadow-sm transition-all duration-300 group overflow-hidden"
            >
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#08636b] group-hover:bg-[#d97706] transition-colors" />

              {/* Number Index */}
              <div className="text-2xl font-black text-[#00C2CB] mb-6">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-[#000E24] text-xl font-bold mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {item.item ? item.item : item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;