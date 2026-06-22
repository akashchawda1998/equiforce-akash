import { useState } from "react";
import InsightsHero from "../insights/InsightsHero";
import NewsFeed from "../insights/NewsFeed";
import InsightsFeed from "../insights/InsightsFeed";
import PressReleases from "../insights/PressReleases";

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("insights");

  return (
    <div className="pt-10 min-h-screen">
      <InsightsHero />

      {/* Category Tabs */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveCategory("insights")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === "insights"
                ? "bg-[#d97706] text-white shadow-lg"
                : "bg-gray-100 text-[#000E24] hover:bg-gray-200"
            }`}
          >
            Insights
          </button>
          <button
            onClick={() => setActiveCategory("news")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === "news"
                ? "bg-[#d97706] text-white shadow-lg"
                : "bg-gray-100 text-[#000E24] hover:bg-gray-200"
            }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveCategory("press")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === "press"
                ? "bg-[#d97706] text-white shadow-lg"
                : "bg-gray-100 text-[#000E24] hover:bg-gray-200"
            }`}
          >
            Press Releases
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-screen-xl mx-auto px-4">
        {activeCategory === "insights" && <InsightsFeed />}
        {activeCategory === "news" && <NewsFeed />}
        {activeCategory === "press" && <PressReleases />}
      </div>
    </div>
  );
};

export default Insights;
