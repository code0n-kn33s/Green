// TradingViewChart.jsx
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

function TradingViewChart(props) {
  // const [currentPrice, setCurrentPrice] = useState(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWidgetLoaded(true)
    }, 500);

    console.log('TradingView :>> ', window.TradingView);
    return () => {
      setWidgetLoaded(false)
    }
  }, [props.selectedPair, props.minutes]);

  const handleWidgetReady = () => {
    setWidgetLoaded(true);
  };

  return (
    <div className="tradingview-container">
      {widgetLoaded && props.selectedPair && props.minutes ?
        <TradingViewWidget
          symbol={props.symbols[props.selectedPair]}
          interval={props.minutes}
          theme="dark"
          locale="en"
          height="500px"
          width="100%"
          hide_top_toolbar={true}
          hide_side_toolbar={true}
          backgroundColor="rgba(0, 0, 0, 1)"
          gridColor="rgba(255, 255, 0, 0.3)"

          overrides={{
            'mainSeriesProperties.showPriceLine': true,
            'mainSeriesProperties.priceLineColor': '#00ff00',  // Цвет линии (зеленый)
            'mainSeriesProperties.priceLineStyle': 0,  // Тип линии (0 - сплошная)
          }}

        /> : <Spinner />
      }
    </div>
  );
}

const Spinner = () => {
  return <div className="site-spinner"><span className="loader"></span></div>
}

export default TradingViewChart;
