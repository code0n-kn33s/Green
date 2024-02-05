import React, { useState, useEffect } from 'react';
import { ReactComponent as Up } from './assets/up.svg';
import { ReactComponent as Down } from './assets/down.svg';

export default function UpBet(props) {
  const { activeButton, startBinary } = props;

  return (
    <div>
      <div
        className={`binary-right-bet-button ${activeButton === 'up' ? 'active' : ''}`}
        onClick={() => startBinary('up')}
      >
        <i>UP</i> <span><Up /></span>
      </div>
      <div className="binary-right-values-wrap">
        <div className="binary-right-value">
          <div className="binary-right-text"> Your payout: </div>
          <div className="binary-right-profit"> {props.payout} USDT
            {/* {props.singlePair} */}
          </div>
        </div>
        <div className="binary-right-value">
          <div className="binary-right-text"> Your balance: </div>
          <div className="binary-right-profit"> {window.localStorage.getItem(`options_crypto_balance_usdt`)} USDT
            {/* {props.singlePair}  */}
          </div>
        </div>
      </div>
      <div
        className={`binary-right-bet-button ${activeButton === 'down' ? 'active' : ''}`}
        onClick={() => startBinary('down')}
      >
        <i>DOWN</i> <span><Down /></span>
      </div>
    </div>
  );
}
