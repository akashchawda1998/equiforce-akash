const SolutionsHero = () => {
  return (
    <section className="relative flex items-center min-h-[80vh] pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 text-center">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
        {/* 🔹 Tag */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Solutions
          </span>
          Investment Operations Platform
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Comprehensive Solutions for <br className="hidden sm:block" />
          Investment Operations & Performance
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
          EquiForce provides an integrated platform to manage investment data,
          track portfolio performance, ensure GIPS-focused compliance, and generate
          accurate, audit-ready reports — all in one unified system.
        </p>

        {/* 🔥 NEW: Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
          <span className="bg-white px-4 py-2 rounded-full">
            ✔ Performance Measurement
          </span>
          <span className="bg-white px-4 py-2 rounded-full">
            ✔ Fund Accounting
          </span>
          <span className="bg-white px-4 py-2 rounded-full">
            ✔ Reconciliation
          </span>
          <span className="bg-white px-4 py-2 rounded-full">
            ✔ AI-driven Insights
          </span>
        </div>

        {/* 🔥 CTA */}
        {/* 🔥 Trust + Stats */}
        <div className="mt-10 flex flex-col items-center gap-6">
          {/* Stats */}

          {/* Trust Line */}
          <p className="text-sm text-gray-500 max-w-xl">
            Trusted by investment firms to deliver accurate performance
            reporting, seamless reconciliation, and scalable investment
            operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
