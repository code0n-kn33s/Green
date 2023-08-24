import React from 'react'
import { ReactComponent as IconProfile } from '../assets/icons/ProfileIcon.svg'
import { ReactComponent as BellIcon } from '../assets/icons/BellIcon.svg'
import { ReactComponent as LoginIcon } from '../assets/icons/LoginIcon.svg'
import { ReactComponent as LogoutIcon } from '../assets/icons/LogoutIcon.svg'

export default function Header() {
  return (

      <header className="main-header">
        <div className="main-header__wrapper rel">
          <div className="main-header__content">
            <span className="main-header__content-title">Balance update</span>
            <span className="main-header__content-date">2021-01-17</span>
          </div>
          <div className="main-header__icons">
            <a href="/" className="main-header__icons-messages main-header-icon btn rel">
              <span className="main-header__icons-messages-bubble">11</span>

              <BellIcon />
            </a>
            <div className="main-header__icons-profile rel">
              <a href="/" className="main-header__icons-profile main-header-icon btn">
                <IconProfile />
              </a>

              <div className="main-header__icons-profile-login">
                <a href="./profile.html" className="main-header__icons-profile-login-row main-header-icon link">
                  <div className="main-header__icons-profile-login-icon">
                    <LoginIcon />
                  </div>
                  <p className="main-header__icons-profile-login-label">
                    Профиль
                  </p>
                </a>
                <div className="main-header__icons-profile-login-row main-header-icon">
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
        {/* <NavLink to="counter">Counter</NavLink>
          <NavLink to="todo">Todo</NavLink>
          <NavLink to="placeholders">Placeholders</NavLink>
          <NavLink to="new">New</NavLink> */}
      </header>

  )
}
