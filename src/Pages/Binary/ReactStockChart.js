import React from 'react';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { CandlestickSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { fitWidth } from 'react-stockcharts/lib/helper';

const mockdata = [
    { date: '2018-01-01', open: 100, high: 150, low: 80, close: 120 },
    { date: '2018-01-02', open: 120, high: 160, low: 90, close: 130 },
    { date: '2018-01-03', open: 130, high: 170, low: 100, close: 140 },
    { date: '2018-01-04', open: 140, high: 180, low: 110, close: 150 },
];

class CandlestickChart extends React.Component {
  render() {
    const initialData = mockdata;
    const { type, width, ratio } = this.props;

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      (d) => new Date(d.date)
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      initialData
    );

    return (
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
      >
        <Chart id={0} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" />
          <YAxis axisAt="right" orient="right" ticks={5} />
          <CandlestickSeries />
        </Chart>
      </ChartCanvas>
    );
  }
}

export default fitWidth(CandlestickChart);
