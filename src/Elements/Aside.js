import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
import i18n from '../i18n';

import { ReactComponent as GlobusIcon } from '../assets/icons/GlobusIcon.svg';
import { ReactComponent as FlowerIcon } from '../assets/icons/FlowerIcon.svg';
import { ReactComponent as AttentionIcon } from '../assets/icons/AttentionIcon.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/icons/ArrowDownIcon.svg';
import './aside.scss';

export default function Aside(props) {
  const [dropdownState, setDropdownState] = useState(false)
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('lang', 'en');
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
    <aside className="main-nav">
      <nav className="main-nav__wrapper">
        <ul className="main-nav__first-lvl">
          <li className="main-nav__first-lvl-item">
            <div className="main-nav__first-lvl-item-wrapper">
              <span>
                <FlowerIcon />
              </span>
              <span>AI Arbitrage</span>
            </div>

            <ul className="main-nav__second-lvl">
              <li className="main-nav__second-lvl-item">
                <NavLink className="link" to="algoritms">
                  {t("pulls")}
                </NavLink>
              </li>
              <li className="main-nav__second-lvl-item">
                <NavLink className="link" to="statistics">
                  {t("statistics")}
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="main-nav__first-lvl-item">
            <NavLink className="link" to="faq">
              <span>
                <AttentionIcon />
              </span>
              <span>
                {t("algoritms")}
              </span>
            </NavLink>
          </li>

          <li className="main-nav__first-lvl-item">
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
          </li>
        </ul>
      </nav>
    </aside>
  );
}
