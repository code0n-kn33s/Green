
import { BackButton } from './../../Elements'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from './../../Elements/Footer'
import { ReactComponent as LogoIcon } from './../../assets/images/logo.svg';



export function PublicWrap(params) {

    return (
        <div className="footer-page page">

            {/* {!localStorage.getItem('isAuth') && <BackButton />} */}

            {/* // !localStorage.getItem('isAuth') && "active" */}
            <div className="logo-wrapper">

                <LogoIcon className="logo-public" />
            </div>

            <div className={` footer-links `}>
                <div className={` footer-pages-wrapp `}>

                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>

    )
}