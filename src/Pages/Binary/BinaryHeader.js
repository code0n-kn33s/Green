import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function BinaryHeader(params) {
    const { t } = useTranslation();

    const changeMinutes = (e) => {
        if (e.target.tagName === "BUTTON") params.getMinutes(e.target.dataset.time)
    }

    return (
        <div>
            <div className="binary-left-top">
                <div className="binary-left-title">
                    {/* {t("binary_auction")} */}
                    Your balance: {window.localStorage.getItem(`options_crypto_balance_usdt`)} USDT
                    <div className="binary-right-value">
                        <div className="binary-right-text">  </div>
                        <div className="binary-right-profit">
                            {/* {props.singlePair}  */}
                        </div>
                    </div>
                </div>
                <div onClick={changeMinutes} className="binary-left-time">
                    <button data-time="1" className={params.minutes === "1" && 'active'}>1M</button>
                    <button data-time="5" className={params.minutes === "5" && 'active'}>5M</button>
                    <button data-time="15" className={params.minutes === "15" && 'active'}>15M</button>
                    <button data-time="30" className={params.minutes === "30" && 'active'}>30M</button>
                    <button data-time="60" className={params.minutes === "60" && 'active'}>1H</button>
                    <button data-time="D" className={params.minutes === "D" && 'active'}>1D</button>
                </div>
            </div>
        </div>
    )
}