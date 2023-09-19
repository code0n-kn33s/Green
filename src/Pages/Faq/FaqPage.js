import { useEffect, useState, useCallback } from 'react'
import {
  getRisks,
  getGlobalStatistics,
  setRisks
} from '../../toolkitReducers/actions.slice'
import { useSelector, useDispatch } from 'react-redux'

export default function FaqPage(params) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDisabled, setDisabled] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [isPercentRists, setIsPercentRisk] = useState(0)
  const dispatch = useDispatch()
  const risks = useSelector(state => state.state.risks)

  useEffect(() => {
    dispatch(getRisks())
  }, [dispatch])

  useEffect(() => {
    if (risks && !isLoaded) {
      setPercentage(Math.ceil(risks[risks.length - 1].risk))
      setChecks(Math.ceil(risks[risks.length - 1].risk))
      setIsLoaded(true)
    }
  }, [risks, isLoaded])

  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
    setChecks(event.target.value)
};

const setChecks = (value) => {
  if(value >= 75) {
    setIsPercentRisk(3)
  }
  if(value >= 45) {
    setIsPercentRisk(3)
  }
  if(value >= 15 && value <= 45) {
    setIsPercentRisk(2)
  }
  if(value >= 0 && value <= 15) {
    setIsPercentRisk(1)
  }
  if(value == 0 ) {
    setIsPercentRisk(0)
  }
}
  const clickFaq = () => {
    // dispatch(getRisks())
    // dispatch(getGlobalStatistics())
    dispatch(setRisks({ current_risk: percentage }))

  }


  return (
    <div className="page__sections-wrapper medium-wrapper">
      <section className="details-section" data-limit="2000">
        <h1 className="details-section__main-heading h3">Подробно:</h1>

        <form className="details-section__wrapper form details-section__form rel" action="/action_page.php" method="post">
          <h2 className="details-section__heading">Настройка доходности: {percentage}%
          <div style={{ fontWeight: 300, fontSize: '10px'}}>*доходность можно менять только после пополнения баланса</div>
          </h2>
          <div className="details-section__progress-bar-wrapper">
            <div className="details-section__progress-bar">
              <div className="form-container form-container--range range">
                <ul className="range__list">
                  <li className="range__list-item">0%</li>
                  <li className="range__list-item">15%</li>
                  <li className="range__list-item">30%</li>
                  <li className="range__list-item">45%</li>
                  <li className="range__list-item">60%</li>
                  <li className="range__list-item">75%</li>
                </ul>
                <input disabled
                  type="range"
                  value={percentage}
                  onChange={handlePercentageChange}
                  id="percent"
                  name="royalty"
                  min="0"
                  max="75"
                  step="15"
                  disabled={isDisabled ? true : false}
                  className={`${isDisabled && 'disabled'} `}
                />
              </div>
            </div>

            <p className="details-section__progress-bar-description">
              *Увеличение доходности влечет за собой
              риски утери средств. Использовать осторожно..
            </p>
          </div>

          <div className="details-section__footer">
            <div className="details-section__footer-column">
              <h3 className="details-section__footer-column-heading bold">
                Контроль риска 1 уровня:
              </h3>

              <div className="details-section__footer-column-checkboxes">
                <div className="form-container--checkbox checkbox">
                  <input disabled
                    data-min-price="1500"
                    className="form__custom-checkbox disabled-checkbox"
                    type="checkbox"
                    name="accept"
                    checked={isPercentRists > 0 && true}
                    id="controlLvl1-1"
                  />

                  <label htmlFor="controlLvl1-1">
                    Разрешить длинные цепочки обмена
                  </label>
                </div>

                <div className="form-container--checkbox checkbox">
                  <input disabled checked={isPercentRists > 0 && true} data-min-price="1500" className="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl1-2" />

                  <label htmlFor="controlLvl1-2">
                    Разрешить использовать новые токены
                  </label>
                </div>
              </div>

              <p className="details-section__footer-column-description">
                *Доступно при размещении от 1500USD.
                Каждый пункт добавляет до 5% доходности.
              </p>
            </div>

            <div className="details-section__footer-column">
              <h3 className="details-section__footer-column-heading bold">
                Контроль риска 2 уровня:
              </h3>

              <div className="details-section__footer-column-checkboxes">
                <div className="form-container--checkbox checkbox">
                  <input disabled checked={isPercentRists > 1 && true} data-min-price="3000" className="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl2-1" />

                  <label htmlFor="controlLvl2-1">
                    Разрешить использовать новые обменные площадки
                  </label>
                </div>

                <div className="form-container--checkbox checkbox">
                  <input disabled checked={isPercentRists > 1 && true} data-min-price="3000" className="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl2-2" />

                  <label htmlFor="controlLvl2-2">
                    Не использовать классические пары
                  </label>
                </div>
              </div>

              <p className="details-section__footer-column-description">
                *Доступно при размещении от 3000USD.
                Каждый пункт добавляет до 10% доходности.
              </p>
            </div>

            <div className="details-section__footer-column">
              <h3 className="details-section__footer-column-heading bold">
                Контроль риска 3 уровня:
              </h3>

              <div className="details-section__footer-column-checkboxes">
                <div className="form-container--checkbox checkbox">
                  <input disabled data-min-price="5000" checked={isPercentRists > 2 && true} className="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl3-1" />

                  <label htmlFor="controlLvl3-1">
                    Использовать только новые токены
                  </label>
                </div>

                <div className="form-container--checkbox checkbox">
                  <input disabled checked={isPercentRists > 2 && true} data-min-price="5000" className="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl3-2" />

                  <label htmlFor="controlLvl3-2">
                    Использовать только свопы
                  </label>
                </div>
              </div>

              <p className="details-section__footer-column-description">
                *Доступно при размещении от 5000USD.
                Каждый пункт добавляет до 10% доходности.
              </p>
            </div>

            <div className="details-section__footer-column">
              <button type="button" onClick={clickFaq} className="details-section__form-submit-btn btn btn--primary">
                Применить
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="sessions-section medium-wrapper">
        <div className="sessions-section__table-wrapper">
          <table className="sessions-section__table-body">
            <tr className="sessions-section__table-heading-row rel">
              <th>
                <div className="sessions-section__table-td-wrapper">
                  <span>Дата</span>
                </div>
              </th>

              <th>
                <div className="sessions-section__table-td-wrapper">
                  <span>
                    Сумма
                  </span>
                </div>
              </th>

              <th>
                <div className="sessions-section__table-td-wrapper">
                  <span>
                  Тип
                  </span>
                </div>
              </th>

              <th>
                <div className="sessions-section__table-td-wrapper">
                  <span>
                  Пользователь
                  </span>
                </div>
              </th>

              <th>
                <div className="sessions-section__table-td-wrapper">
                  <span>
                    Статус
                  </span>
                </div>
              </th>
            </tr>

            {risks?.map(risk => (
              <tr key={risk.id} className="sessions-section__table-body-row">
                <td>{risk.date}</td>
                <td>{risk.profit}USD</td>
                {/* <td>{risk.risk}%</td> */}
                <td>{risk.risk}%</td>
                <td>{risk.user}</td>
                <td>Success</td>
              </tr>
            ))}

          </table>
        </div>

        <div className="sessions-section__footer-wrapper">
          <div className="sessions-section__controls">
            <div className="sessions-section__controls-counter">
              <span className="sessions-section__controls-counter-current-page">0</span>
              /
              <span className="sessions-section__controls-counter-all-pages">0</span>
            </div>
            <div className="sessions-section__controls-buttons">
              <button type="button" className="sessions-section__controls-first-page btn--reset link">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 0V14M13 1L7 7L13 13" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <button type="button" className="sessions-section__controls-previous-page btn--reset link">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path d="M8 1L2 7L8 13" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              <button type="button" className="sessions-section__controls-next-page btn--reset link">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              <button type="button" className="sessions-section__controls-last-page btn--reset link">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 0V14M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="sessions-section__footer-settings">
            <span>На странице :</span>

            <custom-select className="custom-select">
              <button
                className="custom-select__btn"
                tabIndex="0"
                aria-expanded="false"
                aria-controls="dropdown-2"
              >
                <span data-button-label className="custom-select__btn-text">10</span>

                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                  <path d="M0.721313 1.42859L6.86885 7.50002L13.0164 1.42859" stroke="#FFF831" color="#FFF831" strokeWidth="1.5" />
                </svg>
              </button>

              <ul data-dropdown className="custom-select__dropdown list-menu" id="dropdown-2">
                <li className="custom-select__dropdown-option" data-option-value="1" aria-selected="false">
                  <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                    1
                  </button>
                </li>

                <li className="custom-select__dropdown-option" data-option-value="2" aria-selected="false">
                  <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                    2
                  </button>
                </li>

                <li className="custom-select__dropdown-option" data-option-value="3" aria-selected="false">
                  <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                    3
                  </button>
                </li>

                <li className="custom-select__dropdown-option" data-option-value="10" aria-selected="true">
                  <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                    10
                  </button>
                </li>
              </ul>

              <input disabled type="hidden" className="custom-select__input-hidden" value="10" />
            </custom-select>
          </div>
        </div>
      </section>
    </div>
  )
}