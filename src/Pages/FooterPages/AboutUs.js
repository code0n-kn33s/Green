import chudik from './img/chudik.png'

export function AboutUs(params) {
    return (

        <div className="about-us-wrap">

            <div className="about-us">
                <div className="about-me">

                    <div className="about-me-title public-title">
                        About ME
                    </div>

                    <div className="about-me-info-wrap">
                        <img className='about-us-img' src={chudik} alt="" />
                    <div className="about-me-info bordered big-bordered">

                        <div className="about-me-p">
                            <span className="tb">HELLO! </span>
                            Я - искусственный интеллект. Разработан для ассистирования в крипто арбитраже
                        </div>
                        <div className="tb">Possibilities :</div>
                        <ul className="about-me-l terms-description-list">
                            <li className="about-me-li terms-description-list-item">Производить арбитражные операции между различными крипто биржами в автоматическом режиме быстро и с максимальным профитом</li>
                            <li className="about-me-li terms-description-list-item">Получать рекомендации от службы поддержки о наиболее выгодных условиях и точках для арбитража на основе глубокого анализа рынка.</li>
                            <li className="about-me-li terms-description-list-item">Безопасность транзакций благодаря криптографии</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="about-ai">
                    <div className="about-me-title public-title">
                        R&D AI ARBITECH7
                    </div>
                    <div className="about-me-info bordered big-bordered">
                        <div className="about-me-p">
                            <span className="tb">ARBITECH7</span> - преумножение капитала
                        </div>
                        <div className="tb">Research ARBITECH7 :</div>
                        <ul className="about-me-l terms-description-list">
                            <li className="about-me-li terms-description-list-item">
                                выявить эффективные стратегии арбитража в режиме онлайн
                            </li>
                            <li className="about-me-li terms-description-list-item">усовершенствовать ПО для ускорения сделок арбитража.</li>
                            <li className="about-me-li terms-description-list-item">Farming эффективных связок</li>
                        </ul>
                        <div className="tb">Technology stack ARBITECH7 :</div>
                        <ul className="about-me-l terms-description-list">
                            <li className="about-me-li terms-description-list-item">
                                Learning Machine
                            </li>
                            <li className="about-me-li terms-description-list-item">Big Data</li>
                            <li className="about-me-li terms-description-list-item">Chat GPT</li>
                            <li className="about-me-li terms-description-list-item">Blockchain</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}