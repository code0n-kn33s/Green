
export function PublicLinks(params) {

    const currentRef = (anchor) => {
        params.findRef(anchor)
    }

    return (
        <div className="foter-public-links">
            <ul className="footer__main-links">
                <li
                    onClick={() => currentRef('main')}
                    className="footer__main-links-item" >
                    Главная
                </li>

                <li
                    onClick={() => currentRef('about')} className="footer__main-links-item"
                    style={{ "whiteSpace": "nowrap" }}
                >
                    О компании
                </li>

                <li
                    onClick={() => currentRef('analitics')}
                    className="footer__main-links-item">
                    Аналитика
                </li>
                <li
                    onClick={() => currentRef('partners')}
                    className="footer__main-links-item">

                    Партнеры
                </li>

                <li
                    onClick={() => currentRef('story')}
                    className="footer__main-links-item">

                    История
                </li>

                <li
                    onClick={() => currentRef('rules')}
                    className="footer__main-links-item"
                >
                    Правила
                </li>

                <li
                    onClick={() => currentRef('enter')}
                    className="footer__main-links-item"
                >
                    Вход
                </li>
            </ul>

        </div>
    )

}