// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

const overrides=`{{
  "paneProperties.background": "#FFF831",
  "paneProperties.separatorColor": "#FFF831",
  "paneProperties.vertGridProperties.color": "#FFF831",
  "scalesProperties.axisHighlightColor": "#FFF831",
  "scalesProperties.axisLineToolLabelBackgroundColorActive": "#FFF831",
  "scalesProperties.axisLineToolLabelBackgroundColorCommon": "#FFF831",
  "scalesProperties.crosshairLabelBgColorDark": "#FFF831",
  "scalesProperties.crosshairLabelBgColorLight": "#FFF831",
  "scalesProperties.lineColor": "#FFF831",
  "scalesProperties.textColor": "#FFF831",
  "mainSeriesProperties.candleStyle.upColor": "#FFF831",
  "mainSeriesProperties.candleStyle.downColor": "#FFF831",
  "mainSeriesProperties.candleStyle.borderUpColor": "#FFF831",
  "mainSeriesProperties.candleStyle.borderDownColor": "#FFF831",
  "mainSeriesProperties.candleStyle.wickUpColor": "#FFF831",
  "mainSeriesProperties.candleStyle.wickDownColor": "#FFF831",
  "mainSeriesProperties.candleStyle.barColorsOnPrevClose": "#FFF831",
}}`

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Очистите контейнер перед добавлением нового скрипта
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "TVC:GOLD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "save_image": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
