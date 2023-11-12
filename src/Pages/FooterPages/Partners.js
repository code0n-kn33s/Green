
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
    return (
        <div className="partners">

            <div className="partners-title public-title">
                Partners Program
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
                            <b>ARBITECH7</b> - правила партнерской программы:
                        </div>
                        <div className="partners-text-list terms-description-list">
                            <div className="partners-text-list-item terms-description-list-item">
                                При командном обороте свыше 1000 usdt исобственном депо свыше 500 usdt начисляются бонусы согласно таблицы.
                            </div>
                            <div className="partners-text-list-item terms-description-list-item">
                                При обороте свыше 100 000 вы получаете
                                единоразовый бонус 10%
                            </div>
                            <div className="partners-text-list-item terms-description-list-item">
                                Лимиты по зачету пользователей:
                                1й уровень - 10 чел, 2й уровень - 20 чел, 3, 4и 5й уровень - по 50 чел на каждый уровен
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}