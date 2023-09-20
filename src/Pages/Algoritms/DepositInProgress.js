import { useState, useRef, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setSum, getUserWallet, getCurrencies } from '../../toolkitReducers/actions.slice'


export default function CustomSelect(params) {
    const { currencies, wallet } = useSelector(state => state.state)
    const { promotion, switchDone } = params

    const [isSmallerSum, showSmallerSum] = useState(false)
    const [isSum, setIsSum] = useState('')
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
        showSmallerSum(false)

        dispatch(getUserWallet(currencies[index].value))
    }

    const copyText = () => {
        navigator.clipboard.writeText(inputRef.current.value)

        setCopied(true)
        setTimeout(() => setCopied(false), 500)
    }

    const sumChange = (e) => {
        showSmallerSum(false)
        setIsSum(e.target.value)
    }



    const playNext = () => {
        if (Number(isSum) < Number(promotion)) {
            return showSmallerSum(true)
        }

        if ('done') {
            switchDone(true)

            const obj = {
                sum: isSum,
                typeSum: currencies[activeMenu].value
            }
            dispatch(setSum(obj))

        }
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
            <div class="form-container rel">

                <input required onChange={sumChange} value={isSum} min={500} type="number" placeholder="Сумма" name="sum" />
                {isSmallerSum && <div class="modal-dialog__invoice-description-wrapper">
                    <p class="modal-dialog__invoice-description">
                        Внимание!<br /> сумма должна быть больше {promotion}USD
                    </p>
                </div>}
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