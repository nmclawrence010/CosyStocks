import { useState } from "react";
import Navbar from "./components/Navbar";
import SectorTables from "./components/SectorTables";
import TabGroup from "./components/TabGroup";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200 pt-2">
        <Navbar />
        <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {/* <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-8">Our recommended stocks</h1> */}
            <SectorTables onStockSelect={(symbol) => setSelectedStock(symbol)} />
          </div>
          <div className="w-full lg:w-1/3 lg:pt-[38px]">
            <div className="sticky top-24 bg-[#FDF3E7] dark:bg-gray-800/50 rounded-xl shadow-lg transition-colors duration-200 p-6 overflow-x-auto min-h-[calc(100vh-8rem)] flex flex-col">
              <TabGroup symbol={selectedStock} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
