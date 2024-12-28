import { ChevronRight } from 'lucide-react';

type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
};

const sectorData: Record<string, Stock[]> = {
  'Technology': [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 173.50, change: 2.75, percentChange: 1.61 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 417.88, change: -1.23, percentChange: -0.29 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 881.99, change: 15.47, percentChange: 1.79 },
  ],
  'Financials': [
    { symbol: 'JPM', name: 'JPMorgan Chase', price: 187.42, change: 0.98, percentChange: 0.53 },
    { symbol: 'BAC', name: 'Bank of America', price: 35.68, change: -0.42, percentChange: -1.16 },
    { symbol: 'V', name: 'Visa Inc.', price: 279.87, change: 3.21, percentChange: 1.16 },
  ],
  'Communication Services': [
    { symbol: 'META', name: 'Meta Platforms', price: 505.95, change: 7.89, percentChange: 1.58 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 147.60, change: 1.45, percentChange: 0.99 },
    { symbol: 'DIS', name: 'Walt Disney Co.', price: 111.95, change: -0.85, percentChange: -0.75 },
  ],
  'Consumer Cyclical': [
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 175.35, change: 2.80, percentChange: 1.62 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 175.35, change: -5.20, percentChange: -2.88 },
    { symbol: 'NKE', name: 'Nike Inc.', price: 98.24, change: 0.45, percentChange: 0.46 },
  ],
  'Consumer Defensive': [
    { symbol: 'WMT', name: 'Walmart Inc.', price: 60.75, change: 0.82, percentChange: 1.37 },
    { symbol: 'PG', name: 'Procter & Gamble', price: 160.95, change: -0.35, percentChange: -0.22 },
    { symbol: 'KO', name: 'Coca-Cola Co.', price: 59.84, change: 0.12, percentChange: 0.20 },
  ],
  'Healthcare': [
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 157.89, change: 1.25, percentChange: 0.80 },
    { symbol: 'UNH', name: 'UnitedHealth Group', price: 490.32, change: -2.18, percentChange: -0.44 },
    { symbol: 'PFE', name: 'Pfizer Inc.', price: 27.85, change: -0.15, percentChange: -0.54 },
  ],
  'Industrials': [
    { symbol: 'BA', name: 'Boeing Co.', price: 201.75, change: -3.25, percentChange: -1.59 },
    { symbol: 'CAT', name: 'Caterpillar Inc.', price: 346.78, change: 4.89, percentChange: 1.43 },
    { symbol: 'UPS', name: 'United Parcel Service', price: 148.93, change: 0.73, percentChange: 0.49 },
  ],
  'Real Estate': [
    { symbol: 'AMT', name: 'American Tower Corp.', price: 195.45, change: -1.15, percentChange: -0.58 },
    { symbol: 'PLD', name: 'Prologis Inc.', price: 129.85, change: 1.35, percentChange: 1.05 },
    { symbol: 'SPG', name: 'Simon Property Group', price: 149.90, change: 2.40, percentChange: 1.63 },
  ],
  'Energy': [
    { symbol: 'XOM', name: 'Exxon Mobil Corp.', price: 105.75, change: 1.85, percentChange: 1.78 },
    { symbol: 'CVX', name: 'Chevron Corp.', price: 154.63, change: -0.87, percentChange: -0.56 },
    { symbol: 'COP', name: 'ConocoPhillips', price: 115.90, change: 0.90, percentChange: 0.78 },
  ],
  'Utilities': [
    { symbol: 'NEE', name: 'NextEra Energy', price: 57.82, change: 0.32, percentChange: 0.56 },
    { symbol: 'SO', name: 'Southern Company', price: 68.95, change: -0.25, percentChange: -0.36 },
    { symbol: 'DUK', name: 'Duke Energy Corp.', price: 94.28, change: 0.48, percentChange: 0.51 },
  ],
  'Basic Materials': [
    { symbol: 'LIN', name: 'Linde plc', price: 462.75, change: 3.25, percentChange: 0.71 },
    { symbol: 'FCX', name: 'Freeport-McMoRan', price: 44.85, change: -0.65, percentChange: -1.43 },
    { symbol: 'APD', name: 'Air Products', price: 236.90, change: 1.20, percentChange: 0.51 },
  ],
};

const sectors = Object.keys(sectorData);

const SectorTables = () => {
  return (
    <div className="space-y-8">
      {sectors.map((sector) => (
        <div key={sector}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 px-2">
            {sector}
          </h2>
          <div className="bg-[#FDF3E7] dark:bg-gray-800/50 rounded-xl p-6 shadow-sm transition-colors duration-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Symbol</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Name</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Price</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Change</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-600 dark:text-gray-400">% Change</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {sectorData[sector].map((stock) => (
                  <tr key={stock.symbol} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-150 cursor-pointer">
                    <td className="py-3 text-sm font-medium text-gray-800 dark:text-gray-200">{stock.symbol}</td>
                    <td className="py-3 text-sm text-gray-800 dark:text-gray-200">{stock.name}</td>
                    <td className="py-3 text-sm text-gray-800 dark:text-gray-200 text-right">
                      ${stock.price.toFixed(2)}
                    </td>
                    <td className={`py-3 text-sm text-right ${stock.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </td>
                    <td className={`py-3 text-sm text-right ${stock.percentChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stock.percentChange >= 0 ? '+' : ''}{stock.percentChange.toFixed(2)}%
                    </td>
                    <td className="py-3 pl-4 text-gray-400 dark:text-gray-500">
                      <ChevronRight className="w-4 h-4" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectorTables; 