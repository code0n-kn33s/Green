import { BackButton } from "../../Elements/Library"

import { useTranslation } from 'react-i18next';
export function AboutPage() {
    const {t} = useTranslation();
    return (
        <div className={`footer-links ${!localStorage.getItem('isAuth') && "active" }`}>
            <div>

            {!localStorage.getItem('isAuth') && <BackButton />}
            </div>
            <h4>
                {t("primary1")}
            </h4>
            <div>
                🔍 {t("primary2")}
            </div>
            <div>
                💡 {t("primary3")}
            </div>
            <div>
                🚀 {t("primary4")}
            </div>
            <div>
                💼 {t("primary5")}
            </div>
            <div>
                🌟 {t("primary6")}
            </div>
        </div>
    )
}
export function HistoryPage() {
    const {t} = useTranslation();

    return (
        <div className={`footer-links ${!localStorage.getItem('isAuth') && "active" }`}>
            {!localStorage.getItem('isAuth') && <BackButton />}
            <h4>
                {t("primary166")}
            </h4>
            <div>
                {t("primary7")}
            </div>
            <div>
                {t("primary8")}
            </div>
            <div>
                {t("primary9")}
            </div>
            <div>
                {t("primary10")}
            </div>
            <div>
                {t("primary11")}
            </div>
        </div>
    )
}
export function AnaliticsPage() {
    const {t} = useTranslation();

    return (
        <div className={`footer-links ${!localStorage.getItem('isAuth') && "active" }`}>
            {!localStorage.getItem('isAuth') && <BackButton />}
            <h4>
                {t("primary12")}
            </h4>
            <div>
                {t("primary13")}

            </div><div>
                {t("primary14")}

            </div><div>
                {t("primary15")}

            </div><div>
                {t("primary16")}

            </div><div>
                {t("primary17")}
            </div>
        </div>
    )
}