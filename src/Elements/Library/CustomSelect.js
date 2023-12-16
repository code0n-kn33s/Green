import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/use-localstorage';
import i18n from '../../i18n';

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/ArrowDownIcon.svg';
import { ReactComponent as GlobusIcon } from '../../assets/icons/GlobusIcon.svg';

export default function CustomSelect () {
    const [dropdownState, setDropdownState] = useState(false)
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('lang', localStorage.getItem('lang') || 'en');
    const dropdownWindowRef = useRef(null);

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

    const handleLanguageChange = (language) => {
      // setCurrentLanguage(language);

      i18n.changeLanguage(language);
      setLanguage(language);


      setDropdownState(false)
    };

    // const handleLenguageChange = () => {
    //     if (language === 'en') {
    //         i18n.changeLanguage('ru');
    //         setLanguage('ru');
    //     } else if (language === 'ru') {
    //         i18n.changeLanguage('en');
    //         setLanguage('en');
    //     }
    // };

    const handleLanguageClick = () => {
      setDropdownState(!dropdownState)
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
            {language.toUpperCase()}
          </span>
          <ArrowDownIcon />
        </button>

        <ul data-dropdown className={`custom-select__dropdown list-menu ${
          dropdownState ? 'active' : ''
        }`} id="dropdown-1" ref={dropdownWindowRef}>
          <li
            className={`custom-select__dropdown-option ${
              language === 'russian' ? 'selected' : ''
            }`}
            onClick={() => handleLanguageChange('ru')}
          >
            <button className="btn--reset link custom-select__dropdown-button">
              RUSSIAN
            </button>
          </li>
          <li
            className={`custom-select__dropdown-option ${
              language === 'english' ? 'selected' : ''
            }`}
            onClick={() => handleLanguageChange('en')}
          >
            <button className="btn--reset link custom-select__dropdown-button">
              ENGLISH
            </button>
          </li>
        </ul>

        <input
          type="hidden"
          className="custom-select__input-hidden"
          value={language}
        />
      </div>
    )
}