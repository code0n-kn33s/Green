
import { useTranslation } from 'react-i18next';
import people from './img/chudiki.png'

const table = [
    ['PARTNER', 'Bonus', 'Bonus', 'Bonus', 'Bonus', 'Bonus',],
    ["Level 1", '10 %', '', '', '', ''],
    ["Level 2", '10 %', '7.5 %', '', '', ''],
    ["Level 3", '10 %', '7 %', '5 %', '', ''],
    ["Level 4", '10 %', '6.5 %', '5 %', '3 %', ''],
    ["Level 5", '10 %', '5.5 %', '4.5 %', '3 %', '2 %',],
]

export function Partners(params) {
    const {t} = useTranslation();

    return (
        <div className="partners">

            <div className="partners-title public-title">
                {t("Partners Program")}
            </div>
            <div className="partners-info">
                <div className="partners-table">

                    <div className="partners-table-wrap terms-risks-wrap">
                        {table.map((items, index) => (
                            <div className="partners-table-row public-item" key={index}>
                                {
                                    items.map((item, index2) => (
                                        <div
                                        key={index2} className="partners-table-item public-item-value bordered ">
                                            {item}
                                        </div>
                                    ))
                                }

                            </div>
                        ))}

                    </div>

                </div>
                <div className="partners-block-text">
                    <img className="partners-block-img" src={people} alt="" />
                    <div className="partners-text bordered big-bordered">
                        <div className="partners-text-p">
                            <b>ARBITECH7</b> - {t("правила партнерской программы")}:
                        </div>
                        <div className="partners-text-list terms-description-list">
                            <div className="partners-text-list-item terms-description-list-item">
                                {t("rule1")}
                            </div>
                            <div className="partners-text-list-item terms-description-list-item">
                                {t("rule2")}
                            </div>
                            <div className="partners-text-list-item terms-description-list-item">
                                {t("rule3")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}