import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/use-localstorage';
import i18n from '../../i18n';

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/ArrowDownIcon.svg';
import { ReactComponent as GlobusIcon } from '../../assets/icons/GlobusIcon.svg';

export default function CustomSelect(props) {
  const [dropdownState, setDropdownState] = useState(false);
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('lang', localStorage.getItem('lang') || 'en');
  const dropdownWindowRef = useRef(null);
  const {selectedPair, setSelectedPair, symbols} = props;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownWindowRef.current && !dropdownWindowRef.current.contains(event.target)) {
      setDropdownState(false);
    }
  };

  const handlePairChange = (pair) => {
    setSelectedPair(pair);
    setDropdownState(false);
    // Здесь можно добавить свою логику, используя symbols[pair] как значение
    console.log(`Selected Pair: ${pair}, Value: ${symbols[pair]}`);
  };

  const handleLanguageClick = () => {
    setDropdownState(!dropdownState);
  };

  return (
    <div className="custom-select">
      <button
        className="custom-select__btn"
        tabIndex="0"
        aria-expanded="false"
        aria-controls="dropdown-1"
        onClick={handleLanguageClick}
      >
        <span>
          <GlobusIcon />
        </span>
        <span data-button-label className={`custom-select__btn-text ${
          dropdownState ? 'active' : ''
        }`}>
          {selectedPair}
        </span>
        <ArrowDownIcon />
      </button>

      <ul data-dropdown className={`custom-select__dropdown list-menu ${
        dropdownState ? 'active' : ''
      }`} id="dropdown-1" ref={dropdownWindowRef}>
        {Object.keys(symbols).map((pair) => (
          <li
            key={pair}
            className={`custom-select__dropdown-option ${
              selectedPair === pair ? 'selected' : ''
            }`}
            onClick={() => handlePairChange(pair)}
          >
            <button className="btn--reset link custom-select__dropdown-button">
              {pair}
            </button>
          </li>
        ))}
      </ul>

      <input
        type="hidden"
        className="custom-select__input-hidden"
        value={symbols[selectedPair]}
      />
    </div>
  );
}
