
import { BackButton } from './../../Elements'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from './../../Elements/Footer'
import { ReactComponent as LogoIcon } from './../../assets/images/logo.svg';

import { useTranslation } from 'react-i18next';

export function PrivateWrap(params) {
const {t} = useTranslation();
    return (
        <div className="private-wrap">

            {/* {!localStorage.getItem('isAuth') && <BackButton />} */}

            {/* // !localStorage.getItem('isAuth') && "active" */}


            <div className={` footer-links `}>
                <div className={` footer-pages-wrapp `}>

                    <Outlet />
                </div>
            </div>

        </div>

    )
}