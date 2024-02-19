import React, { useState, useEffect } from 'react';
import { Dropdown } from './Dropdown';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { setWithdrawal } from '../../toolkitReducers/actions.slice'
import { getUserData } from '../../toolkitReducers/auth.slice'

function WithdrawPage() {
    const { currencies } = useSelector(state => state.state)
    const [selectedCoin, setSelectedCoin] = useState(currencies[0]);
    const [percentage, setPercentage] = useState(0);
    const [walletAddress, setWalletAddress] = useState('');
    const [addToDeposit, setAddToDeposit] = useState(false);
    const [localError, setLocalError] = useState('');
    const [amount, setAmount] = useState(0);

    const { error } = useSelector(({ state }) => state)
    const { t } = useTranslation();

    const dispatch = useDispatch()

    useEffect(() => {
        let getAmount = `main_crypto_balance_${selectedCoin.value}`

        const depositAmount = parseFloat(localStorage.getItem(getAmount));

        setAmount(depositAmount * parseFloat(percentage) / 100);
    }, [selectedCoin, selectedCoin.value, percentage]);

    const handleCoinChange = (index) => {
        setLocalError("")

        setSelectedCoin(currencies[index])
    };

    const handlePercentageChange = (event) => {
        setLocalError("")

        setPercentage(event.target.value);
    };

    const handleWalletAddressChange = (event) => {
        setLocalError("")
        setWalletAddress(event.target.value);
    };

    const handleAddToDepositChange = (event) => {
        setAddToDeposit(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!walletAddress) {
            setLocalError('fill address withdraw')
        } else if(Number(amount) <= 0) {
            setLocalError('amount should be more than 0')
        } else {
            dispatch(setWithdrawal({
                withdrawal_sum: amount,
                currency: selectedCoin.value,
                address: walletAddress,
            }))
        }
        setTimeout(() => {
            dispatch(getUserData())
        }, 1000);
    };


    const changeAmountSumm = (e) => {
        setLocalError("")

        setAmount(parseFloat(e.target.value));
    }


    const showCurrentCoin = () => {
        return localStorage.getItem(`main_crypto_balance_${selectedCoin.value}`) + ' ' + selectedCoin.value.toUpperCase()

    }

    return (
        <div className="withdrawal-page page">
            <div className="page__sections-wrapper medium-wrapper">
                <section className="withdrawal-section">
                    <h1 className="withdrawal-section__main-heading h3">{t("Вывод средств")}</h1>

                    <div className="withdrawal-section__wrapper form withdrawal-section__form rel" >
                        <div className="withdrawal-section__wrapper-side">
                            <div className="tabs-component tabs">
                                <div className="tabs__wrapper rel">
                                    <div className="withdrawal-section__header">
                                        <h2 className="withdrawal-section__body-heading">{t("Выберите монету")}</h2>

                                        {/* <div className="tabs__navigation hide-scrollbar" role="tablist" aria-labelledby="tablist">
                                            <Dropdown
                                                handleCoinChange={handleCoinChange}
                                            />
                                        </div> */}


                                        {/*  */}



                                            <div className="tabs-with-dropdown">
                                                <div className="tabs__navigation hide-scrollbar" role="tablist" aria-labelledby="tablist">
                                                    <Dropdown
                                                        handleCoinChange={handleCoinChange}
                                                    />
                                                </div>
                                                <div className="tabs-with-dropdown-input">
                                                    <input
                                                        type="number"
                                                        placeholder={t("введите сумму")}
                                                        value={amount}
                                                        onChange={changeAmountSumm}
                                                    />
                                                </div>
                                            </div>

                                        {/*  */}



                                    </div>

                                    <div className="tabs__list" id="tabpanel-replenish-deposit-1" role="tabpanel" tabIndex="0" aria-labelledby="tab-replenish-deposit-1">
                                        <div className="withdrawal-section__invoice-wrapper">
                                            <p className="withdrawal-section__invoice-network-heading">{t("Сеть")}</p>

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
                                                        <p className="min-max__range-item-min">{amount + " " + selectedCoin.value.toUpperCase()}</p>
                                                        <p className="min-max__range-item-max">{showCurrentCoin()}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-container form-container--wallet">
                                                <label htmlFor="walletEth">{t("Адрес получателя")}</label>
                                                <input
                                                    type="text"
                                                    name="walletEth"
                                                    id="walletEth"
                                                    placeholder={t("Введите адрес для отправки")}
                                                    value={walletAddress}
                                                    onChange={handleWalletAddressChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Аналогично для Bitcoin и USDT */}
                                </div>
                            </div>

                            <button className="withdrawal-section__invoice-btn btn btn--secondary" onClick={handleSubmit} type="submit">
                                {t("ДАЛЕЕ")}
                            </button>

                            <p className="withdrawal-section__description">
                                *{t("Платформа не снимает комиссию за вывод средств. Комиссия сети блокчейн будет взята из суммы транзакции.")}
                            </p>
                        </div>

                        <div className="withdrawal-section__wrapper-side">
                            <div className="withdrawal-section__balance withdrawal-section__balance--full">
                                <h3 className="withdrawal-section__balance-heading">{t("Общий баланс")}:</h3>
                                <p className="withdrawal-section__balance-money">
                                    {showCurrentCoin()}
                                </p>
                            </div>
                            <div className="withdrawal-section__balance withdrawal-section__balance--available">
                                <h3 className="withdrawal-section__balance-heading">{t("Доступный баланс")}:</h3>
                                <p className="withdrawal-section__balance-money">
                                    {showCurrentCoin()}
                                </p>
                            </div>

                            <div className="withdrawal-section__add-deposit">
                                {/* <div className="form-container--checkbox checkbox">
                                    <input
                                        className="form__custom-checkbox"
                                        type="checkbox"
                                        name="accept"
                                        id="addToDeposit"
                                        checked={addToDeposit}
                                        onChange={handleAddToDepositChange}
                                    />
                                    <label htmlFor="addToDeposit">Добавить остаток к размещенной сумме</label>
                                </div> */}
                                {/* <p className="withdrawal-section__add-deposit-description">
                                    *Средства будут добавлены к размещенным на платформе. Период размещения будет обновлен.
                                </p> */}
                                {/* {error && <p style={{ fontSize: "20px", lineHeight: "1.5" }} className="withdrawal-section__add-deposit-description">
                                    *{t("Средства могут сниматься раз в 10 дней")}
                                </p>} */}
                                {localError && <p style={{ fontSize: "20px", lineHeight: "1.5" }} className="withdrawal-section__add-deposit-description">
                                    *{t("fill address withdraw")}
                                </p>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default WithdrawPage;
