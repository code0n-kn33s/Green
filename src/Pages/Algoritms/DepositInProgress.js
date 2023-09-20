import { useState, useRef, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setSum, getUserWallet, getCurrencies } from '../../toolkitReducers/actions.slice'


export default function CustomSelect(params) {
    const { currencies, wallet, currenciesFetch } = useSelector(state => state.state)
    const { promotion, switchDone } = params

    const [isSmallerSumUsd, showSmallerSumUsd] = useState(false)
    const [isSmallerSumCripto, showSmallerSumCripto] = useState(false)
    // const [isSmallerSum, showSmallerSum] = useState(false)
    const [isSumUsd, setIsSumUsd] = useState('')
    const [isSumCrypto, setIsSumCrypto] = useState('')
    const [isOpenMenu, setOpenMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(0)
    const [isCopied, setCopied] = useState(false)

    const dispatch = useDispatch()
    const inputRef = useRef(null)

    useEffect(() => {
        currencies && dispatch(getUserWallet(currencies[activeMenu].value))
    }, [])

    useEffect(() => {
        currencies && dispatch(getCurrencies())
    }, [])

    const chooseMenuItem = (index) => {
        setActiveMenu(index)
        setOpenMenu(false)
        showSmallerSumUsd(false)
        showSmallerSumCripto(false)

        dispatch(getUserWallet(currencies[index].value))
    }

    const copyText = () => {
        navigator.clipboard.writeText(inputRef.current.value)

        setCopied(true)
        setTimeout(() => setCopied(false), 500)
    }

    const sumChangeUsd = (e) => {
        showSmallerSumUsd(false)
        showSmallerSumCripto(false)
        setIsSumCrypto('')
        setIsSumUsd(e.target.value)
    }
    const sumChangeCrypto = (e) => {
        showSmallerSumUsd(false)
        showSmallerSumCripto(false)
        setIsSumUsd('')
        setIsSumCrypto(e.target.value)
    }

    const checkSum = () => {
        if (Number(isSumUsd) !== '' && Number(isSumUsd) < Number(promotion)) {
            showSmallerSumUsd(true)
            return false
        }
        if (!isSmallerSumCripto && !isSmallerSumUsd) {
            showSmallerSumUsd(true)
            return false
        }
        // if (Number(isSumUsd) !== '' && Number(getActiveValueCurrency()/) < Number(promotion)) {
        //     return showSmallerSum(true)
        // }
    }

    const playNext = () => {
        // !!! dopisat
        // if (Number(isSumCrypto) < Number(promotion)) {
        //     return showSmallerSum(true)
        // }
        console.log('isSumUsd :>> ', isSumUsd);


        if (checkSum()) {
            switchDone(true)

            const obj = {
                sum: isSumCrypto,
                typeSum: currencies[activeMenu].value
            }
            dispatch(setSum(obj))

        }
    }

    const getActiveCurrency = () => {
        return currencies[activeMenu].value
    }

    const getActiveValueCurrency = () => {
        return currenciesFetch[getActiveCurrency()].rate
    }
    console.log('currenciesFetch :>> ', currenciesFetch);
    console.log('activeMenu :>> ', activeMenu);

    const getEqwiwalent = () => {
        return 1/getActiveValueCurrency()
    }

    const getFinalSum = () => {
        if(isSumUsd) {
            return Number(isSumUsd)/getActiveValueCurrency()
        }
        if(isSumCrypto){
            return isSumCrypto
        }
        return 0
    }

    return (
        <>
            <custom-select class="custom-select">
                <button class="custom-select__btn" tabIndex="0" aria-expanded="true" onClick={() => setOpenMenu(true)} aria-controls="dropdown-2">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="9" display={isOpenMenu ? 'none' : 'block'} viewBox="0 0 14 9" fill="none">
                        <path d="M0.721313 1.42859L6.86885 7.50002L13.0164 1.42859" stroke="#FFF831" color="currentColor" stroke-width="1.5" />
                    </svg>
                    <span data-button-label class="custom-select__btn-text">
                        {currencies[activeMenu].name}
                    </span>
                </button>

                <ul data-dropdown class="custom-select__dropdown list-menu" id="dropdown-2" aria-expanded={isOpenMenu ? 'true' : 'false'}>
                    {currencies.map((item) => {
                        return (
                            <li class="custom-select__dropdown-option"
                                // data-option-value={item.value} aria-selected="false"
                                key={item.index}
                            >
                                <button class="tabs__header-tab btn--reset link custom-select__dropdown-button"
                                    data-dropdown-button
                                    role="tab"
                                    type="button"
                                    tabindex="0"
                                    aria-expanded={true}
                                    id={`tab-replenish-deposit-${item.index}`}
                                    aria-controls={`tabpanel-replenish-deposit-${item.index}`}
                                    onClick={() => chooseMenuItem(item.index)}
                                    aria-selected="true">
                                    {item.name}
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <input
                    type="hidden"
                    class="custom-select__input-hidden"
                    value="Ethereum"
                />
            </custom-select>
            <br />
            <div class="form-container rel currencies-exchange-wrap">

                <input className="currencies-exchange-input" required onChange={sumChangeCrypto} value={isSumCrypto} min={500} type="number" placeholder={"Введите сумму в " + getActiveCurrency().toUpperCase()} name="cryptosum" />
                {currenciesFetch&&<div className="currencies-exchange-input-values">
                    <span>1 {currenciesFetch&& getActiveCurrency().toUpperCase()}=</span>
                    <br />
                    <span>{currenciesFetch&&getActiveValueCurrency()+ " USD"}</span>
                </div>}

                {isSmallerSumUsd && <div class="modal-dialog__invoice-description-wrapper">
                    <p class="modal-dialog__invoice-description">
                        Внимание!<br /> сумма должна быть больше {promotion}USD
                    </p>
                </div>}
            </div>

            <div class="form-container rel currencies-exchange-wrap">

                <input className="currencies-exchange-input" required onChange={sumChangeUsd} value={isSumUsd} min={500} type="number" placeholder={"Введите сумму в USD"} name="usdsum" />
                {currenciesFetch&&<div className="currencies-exchange-input-values">
                <span>1 USD=</span>
                    <br />
                <span>  {getEqwiwalent() + " " + getActiveCurrency().toUpperCase()}</span>
                </div>}
                {isSmallerSumCripto && <div class="modal-dialog__invoice-description-wrapper">
                    <p class="modal-dialog__invoice-description">
                        Внимание!<br /> сумма должна быть больше {promotion}USD
                    </p>
                </div>}
            </div>

            <div>
                <h3>Сумма пополнения: {getFinalSum()} {getActiveCurrency().toUpperCase()}  </h3>
            </div>
            <div class="tabs__list"
                id="tabpanel-replenish-deposit-1"
                role="tabpanel"
                tabindex="0"
                aria-labelledby="tab-replenish-deposit-1">

                <div class="modal-dialog__invoice-wrapper">
                    <p class="modal-dialog__invoice-heading">
                        Адрес
                    </p>


                    <copy-past class="form-container rel">
                        <label onClick={copyText} aria-roledescription="button" for="payment-address-eth">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                <path d="M7.91647 15H3.04176C1.9159 15 1 14.0187 1 12.8125V5.40234C1 4.19612 1.9159 3.21484 3.04176 3.21484H7.91647C9.04233 3.21484 9.95824 4.19612 9.95824 5.40234V12.8125C9.95824 14.0187 9.04233 15 7.91647 15ZM3.04176 4.30859C2.47888 4.30859 2.02088 4.79929 2.02088 5.40234V12.8125C2.02088 13.4156 2.47888 13.9062 3.04176 13.9062H7.91647C8.47935 13.9062 8.93736 13.4156 8.93736 12.8125V5.40234C8.93736 4.79929 8.47935 4.30859 7.91647 4.30859H3.04176ZM12 11.4453V3.1875C12 1.98128 11.0841 1 9.95824 1H4.29234C4.0104 1 3.7819 1.24481 3.7819 1.54688C3.7819 1.84894 4.0104 2.09375 4.29234 2.09375H9.95824C10.5211 2.09375 10.9791 2.58444 10.9791 3.1875V11.4453C10.9791 11.7474 11.2076 11.9922 11.4896 11.9922C11.7715 11.9922 12 11.7474 12 11.4453Z" fill="#FFF831" stroke="#FFF831" stroke-width="0.5" />
                            </svg>
                        </label>
                        <input
                            type="text"
                            name="payment-address-eth"
                            id="payment-address-eth"
                            readonly
                            ref={inputRef}
                            value={wallet === '' ? wallet : wallet.wallet_address}
                        />
                        <div
                            // data-message
                            class={`form-container__successful-message-wrapper`}
                            aria-hidden={isCopied ? "false" : "true"}
                        >

                            <span className="text-copied">
                                Copied to clipboard
                            </span>
                        </div>
                    </copy-past>

                    <div class="modal-dialog__invoice-description-wrapper">
                        <p class="modal-dialog__invoice-description bold">
                            Внимание,<br />
                            проверяйте адрес и тип монеты перед отправкой средств!
                        </p>

                        <p class="modal-dialog__invoice-description">
                            Отправка другого типа средств, или суммой менее 100 USD,
                            может привести к их утере.
                        </p>
                    </div>

                    <button className='modal-dialog__invoice-btn btn btn--primary btn--large' onClick={
                        playNext
                    }> Далее</button>

                </div>
            </div>
        </>
    )
}