
import { io } from 'socket.io-client';

const socket = io('wss://ws-api.binance.com:443/ws-api/v3');

export default socket;