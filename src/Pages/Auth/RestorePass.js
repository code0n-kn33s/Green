import { Link } from 'react-router-dom';
import { AuthLogo } from './AuthLogo';
import { BackButton } from '../../Elements/Library';
import { useTranslation } from 'react-i18next';
export default function RestorePass(params) {
  const {t} = useTranslation();
  return (
    <div className="restore-pass-page page">
      <AuthLogo />

      <section className="pass-section small-wrapper">

        <div className="pass-section__headings-wrapper auth-headings">
      <BackButton />
          <h1 className="pass-section__heading h3">{t("Сброс пароля")}</h1>
          <p className="pass-section__description">{t("Введите имейл адрес для сброса пароля")}</p>
        </div>

        <form className="form pass-section__form" action="/action_page.php" method="post">
          <div className="form__main-content">
            <div className="pass-section__side">
              <div className="form-container js-form-parent">
                <label htmlFor="email">{t("Email адрес")}</label>
                <input required type="email" placeholder="Email" name="email" id="email" />
                <span aria-label="valid-email" className="form__error-message">{t("Error message")}</span>
              </div>

              <button type="submit" className="js-send-btn btn">
                {t("Отправить")}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}