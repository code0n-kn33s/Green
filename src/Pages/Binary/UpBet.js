import React, { useState, useEffect } from 'react';
import { ReactComponent as Up } from './assets/up.svg';
import { ReactComponent as Down } from './assets/down.svg';
import { useTranslation } from 'react-i18next';
export default function UpBet(props) {
  const { activeButton, startBinary } = props;
const { t } = useTranslation();
  return (
    <div>
      <div
        className={`binary-right-bet-button active`}
        onClick={() => startBinary('up')}
      >
        <i>UP</i> <span><Up /></span>
      </div>
      <div className="binary-right-values-wrap">
        <div className="binary-right-value">
          <div className="binary-right-text"> {t("Your payout")}: </div>
          <div className="binary-right-profit"> {props.payout} USDT
            {/* {props.singlePair} */}
          </div>
        </div>

      </div>
      <div
        className={`binary-right-bet-button active`}
        onClick={() => startBinary('down')}
      >
        <i>DOWN</i> <span><Down /></span>
      </div>
    </div>
  );
}
