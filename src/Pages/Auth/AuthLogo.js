import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import logoPNg from '../../assets/images/logo.png';
export function AuthLogo(params) {
    return (
        <header className="header rel">
                                <img src={logoPNg} alt="" />
            {/* <LogoIcon /> */}
        </header>
    )
}