import { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { navigationLinks } from '../config/navigation';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // First clean up any existing widget
    const container = document.getElementById("tradingview-widget");
    if (container) {
      container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    }

    // Create new script with updated theme
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "NASDAQ:NVDA", title: "Nvidia" },
        { proName: "NASDAQ:MSFT", title: "Microsoft" },
        { proName: "NYSE:MA", title: "Mastercard" },
        { proName: "NASDAQ:AAPL", title: "Apple" },
        { proName: "NASDAQ:META", title: "Meta" },
        { proName: "NASDAQ:TSLA", title: "Tesla" },
        { proName: "NASDAQ:GOOGL", title: "Google" },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "regular",
      colorTheme: theme === 'dark' ? 'dark' : 'light',
      locale: "en",
    });
    container?.appendChild(script);

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
      }
    };
  }, [theme]);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#FAE7DD] dark:bg-background-dark z-10 transition-colors duration-200"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#FAE7DD] dark:bg-background-dark z-10 transition-colors duration-200"></div>
          <div id="tradingview-widget" className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] px-6">
        <nav className="bg-surface-light dark:bg-surface-dark rounded-full px-6 py-4 max-w-7xl mx-auto shadow-sm transition-colors duration-200">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="hidden md:flex items-center space-x-10">
              {navigationLinks.map((link) => (
                <NavLink key={link.text} icon={<link.icon className="w-4 h-4" />} text={link.text} />
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <button className="hidden md:flex items-center space-x-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>

              <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;