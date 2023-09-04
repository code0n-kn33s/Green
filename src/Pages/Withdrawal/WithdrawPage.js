
export default function WithdrawPage(params) {
    return (
        <div class="withdrawal-page page">
            <div class="page__sections-wrapper medium-wrapper">
                <section class="withdrawal-section">
                    <h1 class="withdrawal-section__main-heading h3">Вывод средств</h1>

                    <form class="withdrawal-section__wrapper form withdrawal-section__form rel" action="/action_page.php" method="post">
                        <div class="withdrawal-section__wrapper-side">
                            <tabs-component class="tabs">
                                <div class="tabs__wrapper rel">
                                    <div class="withdrawal-section__header">
                                        <h2 class="withdrawal-section__body-heading">Выберите монету</h2>

                                        <div class="tabs__navigation hide-scrollbar" role="tablist" aria-labelledby="tablist">
                                            <custom-select class="custom-select">
                                                <button type="button" class="custom-select__btn" tabIndex="0" aria-expanded="false" aria-controls="dropdown">
                                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                                        <path d="M0.721313 1.42859L6.86885 7.50002L13.0164 1.42859" stroke="#FFF831" color="currentColor" stroke-width="1.5" />
                                                    </svg>
                                                    <span data-button-label class="custom-select__btn-text-wrapper">
                                                        <span class="custom-select__btn-text">Ethereum</span>
                                                        <span class="custom-select__btn-money">
                                                            <span class="custom-select__btn-money-local">
                                                                1.25000000
                                                                <span class="custom-select__btn-money-currency">ETH</span>
                                                            </span>

                                                            <span class="custom-select__btn-money-universal">
                                                                2 401
                                                                <span class="custom-select__btn-money-currency">USD</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>

                                                <ul data-dropdown class="custom-select__dropdown list-menu" id="dropdown">
                                                    <li class="custom-select__dropdown-option" data-option-value="1" aria-selected="false">
                                                        <button class="tabs__header-tab btn--reset link custom-select__dropdown-button"
                                                            data-dropdown-button
                                                            role="tab"
                                                            type="button"
                                                            tabindex="0"
                                                            id="tab-replenish-deposit-1"
                                                            aria-controls="tabpanel-replenish-deposit-1"
                                                            aria-selected="true">
                                                            <span data-button-label class="custom-select__btn-text-wrapper">
                                                                <span class="custom-select__btn-text">Ethereum</span>
                                                                <span class="custom-select__btn-money">
                                                                    <span class="custom-select__btn-money-local">
                                                                        1.25000000
                                                                        <span class="custom-select__btn-money-currency">ETH</span>
                                                                    </span>

                                                                    <span class="custom-select__btn-money-universal">
                                                                        2 401
                                                                        <span class="custom-select__btn-money-currency">USD</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </li>

                                                    <li class="custom-select__dropdown-option" data-option-value="2" aria-selected="false">
                                                        <button class="tabs__header-tab btn--reset link custom-select__dropdown-button"
                                                            data-dropdown-button
                                                            role="tab"
                                                            type="button"
                                                            tabindex="0"
                                                            id="tab-replenish-deposit-2"
                                                            aria-controls="tabpanel-replenish-deposit-2"
                                                            aria-selected="false">
                                                            <span data-button-label class="custom-select__btn-text-wrapper">
                                                                <span class="custom-select__btn-text">Bitcoin</span>
                                                                <span class="custom-select__btn-money">
                                                                    <span class="custom-select__btn-money-local">
                                                                        0.00000221
                                                                        <span class="custom-select__btn-money-currency">BTC</span>
                                                                    </span>

                                                                    <span class="custom-select__btn-money-universal">
                                                                        2 401
                                                                        <span class="custom-select__btn-money-currency">USD</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </li>

                                                    <li class="custom-select__dropdown-option" data-option-value="3" aria-selected="false">
                                                        <button class="tabs__header-tab btn--reset link custom-select__dropdown-button"
                                                            data-dropdown-button
                                                            role="tab"
                                                            type="button"
                                                            tabindex="0"
                                                            id="tab-replenish-deposit-3"
                                                            aria-controls="tabpanel-replenish-deposit-3"
                                                            aria-selected="false">
                                                            <span data-button-label class="custom-select__btn-text-wrapper">
                                                                <span class="custom-select__btn-text">USDT</span>
                                                                <span class="custom-select__btn-money">
                                                                    <span class="custom-select__btn-money-local">
                                                                        2401.00
                                                                        <span class="custom-select__btn-money-currency">USDT</span>
                                                                    </span>

                                                                    <span class="custom-select__btn-money-universal">
                                                                        2 401
                                                                        <span class="custom-select__btn-money-currency">USD</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </li>
                                                </ul>

                                                <input type="hidden" class="custom-select__input-hidden" value="Ethereum" />
                                            </custom-select>
                                        </div>
                                    </div>

                                    <div class="tabs__list"
                                        id="tabpanel-replenish-deposit-1"
                                        role="tabpanel"
                                        tabindex="0"
                                        aria-labelledby="tab-replenish-deposit-1">

                                        <div class="withdrawal-section__invoice-wrapper">
                                            <p class="withdrawal-section__invoice-network-heading">Сеть</p>

                                            <div class="withdrawal-section__progress-bar">
                                                <div class="form-container form-container--range form-container--range-bg range">
                                                    <ul class="range__list">
                                                        <li class="range__list-item">0%</li>
                                                        <li class="range__list-item">25%</li>
                                                        <li class="range__list-item">50%</li>
                                                        <li class="range__list-item">75%</li>
                                                        <li class="range__list-item">100%</li>
                                                    </ul>
                                                    <input type="range" id="percentEth" name="percentage" value="0" min="0" max="100" step="25" />

                                                    <div class="min-max__range-item-wrapper">
                                                        <p class="min-max__range-item-min">0</p>
                                                        <p class="min-max__range-item-max">2401.00 USDT</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-container form-container--wallet">
                                                <label for="walletEth">Адрес получателя</label>
                                                <input type="text" name="walletEth" id="walletEth" placeholder="Введите адрес для отправки" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tabs__list"
                                        id="tabpanel-replenish-deposit-2"
                                        role="tabpanel"
                                        tabindex="0"
                                        aria-labelledby="tab-replenish-deposit-2" hidden>

                                        <div class="withdrawal-section__invoice-wrapper">
                                            <p class="withdrawal-section__invoice-heading">
                                                BTC Адрес
                                            </p>

                                            <div class="withdrawal-section__progress-bar">
                                                <div class="form-container form-container--range form-container--range-bg range">
                                                    <ul class="range__list">
                                                        <li class="range__list-item">0%</li>
                                                        <li class="range__list-item">25%</li>
                                                        <li class="range__list-item">50%</li>
                                                        <li class="range__list-item">75%</li>
                                                        <li class="range__list-item">100%</li>
                                                    </ul>
                                                    <input type="range" id="percentBtc" name="percentage" value="0" min="0" max="100" step="25" />

                                                    <div class="min-max__range-item-wrapper">
                                                        <p class="min-max__range-item-min">0</p>
                                                        <p class="min-max__range-item-max">2401.00 USDT</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-container form-container--wallet">
                                                <label for="walletEth">Адрес получателя</label>
                                                <input type="text" name="walletEth" id="walletBtc" placeholder="Введите адрес для отправки" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tabs__list"
                                        id="tabpanel-replenish-deposit-3"
                                        role="tabpanel"
                                        tabindex="0"
                                        aria-labelledby="tab-replenish-deposit-3" hidden>

                                        <div class="withdrawal-section__invoice-wrapper">

                                            <p class="withdrawal-section__invoice-network-heading">
                                                Сеть
                                            </p>

                                            <div class="withdrawal-section__invoice-network-wrapper">
                                                <div class="form-container--checkbox form-container--checkbox-btn checkbox">
                                                    <input class="form__custom-checkbox" type="radio" name="network" value="ERC20" id="network-ERC20" />

                                                    <label class="withdrawal-section__invoice-network btn btn--primary" for="network-ERC20">
                                                        Ethereum (ETH)<br />
                                                        ERC 20
                                                    </label>
                                                </div>

                                                <div class="form-container--checkbox form-container--checkbox-btn checkbox">
                                                    <input class="form__custom-checkbox" type="radio" name="network" value="ERC20" id="network-TRC20" />

                                                    <label class="withdrawal-section__invoice-network btn btn--primary" for="network-TRC20">
                                                        Tron (TRX)<br />
                                                        TRC 20
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="withdrawal-section__progress-bar">
                                                <div class="form-container form-container--range form-container--range-bg range">
                                                    <ul class="range__list">
                                                        <li class="range__list-item">0%</li>
                                                        <li class="range__list-item">25%</li>
                                                        <li class="range__list-item">50%</li>
                                                        <li class="range__list-item">75%</li>
                                                        <li class="range__list-item">100%</li>
                                                    </ul>
                                                    <input type="range" id="percentUsdt" name="percentage" value="0" min="0" max="100" step="25" />

                                                    <div class="min-max__range-item-wrapper">
                                                        <p class="min-max__range-item-min">0</p>
                                                        <p class="min-max__range-item-max">2401.00 USDT</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-container form-container--wallet">
                                                <label for="walletEth">Адрес получателя</label>
                                                <input type="text" name="walletEth" id="walletUsdt" placeholder="Введите адрес для отправки" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </tabs-component>

                            <button class="withdrawal-section__invoice-btn btn btn--secondary" type="submit">
                                ДАЛЕЕ
                            </button>

                            <p class="withdrawal-section__description">
                                *Платформа не снимает комиссию за вывод средств.
                                Комиссия сети блокчейн будет взята из суммы транзакции.
                            </p>
                        </div>
                        <div class="withdrawal-section__wrapper-side">
                            <div class="withdrawal-section__balance withdrawal-section__balance--full">
                                <h3 class="withdrawal-section__balance-heading">Общий баланс:</h3>
                                <p class="withdrawal-section__balance-money">
                                    0.00034221 BTC
                                </p>
                            </div>
                            <div class="withdrawal-section__balance withdrawal-section__balance--available">
                                <h3 class="withdrawal-section__balance-heading">Доступный баланс:</h3>
                                <p class="withdrawal-section__balance-money">
                                    0.00034221 BTC
                                </p>
                            </div>

                            <div class="withdrawal-section__add-deposit">
                                <div class="form-container--checkbox checkbox">
                                    <input class="form__custom-checkbox" type="checkbox" name="accept" id="addToDeposit" />

                                    <label for="addToDeposit">
                                        Добавить остаток к размещенной сумме
                                    </label>
                                </div>
                                <p class="withdrawal-section__add-deposit-description">
                                    *Средства будут добавлены к размещенным на платформе.
                                    Период размещения будет обновлен.
                                </p>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}