import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CustomSelect from './Library/CustomSelect';

import { ReactComponent as FlowerIcon } from '../assets/icons/FlowerIcon.svg';
import { ReactComponent as AttentionIcon } from '../assets/icons/AttentionIcon.svg';

import './aside.scss';

export default function Aside(props) {
  const { t } = useTranslation();


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

          {/* <li className="main-nav__first-lvl-item">
            <CustomSelect />
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}
