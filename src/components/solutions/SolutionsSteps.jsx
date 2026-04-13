import dashboardImg from "../../assets/images/dashboard-banner1.png";

const steps = [
  {
    title: "Data Aggregation & Integration",
    desc: "Consolidate data from custodians, fund administrators, and internal systems into a unified investment platform.",
  },
  {
    title: "Processing & Validation",
    desc: "Automate data processing with built-in validation controls to ensure accuracy, consistency, and audit readiness.",
  },
  {
    title: "Reconciliation & Compliance",
    desc: "Identify discrepancies across systems and maintain compliance with GIPS-focused and industry standards.",
  },
  {
    title: "Reporting & Analytics",
    desc: "Generate performance reports, portfolio analytics, and AI-driven insights for informed investment decisions.",
  },
];

const SolutionsSteps = () => {
  return (
    <section className="">

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 text-center">

        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
            <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
              Workflow
            </span>
            
          </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          From Data to Insights — <br className="hidden sm:block" />
          End-to-End Investment Lifecycle
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce streamlines the complete investment lifecycle — from data ingestion and validation to reporting and analytics — ensuring accuracy, efficiency, and compliance.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Step Number */}
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#d97706] to-[#d97706] text-white font-bold text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-gray-800 font-semibold mb-2 text-sm md:text-base">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Dashboard */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <img
            src={dashboardImg}
            alt="investment workflow dashboard"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default SolutionsSteps;