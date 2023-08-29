import { Link } from 'react-router-dom';

export default function RestorePass(params) {
    return (
        <div class="restore-pass-page page">
        <script src="scripts/index.js"></script>

        <header class="header rel">
          <div class="header__wrapper rel">
            {/* <a class="logo-link" href="/index.html"></a> */}
            <img class="img-abs" src="./images/logo.svg" alt="logotype"/>
          </div>
        </header>

        <section class="pass-section small-wrapper">
          <div class="pass-section__headings-wrapper">
            <h1 class="pass-section__heading h3">Сброс пароля</h1>
            <p class="pass-section__description">Введите имейл адрес для сброса пароля</p>
          </div>

          <form class="form pass-section__form" action="/action_page.php" method="post">
            <div class="form__main-content">
              <div class="pass-section__side">
                <div class="form-container js-form-parent">
                  <label for="email">Email адрес</label>
                  <input required type="email" placeholder="Email" name="email" id="email"/>
                  <span aria-label="valid-email" class="form__error-message">Error message</span>
                </div>

                <button type="submit" class="js-send-btn btn">
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    )
}