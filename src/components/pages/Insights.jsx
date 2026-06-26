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

   
      {/* Content Sections */}
      <div className="max-w-screen-xl mx-auto px-3">
        {activeCategory === "insights" && <InsightsFeed />}
        {activeCategory === "news" && <NewsFeed />}
        {activeCategory === "press" && <PressReleases />}
      </div>
    </div>
  );
};

export default Insights;
