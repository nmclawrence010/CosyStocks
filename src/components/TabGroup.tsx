import { useState } from "react";
import StockOverviewWidget from "./StockOverviewWidget";
import FinancialsWidget from "./FinancialsWidget";
import ProfileWidget from "./ProfileWidget";

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "financials", label: "Financials" },
  { id: "about", label: "About" },
];

type TabGroupProps = {
  symbol: string | null;
};

const TabGroup = ({ symbol }: TabGroupProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col flex-1">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? "border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-4 flex-1">
        {activeTab === "overview" && <StockOverviewWidget symbol={symbol} />}
        {activeTab === "financials" && <FinancialsWidget symbol={symbol} />}
        {activeTab === "about" && <ProfileWidget symbol={symbol} />}
      </div>
    </div>
  );
};

export default TabGroup;
