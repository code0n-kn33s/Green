import { useTranslation } from 'react-i18next';

import group1 from "./img/Group.png";
import group2 from "./img/Group1.png";
import group3 from "./img/Group2.png";

export function OurProducts(params) {
    const { t } = useTranslation();

    return (
        <>
            <div className="our-products">

                <h1 className="our-products-title">{t("Our Products")}</h1>
                <div className="our-products-section-wrap">
                    <div className="our-products-section">
                        <div className="our-products-section-img"><img src={group1} alt="" /></div>
                        <div className="our-products-section-title">{t("our-products-title-section1")}</div>
                        <div className="our-products-section-subtitle">{t("our-products-subtitle-section1")}</div>
                        <div className="our-products-section-text">{t("our-products-text-section1")}</div>
                        {/* <div className="our-products-section-button">{t("our-products-button-text")}</div> */}
                    </div>
                    <div className="our-products-section">
                        <div className="our-products-section-img"><img src={group2} alt="" /></div>
                        <div className="our-products-section-title">{t("our-products-title-section2")}</div>
                        <div className="our-products-section-subtitle">{t("our-products-subtitle-section2")}</div>
                        <div className="our-products-section-text">{t("our-products-text-section2")}</div>
                        {/* <div className="our-products-section-button">{t("our-products-button-text")}</div> */}
                    </div>
                    <div className="our-products-section">
                        <div className="our-products-section-img"><img src={group3} alt="" /></div>
                        <div className="our-products-section-title">{t("our-products-title-section3")}</div>
                        <div className="our-products-section-subtitle">{t("our-products-subtitle-section3")}</div>
                        <div className="our-products-section-text">{t("our-products-text-section3")}</div>
                        {/* <div className="our-products-section-button">{t("our-products-button-text")}</div> */}
                    </div>

                </div>

            </div>
        </>
    )
}