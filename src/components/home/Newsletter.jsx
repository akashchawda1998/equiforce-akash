import dashboard from "../../assets/images/dashboard.jpeg";
import stat1 from "../../assets/images/benefit-image-left.png";
import stat2 from "../../assets/images/benefit-image-right2.png";

const Newsletter = () => {
  return (
    <section className="">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Background Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#ede9fe] via-[#e0f2fe] to-[#f5f3ff] px-4 sm:px-6 md:px-12  text-center">
          {/* Floating Shapes */}
          <div className="hidden sm:block absolute top-10 left-10 animate-[float_6s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 rounded-lg rotate-12 shadow-md"></div>
          </div>

          <div className="hidden sm:block absolute top-10 right-10 animate-[float_5s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-md"></div>
          </div>

          <div className="hidden sm:block absolute bottom-20 left-10 animate-[float_7s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full shadow-md"></div>
          </div>

          <div className="hidden sm:block absolute bottom-20 right-10 animate-[float_6s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-400 rounded-lg rotate-12 shadow-md"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
              <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
                Get Started with EquiForce
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Transform Your  <span class="text-[#d97706]"> Investment </span>Operations <span class="text-[#d97706]"> Today</span>
            </h2>

            <p className="text-gray-600 mb-8 md:mb-10">
              Discover how EquiForce can streamline performance measurement,
              fund accounting, reconciliation, and reporting — all powered by
              intelligent automation.
            </p>

            {/* CTA Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
              <p className="text-sm text-gray-600 mb-4">
                Schedule a personalized demo with our experts
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="px-5 py-3 rounded-xl w-full sm:w-80 outline-none border border-gray-200"
                />

                <button className="w-full sm:w-auto bg-gradient-to-r from-[#d97706] to-[#d97706] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
                  Try for Free
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm text-gray-500">
                <span>✔ No Obligation Consultation</span>
                <span>✔ Tailored Solutions</span>
                <span>✔ Expert Guidance</span>
              </div>
            </div>
          </div>

          {/* Dashboard + Floating Cards */}
          <div className="relative mt-12 md:mt-16 flex justify-center">
            <img
              src={dashboard}
              className="w-full max-w-[500px] md:max-w-[700px] rounded-2xl shadow-xl"
            />

            <img
              src={stat1}
              className="hidden md:block absolute -left-10 bottom-10 w-40 lg:w-52 rounded-xl shadow-lg animate-[float_6s_ease-in-out_infinite]"
            />

            <img
              src={stat2}
              className="hidden md:block absolute -right-10 bottom-6 w-40 lg:w-52 rounded-xl shadow-lg animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
