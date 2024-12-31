import { useState } from "react";
import { ChevronRight } from "lucide-react";

type Stock = {
  symbol: string;
  exchange: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
};

const sectorData: Record<string, Stock[]> = {
  Technology: [
    { symbol: "AAPL", exchange: "NASDAQ", name: "Apple Inc.", price: 173.5, change: 2.75, percentChange: 1.61 },
    { symbol: "MSFT", exchange: "NASDAQ", name: "Microsoft Corp.", price: 417.88, change: -1.23, percentChange: -0.29 },
    { symbol: "NVDA", exchange: "NASDAQ", name: "NVIDIA Corp.", price: 881.99, change: 15.47, percentChange: 1.79 },
  ],
  Financials: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", price: 187.42, change: 0.98, percentChange: 0.53 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", price: 35.68, change: -0.42, percentChange: -1.16 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", price: 279.87, change: 3.21, percentChange: 1.16 },
  ],
  "Communication Services": [
    { symbol: "META", exchange: "NASDAQ", name: "Meta Platforms", price: 505.95, change: 7.89, percentChange: 1.58 },
    { symbol: "GOOGL", exchange: "NASDAQ", name: "Alphabet Inc.", price: 147.6, change: 1.45, percentChange: 0.99 },
    { symbol: "DIS", exchange: "NYSE", name: "Walt Disney Co.", price: 111.95, change: -0.85, percentChange: -0.75 },
  ],
  "Consumer Cyclical": [
    { symbol: "AMZN", exchange: "NASDAQ", name: "Amazon.com Inc.", price: 175.35, change: 2.8, percentChange: 1.62 },
    { symbol: "TSLA", exchange: "NASDAQ", name: "Tesla Inc.", price: 175.35, change: -5.2, percentChange: -2.88 },
    { symbol: "NKE", exchange: "NYSE", name: "Nike Inc.", price: 98.24, change: 0.45, percentChange: 0.46 },
  ],
  "Consumer Defensive": [
    { symbol: "WMT", exchange: "NYSE", name: "Walmart Inc.", price: 60.75, change: 0.82, percentChange: 1.37 },
    { symbol: "PG", exchange: "NYSE", name: "Procter & Gamble", price: 160.95, change: -0.35, percentChange: -0.22 },
    { symbol: "KO", exchange: "NYSE", name: "Coca-Cola Co.", price: 59.84, change: 0.12, percentChange: 0.2 },
  ],
  Healthcare: [
    { symbol: "JNJ", exchange: "NYSE", name: "Johnson & Johnson", price: 157.89, change: 1.25, percentChange: 0.8 },
    { symbol: "UNH", exchange: "NYSE", name: "UnitedHealth Group", price: 490.32, change: -2.18, percentChange: -0.44 },
    { symbol: "PFE", exchange: "NYSE", name: "Pfizer Inc.", price: 27.85, change: -0.15, percentChange: -0.54 },
  ],
  Industrials: [
    { symbol: "BA", exchange: "NYSE", name: "Boeing Co.", price: 201.75, change: -3.25, percentChange: -1.59 },
    { symbol: "CAT", exchange: "NYSE", name: "Caterpillar Inc.", price: 346.78, change: 4.89, percentChange: 1.43 },
    { symbol: "UPS", exchange: "NYSE", name: "United Parcel Service", price: 148.93, change: 0.73, percentChange: 0.49 },
  ],
  "Real Estate": [
    { symbol: "AMT", exchange: "NYSE", name: "American Tower Corp.", price: 195.45, change: -1.15, percentChange: -0.58 },
    { symbol: "PLD", exchange: "NYSE", name: "Prologis Inc.", price: 129.85, change: 1.35, percentChange: 1.05 },
    { symbol: "SPG", exchange: "NYSE", name: "Simon Property Group", price: 149.9, change: 2.4, percentChange: 1.63 },
  ],
  Energy: [
    { symbol: "XOM", exchange: "NYSE", name: "Exxon Mobil Corp.", price: 105.75, change: 1.85, percentChange: 1.78 },
    { symbol: "CVX", exchange: "NYSE", name: "Chevron Corp.", price: 154.63, change: -0.87, percentChange: -0.56 },
    { symbol: "COP", exchange: "NYSE", name: "ConocoPhillips", price: 115.9, change: 0.9, percentChange: 0.78 },
  ],
  Utilities: [
    { symbol: "NEE", exchange: "NYSE", name: "NextEra Energy", price: 57.82, change: 0.32, percentChange: 0.56 },
    { symbol: "SO", exchange: "NYSE", name: "Southern Company", price: 68.95, change: -0.25, percentChange: -0.36 },
    { symbol: "DUK", exchange: "NYSE", name: "Duke Energy Corp.", price: 94.28, change: 0.48, percentChange: 0.51 },
  ],
  "Basic Materials": [
    { symbol: "LIN", exchange: "NYSE", name: "Linde plc", price: 462.75, change: 3.25, percentChange: 0.71 },
    { symbol: "FCX", exchange: "NYSE", name: "Freeport-McMoRan", price: 44.85, change: -0.65, percentChange: -1.43 },
    { symbol: "APD", exchange: "NYSE", name: "Air Products", price: 236.9, change: 1.2, percentChange: 0.51 },
  ],
};

const sectors = Object.keys(sectorData);

type SectorTablesProps = {
  onStockSelect: (symbol: string) => void;
};

const SectorTables = ({ onStockSelect }: SectorTablesProps) => {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  const handleStockSelect = (stock: Stock) => {
    setSelectedSymbol(stock.symbol);
    onStockSelect(`${stock.exchange}:${stock.symbol}`);
  };

  return (
    <div className="space-y-8">
      {sectors.map((sector) => (
        <div key={sector}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 px-2">{sector}</h2>
          <div className="bg-[#FDF3E7] dark:bg-gray-800/50 rounded-xl p-6 shadow-lg transition-colors duration-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="text-left py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4 first:pl-6 last:pr-6">
                      Symbol
                    </th>
                    <th className="text-left py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">Name</th>
                    <th className="text-right py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">Price</th>
                    <th className="text-right py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">Change</th>
                    <th className="text-right py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">
                      % Change
                    </th>
                    <th className="w-12 pr-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {sectorData[sector].map((stock) => (
                    <tr
                      key={stock.symbol}
                      onClick={() => handleStockSelect(stock)}
                      className={`
                        hover:bg-gray-50/50 dark:hover:bg-gray-700/50 
                        transition-all duration-150 cursor-pointer
                        relative
                        ${
                          selectedSymbol === stock.symbol
                            ? "after:absolute after:inset-x-2 after:inset-y-1 after:border after:border-gray-900 dark:after:border-gray-100 after:rounded-lg after:pointer-events-none bg-gray-50/50 dark:bg-gray-700/50"
                            : ""
                        }
                      `}
                    >
                      <td className="py-3 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap px-4 pl-6">
                        {stock.symbol}
                      </td>
                      <td className="py-3 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap px-4">{stock.name}</td>
                      <td className="py-3 text-sm font-medium text-gray-800 dark:text-gray-200 text-right whitespace-nowrap px-4">
                        ${stock.price.toFixed(2)}
                      </td>
                      <td
                        className={`py-3 text-sm font-medium text-right whitespace-nowrap px-4 ${
                          stock.change >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {stock.change >= 0 ? "+" : ""}
                        {stock.change.toFixed(2)}
                      </td>
                      <td
                        className={`py-3 text-sm font-medium text-right whitespace-nowrap px-4 ${
                          stock.percentChange >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {stock.percentChange >= 0 ? "+" : ""}
                        {stock.percentChange.toFixed(2)}%
                      </td>
                      <td className="py-3 pl-4 font-medium pr-6 text-gray-400 dark:text-gray-500">
                        <ChevronRight className="w-4 h-4" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectorTables;
