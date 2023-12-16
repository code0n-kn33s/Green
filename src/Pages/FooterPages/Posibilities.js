import React from 'react'

import G7 from './G7'
import circle from './img/circle.png'
import simplex from './img/simplex.png'
import triangle from './img/triangle.png'
import water from './img/water.png'
import { useTranslation } from 'react-i18next';
export function Posibilities(params) {
const {t} = useTranslation();

    return (
        <div className="posibilities">
            <div className="posibilities-title public-title">
                {t("Possibilities & Profitability")} AI ARBITECH7
            </div>
            <div className="posibilities-content bordered big-bordered">
                <div className='posibilities-content-wrap'>
                    <div className="posibilities-content-title tb">
                        {t("Best pairs last 12 months ARBITECH7 version:")}
                    </div>
                    <br/>

                    <div className="posibilities-content-text">
                        BTC/SOL/DYDX - 379%
                    </div>
                    <div className="posibilities-content-text">
                        SOL/USDT/TWT - 331%
                    </div>
                    <div className="posibilities-content-text">
                        Gala/USDT/BTC - 270%
                    </div>
                    <br/>
                </div>

                <div className='posibilities-content-grafic'>
                    <G7 />
                </div>
                <div className="posibilities-content-p tb">
                        {t("Best partners last 12 months ARBITECH7 version")}:
                    </div>
                <div className="posibilities-content-imgs">
                    <img src={circle} alt="" />
                    <img src={simplex} alt="" />
                    <img src={triangle} alt="" />
                    <img src={water} alt="" />
                </div>
            </div>
        </div>
    )
}