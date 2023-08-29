import { Link } from 'react-router-dom';

export default function RegisterPage(params) {
    return (
        <div class="register-page page">


            <header class="header rel">
                <div class="header__wrapper rel">
                    {/* <Link class="logo-link" to="/"></Link> */}
                    <img class="img-abs" src="./images/logo.svg" alt="logotype" />
                </div>
            </header>

            <section class="register small-wrapper">
                <div class="register__headings-wrapper">
                    <h1 class="register__heading h3">Регистрация</h1>
                    <p class="register__description">Заполните пожалуйста информацию ниже:</p>
                </div>

                <form class="form register__form" action="/action_page.php" method="post">
                    <div class="form__main-content">
                        <div class="register__side">
                            <div class="form-container">
                                <label for="full-name">Имя пользователя</label>
                                <input required type="text" placeholder="Имя пользователя" name="full-name" id="full-name" />
                            </div>

                            <div class="form-container password">
                                <label for="password">Пароль</label>

                                <div class="password__container">
                                    <button type="button" class="password__eye">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9C10.358 9 9 10.359 9 12ZM2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5C4.408 5 2.12632 11.617 2.10543 11.684ZM4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17C6.67774 17 4.61587 13.154 4.11657 12Z" />
                                        </svg>
                                    </button>

                                    <input required type="password" placeholder="Password" name="password" id="password" />
                                    <span aria-label="valid-email" class="form__error-message">Error message</span>
                                </div>
                            </div>

                            <div class="form-container">
                                <label for="ref-id">Ref ID</label>
                                <input placeholder="7809432" type="text" name="ref-id" id="ref-id" />
                            </div>
                        </div>

                        <div class="register__side">
                            <div class="form-container js-form-parent">
                                <label for="email">Email адрес</label>
                                <input required type="email" placeholder="Email" name="email" id="email"/>
                                    <span aria-label="valid-email" class="form__error-message">Error message</span>
                            </div>

                            <div class="form-container password">
                                <label for="confirm-password">Повторить пароль</label>

                                <div class="password__container">
                                    <button type="button" class="password__eye">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9C10.358 9 9 10.359 9 12ZM2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5C4.408 5 2.12632 11.617 2.10543 11.684ZM4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17C6.67774 17 4.61587 13.154 4.11657 12Z" />
                                        </svg>
                                    </button>

                                    <input required type="password" placeholder="Password" name="confirm-password" id="confirm-password" />
                                    <span aria-label="valid-email" class="form__error-message">Error message</span>
                                </div>
                            </div>

                            <button type="submit" class="js-send-btn btn">
                                Зарегистрироватся
                            </button>
                        </div>
                    </div>

                    <div class="form-container--checkbox checkbox">
                        <input required class="form__custom-checkbox" type="checkbox" name="accept" id="accept" />

                        <label for="accept">
                            Я согласен с условиями пользования платформой
                        </label>
                    </div>
                </form>
            </section>
        </div>
    )
}