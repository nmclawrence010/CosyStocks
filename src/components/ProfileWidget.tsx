import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

type ProfileWidgetProps = {
  symbol: string | null;
};

const ProfileWidget = ({ symbol }: ProfileWidgetProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!symbol) return;

    const container = document.getElementById("profile-widget");
    if (container) {
      container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "100%",
      isTransparent: true,
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
    return <div className="text-gray-500 dark:text-gray-400 text-center mt-8">Select a stock to view profile</div>;
  }

  return (
    <div className="tradingview-widget-container h-[700px]">
      <div id="profile-widget" className="h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
      </div>
    </div>
  );
};

export default ProfileWidget;
