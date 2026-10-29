import { FiPlay, FiCalendar, FiUser, FiX, FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import podcastVideo from "../../assets/images/podcast1.mp4";
import podcasimg1 from "../../assets/images/tsg.png";

const InsightsFeed = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const insightsData = [
    {
      id: 1,
      type: "podcast",
      subject: "TSG Time Episode 41 ",
      title: "TSG Time Episode 41: Practicioner to Founder.  Leadership, The Performance Tech Gap, and Building What the Industry Needs",
      downloadUrl: "/docs/Ep41-LinkedIn-Carousel.pdf",
      downloadName: "Ep41-LinkedIn-Carousel.pdf",
      fileType: "PDF Document",
      fileSize: "215 KB",
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

  const downloadableResources = [
    {
      id: "ep41-carousel",
      subject: "TSG Time Episode 41: Practicioner to Founder.  Leadership, The Performance Tech Gap, and Building What the Industry Needs",
      badge: "Featured Download • PDF Carousel",
      type: "PDF Document",
      size: "215 KB",
      date: "2026",
      author: " Pat Fowler & Doug Spaulding",
      description:
        "Companion slide carousel and presentation document for TSG Time Episode 41. Discover Jane Atmodjojo’s journey from practitioner to founder, key takeaways on bridging the performance technology gap, and building client-centric fintech solutions for modern asset managers.",
      downloadUrl: "/docs/Ep41-LinkedIn-Carousel.pdf",
      fileName: "Ep41-LinkedIn-Carousel.pdf",
    },
  ];

  const featured = insightsData.find((item) => item.featured);

  return (
    <div className="px-4 sm:px-6 lg:px-0 mt-6 space-y-10 pb-12">
      {featured && (
        <div className="bg-gradient-to-br from-[#000E24] to-[#0a1f3d] rounded-2xl overflow-hidden shadow-xl border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
            {/* Image / Video Play Button */}
            <button
              type="button"
              aria-label={`Play video: ${featured.subject}`}
              onClick={() => setVideoOpen(true)}
              className="relative group w-full h-[320px] sm:h-[360px] md:h-full overflow-hidden focus-visible:ring-2 focus-visible:ring-[#d97706]"
            >
              <img
                src={featured.image}
                alt={featured.subject}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-[#d97706] animate-ping opacity-75"></span>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#b45309] to-[#f59e0b] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <FiPlay className="text-white text-3xl ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-medium flex items-center gap-1.5">
                <FiPlay size={12} className="text-[#d97706]" />
                Click to Watch Video
              </div>
            </button>

            {/* Content */}
            <div className="p-6 sm:p-7 lg:p-8 text-white flex flex-col justify-between">
              <div>


                {/* Subject Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {featured.subject}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-5 lg:line-clamp-none">
                  {featured.description}
                </p>
              </div>

              {/* Footer + Download Action */}
              <div className="border-t border-white/10 pt-4 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d97706]/20 border border-[#d97706]/40 flex items-center justify-center shrink-0">
                    <FiUser className="text-[#d97706] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">
                      {featured.author}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {featured.authorRole}
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Downloadable Resources Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-[#000E24]">
              Downloadable Insights &amp; Materials
            </h3>

          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            <FiFileText className="text-amber-600" />
            {downloadableResources.length} Resource Available
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {downloadableResources.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-5 group"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#000E24] to-[#0a1f3d] flex items-center justify-center text-amber-400 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <FiFileText size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-amber-100 text-amber-800 border border-amber-200">
                      {item.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {item.type} • {item.size}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#000E24] leading-snug mb-2 group-hover:text-[#d97706] transition-colors">
                    {item.subject}
                  </h4>



                  <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
                    <span className="font-semibold text-gray-700">Hosted by : </span>
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>

              {/* Download Actions */}
              <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                <a
                  href={item.downloadUrl}
                  download={item.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-xs sm:text-sm shadow hover:shadow-amber-500/25 transition-all duration-200 w-full sm:w-auto active:scale-95"
                  aria-label={`Download file: ${item.subject}`}
                >
                  <FiDownload size={16} />
                  <span>Download PDF</span>
                </a>
                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold text-xs sm:text-sm bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
                  aria-label={`Preview in new tab: ${item.subject}`}
                >
                  <FiExternalLink size={14} />
                  <span>Preview</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video player: ${featured.subject}`}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative bg-[#010f28] rounded-xl overflow-hidden w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video player"
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center z-10 focus-visible:ring-2 focus-visible:ring-[#d97706]"
            >
              <FiX size={20} aria-hidden="true" />
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