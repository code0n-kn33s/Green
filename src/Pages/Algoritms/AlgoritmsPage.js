
import { useState, useEffect } from 'react'
import Table from './Table'
import ModalDialog from './Modal'
import {
  getUserSessions,
  getUserWallet,
  getRisks,
  getGlobalStatistics,
  setUserRisks,
  setSum,
} from '../../toolkitReducers/actions.slice'
import { useTranslation } from 'react-i18next';

import { useSelector, useDispatch } from 'react-redux'

export default function Algoritms(params) {
  const [isModal, setModal] = useState(false)
  const [isPromotion, setPromotion] = useState(100)
  const dispatch = useDispatch()

  const {t} = useTranslation();
  const wallet = useSelector(state => state.state.wallet)
  const statistics = useSelector(state => state.state.statistics)
  // const risks = useSelector(state => state.state.risks)

  // useEffect(() => {
  //   dispatch(getRisks())
  // }, [dispatch])

  const openModal = (prom) => {
    setPromotion(prom)
    setModal(!isModal)
  }

  return (
    <div className="algorithms-page algorithms-page__body-wrapper page__body-wrapper">
      <ModalDialog modalState={isModal} setModalState={openModal} promotion={isPromotion}/>
      <div className="algorithms-page__sections-wrapper page__sections-wrapper medium-wrapper">
        <section className="algorithms-section">
          <h1 className="algorithms-section__heading h3">{t("pulls")}</h1>

          <div className="algorithms-section__wrapper">
            <div className="algorithms-section__item">
              <h2 className="algorithms-section__item-heading">{t("Test")} AI</h2>

              <div className="algorithms-section__item-body">
                <div className="algorithms-section__item-row">
                  <div className="algorithms-section__item-row-left">{t("Сумма")}:</div>
                  <div className="algorithms-section__item-row-right bold">{t("От")} 100 USDT</div>
                </div>
                <div className="algorithms-section__item-row bold">
                  <div className="algorithms-section__item-row-left">{t("Доходность")}:</div>
                  <div className="algorithms-section__item-row-right bold">{t("До")} 25%</div>
                </div>
                <div className="algorithms-section__item-row">
                  <div className="algorithms-section__item-row-left">{t("Возможность тонкой настройки")}:</div>
                  <div className="algorithms-section__item-row-right bold">{t("Отсутсвует")}</div>
                </div>
              </div>

              <modal-opener>
                <button className="modal-opener btn btn--primary btn--large algorithms-section__item-button"
                  type="button"
                  id="replenishDeposit-open-1"
                  aria-controls="#replenishDeposit"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label=""
                  onClick={() => openModal(100)}
                > {t("Запустить")} AI</button>
              </modal-opener>
            </div>

            <div className="algorithms-section__item">
              <h2 className="algorithms-section__item-heading">{t("Custom")} AI</h2>

              <div className="algorithms-section__item-body">
                <div className="algorithms-section__item-row">
                  <div className="algorithms-section__item-row-left">{t("Сумма")}:</div>
                  <div className="algorithms-section__item-row-right bold">{t("От")} 500 USDT</div>
                </div>
                <div className="algorithms-section__item-row bold">
                  <div className="algorithms-section__item-row-left">{t("Доходность")}:</div>
                  <div className="algorithms-section__item-row-right bold">{t("До")} 75%</div>
                </div>
                <div className="algorithms-section__item-row">
                  <div className="algorithms-section__item-row-left">{t("Возможность тонкой настройки")}:</div>
                  <div className="algorithms-section__item-row-right bold">{t("Доступна кастомизация")}</div>
                </div>
              </div>

              <modal-opener>
                <button className="modal-opener btn btn--primary btn--large algorithms-section__item-button"
                  type="button"
                  id="replenishDeposit-open-2"
                  aria-controls="#replenishDeposit"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label=""
                  onClick={() => openModal(500)}

                  > {t("Запустить")} AI</button>
              </modal-opener>
            </div>

          </div>
        </section>

        <section className="algorithms-history">
          <tabs-component className="tabs">
            <div className="tabs__wrapper rel">
              {/* tabs */}
              {/* <div className="tabs__navigation  hide-scrollbar" role="tablist" aria-labelledby="tablist">
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
              </div> */}

              <div className="tabs__accordions-wrapper">
                <div className="tabs__list"
                  id="tabpanel-1"
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby="tab-1">
                  <div className="algorithms-history__table-wrapper">
                    <Table />
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