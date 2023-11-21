
import { useRef, useEffect } from "react"
import { useTranslation } from 'react-i18next';
import { AboutUs } from '../FooterPages'
import { StoryMap } from '../FooterPages'
import { Posibilities } from '../FooterPages'
import { Partners } from '../FooterPages'
import { Terms } from '../FooterPages'
import { Points } from '../FooterPages'
import { PrimaryLogin } from '../FooterPages'
import Login from './LoginPage'
import Footer from './../../Elements/Footer'

export function LoginWrap(params) {
    const refPrimaryLogin = useRef(null)
    const refAboutUs = useRef(null)
    const refStoryMap = useRef(null)
    const refPosibilities = useRef(null)
    const refPartners = useRef(null)
    const refPoints = useRef(null)
    const refTerms = useRef(null)
    const refLogin = useRef(null)
const {t} = useTranslation();
    useEffect(() => {
        refPrimaryLogin.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, [])

    const clickeRef = (elem) => {
        console.log('elem :>> ', elem);

        if (elem === 'main') {
            refPrimaryLogin.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
        if (elem === 'about') {
            refAboutUs.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
        if (elem === 'analitics') {
            refPosibilities.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
        if (elem === 'partners') {
            refPartners.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
        if (elem === 'story') {
            refPoints.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
        if (elem === 'rules') {
            refTerms.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
        if (elem === 'enter') {
            refLogin.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }
    return (
        <div className="login-wrap-page page">
            <div className="login-wrap-container">
                <div ref={refPrimaryLogin}> <PrimaryLogin /> </div>
                <div ref={refAboutUs}> <AboutUs /> </div>
                <div ref={refStoryMap}> <StoryMap /> </div>
                <div ref={refPosibilities}> <Posibilities /> </div>
                <div ref={refPartners}> <Partners /> </div>
                <div ref={refPoints}> <Points /> </div>
                <div ref={refTerms}> <Terms /> </div>
                <div ref={refLogin}> <Login /> </div>
            </div>

            <Footer intoView={clickeRef} />
        </div>
    )
}