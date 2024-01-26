// CandleChart.js

import React, { Component } from 'react';

import StockChartAppend from './d3-append'
import StockChartComponent from './d3-component'

class CandleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Получаем исторические данные через HTTP-запрос
    // this.fetchCandleData();

    // Настраиваем сокет для обновлений в реальном времени
    // this.setupSocket();
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.minutes !== this.props.minutes) {
    //   this.setupSocket();
    // }
  }

  fetchCandleData() {
    fetch(`https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=${this.props.minutes}&limit=100`)
      .then(response => response.json())
      .then(data => {
        // Преобразовываем данные в нужный формат
        const formattedData = data.map(item => ({
          x: new Date(item[0]),
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low : parseFloat(item[3]),
          close: parseFloat(item[4]),
        }));

        // Обновляем состояние компонента с полученными данными
        this.setState({ data: formattedData });
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
  }

  setupSocket() {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
    //   console.log('>>> socket data :>> ', data);

      // Обработка данных свечи из сокета
      const newCandle = {
        x: new Date(data.k.t),
        open: parseFloat(data.k.o),
        high: parseFloat(data.k.h),
        low : parseFloat(data.k.l),
        close: parseFloat(data.k.c),
      };

      // Ограничиваем количество отображаемых свечей, например, до 100
      const updatedData = [...this.state.data, newCandle].slice(-100);

      // Обновляем состояние компонента с новыми данными
      updatedData && this.setState({ data: updatedData });
    };

    socket.onclose = (event) => {
      console.error("Соединение закрыто:", event);
    };

    socket.onerror = (error) => {
      console.error("Ошибка:", error);
    };

    this.socket = socket;
  }

  componentWillUnmount() {
    // Закрытие соединения с сокетом при размонтировании компонента
    if (this.socket) {
      // this.socket.close();
    }
  }

  render() {
    return (
      <div>
        {/* <StockChartAppend minutes={this.props.minutes}/> */}
        <StockChartComponent
          selectedPair={this.props.selectedPair}
          minutes={this.props.minutes}
          symbols={this.props.symbols}
        />
      </div>
    );
  }
}

export default CandleChart;
