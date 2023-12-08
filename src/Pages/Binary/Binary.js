// components/MarketDataComponent.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeToMarketData } from '../actions';

const MarketDataComponent = () => {
  const marketData = useSelector((state) => state.marketData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subscribeToMarketData());

    return () => {
      // Если необходимо, можно отписаться от событий при размонтировании компонента
      socket.off('marketData');
    };
  }, [dispatch]);

  return (
    <div>
      {/* Ваши компоненты для отображения рыночных данных */}
    </div>
  );
};

export default MarketDataComponent;
