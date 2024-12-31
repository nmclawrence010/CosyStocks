import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

type StockDetailsWidgetProps = {
  symbol: string | null;
};

const StockDetailsWidget = ({ symbol }: StockDetailsWidgetProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!symbol) return;

    const container = document.getElementById("stock-details-widget");
    if (container) {
      container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "100%",
      locale: "en",
      colorTheme: theme === "dark" ? "dark" : "light",
      isTransparent: true,
    });

    container?.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
      }
    };
  }, [symbol, theme]);

  if (!symbol) {
    return <div className="text-gray-500 dark:text-gray-400 text-center mt-8">Select a stock to view details</div>;
  }

  return (
    <div className="tradingview-widget-container flex-1">
      <div id="stock-details-widget" className="h-full min-h-[300px]">
        <div className="tradingview-widget-container__widget h-full"></div>
      </div>
    </div>
  );
};

export default StockDetailsWidget;
