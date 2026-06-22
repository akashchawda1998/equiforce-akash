import { FiCalendar, FiDownload, FiExternalLink } from "react-icons/fi";

const PressReleases = () => {
  const pressReleases = [
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "bg-blue-50 border-blue-200 text-blue-800",
      Partnership: "bg-green-50 border-green-200 text-green-800",
      Awards: "bg-purple-50 border-purple-200 text-purple-800",
      Funding: "bg-amber-50 border-amber-200 text-amber-800",
      Product: "bg-indigo-50 border-indigo-200 text-indigo-800",
      People: "bg-pink-50 border-pink-200 text-pink-800",
    };
    return colors[category] || "bg-gray-50 border-gray-200 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {pressReleases.map((release, index) => (
          <div
            key={release.id}
            className="bg-white border-l-4 border-[#d97706] rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Image */}
              <div className="relative h-48 md:h-auto md:col-span-1 overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:col-span-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryColor(
                        release.category
                      )}`}
                    >
                      {release.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FiCalendar className="text-[#d97706]" />
                      <span>{release.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#000E24] mb-2 group-hover:text-[#d97706] transition">
                    {release.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {release.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t flex items-center gap-4 flex-wrap">
                  <button className="inline-flex items-center gap-2 text-[#d97706] font-semibold hover:gap-3 transition-all hover:text-[#b46002]">
                    <FiExternalLink className="text-lg" />
                    Read Full Release
                  </button>
                  <button className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-[#d97706] transition-all">
                    <FiDownload className="text-lg" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default PressReleases;
