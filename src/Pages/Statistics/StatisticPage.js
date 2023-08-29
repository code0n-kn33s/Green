export default function StatisticPage(params) {

    return (
        <div class="page__sections-wrapper medium-wrapper">
        <section class="statistics-section">
          <h1 class="statistics-section__main-heading h3">Статистика</h1>

          <div class="statistics-section__balance-wrapper">
            <div class="statistics-section__balance-current">
              <h2 class="statistics-section__balance-heading">
                Текущий баланс:
              </h2>

              <p class="statistics-section__balance-counter">
                <span class="statistics-section__balance-counter--btc">0.00000000 BTC </span>
                <span class="statistics-section__balance-counter--eq"> = </span>
                <span class="statistics-section__balance-counter--usdt">$0.00</span>
              </p>
            </div>

            <div class="statistics-section__balance-revenue-per-day">
              <h2 class="statistics-section__balance-heading">
                Доход за 24 часа
              </h2>

              <p class="statistics-section__balance-counter">
                <span class="statistics-section__balance-counter--usdt">$0</span>
              </p>
            </div>

            <div class="statistics-section__balance-last-interval">
              <h2 class="statistics-section__balance-heading">
                Получено средств за последний период
              </h2>

              <p class="statistics-section__balance-counter">
                <span class="statistics-section__balance-counter--usdt">$0</span>
              </p>
            </div>
          </div>

          <div class="statistics-section__graphics-wrapper">
            <div class="statistics-section__graphics-column">
              <div class="statistics-section__graphics-row">
                <h2 class="statistics-section__graphics-row-heading-wrapper">
                  <span class="statistics-section__graphics-row-heading"> Прибыль за сутки</span>
                  <span class="statistics-section__graphics-row-counter"> 0$</span>
                </h2>

                <div class="statistics-section__graphics-row-body">
                  <canvas id="intervalBar1"></canvas>
                </div>
              </div>

              <div class="statistics-section__graphics-row">
                <h2 class="statistics-section__graphics-row-heading-wrapper">
                  <span class="statistics-section__graphics-row-heading"> Прибыль платформы от сделок</span>
                  <span class="statistics-section__graphics-row-counter"> 0$</span>
                </h2>

                <div class="statistics-section__graphics-row-body">
                  <canvas id="intervalBar2"></canvas>
                </div>
              </div>

              <div class="statistics-section__graphics-row">
                <h2 class="statistics-section__graphics-row-heading-wrapper">
                  <span class="statistics-section__graphics-row-heading"> Прибыль за сутки</span>
                  <span class="statistics-section__graphics-row-counter"> 0$</span>
                </h2>

                <div class="statistics-section__graphics-row-body">
                  <canvas id="intervalBar3"></canvas>
                </div>
              </div>
            </div>

            <div class="statistics-section__graphics-column">
              <div class="statistics-section__graphics-row">
                <h2 class="statistics-section__graphics-row-heading-wrapper">
                  <span class="statistics-section__graphics-row-heading"> Размещено в AI Arbitrage</span>
                </h2>

                <div class="statistics-section__graphics-row-body">
                  <div class="statistics-section__graphics-row-body-column">
                    <canvas id="ArbitrageAI"></canvas>
                  </div>

                  <div class="statistics-section__graphics-row-body-column">
                    <ul class="statistics-section__graphics-row-vaults-list list-menu">
                      <li class="statistics-section__graphics-row-vaults-item" style={{backgroundColor: "#FF7508"}}>
                        <span class="statistics-section__graphics-row-vaults-item-currency">BTC</span>
                        <span class="statistics-section__graphics-row-vaults-item-price">(2.8054/40.00%)</span>
                      </li>
                      <li class="statistics-section__graphics-row-vaults-item"  style={{backgroundColor: "#FF0000"}}>
                        <span class="statistics-section__graphics-row-vaults-item-currency">ETH</span>
                        <span class="statistics-section__graphics-row-vaults-item-price">(2.8054/40.00%)</span>
                      </li>
                      <li class="statistics-section__graphics-row-vaults-item" style={{backgroundColor:  "#47B64C"}}>
                        <span class="statistics-section__graphics-row-vaults-item-currency">USDT</span>
                        <span class="statistics-section__graphics-row-vaults-item-price">(2.8054/40.00%)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="statistics-section__graphics-row">
                <h2 class="statistics-section__graphics-row-heading-wrapper">
                  <span class="statistics-section__graphics-row-heading"> Процент доходности за период</span>
                </h2>

                <div class="statistics-section__graphics-row-body">
                  <canvas id="intervalPercentage"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div class="statistics-section__footer">
            <p>*Data update time refers to UTC + 0 time zone. The data maintenance time is 0am - 2am (UTC+0) every day. During this period, the calculation of today;s data is based on the assetst of previous
              day. After maintenance, all data will be displayed properly.</p>
            <p> *Statement: due to the complexity of financial data, there might be nuances and delay. Data displayed above is for reference only. We sincerely apologize for any inconvenience.</p>
          </div>
        </section>
      </div>
    )

}