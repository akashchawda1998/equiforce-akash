import { useState } from "react";
import { ArrowUp, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How does EquiForce integrate with our existing systems?",
    a: "EquiForce is designed to seamlessly integrate with custodians, fund administrators, and internal systems through secure APIs and flexible data ingestion methods.",
  },
  {
    q: "Is the platform compliant with industry standards?",
    a: "Yes, our solutions are built to align with global investment and performance standards, ensuring compliance, audit readiness, and regulatory transparency.",
  },
  {
    q: "Can the platform handle large volumes of investment data?",
    a: "Absolutely. EquiForce is built for scalability and can efficiently process large datasets across complex investment portfolios without compromising performance.",
  },
  {
    q: "How secure is our financial and investment data?",
    a: "We implement enterprise-grade security protocols, including data encryption, access controls, and compliance frameworks to ensure your data remains secure and protected.",
  },
  {
    q: "Do you offer customization based on our operational needs?",
    a: "Yes, we provide tailored solutions including custom workflows, reporting formats, and integrations based on your firm’s specific requirements.",
  },
  {
    q: "What kind of support and onboarding do you provide?",
    a: "Our team offers dedicated onboarding, training, and ongoing support to ensure a smooth transition and long-term success with the platform.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className=" text-center">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Top */}

        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Frequently Asked Questions
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Everything You Need   <span class="text-[#d97706]"> to Know</span><br className="hidden sm:block" />
          Before Getting <span class="text-[#d97706]"> Started</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          We address the most common questions from investment firms regarding
          integration, security, scalability, and implementation.
        </p>

        {/* Accordion Wrapper */}
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 shadow-md">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 md:p-5 text-left transition"
            >
              {/* Header */}
              <div
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center gap-4 cursor-pointer"
              >
                {/* Question */}
                <h4 className="text-gray-800 font-medium text-sm md:text-base leading-snug">
                  {i + 1}. {item.q}
                </h4>

                {/* Icon */}
                <div
                  className={`shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition

                  ${
                    open === i
                      ? "bg-gradient-to-r from-[#d97706] to-[#d97706] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {open === i ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
