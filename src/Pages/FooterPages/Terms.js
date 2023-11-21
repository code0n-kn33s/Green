
import chudik from './img/chudik.png'
import { useTranslation } from 'react-i18next';

const risks = {
    "BASE": "15-30% monthly",
    "BASE+15%": "17-35% monthly",
    "BASE+30%": "20-39% monthly",
    "BASE+45%": "23-45% monthly",
    "BASE+60%": "30-50% monthly",
    "BASE+75%": "40-75% monthly",
}

export function Terms(params) {

    const {t} = useTranslation();

    return (
        <>
            <div className="terms">
                <div className="public-title">
                    {t("Terms & Conditions")} AI ARBITECH7
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

                        <div className="terms-description">ARBITECH7 - {t("правила преумножения крипто")}:</div>
                        <ul className="terms-description-list">
                            <li className="terms-description-list-item" >{t("distributed")}</li>
                            <li className="terms-description-list-item" >{t("сроки действия пула - один месяц")}</li>
                            <li className="terms-description-list-item" >{t("choose")}</li>
                            <li className="terms-description-list-item" >{t("увеличение степени риска/доходности - увеличивает шансы на потери. Принимайте решения взвешенно")}!</li>
                            <li className="terms-description-list-item" >{t("profit10")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}