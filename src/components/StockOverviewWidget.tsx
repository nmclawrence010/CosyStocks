import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

type StockOverviewWidgetProps = {
  symbol: string | null;
};

const StockOverviewWidget = ({ symbol }: StockOverviewWidgetProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!symbol) return;

    const container = document.getElementById("stock-overview-widget");
    if (container) {
      container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [[symbol.split(":")[1], `${symbol}|1D`]],
      chartOnly: false,
      width: "100%",
      height: "100%",
      locale: "en",
      colorTheme: theme === "dark" ? "dark" : "light",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      headerFontSize: "medium",
      backgroundColor: "rgba(255, 255, 255, 0)",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
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
    <div className="tradingview-widget-container h-[700px]">
      <div id="stock-overview-widget" className="h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
      </div>
    </div>
  );
};

export default StockOverviewWidget;
