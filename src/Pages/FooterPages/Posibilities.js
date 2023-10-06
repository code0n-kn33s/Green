import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getGlobalProfit } from '../../toolkitReducers'

import G7 from './G7'
import circle from './img/circle.png'
import simplex from './img/simplex.png'
import triangle from './img/triangle.png'
import water from './img/water.png'

export function Posibilities(params) {
    const dispatch = useDispatch()
    const globalProfit = useSelector(store => store.globalProfit)

    React.useEffect(() => {
        dispatch(getGlobalProfit())
    }, [])

    console.log('globalProfit :>> ', globalProfit);
    return (
        <div className="posibilities">
            <div className="posibilities-title public-title">
                Possibilities & Profitability AI ARBITECH7
            </div>
            <div className="posibilities-content bordered big-bordered">
                <div className='posibilities-content-wrap'>
                    <div className="posibilities-content-title tb">
                        Best pairs last 9 months ARBITECH7 version:
                    </div>
                    <div className="posibilities-content-text">
                        BTC/SOL/DYDX - 379%
                    </div>
                    <div className="posibilities-content-text">
                        SOL/USDT/TWT - 331%
                    </div>
                    <div className="posibilities-content-text">
                        Gala/USDT/BTC - 270%
                    </div>
                    <div className="posibilities-content-p tb">
                        Best partners last 9 months ARBITECH7version:
                    </div>
                </div>

                <div className='posibilities-content-grafic'>
                    {globalProfit && <G7 data={globalProfit}/>}
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