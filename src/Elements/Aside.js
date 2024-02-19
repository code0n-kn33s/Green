import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CustomSelect from './Library/CustomSelect';

import { ReactComponent as FlowerIcon } from '../assets/icons/FlowerIcon.svg';
import { ReactComponent as AttentionIcon } from '../assets/icons/AttentionIcon.svg';
import { ReactComponent as Graphik } from '../assets/icons/graphik.svg';
import { ReactComponent as StatisticIcon } from '../assets/icons/statistics_icon.svg';
import { ReactComponent as BalanceIcon } from '../assets/icons/balance-svgrepo-com.svg';

export default function Aside(props) {
  const { t } = useTranslation();


  return (
    <aside className="main-nav">
      <nav className="main-nav__wrapper">
        <ul className="main-nav__first-lvl">
          <li className="main-nav__first-lvl-item">
            <NavLink className="link" to="binary">
              <span>
                <Graphik />
              </span>
              <span>
                {t("binary")}
              </span>
            </NavLink>
          </li>
          <li className="main-nav__first-lvl-item">
            <NavLink className="link" to="balance">
              <span>
                <BalanceIcon />
              </span>
              <span>
                {t("balance")}
              </span>
            </NavLink>
          </li>
          <li className="main-nav__first-lvl-item">
            <NavLink className="link" to="algoritms">
              <span>
                <FlowerIcon />
              </span>
              <span>
                {t("pulls")}
              </span>
            </NavLink>
          </li>
          <li className="main-nav__first-lvl-item">
            <NavLink className="link" to="statistics">
              <span>
                <AttentionIcon />

              </span>
              <span>
                {t("statistics")}
              </span>
            </NavLink>
          </li>

          <li className="main-nav__first-lvl-item">
            <NavLink className="link" to="faq">
              <span>
              <StatisticIcon />

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
