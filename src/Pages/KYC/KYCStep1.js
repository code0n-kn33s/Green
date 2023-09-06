import { useNavigate } from 'react-router-dom'

export default function KYCPage(params) {
    const navigate = useNavigate()
    const { tab } = params

    console.log('params :>> ', params);
    return (
        <div class="tabs__accordions-wrapper">
        <div class="tabs__list"
            id="tabpanel-1"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="tab-1">
            <div class="KYS-section__inputs-wrapper">
                <h2 class="KYS-section__inputs-heading">Общая Информация</h2>

                <div class="KYS-section__inputs-row">
                    <div class="form-container">
                        <input required type="text" placeholder="Имя" name="name" id="name" />
                    </div>

                    <div class="form-container">
                        <input required type="text" placeholder="Отчество (При наличии)" name="patronymic" id="patronymic" />
                    </div>
                </div>

                <div class="KYS-section__inputs-row">
                    <div class="form-container">
                        <input required type="text" placeholder="Фамилия" name="surname" id="surname" />
                    </div>

                    <div class="form-container">
                        <input required type="text" placeholder="Дата Рождения" name="birthday" id="birthday" />
                    </div>
                </div>
            </div>

            <div class="KYS-section__inputs-wrapper">
                <h2 class="KYS-section__inputs-heading">Telegram</h2>

                <div class="KYS-section__inputs-row">
                    <div class="form-container">
                        <input required type="text" placeholder="Telegram" name="address" id="address" />
                    </div>
                </div>

                <div class="KYS-section__inputs-row">
                    {/* <div class="form-container">
                        <input required type="text" placeholder="Индекс" name="zip-code" id="zip-code" />
                    </div> */}

                    <div class="form-container">
                        <input required type="text" placeholder="Страна" name="country" id="country" />
                    </div>

                    <div class="form-container">
                        <input required type="text" placeholder="Город" name="city" id="city" />
                    </div>
                </div>
            </div>

            <button class="KYS-section__next-page btn btn--primary"
                // onclick="if(window.submitForm()) document.getElementById('tab-2').click();"
                onClick={() => navigate('/profile/kyc/step2')}
                role="tab"
                type="button"
                tabindex="0"
                aria-controls="tabpanel-2"
                aria-selected="false">
                Далее
            </button>
        </div>


    </div>
    )
}