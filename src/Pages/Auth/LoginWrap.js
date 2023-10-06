
import { AboutUs } from '../FooterPages'
import { StoryMap } from '../FooterPages'
import { Posibilities } from '../FooterPages'
import { Partners } from '../FooterPages'
import { Terms } from '../FooterPages'
import { PrimaryLogin } from '../FooterPages'
import Login from './LoginPage'
import Footer from './../../Elements/Footer'

export function LoginWrap(params) {

    return (
        <div className="login-wrap-page page">
            <div className="login-wrap-container">
                <PrimaryLogin />
                <AboutUs />
                <StoryMap />
                <Posibilities />
                <Partners />
                <Terms />
                <Login />
            </div>

            <Footer />
        </div>
    )
}