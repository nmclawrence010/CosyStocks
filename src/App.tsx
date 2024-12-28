import Navbar from './components/Navbar';
import SectorTables from './components/SectorTables';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200 pt-2">
        <Navbar />
        <div className="container mx-auto px-6 py-12 flex gap-8">
          <div className="w-2/3">
            <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-8">
              Market Sectors
            </h1>
            <SectorTables />
          </div>
          <div className="w-1/3">
            <div className="sticky top-24 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm transition-colors duration-200 p-6 min-h-[calc(100vh-8rem)]">
              {/* Content will go here later */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Stock Details
              </h2>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;