import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalStatistics } from '../../toolkitReducers/actions.slice'

import G6 from './G6'
import G5 from './G5'
import G4 from './G4'
import G3 from './G3'
import G2 from './G2'
import G1 from './G1'
import G7 from '../FooterPages/G7'
import { useTranslation } from 'react-i18next';
export default function StatisticPage(params) {
  // const chartRef = useRef(null);
  // const data = useSelector(state => state.state.statistics)
  const dispatch = useDispatch();
const {t} = useTranslation();
  // const {
  //   // chart_data,
  //   user_balance,
  //   user_crypto_deposit_btc_usd,
  //   user_crypto_deposit_eth_usd,
  //   user_crypto_deposit_usdt_usd,
  //   user_profit_last_week,
  //   user_total_profit,
  // } = useSelector(state => state.state.statistics)

  // eth_balance btc_balance usdt_balance percent_weekly_profit weekly_profit
  const data = useSelector(state => state.state.statistics)

  useEffect(() => {
    dispatch(getGlobalStatistics())
    // console.log('data :>> ', data);
  }, [dispatch])

  return (
    <div className="statistics-page page">
      <div className="page__sections-wrapper medium-wrapper">
        <section className="statistics-section">
          <h1 className="statistics-section__main-heading h3">Статистика</h1>

          <div className="statistics-section__balance-wrapper">
            <div className="statistics-section__balance-current">
              <h2 className="statistics-section__balance-heading">
                {t("Итоговый баланс")}:
              </h2>

              {/* <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--usdt">${data?.user_balance} </span>
              </p> */}
              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--btc">BTC </span>
                <span className="statistics-section__balance-counter--eq"> = </span>
                <span className="statistics-section__balance-counter--btc">{data?.user_crypto_deposit_btc_usd}</span>
              </p>
              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--btc">ETH </span>
                <span className="statistics-section__balance-counter--eq"> = </span>
                <span className="statistics-section__balance-counter--btc">{data?.user_crypto_deposit_eth_usd}</span>
              </p>
              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--btc">USDT </span>
                <span className="statistics-section__balance-counter--eq"> = </span>
                <span className="statistics-section__balance-counter--btc">{data?.user_crypto_deposit_usdt_usd}</span>
              </p>


            </div>

            <div className="statistics-section__balance-revenue-per-day">
              <h2 className="statistics-section__balance-heading">
                {t("Профит за 24 часа")}
              </h2>

              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--usdt">%{data?.user_profit_last_24_hours}</span>
              </p>
            </div>

            <div className="statistics-section__balance-last-interval">
              <h2 className="statistics-section__balance-heading">
                {t("Итоговый профит")}
              </h2>

              <p className="statistics-section__balance-counter">
                <span className="statistics-section__balance-counter--usdt">%{data?.user_total_profit}</span>
              </p>
            </div>
          </div>

          <div className="statistics-section__graphics-wrapper">
            <div className="statistics-section__graphics-column">
              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading">
                    {/* {data?.chart_data?.datasets[0].label} */}
                    {t("Доходы пользователей")} 75%
                  </span>
                  {/* <span className="statistics-section__graphics-row-counter"> 0$</span> */}
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* I First */}
                  <G7  />

                </div>
              </div>

              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading">
                    {t("Прибыль платформы от сделок за неделю")}
                  </span>
                  <span className="statistics-section__graphics-row-counter">
                    {data?.user_profit_last_week}%
                  </span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* II Second */}
                  {data?.chart_data?.weekly_profit && <G2 prop={data?.chart_data?.weekly_profit} />}
                </div>
              </div>

              {/* <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> Прибыль за сутки</span>
                  <span className="statistics-section__graphics-row-counter"> {data?.user_profit_last_week}$</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {data?.chart_data?.daily_profit_today && <G3 prop={data?.chart_data?.daily_profit_today} />}
                </div>
              </div> */}
            </div>

            <div className="statistics-section__graphics-column">
              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> {t("Размещено в")} AI Arbitrage</span>
                </h2>

                <div className="statistics-section__graphics-row-body">
                  <div className="statistics-section__graphics-row-body-column">
                    {/* IV Second */}
                    {data?.chart_data?.currencies_balance
                      && <G1 prop={data?.chart_data?.currencies_balance} />}
                  </div>

                  <div className="statistics-section__graphics-row-body-column">
                    <ul className="statistics-section__graphics-row-vaults-list list-menu">
                      <li className="statistics-section__graphics-row-vaults-item">
                        <span className="statistics-section__graphics-row-vaults-item-currency">USDT</span>
                        <span className="statistics-section__graphics-row-vaults-item-price">
                          ({data?.chart_data?.currencies_balance.usdt})</span>
                      </li>
                      <li className="statistics-section__graphics-row-vaults-item">
                        <span className="statistics-section__graphics-row-vaults-item-currency">BTC</span>
                        <span className="statistics-section__graphics-row-vaults-item-price">
                          ({data?.chart_data?.currencies_balance.btc})</span>
                      </li>
                      <li className="statistics-section__graphics-row-vaults-item">
                        <span className="statistics-section__graphics-row-vaults-item-currency">ETH</span>
                        <span className="statistics-section__graphics-row-vaults-item-price">
                          ({data?.chart_data?.currencies_balance.eth})</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="statistics-section__graphics-row">
                <h2 className="statistics-section__graphics-row-heading-wrapper">
                  <span className="statistics-section__graphics-row-heading"> {t("История доходности")} (%)</span>

                  {/* <span className="statistics-section__graphics-row-heading"> Прибыль за сутки</span> */}
                  {/* <span className="statistics-section__graphics-row-counter">{data?.user_total_profit}$</span> */}
                </h2>

                <div className="statistics-section__graphics-row-body">
                  {/* V Second */}
                  {data?.chart_data?.percent_weekly_profit
                    && <G4 prop={data?.chart_data?.percent_weekly_profit} />
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="statistics-section__footer">
            <p>{t("statisticsSection1")}</p>
            <p>{t("statisticsSection2")}</p>
          </div>
        </section>
      </div>
    </div>
  )

}