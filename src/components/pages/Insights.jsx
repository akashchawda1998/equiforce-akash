import { useState } from "react";
import InsightsHero from "../insights/InsightsHero";
import NewsFeed from "../insights/NewsFeed";
import InsightsFeed from "../insights/InsightsFeed";
import PressReleases from "../insights/PressReleases";
import { Helmet } from "react-helmet";

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("insights");

  return (
    <div className="pt-10 min-h-screen">
      <Helmet>
        <title>Insights &amp; News | EquiForce Investment Intelligence</title>
        <meta name="description" content="Stay informed with EquiForce insights, industry news, and press releases on investment operations, performance measurement, and fintech innovation." />
      </Helmet>

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
