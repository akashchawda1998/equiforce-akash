import {
  Database,
  ShieldCheck,
  Link,
  BarChart3,
  Layers,
  Server,
} from "lucide-react";

const tools = [
  { name: "Custodian Banks", icon: <ShieldCheck /> },
  { name: "Fund Administrators", icon: <Layers /> },
  { name: "Market Data Providers", icon: <BarChart3 /> },
  { name: "Internal Systems", icon: <Server /> },
  { name: "Data Warehouses", icon: <Database /> },
  { name: "APIs & Data Feeds", icon: <Link /> },
  { name: "Portfolio Management Systems", icon: <Layers /> },
  { name: "Accounting Systems", icon: <Database /> },
  { name: "Reporting Tools", icon: <BarChart3 /> },
  { name: "Cloud Infrastructure", icon: <Server /> },
];

const Integrations = () => {
  return (
    <section className=" text-center">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Top */}

        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Seamless Integrations
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Built to Integrate <span class="text-[#d97706]">  Across</span><br className="hidden sm:block" />
          Your Investment <span class="text-[#d97706]"> Ecosystem</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12">
          EquiForce seamlessly connects with custodians, fund administrators,
          and internal systems — ensuring smooth data flow across your entire
          investment infrastructure.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full 
              bg-white/80 backdrop-blur-md border border-gray-200 
              shadow-sm hover:shadow-md hover:scale-105 transition"
            >
              {/* Icon */}
              <div className="ml[-10px] w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 text-sm">
                {tool.icon}
              </div>

              {/* Text */}
              <span className="text-gray-800 text-xs sm:text-sm font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
