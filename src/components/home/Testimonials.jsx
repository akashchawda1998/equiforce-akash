const testimonials = [
  {
    name: "Head of Operations",
    role: "Global Asset Management Firm",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "EquiForce has significantly improved our performance measurement and reporting accuracy. The operational efficiency we’ve gained is remarkable.",
  },
  {
    name: "Senior Fund Accountant",
    role: "Investment Management Company",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Reconciliation used to be time-consuming and error-prone. With EquiForce, our processes are now automated and highly reliable.",
  },
  {
    name: "Director of Investments",
    role: "Institutional Investment Firm",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "The platform provides deep visibility into our investment data along with insights that support better strategic decisions.",
  },
  {
    name: "Compliance Manager",
    role: "Wealth Management Firm",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Maintaining compliance and audit readiness has become seamless. The system ensures transparency and control across operations.",
  },
  {
    name: "Portfolio Analytics Lead",
    role: "Hedge Fund",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "The reporting and analytics capabilities have enhanced how we deliver insights to stakeholders and clients.",
  },
  {
    name: "Technology Head",
    role: "Financial Services Organization",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "Integration with our systems was smooth, and the scalability of the platform aligns perfectly with our long-term growth plans.",
  },
];

const Testimonials = () => {
  return (
    <section className=" text-center">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Trusted by Investment Professionals
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          What Our <span class="text-[#d97706]"> Clients Say</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          Investment firms rely on EquiForce to deliver accuracy, compliance,
          and intelligent operational insights.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 md:p-6 text-left shadow-md hover:shadow-lg transition"
            >
              {/* Top Profile */}
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-gray-800 font-semibold text-sm md:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#f3f0ff] rounded-xl p-4 text-sm text-gray-700 leading-relaxed flex-grow">
                “{t.text}”
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
