import { FiPlay, FiCalendar, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";
import podcastVideo from "../../assets/images/podcast1.mp4";
import podcasimg1 from "../../assets/images/TSG TIME with Pat and Doug.png";

const InsightsFeed = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const insightsData = [
    {
      id: 1,
      type: "podcast",
      description:
      "In Episode 41 of TSG Time, Pat and Doug welcome Jane Atmodjojo, co-founder of EquiForce and a recognized leader in investment operations, performance measurement, and reporting. Jane shares the story of how she built a nearly 30-year career in the investment management industry, the experiences that led her from executive leadership roles to entrepreneurship, and what gave her the confidence to launch her own firm. She discusses how her leadership philosophy has evolved while managing teams, executives, and now a growing business, and reflects on the major changes she has witnessed in performance measurement and reporting over the course of her career. Jane also previews her PMAR panel, Innovative Ways to Present Performance & Analytics, and highlights what she’s most looking forward to at this year’s conference. In the lightning round, she reveals her favorite travel destination, the app she can’t live without, career advice for her younger self, and her must-see PMAR experience.",
      author: "Jane Atmodjojo, CFA®, CIPM",
      authorRole: "CEO, EquiForce",
      date: "2026",
      readTime: "26:58 min listen",
      image: podcasimg1,
      video: podcastVideo,
      featured: true,
    },
  ];

  const featured = insightsData.find((item) => item.featured);

  return (
    <div className="px-4 sm:px-6 lg:px-0 mt-6">
      {featured && (
        <div className="bg-gradient-to-br from-[#000E24] to-[#0a1f3d] rounded-2xl overflow-hidden shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">

            {/* Image */}
            <button
              onClick={() => setVideoOpen(true)}
              className="relative group w-full h-[330px] sm:h-[320px] md:h-full overflow-hidden"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition duration-500"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping"></span>

                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">
                    <FiPlay className="text-white text-3xl ml-1" />
                  </div>
                </div>
              </div>
            </button>

            {/* Content */}
            <div className="p-5 sm:p-3 lg:p-5 text-white flex flex-col justify-between">

              <div>

                <p className="text-gray-300 text-base leading-7">
                  {featured.description}
                </p>
              </div>

              {/* Footer */}

              <div className="border-t border-white/10  pt-2 mt-2">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                  <div className="flex items-start gap-3">

                    <FiUser className="text-orange-500 mt-1" />

                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {featured.author}
                      </h4>

                      <p className="text-gray-400 text-xs sm:text-sm">
                        {featured.authorRole}
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-5 text-sm">

                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-orange-500" />
                      <span>{featured.date}</span>
                    </div>

                    <span className="font-semibold text-orange-500">
                      {featured.readTime}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* Video Modal */}

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative bg-[#010f28] rounded-xl overflow-hidden w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center z-10"
            >
              <FiX size={20} />
            </button>

            <div className="aspect-video">
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={featured.video}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsFeed;