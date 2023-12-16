import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AuthLogo } from './AuthLogo';
import { BackButton } from '../../Elements/Library';
import { registerNewUser, resetRegister } from './../../toolkitReducers';
import { ReactComponent as IconYeas } from '../../assets/icons/PassIcon.svg'
import { useTranslation } from 'react-i18next';

export default function RegisterPage() {
    const [showPass, setShowPass] = useState(false)
    const [isError, setisError] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
const {t} = useTranslation();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        refID: '',
        acceptTerms: false,
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isRegistered = useSelector((state) => state.auth.registered)
    const registerErrors = useSelector((state) => state.auth.registerErrors)

    // chrome optimize
    useEffect(() => {
        setIsMounted(true)

        if (isRegistered && isMounted && !registerErrors) {
            dispatch(resetRegister())
            navigate('/login');
        }
        return () => {
            setIsMounted(false);

        };
    }, [isRegistered, isMounted]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setisError(false)
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === formData.confirmPassword) {
            dispatch(registerNewUser(formData))
        } else {
            setisError(true)
        }
    };

    return (
        <div className="register-page page">
            <AuthLogo />

            <section className="register small-wrapper">
                <div className="register__headings-wrapper headings-wrapper auth-headings">
                    <BackButton />
                    <h1 className="register__heading h3">{t("Регистрация")}</h1>
                    <p className="register__description">{t("Заполните пожалуйста информацию ниже")}:</p>
                </div>

                <form className="form register__form" onSubmit={handleSubmit}>
                    <div className="form__main-content">
                        <div className="register__side">
                            <div className="form-container">
                                <label htmlFor="username">{t("Имя пользователя")}</label>
                                <input
                                    required
                                    type="text"
                                    placeholder={t("Имя пользователя")}
                                    name="username"
                                    tabIndex="1"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {registerErrors?.username && <div>{registerErrors?.username[0]}</div>}

                            </div>
                            <div className="form-container js-form-parent">
                                <label htmlFor="email">{t("Email адрес")}</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    tabIndex="2"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {registerErrors?.email && <div>{registerErrors?.email[0]}</div>}
                                <span aria-label="valid-email" className="form__error-message">{t("Неверный формат")}</span>
                            </div>

                            <div className="form-container password">
                                <label htmlFor="password">{t("Пароль")}</label>

                                <div className="password__container" >
                                    <button type="button" className="password__eye" onClick={() => setShowPass(!showPass)}>
                                        <IconYeas />

                                    </button>

                                    <input
                                        required
                                        type={showPass ? "text" : "password"}
                                        placeholder={t("Password")}
                                        name="password"
                                        tabIndex="3"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {isError ? <span aria-label="valid-email" className={`${isError && "active"}  password-error form__error-message`} >{t("Passwords must be the same")}</span> : null}
                                </div>
                            </div>
                            <div className="form-container password">
                                <label htmlFor="confirm-password">{t("Повторить пароль")}</label>

                                <div className="password__container">

                                    <input
                                        required
                                        type={showPass ? "text" : "password"}
                                        placeholder={t("Password")}
                                        name="confirmPassword"
                                        id="confirm-password"
                                        tabIndex="4"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <span aria-label="valid-email" className="form__error-message">{t("Error message")}</span>
                                </div>
                            </div>
                            <div className="form-container">
                                <label htmlFor="ref-id">Ref ID</label>
                                <input
                                    placeholder=""
                                    type="text"
                                    name="refID"
                                    id="ref-id"
                                    tabIndex="5"
                                    value={formData.refID}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-container--checkbox checkbox">
                                <input
                                    required
                                    className="form__custom-checkbox"
                                    type="checkbox"
                                    name="acceptTerms"
                                    id="accept"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    tabIndex="6"
                                />
                                <label htmlFor="accept">
                                    {t("Я согласен с условиями пользования платформой")}
                                </label>
                            </div>

                            <button type="submit" className="js-send-btn btn" tabIndex="7">
                                {t("Зарегистрироваться")}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
