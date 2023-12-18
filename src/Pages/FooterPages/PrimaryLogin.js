import { Link } from 'react-router-dom'
// import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';

import CustomSelect from './../../Elements/Library/CustomSelect';
import logoPNg from '../../assets/images/logo.png';

export function PrimaryLogin(params) {
const {t} = useTranslation();

    const scrollBottom = () => {
        // window.scrollIntoView({})
        window.scrollTo({
            top: 100000,
            behavior: "smooth",
        });
    }

    return (
        <div className="primary-login-page">
            <div className="primary-login-wrap">
                <div className="primary-login-icon">
                    {/* <LogoIcon /> */}
                    <img src={logoPNg} alt="" />
                </div>
                <div className="primary-login-title">
                    {t("ARBITECH")}7
                </div>
                <div className="primary-login-pretitle">
                    AI - {t("powered project")}
                </div>
                <div className="primary-login-text">
                    {t("designed for cryptocurrency arbitrage")}
                </div>
                <div className="primary-login-buttons">
                    <button onClick={scrollBottom} className="primary-login-button">
                        {t("LOG IN")}</button>

                    <Link to="/register">
                        <button className="primary-login-button">
                            {t("REGISTRATION")}</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}