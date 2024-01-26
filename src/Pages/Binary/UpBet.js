import React, { useState, useEffect } from 'react';
import { ReactComponent as Up } from './assets/up.svg';
import { ReactComponent as Down } from './assets/down.svg';

export default function UpBet(props) {
  const [activeButton, setActiveButton] = useState('up');

  useEffect(() => {
    props.getUpAndDown(activeButton)
  }, [activeButton])

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    // Здесь можно добавить дополнительную логику в зависимости от типа кнопки (Up или Down)
  };

  return (
    <div>
      <div
        className={`binary-right-bet-button ${activeButton === 'up' ? 'active' : ''}`}
        onClick={() => handleButtonClick('up')}
      >
        <i>UP</i> <span><Up /></span>
      </div>
      <div className="binary-right-values-wrap">
        <div className="binary-right-value">
          <div className="binary-right-text"> Your payout: </div>
          <div className="binary-right-profit"> {props.payout} {props.singlePair} </div>
        </div>
        <div className="binary-right-value">
          <div className="binary-right-text"> Your balance: </div>
          <div className="binary-right-profit"> {props.singlePair && window.localStorage.getItem(`options_crypto_balance_${props.singlePair.toLowerCase()}`)} {props.singlePair} </div>
        </div>
      </div>
      <div
        className={`binary-right-bet-button ${activeButton === 'down' ? 'active' : ''}`}
        onClick={() => handleButtonClick('down')}
      >
        <i>DOWN</i> <span><Down /></span>
      </div>
    </div>
  );
}
