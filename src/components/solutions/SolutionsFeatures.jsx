import f1 from "../../assets/images/features1.jpg";
import f2 from "../../assets/images/features2.jpg";
import f3 from "../../assets/images/features3.jpg";
import f4 from "../../assets/images/features4.jpg";
import f5 from "../../assets/images/features5.jpg";
import f6 from "../../assets/images/features6.jpg";

import {
  BarChart3,
  Layers,
  Calculator,
  RefreshCcw,
  FileText,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    img: f1,
    title: "Performance Measurement",
    desc: "Deliver precise and compliant performance calculations aligned with global investment standards for accurate reporting.",
    icon: BarChart3,
  },
  {
    img: f2,
    title: "Composite Management",
    desc: "Automate composite creation and maintenance while ensuring adherence to industry standards and regulatory requirements.",
    icon: Layers,
  },
  {
    img: f3,
    title: "Fund Accounting",
    desc: "Streamline accounting workflows with scalable solutions designed for accuracy, transparency, and audit readiness.",
    icon: Calculator,
  },
  {
    img: f4,
    title: "Reconciliation",
    desc: "Automate reconciliation across multiple data sources to minimize discrepancies and improve operational efficiency.",
    icon: RefreshCcw,
  },
  {
    img: f5,
    title: "Investment Reporting",
    desc: "Generate customizable, data-driven reports that provide clear insights to stakeholders and support informed decisions.",
    icon: FileText,
  },
  {
    img: f6,
    title: "AI-Driven Intelligence",
    desc: "Leverage AI to identify anomalies, enhance accuracy, and optimize investment operations with predictive insights.",
    icon: BrainCircuit,
  },
];

const SolutionsFeatures = () => {
  return (
    <section className="pt-18 md:pt-20 lg:pt-25 pb-12 md:pb-16 lg:pb-20">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Solutions
          </span>
          Core Capabilities
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Comprehensive Solutions for <br className="hidden sm:block" />
          Investment Management Operations
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce provides end-to-end solutions across performance measurement, fund accounting, reconciliation, and reporting — enabling firms to operate with precision and confidence.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* Image */}
                <div className="bg-[#f8fafc] p-3 md:p-4">
                  <img
                    src={item.img}
                    alt="solution feature"
                    className="w-full h-[140px] md:h-[160px] object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 text-left">

                  {/* Icon */}
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-r from-[#d97706] to-[#d97706] flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default SolutionsFeatures;