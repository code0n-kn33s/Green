import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { transportKissFields } from '../../toolkitReducers/actions.slice'

function KYCPage({ tab }) {
    const [formData, setFormData] = useState({
        name: { value: '', required: true },
        phone: { value: '', required: false },
        surname: { value: '', required: false },
        birthday: { value: '', required: true },
        telegram: { value: '', required: true },
        country: { value: '', required: true },
        city: { value: '', required: false },
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Состояние для хранения ошибок
    const [errors, setErrors] = useState({
        name: false,
        patronymic: false,
        surname: false,
        birthday: false,
        telegram: false,
        country: false,
        city: false,
    });

    const validateForm = () => {
        const newErrors = {};

        // Проверяем каждое поле на пустоту
        for (const field in formData) {
            const { value, required } = formData[field];
            if (required && value.trim() === '') {
                newErrors[field] = true;
            } else {
                newErrors[field] = false;
            }
        }

        setErrors(newErrors);

        // Проверяем, есть ли хотя бы одна ошибка
        return Object.values(newErrors).every((error) => !error);
    };

    const goToStep2 = () => {
        if (validateForm()) {
            navigate('/profile/kyc/step2');
            dispatch(transportKissFields(formData))
        }
    };

    // Обработчик изменения для инпутов
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: {
                ...formData[name],
                value: value,
            },
        });
    };

    return (
        <div className="tabs__accordions-wrapper">
            <div
                className="tabs__list"
                id="tabpanel-1"
                role="tabpanel"
                tabIndex="0"
                aria-labelledby="tab-1"
            >
                <div className="KYS-section__inputs-wrapper">
                    <h2 className="KYS-section__inputs-heading">Общая Информация</h2>

                    <div className="KYS-section__inputs-row">
                        <div className="form-container">
                            <input
                                required={formData.name.required}
                                type="text"
                                placeholder="Имя *"
                                name="name"
                                id="name"
                                value={formData.name.value}
                                onChange={handleInputChange}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">Заполните поле</span>}
                        </div>
                        <div className="form-container">
                            <input
                                required={formData.surname.required}
                                type="text"
                                placeholder="Фамилия"
                                name="surname"
                                id="surname"
                                value={formData.surname.value}
                                onChange={handleInputChange}
                                className={errors.surname ? 'error' : ''}
                            />
                            {errors.surname && <span className="error-message">Заполните поле</span>}
                        </div>
                    </div>

                    <div className="KYS-section__inputs-row">

                        <div className="form-container">
                            <input
                                type="tel"
                                placeholder="Номер телефона"
                                name="phone"
                                id="phone"
                                value={formData.phone.value}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-container">
                            <input
                                required={formData.birthday.required}
                                type="date"
                                placeholder="Дата Рождения *"
                                name="birthday"
                                id="birthday"
                                value={formData.birthday.value}
                                onChange={handleInputChange}
                                className={errors.birthday ? 'error' : ''}
                            />
                            {errors.birthday && <span className="error-message">Заполните поле</span>}
                        </div>
                    </div>
                </div>

                <div className="KYS-section__inputs-wrapper">
                    <h2 className="KYS-section__inputs-heading">Контактная информация</h2>

                    <div className="KYS-section__inputs-row">
                        <div className="form-container">
                            <input
                                required={formData.telegram.required}
                                type="text"
                                placeholder="Telegram *"
                                name="telegram"
                                id="telegram"
                                value={formData.telegram.value}
                                onChange={handleInputChange}
                                className={errors.telegram ? 'error' : ''}
                            />
                            {errors.telegram && <span className="error-message">Заполните поле</span>}
                        </div>
                    </div>

                    <div className="KYS-section__inputs-row">
                        <div className="form-container">
                            <input
                                required={formData.country.required}
                                type="text"
                                placeholder="Страна *"
                                name="country"
                                id="country"
                                value={formData.country.value}
                                onChange={handleInputChange}
                                className={errors.country ? 'error' : ''}
                            />
                            {errors.country && <span className="error-message">Заполните поле</span>}
                        </div>

                        <div className="form-container">
                            <input
                                required={formData.city.required}
                                type="text"
                                placeholder="Город"
                                name="city"
                                id="city"
                                value={formData.city.value}
                                onChange={handleInputChange}
                                className={errors.city ? 'error' : ''}
                            />
                            {errors.city && <span className="error-message">Заполните поле</span>}
                        </div>
                    </div>
                </div>

                <button
                    className="KYS-section__next-page btn btn--primary"
                    onClick={goToStep2}
                    role="tab"
                    type="button"
                    tabIndex="0"
                    aria-controls="tabpanel-2"
                    aria-selected="false"
                >
                    Далее
                </button>
            </div>
        </div>
    );
}

export default KYCPage;
