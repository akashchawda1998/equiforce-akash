import { FiPlay, FiCalendar, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";
import podcastVideo from "../../assets/images/podcast1.mp4";

const InsightsFeed = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const insightsData = [
    {
      id: 1,
      type: "podcast",
      title:
        "TSG Time Episode 41 - Leadership Journey: From Operations to Entrepreneurship",
      description:
        "TSG Time, Pat and Doug welcome Jane Atmodjojo, co-founder of EquiForce and a recognized leader in investment operations, performance measurement, and reporting. Jane shares the story of how she built a nearly 30-year career in the investment management industry, the experiences that led her from executive leadership roles to entrepreneurship, and what gave her the confidence to launch her own firm. She discusses how her leadership philosophy has evolved while managing teams, executives, and now a growing business, and reflects on the major changes she has witnessed in performance measurement and reporting over the course of her career. Jane also previews her PMAR panel, Innovative Ways to Present Performance & Analytics, and highlights what she’s most looking forward to at this year’s conference. In the lightning round, she reveals her favorite travel destination, the app she can’t live without, career advice for her younger self, and her must-see PMAR experience.",
      author: "Jane Atmodjojo, CFA®, CIPM",
      authorRole: "CEO, EquiForce",
      date: "2026",
      readTime: "26:58 min listen",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      video: podcastVideo,
      topics: [
        "Investment Operations",
        "Performance Measurement",
        "Leadership",
        "Entrepreneurship",
      ],
      featured: true,
    },
  ];

  const featured = insightsData.find((item) => item.featured);

  const handlePlay = () => {
    setVideoOpen(true);
  };

  return (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-0">
      {/* Featured Insight */}
      {featured && (
        <div
          className="bg-gradient-to-br from-[#000E24] to-[#0a1f3d] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image - Clickable to play */}
            <button
              onClick={handlePlay}
              aria-label="Play podcast"
              className="relative w-full h-48 sm:h-64 md:h-full md:min-h-[320px] overflow-hidden group cursor-pointer"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Play Button - centered on image, with pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  {/* Pulsing ring */}
                  <span className="absolute inset-0 rounded-full bg-[#d97706] opacity-75 animate-ping"></span>

                  {/* Solid button on top */}
                  <span
                    className="relative w-full h-full rounded-full bg-[#d97706] group-hover:bg-[#b45f05]
                               flex items-center justify-center shadow-lg transition-all duration-200
                               group-active:scale-95"
                  >
                    <FiPlay className="text-white text-lg sm:text-2xl md:text-3xl ml-0.5" />
                  </span>
                </div>
              </div>
            </button>

            {/* Content */}
            <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-between text-white">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="bg-[#d97706] text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase">
                    Featured
                  </span>
                  <span className="bg-white/20 text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                    {featured.type.charAt(0).toUpperCase() + featured.type.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-gray-300 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-4 sm:line-clamp-6">
                  {featured.description}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {featured.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-white px-2.5 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium hover:bg-white/20 transition"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 pt-3 sm:pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <FiUser className="text-[#d97706] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">{featured.author}</p>
                      <p className="text-[11px] sm:text-xs">{featured.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-[#d97706] shrink-0" />
                    <span>{featured.date}</span>
                  </div>
                  <div className="text-[#d97706] font-semibold">{featured.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-black rounded-lg sm:rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80
                         flex items-center justify-center text-white transition-colors"
            >
              <FiX className="text-lg sm:text-xl" />
            </button>

            {/* Video Player */}
            <div className="aspect-video">
              <video controls autoPlay className="w-full h-full" src={featured.video}>
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="bg-[#000E24] p-4 sm:p-6">
              <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                {featured.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsFeed;