import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AuthLogo } from './AuthLogo';
import { BackButton } from '../../Elements/Library';
import { registerNewUser } from './../../toolkitReducers';
import { ReactComponent as IconYeas } from '../../assets/icons/PassIcon.svg'


export default function RegisterPage() {
    const [showPass, setShowPass] = useState(false)
    const [isError, setisError] = useState(false)
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

    useEffect(() => {
        isRegistered && navigate('/login')
    }, [isRegistered])

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

        console.log('isRegistered', isRegistered);
        if(formData.password === formData.confirmPassword) {
            dispatch(registerNewUser(formData))
        } else {
            setisError(true)
            console.log('isError :>> ', isError);
        }
    };

    return (
        <div className="register-page page">
            <AuthLogo />

            <section className="register small-wrapper">
                <div className="register__headings-wrapper headings-wrapper auth-headings">
                    <BackButton />
                    <h1 className="register__heading h3">Регистрация</h1>
                    <p className="register__description">Заполните пожалуйста информацию ниже:</p>
                </div>

                <form className="form register__form" onSubmit={handleSubmit}>
                    <div className="form__main-content">
                        <div className="register__side">
                            <div className="form-container">
                                <label htmlFor="username">Имя пользователя</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Имя пользователя"
                                    name="username"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-container password">
                                <label htmlFor="password">Пароль</label>

                                <div className="password__container" >
                                    <button type="button" className="password__eye" onClick={() => setShowPass(!showPass)}>
                                        <IconYeas />

                                    </button>

                                    <input
                                        required
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {isError ? <span aria-label="valid-email" className={`${isError && "active"}  password-error form__error-message`} >Passwords must be the same</span> : null}
                                </div>
                            </div>

                            <div className="form-container">
                                <label htmlFor="ref-id">Ref ID</label>
                                <input
                                    placeholder="7809432"
                                    type="text"
                                    name="refID"
                                    id="ref-id"
                                    value={formData.refID}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="register__side">
                            <div className="form-container js-form-parent">
                                <label htmlFor="email">Email адрес</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <span aria-label="valid-email" className="form__error-message">Error message</span>
                            </div>

                            <div className="form-container password">
                                <label htmlFor="confirm-password">Повторить пароль</label>

                                <div className="password__container">
                                    {/* SVG иконка глаза */}
                                    {/* <button type="button" className="password__eye" onClick={() => setShowPass(!showPass)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </button> */}

                                    <input
                                        required
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
                                        name="confirmPassword"
                                        id="confirm-password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <span aria-label="valid-email" className="form__error-message">Error message</span>
                                </div>
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
                                />
                                <label htmlFor="accept">
                                    Я согласен с условиями пользования платформой
                                </label>
                            </div>

                            <button type="submit" className="js-send-btn btn">
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
