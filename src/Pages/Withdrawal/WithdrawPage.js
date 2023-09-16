import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { useDispatch, useSelector } from 'react-redux'
import { setWithdrawal } from '../../toolkitReducers/actions.slice'

function WithdrawPage() {
    const { currencies } = useSelector(state => state.state)
    const [selectedCoin, setSelectedCoin] = useState(currencies[0]);
    const [percentage, setPercentage] = useState(0);
    const [walletAddress, setWalletAddress] = useState('');
    const [addToDeposit, setAddToDeposit] = useState(false);
    const dispatch = useDispatch()

    const handleCoinChange = (index) => {
        setSelectedCoin(currencies[index])
    };

    const handlePercentageChange = (event) => {
        setPercentage(event.target.value);
    };

    const handleWalletAddressChange = (event) => {
        setWalletAddress(event.target.value);
    };

    const handleAddToDepositChange = (event) => {
        setAddToDeposit(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Здесь вы можете отправить данные на сервер или выполнить другие действия
        console.log('Выбрана монета:', selectedCoin);
        console.log('Процент:', percentage);
        console.log('Адрес кошелька:', walletAddress);
        console.log('Добавить к размещенной сумме:', addToDeposit);

        dispatch(setWithdrawal({
            withdrawal_sum: percentage,
            currency: selectedCoin.value,
            address: walletAddress,
        }))
    };

    const showCurrentCoin = () => {
        if(selectedCoin.value === 'btc') return localStorage.getItem('crypto_deposit_btc') + " BTC"
        if(selectedCoin.value === 'eth') return localStorage.getItem('crypto_deposit_eth') + " ETH"
        if(selectedCoin.value === 'usdt') return localStorage.getItem('crypto_deposit_usdt') + " USDT"
    }

    const sumPercents = () => {
     return parseInt(localStorage.getItem(`crypto_deposit_${selectedCoin.value}`)) * parseInt(percentage) / 100
    }

    return (
        <div className="withdrawal-page page">
            <div className="page__sections-wrapper medium-wrapper">
                <section className="withdrawal-section">
                    <h1 className="withdrawal-section__main-heading h3">Вывод средств</h1>

                    <form className="withdrawal-section__wrapper form withdrawal-section__form rel" onSubmit={handleSubmit}>
                        <div className="withdrawal-section__wrapper-side">
                            <div className="tabs-component tabs">
                                <div className="tabs__wrapper rel">
                                    <div className="withdrawal-section__header">
                                        <h2 className="withdrawal-section__body-heading">Выберите монету</h2>

                                        <div className="tabs__navigation hide-scrollbar" role="tablist" aria-labelledby="tablist">
                                            <Dropdown
                                                handleCoinChange={handleCoinChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="tabs__list" id="tabpanel-replenish-deposit-1" role="tabpanel" tabIndex="0" aria-labelledby="tab-replenish-deposit-1">
                                        <div className="withdrawal-section__invoice-wrapper">
                                            <p className="withdrawal-section__invoice-network-heading">Сеть</p>

                                            <div className="withdrawal-section__progress-bar">
                                                <div className="form-container form-container--range form-container--range-bg range">
                                                    <ul className="range__list">
                                                        <li className="range__list-item">0%</li>
                                                        <li className="range__list-item">25%</li>
                                                        <li className="range__list-item">50%</li>
                                                        <li className="range__list-item">75%</li>
                                                        <li className="range__list-item">100%</li>
                                                    </ul>
                                                    <input
                                                        type="range"
                                                        id="percentEth"
                                                        name="percentage"
                                                        value={percentage}
                                                        onChange={handlePercentageChange}
                                                        min="0"
                                                        max="100"
                                                        step="25"
                                                    />

                                                    <div className="min-max__range-item-wrapper">
                                                        {/* поставить пересчет в процентах */}
                                                        <p className="min-max__range-item-min">{sumPercents() + " " + selectedCoin.value.toUpperCase()}</p>
                                                        <p className="min-max__range-item-max">{showCurrentCoin()}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-container form-container--wallet">
                                                <label htmlFor="walletEth">Адрес получателя</label>
                                                <input
                                                    type="text"
                                                    name="walletEth"
                                                    id="walletEth"
                                                    placeholder="Введите адрес для отправки"
                                                    value={walletAddress}
                                                    onChange={handleWalletAddressChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Аналогично для Bitcoin и USDT */}
                                </div>
                            </div>

                            <button className="withdrawal-section__invoice-btn btn btn--secondary" type="submit">
                                ДАЛЕЕ
                            </button>

                            <p className="withdrawal-section__description">
                                *Платформа не снимает комиссию за вывод средств. Комиссия сети блокчейн будет взята из суммы транзакции.
                            </p>
                        </div>

                        <div className="withdrawal-section__wrapper-side">
                            <div className="withdrawal-section__balance withdrawal-section__balance--full">
                                <h3 className="withdrawal-section__balance-heading">Общий баланс:</h3>
                                <p className="withdrawal-section__balance-money">
                                    { showCurrentCoin() }
                                </p>
                            </div>
                            <div className="withdrawal-section__balance withdrawal-section__balance--available">
                                <h3 className="withdrawal-section__balance-heading">Доступный баланс:</h3>
                                <p className="withdrawal-section__balance-money">
                                    {showCurrentCoin() }
                                </p>
                            </div>

                            <div className="withdrawal-section__add-deposit">
                                <div className="form-container--checkbox checkbox">
                                    <input
                                        className="form__custom-checkbox"
                                        type="checkbox"
                                        name="accept"
                                        id="addToDeposit"
                                        checked={addToDeposit}
                                        onChange={handleAddToDepositChange}
                                    />
                                    <label htmlFor="addToDeposit">Добавить остаток к размещенной сумме</label>
                                </div>
                                <p className="withdrawal-section__add-deposit-description">
                                    *Средства будут добавлены к размещенным на платформе. Период размещения будет обновлен.
                                </p>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default WithdrawPage;
