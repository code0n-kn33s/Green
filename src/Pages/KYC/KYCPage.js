import { Outlet, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
export default function KYCPage(params) {
    const location = useLocation()
    const regex = /\/(\w+)$/
const {t} = useTranslation();
    const tabIndex = regex.exec(location.pathname)[0]
    let activeTab = tabIndex === '/step1' ? true : false

    return (
        <div class="KYS-page page">
            <div class="KYS-page__body-wrapper">
                <div class="KYS-page__sections-wrapper medium-wrapper">
                    <section class="KYS-section">
                        <h1 class="KYS-section__heading h3">KYS</h1>

                        <div class="KYS-section__wrapper rel">
                            <div class="KYS-section__label">{t("Настроить")} AI</div>

                            <form class="form KYS__form" action="/action_page.php" method="post">
                                <tabs-component class="tabs">
                                    <div class="tabs__wrapper">
                                        <div class="tabs__navigation hide-scrollbar" role="tablist" aria-labelledby="tablist">
                                            <div class="tabs__header-tab btn btn--primary"
                                                role="tab"
                                                type="button"
                                                tabindex="0"
                                                id="tab-1"
                                                aria-controls="tabpanel-1"
                                                aria-selected={activeTab}>
                                                <span class="world_1">{t("Шаг")}</span>
                                                <span class="world_2">1</span>
                                            </div>

                                            <div   class="tabs__header-tab btn btn--primary"
                                                role="tab"
                                                type="button"
                                                tabindex="-1"
                                                id="tab-2"
                                                aria-controls="tabpanel-2"
                                                aria-selected={!activeTab}>
                                                <span class="world_1">{t("Шаг")}</span>
                                                <span class="world_2">2</span>
                                            </div>
                                        </div>

                                        <Outlet />

                                        {/*
                                        <Routes>
                                            <Route path="step1" element={<KYCStep1 />} />
                                            <Route path="profile/kyc/step2" element={<KYCStep2 />} />
                                        </Routes> */}


                                    </div>
                                </tabs-component>

                                <span class="form__error-message hide">{t("Данные заполнены не корректно или не полностью")}</span>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}