import { useState } from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "Custom Pricing",
      desc: "Ideal for small to mid-sized investment teams starting their digital transformation",
      features: [
        "Performance Measurement Tools",
        "Basic Fund Accounting",
        "Standard Reporting Capabilities",
        "Core Reconciliation Support",
        "Email Support",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "Custom Pricing",
      desc: "Designed for growing firms requiring advanced operational capabilities",
      features: [
        "Advanced Performance & Composite Management",
        "Full Fund Accounting Suite",
        "Automated Reconciliation Workflows",
        "Custom Investment Reporting",
        "Priority Support & Integrations",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Tailored Solution",
      desc: "Built for large institutions with complex investment operations",
      features: [
        "End-to-End Investment Lifecycle Management",
        "AI-Driven Insights & Automation",
        "Custom Workflows & Compliance Controls",
        "Dedicated Account Management",
        "Enterprise Security & API Integrations",
      ],
      highlight: false,
    },
  ];

  return (
    <section className=" text-center">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Heading */}

        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Engagement Models
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Flexible Solutions Tailored to <span class="text-[#d97706]">Your Needs</span>
        </h2>

        <p className="text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
          We offer customized engagement models based on your operational
          complexity, scale, and business requirements.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-2xl p-6 md:p-8 border transition-all duration-300

              ${
                plan.highlight
                  ? "bg-gradient-to-r from-[#d97706] to-[#d97706] text-white lg:scale-105 shadow-xl"
                  : "bg-white/80 backdrop-blur-md text-gray-800 border-gray-200 shadow-md"
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Top */}
              <div className="text-left mb-6">
                <p className="text-2xl md:text-3xl font-bold">{plan.price}</p>

                <h3 className="mt-2 font-semibold text-base md:text-lg">
                  {plan.name}
                </h3>

                <p
                  className={`text-sm mt-2 ${
                    plan.highlight ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Features */}
              <div className="text-left mb-6 flex-grow">
                <p className="font-semibold mb-3">Included Capabilities:</p>

                <ul className="space-y-2 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      ✔ <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-medium transition

                ${
                  plan.highlight
                    ? "bg-white text-gray-800"
                    : "bg-gradient-to-r from-[#d97706] to-[#d97706] text-white"
                }`}
              >
                Request Proposal
              </button>

              {/* Footer */}
              <p
                className={`text-xs mt-4 ${
                  plan.highlight ? "text-white/70" : "text-gray-500"
                }`}
              >
                ✔ Tailored to your business requirements
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
