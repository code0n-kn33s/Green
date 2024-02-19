import { useState, useEffect } from 'react'
import { ReactComponent as PassIcon } from '../../assets/icons/PassIcon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthLogo } from './AuthLogo';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, getUserData, clearUserData } from './../../toolkitReducers';
import { getToken } from "./../../helpers";
import Footer from "../../Elements/Footer"
import { useTranslation } from 'react-i18next';

import CustomSelect  from '../../Elements/Library/CustomSelect';


export default function Login(props) {
    const dispatch = useDispatch()
    const [useLogin, setLogin] = useState('')
    const [usePassword, setPassword] = useState('')
    const [isMounted, setisMounted] = useState('')
    const [visionPassword, setVisionPassword] = useState(false)
    const isLoggedIn = useSelector(state => state.auth.isAuth)
    const errorText = useSelector(state => state.auth.error)
    const navigate = useNavigate();
    const {t} = useTranslation();
    
    // useEffect(() => {
    //     if (getToken() !== null) {
    //         dispatch(getUserData())
    //     }

    //     if (isMounted && isLoggedIn) {
    //         navigate('/profile')
    //     }

    //     return () => {
    //         setisMounted(false);
    //     };
    // }, [dispatch, isLoggedIn, navigate]);

    useEffect(() => {
        if (getToken() !== null) {
            dispatch(getUserData())
        }

        isLoggedIn && navigate('/profile')
    },[isLoggedIn])

    const showPass = () => {
        setVisionPassword(!visionPassword)
    }

    const submitAuth = (e) => {
        e.preventDefault()

        const data = { useLogin, usePassword }
        dispatch(loginUser(data))
    }

    return (
        <div className="login-page page">
            <AuthLogo />
            <section className="login small-wrapper">
                <div className="login__side">
                    <h1 className="login__heading h3">{t("Логин")}</h1>
                    <p className="login__description">{t("Вход в аккаунт")}     {errorText && <span aria-label="valid-email" className="form__error-message">- {t("wrongLogin")}</span>}</p>


                    <form className="form-container" onSubmit={submitAuth}>
                        <div className="form-container js-form-parent">
                            <label htmlFor="email">{t("Email адрес")}</label>
                            <input tabIndex="1" required type="text" value={useLogin} onChange={(e) => {
                                setLogin(e.target.value)
                                dispatch(clearUserData())
                            }} placeholder="Email" name="email" id="email" />
                            <span aria-label="valid-email" className="form__error-message">{t("Error message")}</span>
                        </div>

                        <div className="form-container password">
                            <label htmlFor="password">{t("Пароль")}</label>

                            <div className="password__container">
                                <button onClick={showPass} type="button" className="password__eye">
                                    <PassIcon />
                                </button>
                                <input tabIndex="2"  required type={!visionPassword ? 'password' : 'text'} value={usePassword} onChange={(e) => {
                                    setPassword(e.target.value)
                                    dispatch(clearUserData())
                                }} placeholder={t("Password")} name="password" id="password" />
                                <span aria-label="valid-email" className="form__error-message">{t("Error message")}</span>
                            </div>
                        </div>

                        <div className="form-container__buttons-wrapper">
                            <button tabIndex="3" type="submit" className="js-send-btn btn">
                                {t("Войти")}
                            </button>

                            <a className="link" target="_blank" href="https://t.me/arbitech7_support">
                                {t("Support")}
                            </a>
                            {/* <Link className="link" to="/restore">Забыли пароль?</Link> */}
                        </div>
                    </form>

                </div>

                <div className="login__side">
                    <h2 className="login__heading h3">{t("Создать Аккаунт")}</h2>
                    <div className="fixed-select">
                    <CustomSelect />
                        </div>

                    <Link className="btn" to="/register">{t("Регистрация")}</Link>
                </div>
            </section>
        </div>
    )
}