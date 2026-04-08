import { useState } from "react";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";
import faqImg from "../../assets/images/faqs.webp";

const faqs = [
  {
    q: "How does EquiForce support end-to-end investment operations?",
    a: "EquiForce provides a unified platform covering performance measurement, composite management, fund accounting, reconciliation, and reporting — ensuring seamless data flow across the entire investment lifecycle.",
  },
  {
    q: "Can the solution be customized for our specific workflows?",
    a: "Yes, our platform is highly configurable. We tailor workflows, reporting structures, and integrations to align with your firm’s operational requirements and business processes.",
  },
  {
    q: "How does EquiForce ensure data accuracy and consistency?",
    a: "Our system uses automated validation, reconciliation processes, and AI-driven anomaly detection to maintain high levels of data accuracy and consistency across systems.",
  },
  {
    q: "What integrations are supported within the platform?",
    a: "EquiForce integrates with custodians, fund administrators, market data providers, and internal systems through secure APIs and flexible data pipelines.",
  },
  {
    q: "Is the platform scalable for large and complex portfolios?",
    a: "Absolutely. Our solutions are built to handle large volumes of data and complex multi-asset portfolios while maintaining performance and reliability.",
  },
  {
    q: "What level of support and implementation assistance is provided?",
    a: "We offer end-to-end onboarding, including system setup, data migration, training, and ongoing support through dedicated account management.",
  },
];

const SolutionsFAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Inner Box */}
        <div className="text-center bg-white/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
            <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
              FAQ
            </span>
            Solutions & Capabilities
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Everything You Need to Know <br className="hidden sm:block" />
            About Our Solutions
          </h2>

          <p className="text-gray-500 mb-10 md:mb-12 max-w-2xl mx-auto">
            Explore how EquiForce delivers scalable, secure, and intelligent
            solutions for modern investment management firms.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* LEFT FAQ */}
            <div className="space-y-4 text-left order-2 lg:order-1">
              {faqs.map((item, i) => {
                const isOpen = open === i;

                return (
                  <div
                    key={i}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`border rounded-xl p-4 md:p-5 cursor-pointer transition
                    ${
                      isOpen
                        ? "bg-white shadow-md border-gray-200"
                        : "bg-white/70 border-gray-200 hover:bg-white"
                    }`}
                  >
                    {/* Question */}
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-gray-800 font-medium text-sm md:text-base leading-snug">
                        {i + 1}. {item.q}
                      </h4>

                      <div
                        className={`shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg transition
                        ${
                          isOpen
                            ? "bg-gradient-to-r from-[#d97706] to-[#d97706] text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {isOpen ? (
                          <FiArrowUp size={16} />
                        ) : (
                          <FiArrowRight size={16} />
                        )}
                      </div>
                    </div>

                    {/* Answer */}
                    {isOpen && (
                      <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-3 md:p-4 shadow-md">
                <img
                  src={faqImg}
                  alt="equiforce faq"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsFAQ;
