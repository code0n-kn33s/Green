import {NavLink} from 'react-router-dom'

import {ReactComponent as GlobusIcon} from '../assets/icons/GlobusIcon.svg';
import {ReactComponent as FlowerIcon} from '../assets/icons/FlowerIcon.svg';
import {ReactComponent as AttentionIcon} from '../assets/icons/AttentionIcon.svg';
import {ReactComponent as ArrowDownIcon} from '../assets/icons/ArrowDownIcon.svg';

export default function Aside(props) {

    return (
        <aside className="main-nav">
        <nav className="main-nav__wrapper">
          <ul className="main-nav__first-lvl">
            <li className="main-nav__first-lvl-item">
              <div className="main-nav__first-lvl-item-wrapper">
                <span> <FlowerIcon /> </span>

                <span>AI Arbitrage</span>
              </div>

              <ul className="main-nav__second-lvl">
                <li className="main-nav__second-lvl-item">
                  <NavLink className="link" to="algoritms"> Пулы </NavLink>
                </li>

                <li className="main-nav__second-lvl-item">
                  <NavLink className="link" to="statistics">Статистика</NavLink>
                </li>
              </ul>
            </li>

            <li className="main-nav__first-lvl-item">

              <NavLink className="link" to="faq">
                <span>
                  <AttentionIcon/>
                </span>
                <span>Алгоритмы</span>
              </NavLink>
            </li>

            <li className="main-nav__first-lvl-item">
              <custom-select className="custom-select">
                <button className="custom-select__btn" tabIndex="0" aria-expanded="false" aria-controls="dropdown-1">
                  <span>
                    <GlobusIcon />
                  </span>
                  <span data-button-label className="custom-select__btn-text">RUSSIAN</span>

                  {/* <ArrowDownIcon /> */}
                </button>

                <ul data-dropdown className="custom-select__dropdown list-menu" id="dropdown-1">
                  <li className="custom-select__dropdown-option" data-option-value="russian"
                    // selected="true"
                  >
                    <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                      RUSSIAN
                    </button>
                  </li>

                  <li className="custom-select__dropdown-option" data-option-value="english"
                    // selected="false"
                    >
                    <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                      ENGLISH
                    </button>
                  </li>
                </ul>

                <input type="hidden" className="custom-select__input-hidden" value="russian" />
              </custom-select>
            </li>
          </ul>
        </nav>
      </aside>
    )
}