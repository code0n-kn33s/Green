import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userLogout } from './../toolkitReducers'

import { ReactComponent as IconProfile } from '../assets/icons/ProfileIcon.svg'
import { ReactComponent as BellIcon } from '../assets/icons/BellIcon.svg'
import { ReactComponent as LoginIcon } from '../assets/icons/LoginIcon.svg'
import { ReactComponent as LogoutIcon } from '../assets/icons/LogoutIcon.svg'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(userLogout())
    navigate('/login')
  }

  return (

    <header className="main-header">
      <div className="main-header__wrapper rel">
        <div className="main-header__content">
          <span className="main-header__content-title">Balance update</span>
          <span className="main-header__content-date">2021-01-17</span>
        </div>
        <div className="main-header__icons">
          <NavLink to="/" className="main-header__icons-messages main-header-icon btn rel">

            {/* Звоночек */}
            {/* <span className="main-header__icons-messages-bubble">11</span> */}

            <BellIcon />
          </NavLink>
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
                  Профиль
                </p>
              </NavLink>
              <div onClick={logout} className="main-header__icons-profile-login-row main-header-icon">
                <div className="main-header__icons-profile-login-icon">
                  <LogoutIcon />
                </div>
                <p className="main-header__icons-profile-login-label">
                  Выход
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
