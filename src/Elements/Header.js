import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userLogout } from './../toolkitReducers'
import { useTranslation } from 'react-i18next';

import CustomSelect from './Library/CustomSelect';

import { ReactComponent as IconProfile } from '../assets/icons/ProfileIcon.svg'
import { ReactComponent as TelegramIcon } from '../assets/icons/TelegramIcon.svg'
import { ReactComponent as LoginIcon } from '../assets/icons/LoginIcon.svg'
import { ReactComponent as LogoutIcon } from '../assets/icons/LogoutIcon.svg'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const logout = () => {
    dispatch(userLogout())
    navigate('/login')
  }

  return (

    <header className="main-header">
      <div className="main-header__wrapper rel">
        <div className="header-select">
          <CustomSelect />
        </div>
        <div className="main-header__content">
          <span className="main-header__content-title">{t("Balance update")}</span>
          <span className="main-header__content-date">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="main-header__icons">


          {/* Звоночек */}
          {/* <span className="main-header__icons-messages-bubble">11</span> */}
          <a className="main-header__icons-messages main-header-icon btn rel" target="_blank" href="https://t.me/arbitech777"><TelegramIcon /></a>
          {/* <BellIcon /> */}

          <div className="main-header__icons-profile rel">
            <NavLink to="profile" className="main-header__icons-profile main-header-icon btn">
              <IconProfile />
            </NavLink>

            <div className="main-header__icons-profile-login">
              <NavLink to="profile" className="main-header__icons-profile-login-row main-header-icon link">

                <div className="main-header__icons-profile-login-icon">
                  <LoginIcon />
                </div>
                <p className="main-header__icons-profile-login-label">
                  {t("Профиль")}
                </p>
              </NavLink>
              <div onClick={logout} className="main-header__icons-profile-login-row main-header-icon">
                <div className="main-header__icons-profile-login-icon">
                  <LogoutIcon />
                </div>
                <p className="main-header__icons-profile-login-label">
                  {t("Выход")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
