import chudik from './img/chudik.png'
import { useTranslation } from 'react-i18next';
export function AboutUs(params) {
    const {t} = useTranslation();
    return (

        <div className="about-us-wrap">

            <div className="about-us">
                <div className="about-me">

                    <div className="about-me-title public-title">
                        {t("About ME")}
                    </div>

                    <div className="about-me-info-wrap">
                        <img className='about-us-img' src={chudik} alt="" />
                    <div className="about-me-info bordered big-bordered">

                        <div className="about-me-p">
                            <span className="tb">{t("HELLO")}! </span>
                            {t("iam")}
                        </div>
                        <div className="tb">{t("Possibilities")} :</div>
                        <ul className="about-me-l terms-description-list">
                            <li className="about-me-li terms-description-list-item">{t("operations")}</li>
                            <li className="about-me-li terms-description-list-item">{t("take")}.</li>
                            <li className="about-me-li terms-description-list-item">{t("Безопасность транзакций благодаря криптографии")}</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="about-ai">
                    <div className="about-me-title public-title">
                        R&D AI {t("ARBITECH")}7
                    </div>
                    <div className="about-me-info bordered big-bordered">
                        <div className="about-me-p">
                            <span className="tb">ARBITECH7</span> - {t("преумножение капитала")}
                        </div>
                        <div className="tb">{t("Research")} ARBITECH7 :</div>
                        <ul className="about-me-l terms-description-list">
                            <li className="about-me-li terms-description-list-item">
                                {t("выявить эффективные стратегии арбитража в режиме онлайн")}
                            </li>
                            <li className="about-me-li terms-description-list-item">{t("усовершенствовать ПО для ускорения сделок арбитража")}.</li>
                            <li className="about-me-li terms-description-list-item">{t("Формирование эффективных связок")}</li>
                        </ul>
                        <div className="tb">{t("Technology stack")} ARBITECH7 :</div>
                        <ul className="about-me-l terms-description-list">
                            <li className="about-me-li terms-description-list-item">
                                {t("Learning Machine")}
                            </li>
                            <li className="about-me-li terms-description-list-item">{t("Big Data")}</li>
                            <li className="about-me-li terms-description-list-item">{t("Chat GPT")}</li>
                            <li className="about-me-li terms-description-list-item">{t("Blockchain")}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}