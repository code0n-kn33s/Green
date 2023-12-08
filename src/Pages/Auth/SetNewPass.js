import { AuthLogo } from './AuthLogo';
import { BackButton } from '../../Elements/Library';

export default function name(params) {

    return (
        <div className="restore-pass-page restore-pass-page--new-pass page">
            <AuthLogo />

            <section className="pass-section small-wrapper">

                <div className="pass-section__headings-wrapper auth-headings">
            <BackButton />
                    <h1 className="pass-section__heading h3">Сброс пароля</h1>
                    <p className="pass-section__description">Установить новый пароль</p>
                </div>

                <form className="form pass-section__form" action="/action_page.php" method="post">
                    <div className="form__main-content">
                        <div className="pass-section__side">
                            <div className="form-container password">
                                <label htmlFor="password">Пароль</label>

                                <div className="password__container">
                                    <button type="button" className="password__eye">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9C10.358 9 9 10.359 9 12ZM2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5C4.408 5 2.12632 11.617 2.10543 11.684ZM4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17C6.67774 17 4.61587 13.154 4.11657 12Z" />
                                        </svg>
                                    </button>

                                    <input required type="password" name="password" id="password" />
                                    <span aria-label="valid-email" className="form__error-message">Error message</span>
                                </div>
                            </div>

                            <div className="form-container password">
                                <label htmlFor="confirm-password">Повторите пароль</label>

                                <div className="password__container">
                                    <button type="button" className="password__eye">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9C10.358 9 9 10.359 9 12ZM2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5C4.408 5 2.12632 11.617 2.10543 11.684ZM4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17C6.67774 17 4.61587 13.154 4.11657 12Z" />
                                        </svg>
                                    </button>

                                    <input required type="password" name="confirm-password" id="confirm-password" />
                                    <span aria-label="valid-email" className="form__error-message">Error message</span>
                                </div>
                            </div>

                            <button type="submit" className="js-send-btn btn">
                                Применить
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}