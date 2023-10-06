
import { Link, useLocation } from 'react-router-dom'
import { PublicLinks } from './PublicLinks'

import { ReactComponent as TelegramIcon } from '../assets/icons/TelegramIcon.svg';
import { ReactComponent as YouTubeIcon } from '../assets/icons/YouTubeIcon.svg';
import { ReactComponent as Facebook } from '../assets/icons/Facebook.svg';
import { ReactComponent as InstaIcon } from '../assets/icons/InstaIcon.svg';
import { ReactComponent as LogoIcon } from './../assets/images/logo.svg';

export default function Footer(params) {
  const location = useLocation();

  const isLogin = location.pathname === '/login' ? true : false

  return (
    <footer className={`footer ${isLogin && "public-footer"}`}>
      <div className="footer__main">
        <div className="footer__main-info">
          <div className="footer__main-info-logo rel">
            {/* <a className="logo-link img-abs" href="/index.html"></a> */}
            {/* <img className="img-abs" src="./../assets/images/logo.svg" alt="logotype"/> */}
            <LogoIcon className="img-abs" />
          </div>

          {!isLogin ?
            <ul className="footer__main-links">
              <li className="footer__main-links-item">
                <Link
                  to={localStorage.getItem('isAuth') ? "/profile" : "/login"}
                  style={{ "whiteSpace": "nowrap" }}
                >
                  Главная
                </Link>
              </li>
              <li className="footer__main-links-item">
                <Link
                  to={localStorage.getItem('isAuth') ? "/private/about" : "/public/about"}
                  style={{ "whiteSpace": "nowrap" }}
                >
                  О компании
                </Link>
              </li>

              <li className="footer__main-links-item">

                <Link to={localStorage.getItem('isAuth') ? "/private/terms" : "/public/terms"}>
                  Правила
                </Link>
              </li>
              {/* <li className="footer__main-links-item">

              <Link to={localStorage.getItem('isAuth') ? "/history": "/public/history"}>
                История
              </Link>
            </li> */}

              <li className="footer__main-links-item">
                <Link to={localStorage.getItem('isAuth') ? "/private/analitics" : "/public/analitics"}> Аналитика</Link>
              </li>
              <li className="footer__main-links-item">
                <Link to={localStorage.getItem('isAuth') ? "/private/partners" : "/public/partners"}> Партнеры</Link>
              </li>
            </ul>
            : <PublicLinks findRef={params.intoView} />}

        </div>
        <div className="footer__main-social-links">
          <a className="link" target="_blank" href="https://www.youtube.com/">
            {/* <!--youtube--> */}
            <YouTubeIcon />
          </a>
          <a className="link" target="_blank" href="https://www.instagram.com/arbitech7/?igshid=MzRlODBiNWFlZA%3D%3D">
            {/* <!--instagram--> */}
            <InstaIcon />
          </a>
          <a className="link" target="_blank" href="https://www.facebook.com/profile.php?id=100090426237643">
            {/* <!--facebook--> */}
            <Facebook />
          </a>
          <a className="link" target="_blank" href="https://t.me/arbitech777">
            {/* telegram */}
            <TelegramIcon />
          </a>
        </div>
      </div>

      <a href="/" className="footer__copyright link">© 2023 ARBITECH7. Все права защищены.</a>
    </footer>
  )
}