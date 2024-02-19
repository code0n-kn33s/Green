import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Timer from './Timer'

import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';

export default function BinaryHeader(params) {
    const pendingBets = useSelector(({ state }) => state.pendingBets)
    const { t } = useTranslation();

    const dispatch = useDispatch();

    // useEffect(() => {

    // }, [])

    const changeMinutes = (e) => {
        if (e.target.tagName === "BUTTON") params.getMinutes(e.target.dataset.time)
    }

    return (
        <div>
            <div className="binary-left-top">
                <div className="binary-left-title">
                    {/* {t("binary_auction")} */}
                    {t("Your balance")}: {Number(window.localStorage.getItem(`options_crypto_balance_usdt`)).toString()} USDT
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
            <div>
                {pendingBets && pendingBets.length ?
                    (
                        <>
                            Текущие ставки: <br />
                            {pendingBets.map(p => (
                                <div key={p.id} className="bets-list">
                                    <div className="bet-item">{p.id}</div>
                                    <div className="bet-item">{p.bet_type}</div>
                                    <div className="bet-item">{p.amount}</div>
                                    <div className="bet-item">{p.currency.toUpperCase()}</div>
                                    <div className="bet-item">{moment(p.expiration_time).format('h:mm')}</div>
                                    <div className="bet-item">{p.status}</div>
                                    <Timer expiration_time={p.expiration_time} id={p.id}/>
                                </div>
                            )).reverse()}
                        </>
                    )
                    : ''}


            </div>
        </div>
    )
}