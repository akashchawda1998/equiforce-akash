import React from "react";

const GipsDisclaimer = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      {/* HERO */}
      <section className="bg-[#0B2341] text-white py-14 sm:py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-10 md:mt-12 leading-tight">
            GIPS <span className="text-[#d97706]">Disclaimer</span>
          </h1>

      
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full px-3 sm:px-4 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base">

     

          {/* SECTION */}
    
          {/* SECTION */}
          <div>
           
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p>
                Equiforce Solutions provides software and consulting services to
                assist investment firms in implementing processes consistent
                with the Global Investment Performance Standards (GIPS®).
                Equiforce Solutions is not a GIPS verification firm and does not
                verify, certify, or opine on a firm's GIPS compliance status.
                Only independent verifiers may perform GIPS verification.
                GIPS® is a registered trademark of CFA Institute.
              </p>
            </div>
          </div>

         

       

        </div>
      </section>
    </div>
  );
};

export default GipsDisclaimer;