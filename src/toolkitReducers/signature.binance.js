const crypto = require('crypto');

function generateSignature(apiSecret, queryString) {
  return crypto
    .createHmac('sha256', apiSecret)
    .update(queryString)
    .digest('hex');
}

// Пример использования
const apiSecret = 'Ваш_секретный_ключ';
const timestamp = Date.now();
const params = {
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT',
  price: '0.1',
  quantity: '10',
  timeInForce: 'GTC',
};

const queryString = `symbol=${params.symbol}&side=${params.side}&type=${params.type}&price=${params.price}&quantity=${params.quantity}&timeInForce=${params.timeInForce}&timestamp=${timestamp}`;

const signature = generateSignature(apiSecret, queryString);

console.log('Generated Signature:', signature);
