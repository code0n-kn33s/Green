// slices/marketDataSlice.js
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const subscribeToMarketData = createAsyncThunk(
  'marketData/subscribe',
  async (_, { dispatch }) => {
    // Подключитесь к WebSocket и выполните необходимые действия при получении данных

    const socket = new WebSocket('wss://ws-api.binance.com:443/ws-api/v3');

    socket.onopen = () => {
      console.log('WebSocket connection opened');
      // Здесь можно отправить сообщение или выполнить другие действия по необходимости
    };

    socket.onmessage = (event) => {
      console.log('Received message:', event.data);

      // При получении данных, отправьте их в store
      dispatch(updateMarketData(event.data));
    };

    return socket; // Возвращаем объект сокета, чтобы его можно было использовать в дальнейшем, если это необходимо
  }
);

const marketDataSlice = createSlice({
  name: 'marketData',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
    socket: null,
  },
  reducers: {
    updateMarketData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToMarketData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subscribeToMarketData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.socket = action.payload;
      })
      .addCase(subscribeToMarketData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateMarketData } = marketDataSlice.actions;
export const selectMarketData = (state) => state.marketData.data;
export const selectMarketDataStatus = (state) => state.marketData.status;
export const selectMarketDataError = (state) => state.marketData.error;

export default marketDataSlice.reducer;
