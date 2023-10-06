import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';

export function PrimaryLogin(params) {


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
                    <LogoIcon />
                </div>
                <div className="primary-login-title">
                    ARBITECH7
                </div>
                <div className="primary-login-pretitle">
                    AI - powered project
                </div>
                <div className="primary-login-text">
                    designed for cryptocurrency arbitrage
                </div>
                <div className="primary-login-buttons">
                    <button onClick={scrollBottom} className="primary-login-button">
                        LOG IN</button>

                    <Link to="/register">
                        <button className="primary-login-button">
                            REGISTRATION</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}