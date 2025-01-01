import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Stock, sectorData, sectors } from "../data/sectorData";

type SectorTablesProps = {
  onStockSelect: (symbol: string) => void;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-end">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-gray-900 dark:text-gray-100" : "text-gray-300 dark:text-gray-600"}>
          ★
        </span>
      ))}
    </div>
  );
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
                    <th className="text-left py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4 first:pl-6">
                      Symbol
                    </th>
                    <th className="text-left py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">Name</th>
                    <th className="text-right py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">
                      Buy Price
                    </th>
                    <th className="text-right py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">
                      Forward P/E
                    </th>
                    <th className="text-right py-3 text-lg font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap px-4">Rating</th>
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
                      <td className="py-3 text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap px-4">{stock.name}</td>
                      <td className="py-3 text-sm text-gray-800 dark:text-gray-200 text-right whitespace-nowrap px-4">
                        ${stock.buyPrice.toFixed(2)}
                      </td>
                      <td className="py-3 text-sm text-gray-800 dark:text-gray-200 text-right whitespace-nowrap px-4">
                        {stock.forwardPE.toFixed(1)}
                      </td>
                      <td className="py-3 text-sm text-gray-800 dark:text-gray-200 text-right whitespace-nowrap px-4">
                        <StarRating rating={Math.floor(stock.starRating)} />
                      </td>
                      <td className="py-3 pl-4 pr-6 text-gray-400 dark:text-gray-500">
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
