import { useRef } from 'react'
// import Graphic2 from './Graphic2'
// import Graphic1 from './Graphic1'
import G6 from './G6'
import G5 from './G5'
import G4 from './G4'
import G3 from './G3'
import G2 from './G2'
import G1 from './G1'

export default function StatisticPage(params) {
  const chartRef = useRef(null);

  return (
    <div className="statistics-page page">
      <div className="page__sections-wrapper medium-wrapper">
        <section className="statistics-section">
          <h1 className="statistics-section__main-heading h3">Статистика</h1>

          <div className="statistics-section__balance-wrapper">
            <div className="statistics-section__balance-current">
              <h2 className="statistics-section__balance-heading">
                Текущий баланс:
              </h2>

              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--btc">0.00000000 BTC </span>
                <span className="statistics-section__balance-counter--eq"> = </span>
                <span className="statistics-section__balance-counter--usdt">$0.00</span>
              </p>

            </div>

            <div className="statistics-section__balance-revenue-per-day">
              <h2 className="statistics-section__balance-heading">
                Доход за 24 часа
              </h2>

              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--usdt">$0</span>
              </p>
            </div>

            <div className="statistics-section__balance-last-interval">
              <h2 className="statistics-section__balance-heading">
                Получено средств за последний период
              </h2>

              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--usdt">$0</span>
              </p>
            </div>
          </div>

          <div className="statistics-section__graphics-wrapper">
            <div className="statistics-section__graphics-column">
              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> Прибыль за сутки</span>
                  <span className="statistics-section__graphics-row-counter"> 0$</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* <canvas ref={chartRef}></canvas> */}
                  <G5 />

                </div>
              </div>

              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> Прибыль платформы от сделок</span>
                  <span className="statistics-section__graphics-row-counter"> 0$</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* <canvas id="intervalBar2"></canvas> */}
                  <G2 />
                </div>
              </div>

              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> Прибыль за сутки</span>
                  <span className="statistics-section__graphics-row-counter"> 0$</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* <canvas id="intervalBar3"></canvas> */}
                  <G3 />
                </div>
              </div>
            </div>

            <div className="statistics-section__graphics-column">
              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> Размещено в AI Arbitrage</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  <div className="statistics-section__graphics-row-body-column">
                    {/* <canvas id="ArbitrageAI">
                    </canvas> */}
                      <G1 />
                  </div>

                  <div className="statistics-section__graphics-row-body-column">
                    <ul className="statistics-section__graphics-row-vaults-list list-menu">
                      <li className="statistics-section__graphics-row-vaults-item">
                        <span className="statistics-section__graphics-row-vaults-item-currency">BTC</span>
                        <span className="statistics-section__graphics-row-vaults-item-price">(2.8054/40.00%)</span>
                      </li>
                      <li className="statistics-section__graphics-row-vaults-item">
                        <span className="statistics-section__graphics-row-vaults-item-currency">ETH</span>
                        <span className="statistics-section__graphics-row-vaults-item-price">(2.8054/40.00%)</span>
                      </li>
                      <li className="statistics-section__graphics-row-vaults-item">
                        <span className="statistics-section__graphics-row-vaults-item-currency">USDT</span>
                        <span className="statistics-section__graphics-row-vaults-item-price">(2.8054/40.00%)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> Процент доходности за период</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* <canvas id="intervalPercentage"></canvas> */}
                  <G4 />
                </div>
              </div>
            </div>
          </div>

          <div className="statistics-section__footer">
            <p>*Data update time refers to UTC + 0 time zone. The data maintenance time is 0am - 2am (UTC+0) every day. During this period, the calculation of today;s data is based on the assetst of previous
              day. After maintenance, all data will be displayed properly.</p>
            <p> *Statement: due to the complexity of financial data, there might be nuances and delay. Data displayed above is for reference only. We sincerely apologize for any inconvenience.</p>
          </div>
        </section>
      </div>
    </div>
  )

}