import React, { useState, useEffect } from 'react';
import { Dropdown } from './Dropdown';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { setTransfer } from '../../toolkitReducers/actions.slice'
import TransferSelects from './TransferSelects'
import ModalDialog from './Modal'

const balances = ["main", "options", "arbitech"]

function WithdrawPage() {
    const { currencies } = useSelector(state => state.state)
    const [selectedCoin, setSelectedCoin] = useState(currencies[0]);
    const [selectedFrom, setSelectedFrom] = useState(balances[0]);
    const [selectedTo, setSelectedTo] = useState(balances[0]);
    const [percentage, setPercentage] = useState(0);
    const [walletAddress, setWalletAddress] = useState('');
    const [addToDeposit, setAddToDeposit] = useState(false);
    const [amount, setAmount] = useState(null);
    const [amountSumm, setAmountSumm] = useState("");
    const [localError, setLocalError] = useState("");
    const { error } = useSelector(({ state }) => state)
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('main');
    const dispatch = useDispatch();


    const [isModal, setModal] = useState(false)
    const [modalText, setModalText] = useState(false)



    useEffect(() => {
        let getAmount = `${selectedFrom}_crypto_balance_${selectedCoin.value}`

        const depositAmount = parseFloat(localStorage.getItem(getAmount)) || 0;

        setAmount(depositAmount * parseFloat(percentage) / 100);
    }, [selectedCoin, selectedCoin.value, percentage, selectedFrom]);


    const openModal = (text) => {
        setModalText(text)
        setModal(!isModal)
    }


    const handleCoinChange = (index) => {
        setSelectedCoin(currencies[index])
    };

    const handleFromChange = (index, direction) => {
        setLocalError("")


        if (direction === "from") setSelectedFrom(balances[index])
        if (direction === "to") setSelectedTo(balances[index])
    };

    const handlePercentageChange = (event) => {
        setLocalError("")

        setPercentage(event.target.value);
    };

    const handleWalletAddressChange = (event) => {
        setWalletAddress(event.target.value);
    };

    const handleAddToDepositChange = (event) => {
        setAddToDeposit(event.target.checked);
    };

    const switchFrom = () => {
        activeTab === 'main' ? setActiveTab('arbitech') : setActiveTab('main')
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedFrom === selectedTo) {
            setLocalError("Балансы не должны совпадать")
        }
        else if (amount < 0 || amount == 0) {
            setLocalError("Сумма должна быть больше 0")
        }
        else if (amount > showCurrentCoin()) {
            setLocalError("Сумма должна быть превышать баланс")
        }
        else {
            // console.log('selectedTo :>> ', selectedTo);
            // console.log('selectedFrom :>> ', selectedFrom);
            // console.log('selectedCoin.value :>> ', selectedCoin.value);

            if (selectedTo === "options") {
                dispatch(setTransfer({
                    withdrawal_sum: amount,
                    from_ticker: selectedCoin.value,
                    to_ticker: "usdt",
                    from: selectedFrom,
                    to: selectedTo,
                }))

                openModal(t("transaction successfull"))
            } else if (selectedFrom === "options") {
                dispatch(setTransfer({
                    withdrawal_sum: amount,
                    from_ticker: "usdt",
                    to_ticker: selectedCoin.value,
                    from: selectedFrom,
                    to: selectedTo,
                }))

                openModal(t("transaction successfull"))
            } else {
                dispatch(setTransfer({
                    withdrawal_sum: amount,
                    from_ticker: selectedCoin.value,
                    to_ticker: selectedCoin.value,
                    from: selectedFrom,
                    to: selectedTo,
                }))

                openModal(t("transaction successfull"))
            }
        }

    };

    const showCurrentCoin = () => {
        let getAmount = `${selectedFrom}_crypto_balance_${selectedCoin.value}`

        return localStorage.getItem(getAmount) + " " + selectedCoin.value.toUpperCase()
    }

    const changeAmountSumm = (e) => {
        setAmount(parseFloat(e.target.value));
    }

    return (
        <div className="withdrawal-page page transfer-page">
            <ModalDialog modalState={isModal} setModalState={openModal} modalText={modalText} />
            <div className="page__sections-wrapper medium-wrapper">
                <section className="withdrawal-section">
                    <h1 className="withdrawal-section__main-heading h3">{t("TransferPageTitle")}</h1>

                    <div className="withdrawal-section__wrapper form withdrawal-section__form rel" >
                        <div className="withdrawal-section__wrapper-side">
                            <div className="tabs-component tabs">
                                <div className="tabs__wrapper rel">
                                    <div className="withdrawal-section__header">
                                        <h2 className="withdrawal-section__body-heading">{t("Выберите монету")}</h2>

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

                                            {/* выбрать откуда и куда перекидывать */}

                                            <TransferSelects
                                                activeTab={activeTab}
                                                switchFrom={switchFrom}
                                                handleFromChange={handleFromChange}
                                                balances={balances}
                                            />


                                        </div>
                                    </div>

                                    {/* Аналогично для Bitcoin и USDT */}
                                </div>
                            </div>

                            <button className="withdrawal-section__invoice-btn btn btn--secondary" onClick={handleSubmit}>
                                {t("transfer")}
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
                                <>
                                    {error && <p style={{ fontSize: "20px", lineHeight: "1.5" }} className="withdrawal-section__add-deposit-description">
                                        {error === "Invalid balances provided"
                                            ? t("Invalid balances provided")
                                            : error
                                        }

                                    </p>}
                                </>
                                <>
                                    {
                                        localError && <p style={{ fontSize: "20px", lineHeight: "1.5" }} className="withdrawal-section__add-deposit-description">
                                            {t(localError)}
                                        </p>
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default WithdrawPage;
