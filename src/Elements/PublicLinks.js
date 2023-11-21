import { useTranslation } from 'react-i18next';
export function PublicLinks(params) {
const {t} = useTranslation();
    const currentRef = (anchor) => {
        params.findRef(anchor)
    }

    return (
        <div className="foter-public-links">
            <ul className="footer__main-links">
                <li
                    onClick={() => currentRef('main')}
                    className="footer__main-links-item" >
                    {t("Главная")}
                </li>

                <li
                    onClick={() => currentRef('about')} className="footer__main-links-item"
                    style={{ "whiteSpace": "nowrap" }}
                >
                    {t("О компании")}
                </li>

                <li
                    onClick={() => currentRef('analitics')}
                    className="footer__main-links-item">
                    {t("Аналитика")}
                </li>
                <li
                    onClick={() => currentRef('partners')}
                    className="footer__main-links-item">

                    {t("Партнеры")}
                </li>

                <li
                    onClick={() => currentRef('story')}
                    className="footer__main-links-item">

                    {t("История")}
                </li>

                <li
                    onClick={() => currentRef('rules')}
                    className="footer__main-links-item"
                >
                    {t("Правила")}
                </li>

                <li
                    onClick={() => currentRef('enter')}
                    className="footer__main-links-item"
                >
                    {t("Вход")}
                </li>
            </ul>

        </div>
    )

}