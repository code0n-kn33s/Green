import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function Dropdown({ handleCoinChange ,options, value, onChange }) {
    const { currencies, wallet } = useSelector(state => state.state)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setOpenMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(0)

    const dispatch = useDispatch()

    const chooseMenuItem = (index) => {
        setActiveMenu(index)
        setOpenMenu(false)
        handleCoinChange(index)
        // dispatch(getUserWallet(currencies[index].value))
    }


    const handleSelect = (option) => {
      onChange(option);
      setIsOpen(false);
    };

    return (
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
                        // data-option-value={item.value}
                        // aria-selected="false"
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
    );
  }