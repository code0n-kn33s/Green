
import chudik from './img/chudik.png'

const risks = {
    "BASE": "15-30% monthly",
    "BASE+15%": "17-35% monthly",
    "BASE+30%": "20-39% monthly",
    "BASE+45%": "23-45% monthly",
    "BASE+60%": "30-50% monthly",
    "BASE+75%": "40-75% monthly",
}

export function Terms(params) {
    return (
        <>
            <div className="terms">
                <div className="public-title">
                    Terms & Conditions AI ARBITECH7
                </div>
                <div className="terms-info">
                    <div className="description-img-wrap">
                        <img src={chudik} alt="#" />
                    </div>
                    <div className="terms-risks">
                        <div className="bordered terms-risks-title terms-risks-item-value">
                            Arbi pools
                        </div>
                        <div className="terms-risks-wrap">
                            {Object.entries(risks).map(([k, value], index) => (
                                <div className="public-item" key={index}>
                                    <div className="public-item-value bordered ">
                                        {k}
                                    </div>
                                    <div className="public-item-value  bordered">
                                        {value}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="terms-description bordered big-bordered">

                        <div className="terms-description">ARBITECH7 - правила преумножения крипто:</div>
                        <ul className="terms-description-list">
                            <li className="terms-description-list-item" >Крипто распределяется автоматически по торговымпулам (группам) согласно выбраной стратегиириска/доходности</li>
                            <li className="terms-description-list-item" >сроки действия пула - один месяц</li>
                            <li className="terms-description-list-item" >выбор уровня риска и доходности производитсяпользователем в момент пополнения пула - единоразово</li>
                            <li className="terms-description-list-item" >увеличение степени риска/доходности - увеличивает шансы на потери. Принимайте решения взвешенно!</li>
                            <li className="terms-description-list-item" >вывод доходности производится каждые 10 дней,т.е. 10го, 20го и 30го числа месяца</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}