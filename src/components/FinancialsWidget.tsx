import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

type FinancialsWidgetProps = {
  symbol: string | null;
};

const FinancialsWidget = ({ symbol }: FinancialsWidgetProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!symbol) return;

    const container = document.getElementById("financials-widget");
    if (container) {
      container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      isTransparent: true,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%",
      height: "100%",
      colorTheme: theme === "dark" ? "dark" : "light",
      locale: "en",
    });

    container?.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
      }
    };
  }, [symbol, theme]);

  if (!symbol) {
    return <div className="text-gray-500 dark:text-gray-400 text-center mt-8">Select a stock to view financials</div>;
  }

  return (
    <div className="tradingview-widget-container h-[700px]">
      <div id="financials-widget" className="h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
      </div>
    </div>
  );
};

export default FinancialsWidget;
