import { FiCalendar, FiArrowRight } from "react-icons/fi";

const NewsFeed = () => {
  const newsData = [
  
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Product Launch": "bg-blue-100 text-blue-800",
      Awards: "bg-purple-100 text-purple-800",
      Partnership: "bg-green-100 text-green-800",
      Report: "bg-orange-100 text-orange-800",
      "Product Update": "bg-indigo-100 text-indigo-800",
      "Company News": "bg-pink-100 text-pink-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
      
      </div>
    </div>
  );
};

export default NewsFeed;
