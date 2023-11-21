
import { Link, useLocation } from 'react-router-dom'
import { PublicLinks } from './PublicLinks'
import { useTranslation } from 'react-i18next';

import { ReactComponent as TelegramIcon } from '../assets/icons/TelegramIcon.svg';
import { ReactComponent as YouTubeIcon } from '../assets/icons/YouTubeIcon.svg';
import { ReactComponent as Facebook } from '../assets/icons/Facebook.svg';
import { ReactComponent as InstaIcon } from '../assets/icons/InstaIcon.svg';
import { ReactComponent as LogoIcon } from './../assets/images/logo.svg';

export default function Footer(params) {
  const location = useLocation();
const {t} = useTranslation();
  const isLogin = location.pathname === '/login' ? true : false

  return (
    <footer className={`footer ${isLogin && "public-footer"}`}>
      <div className="footer__main">
        <div className="footer__main-info">
          <div className="footer__main-info-logo rel">
            {/* <a className="logo-link img-abs" href="/index.html"></a> */}
            {/* <img className="img-abs" src="./../assets/images/logo.svg" alt="logotype"/> */}
            <Link to="/profile">  <LogoIcon className="img-abs" /> </Link>
          </div>

          {!isLogin ?
            <ul className="footer__main-links">
              <li className="footer__main-links-item">
                <Link
                  to={localStorage.getItem('isAuth') ? "/profile" : "/login"}
                  style={{ "whiteSpace": "nowrap" }}
                >
                  {t("Главная")}
                </Link>
              </li>
              {/* <li className="footer__main-links-item">
                <Link
                  to={localStorage.getItem('isAuth') ? "/private/about" : "/public/about"}
                  style={{ "whiteSpace": "nowrap" }}
                >
                  {t("О компании")}
                </Link>
              </li>

              <li className="footer__main-links-item">

                <Link to={localStorage.getItem('isAuth') ? "/private/terms" : "/public/terms"}>
                  {t("Правила")}
                </Link>
              </li>

              <li className="footer__main-links-item">
                <Link to={localStorage.getItem('isAuth') ? "/private/analitics" : "/public/analitics"}> {t("Аналитика")}</Link>
              </li>
              <li className="footer__main-links-item">
                <Link to={localStorage.getItem('isAuth') ? "/private/partners" : "/public/partners"}> {t("Партнеры")}</Link>
              </li> */}
            </ul>
            : <PublicLinks findRef={params.intoView} />}

        </div>
        <div className="footer__main-social-links">
          <a className="link" target="_blank" href="https://youtube.com/@Arbi_crypto?si=jrfFdjbzjO6lb7Cr">
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
          <a className="link" target="_blank" href="https://t.me/arbitech7_support">
            {/* telegram */}
            <TelegramIcon />
          </a>
        </div>
      </div>

      <a href="/" className="footer__copyright link">© 2023 ARBITECH7. {t("Все права защищены")}.</a>
    </footer>
  )
}