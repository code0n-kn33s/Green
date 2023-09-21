import { ReactComponent as TelegramIcon } from '../assets/icons/TelegramIcon.svg';
import { ReactComponent as YouTubeIcon } from '../assets/icons/YouTubeIcon.svg';
import { ReactComponent as Facebook } from '../assets/icons/Facebook.svg';
import { ReactComponent as InstaIcon } from '../assets/icons/InstaIcon.svg';
import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from './../assets/images/logo.svg';

export default function Footer(params) {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__main-info">
          <div className="footer__main-info-logo rel">
            {/* <a className="logo-link img-abs" href="/index.html"></a> */}
            {/* <img className="img-abs" src="./../assets/images/logo.svg" alt="logotype"/> */}
            <LogoIcon className="img-abs" />
          </div>

          <ul className="footer__main-links">
            <li className="footer__main-links-item">
              <Link to="about">
                О компании </Link>
            </li>

            <li className="footer__main-links-item">

              <Link to="history">
                История компании
              </Link>
            </li>

            {/* <li className="footer__main-links-item">
                <a className="link" href="/">Новости</a>
              </li> */}

            <li className="footer__main-links-item">
              <Link to="analitics"> Аналитика рынка</Link>
            </li>
          </ul>

        </div>
        <div className="footer__main-social-links">
          <a className="link" href="/">
            {/* <!--youtube--> */}
            <YouTubeIcon />

          </a>
          <a className="link" href="/">
            {/* <!--instagram--> */}
            <InstaIcon />


          </a>
          <a className="link" href="/">
            {/* <!--facebook--> */}
            <Facebook />

          </a>
          <a className="link" href="/">
            {/* telegram */}
            <TelegramIcon />
          </a>
        </div>
      </div>

      <a href="/" className="footer__copyright link">© 2023 ARBITECH7. Все права защищены.</a>
    </footer>
  )
}