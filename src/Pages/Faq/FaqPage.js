export default function FaqPage(params) {
    return (
        <div class="page__sections-wrapper medium-wrapper">
        <section class="details-section" data-limit="2000">
          <h1 class="details-section__main-heading h3">Подробно:</h1>

          <form class="details-section__wrapper form details-section__form rel"  action="/action_page.php" method="post">
            <h2 class="details-section__heading">Настройка доходности:</h2>

            <div class="details-section__progress-bar-wrapper">
              <div class="details-section__progress-bar">
                <div class="form-container form-container--range range">
                  <ul class="range__list">
                    <li class="range__list-item">25%</li>
                    <li class="range__list-item">30%</li>
                    <li class="range__list-item">35%</li>
                    <li class="range__list-item">45%</li>
                    <li class="range__list-item">55%</li>
                    <li class="range__list-item">65%</li>
                    <li class="range__list-item">75%</li>
                  </ul>
                  <input type="range" id="percent" name="royalty" min="1" max="7" step="1"/>
                </div>
              </div>

              <p class="details-section__progress-bar-description">
                *Увеличение доходности влечет за собой
                риски утери средств. Использовать осторожно..
              </p>
            </div>

            <div class="details-section__footer">
              <div class="details-section__footer-column">
                <h3 class="details-section__footer-column-heading bold">
                  Контроль риска 1 уровня:
                </h3>

                <div class="details-section__footer-column-checkboxes">
                  <div class="form-container--checkbox checkbox">
                    <input data-min-price="1500" class="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl1-1"/>

                    <label for="controlLvl1-1">
                      Разрешить длинные цепочки обмена
                    </label>
                  </div>

                  <div class="form-container--checkbox checkbox">
                    <input data-min-price="1500" class="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl1-2"/>

                    <label for="controlLvl1-2">
                      Разрешить использовать новые токены
                    </label>
                  </div>
                </div>

                <p class="details-section__footer-column-description">
                  *Доступно при размещении от 1500USD.
                  Каждый пункт добавляет до 5% доходности.
                </p>
              </div>

              <div class="details-section__footer-column">
                <h3 class="details-section__footer-column-heading bold">
                  Контроль риска 2 уровня:
                </h3>

                <div class="details-section__footer-column-checkboxes">
                  <div class="form-container--checkbox checkbox">
                    <input data-min-price="3000" class="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl2-1"/>

                    <label for="controlLvl2-1">
                      Разрешить использовать новые обменные площадки
                    </label>
                  </div>

                  <div class="form-container--checkbox checkbox">
                    <input data-min-price="3000" class="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl2-2"/>

                    <label for="controlLvl2-2">
                      Не использовать классические пары
                    </label>
                  </div>
                </div>

                <p class="details-section__footer-column-description">
                  *Доступно при размещении от 3000USD.
                  Каждый пункт добавляет до 10% доходности.
                </p>
              </div>

              <div class="details-section__footer-column">
                <h3 class="details-section__footer-column-heading bold">
                  Контроль риска 3 уровня:
                </h3>

                <div class="details-section__footer-column-checkboxes">
                  <div class="form-container--checkbox checkbox">
                    <input data-min-price="5000" class="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl3-1"/>

                    <label for="controlLvl3-1">
                      Использовать только новые токены
                    </label>
                  </div>

                  <div class="form-container--checkbox checkbox">
                    <input data-min-price="5000" class="form__custom-checkbox" type="checkbox" name="accept" id="controlLvl3-2"/>

                    <label for="controlLvl3-2">
                      Использовать только свопы
                    </label>
                  </div>
                </div>

                <p class="details-section__footer-column-description">
                  *Доступно при размещении от 5000USD.
                  Каждый пункт добавляет до 10% доходности.
                </p>
              </div>

              <div class="details-section__footer-column">
                <button type="submit" class="details-section__form-submit-btn btn btn--primary">
                  Применить
                </button>
              </div>
            </div>
          </form>
        </section>

        <section class="sessions-section medium-wrapper">
          <div class="sessions-section__table-wrapper">
            <table class="sessions-section__table-body">
              <tr class="sessions-section__table-heading-row rel">
                <th>
                  <div class="sessions-section__table-td-wrapper">
                    <span>Дата</span>
                  </div>
                </th>

                <th>
                  <div class="sessions-section__table-td-wrapper">
                    <span>
                      валюта
                    </span>
                  </div>
                </th>

                <th>
                  <div class="sessions-section__table-td-wrapper">
                    <span>
                      Сумма
                    </span>
                  </div>
                </th>

                <th>
                  <div class="sessions-section__table-td-wrapper">
                    <span>
                      Тип
                    </span>
                  </div>
                </th>

                <th>
                  <div class="sessions-section__table-td-wrapper">
                    <span>
                      Статус
                    </span>
                  </div>
                </th>
              </tr>

              <tr class="sessions-section__table-body-row">
                <td>03.10.2020 13:26:26</td>
                <td>USDT</td>
                <td>350</td>
                <td>50%</td>
                <td>Success</td>
              </tr>
              <tr class="sessions-section__table-body-row">
                <td>03.10.2020 13:26:26</td>
                <td>USDT</td>
                <td>350</td>
                <td>50%</td>
                <td>Success</td>
              </tr>
              <tr class="sessions-section__table-body-row">
                <td>03.10.2020 13:26:26</td>
                <td>USDT</td>
                <td>350</td>
                <td>25%</td>
                <td>Success</td>
              </tr>
              <tr class="sessions-section__table-body-row">
                <td>03.10.2020 13:26:26</td>
                <td>USDT</td>
                <td>350</td>
                <td>25%</td>
                <td>Success</td>
              </tr>
              <tr class="sessions-section__table-body-row">
                <td>03.10.2020 13:26:26</td>
                <td>USDT</td>
                <td>-35</td>
                <td>20%</td>
                <td>Success</td>
              </tr>
            </table>
          </div>

          <div class="sessions-section__footer-wrapper">
            <div class="sessions-section__controls">
              <div class="sessions-section__controls-counter">
                <span class="sessions-section__controls-counter-current-page">0</span>
                /
                <span class="sessions-section__controls-counter-all-pages">0</span>
              </div>
              <div class="sessions-section__controls-buttons">
                <button type="button" class="sessions-section__controls-first-page btn--reset link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 0V14M13 1L7 7L13 13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </button>
                <button type="button" class="sessions-section__controls-previous-page btn--reset link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <path d="M8 1L2 7L8 13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </button>

                <button type="button" class="sessions-section__controls-next-page btn--reset link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </button>

                <button type="button" class="sessions-section__controls-last-page btn--reset link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 0V14M1 1L7 7L1 13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="sessions-section__footer-settings">
              <span>На странице :</span>

              <custom-select class="custom-select">
                <button class="custom-select__btn" tabIndex="0" aria-expanded="false" aria-controls="dropdown-2">
                  <span data-button-label class="custom-select__btn-text">10</span>

                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M0.721313 1.42859L6.86885 7.50002L13.0164 1.42859" stroke="#FFF831" color="#FFF831" stroke-width="1.5"/>
                  </svg>
                </button>

                <ul data-dropdown class="custom-select__dropdown list-menu" id="dropdown-2">
                  <li class="custom-select__dropdown-option" data-option-value="1" aria-selected="false">
                    <button data-dropdown-button class="btn--reset link custom-select__dropdown-button">
                      1
                    </button>
                  </li>

                  <li class="custom-select__dropdown-option" data-option-value="2" aria-selected="false">
                    <button data-dropdown-button class="btn--reset link custom-select__dropdown-button">
                      2
                    </button>
                  </li>

                  <li class="custom-select__dropdown-option" data-option-value="3" aria-selected="false">
                    <button data-dropdown-button class="btn--reset link custom-select__dropdown-button">
                      3
                    </button>
                  </li>

                  <li class="custom-select__dropdown-option" data-option-value="10" aria-selected="true">
                    <button data-dropdown-button class="btn--reset link custom-select__dropdown-button">
                      10
                    </button>
                  </li>
                </ul>

                <input type="hidden" class="custom-select__input-hidden" value="10"/>
              </custom-select>
            </div>
          </div>
        </section>
      </div>
    )
}