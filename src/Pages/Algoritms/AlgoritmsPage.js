
import Table from './Table'

export default function Algoritms(params) {
    return (
        <div className="algorithms-page algorithms-page__body-wrapper page__body-wrapper">

        <div className="algorithms-page__sections-wrapper page__sections-wrapper medium-wrapper">
          <section className="algorithms-section">
            <h1 className="algorithms-section__heading h3">Алгоритмы</h1>

            <div className="algorithms-section__wrapper">
              <div className="algorithms-section__item">
                <h2 className="algorithms-section__item-heading">Test AI</h2>

                <div className="algorithms-section__item-body">
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Сумма:</div>
                    <div className="algorithms-section__item-row-right bold">От 100 USD</div>
                  </div>
                  <div className="algorithms-section__item-row bold">
                    <div className="algorithms-section__item-row-left">Доходность:</div>
                    <div className="algorithms-section__item-row-right bold">До 25%</div>
                  </div>
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Возможность тонкой настройки:</div>
                    <div className="algorithms-section__item-row-right bold">Отсутсвует</div>
                  </div>
                </div>

                <modal-opener>
                  <button className="modal-opener btn btn--primary btn--large algorithms-section__item-button"
                          type="button"
                          id="replenishDeposit-open-1"
                          aria-controls="#replenishDeposit"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-label=""> Запустить AI</button>
                </modal-opener>
              </div>

              <div className="algorithms-section__item">
                <h2 className="algorithms-section__item-heading">Custom AI</h2>

                <div className="algorithms-section__item-body">
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Сумма:</div>
                    <div className="algorithms-section__item-row-right bold">От 500 USD</div>
                  </div>
                  <div className="algorithms-section__item-row bold">
                    <div className="algorithms-section__item-row-left">Доходность:</div>
                    <div className="algorithms-section__item-row-right bold">До 75%</div>
                  </div>
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Возможность тонкой настройки:</div>
                    <div className="algorithms-section__item-row-right bold">Доступна кастомизация</div>
                  </div>
                </div>

                <modal-opener>
                  <button className="modal-opener btn btn--primary btn--large algorithms-section__item-button"
                          type="button"
                          id="replenishDeposit-open-2"
                          aria-controls="#replenishDeposit"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-label=""> Запустить AI</button>
                </modal-opener>
              </div>

            </div>
          </section>

          <section className="algorithms-history">
            <tabs-component className="tabs">
              <div className="tabs__wrapper rel">
                <div className="tabs__navigation  hide-scrollbar" role="tablist" aria-labelledby="tablist">
                  <button className="tabs__header-tab btn btn--primary"
                          role="tab"
                          type="button"
                          tabIndex="0"
                          id="tab-1"
                          aria-controls="tabpanel-1"
                          aria-selected="true">
                    <span className="world_1">Активно</span>
                    <span className="world_2">1</span>
                  </button>

                  <button className="tabs__header-tab btn btn--primary"
                          role="tab"
                          type="button"
                          tabIndex="-1"
                          id="tab-2"
                          aria-controls="tabpanel-2"
                          aria-selected="false">
                    <span className="world_1">Завершено</span>
                    <span className="world_2">0</span>
                  </button>
                </div>

                <div className="tabs__accordions-wrapper">
                  <div className="tabs__list"
                       id="tabpanel-1"
                       role="tabpanel"
                       tabIndex="0"
                       aria-labelledby="tab-1">
                    <div className="algorithms-history__table-wrapper">
                        <Table/>
                    </div>
                  </div>

                  <div className="tabs__list"
                       id="tabpanel-2"
                       role="tabpanel"
                       tabIndex="-1"
                       aria-labelledby="tab-2" hidden>
                    <div className="algorithms-history__table-wrapper">
                        <Table />
                    </div>
                  </div>
                </div>
              </div>
            </tabs-component>
          </section>
        </div>
      </div>
    )
}