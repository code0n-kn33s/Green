import { ReactComponent as PassIcon } from '../../assets/icons/PassIcon.svg'

export default function Login(props) {

    return (
        <div className="login-page page">
        <section className="login small-wrapper">
            <div className="login__side">
                <h1 className="login__heading h3">Логин</h1>
                <p className="login__description">Вход в аккаунт</p>

                <form className="form-container" action="/action_page.php" method="post">
                    <div className="form-container js-form-parent">
                        <label for="email">Email адрес</label>
                        <input required type="email" placeholder="Email" name="email" id="email"/>
                            <span aria-label="valid-email" className="form__error-message">Error message</span>
                    </div>

                    <div className="form-container password">
                        <label for="password">Пароль</label>

                        <div className="password__container">
                            <button type="button" className="password__eye">
                                <PassIcon />
                            </button>

                            <input required type="password" placeholder="Password" name="password" id="password"/>
                                <span aria-label="valid-email" className="form__error-message">Error message</span>
                        </div>
                    </div>

                    <div className="form-container__buttons-wrapper">
                        <button type="submit" className="js-send-btn btn">
                            Войти
                        </button>

                        <a className="link" href="./restore-password.html">Забыли пароль?</a>
                    </div>
                </form>
            </div>

            <div className="login__side">
                <h2 className="login__heading h3">Создать Аккаунт</h2>

                <a className="btn" href="./register.html">Регистрация</a>
            </div>
            </section>
        </div>
    )
}