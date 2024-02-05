import { useTranslation } from 'react-i18next';

import banner from "./img/Rectangle.png";

export function BinaryOption(params) {


    const { t } = useTranslation();

    return (
        <div className="binary-option-wrap">
            <h1 className="binary-option-title">{t("Binary Option")}</h1>

            <div className="binary-option-img">
                <img src={banner} alt="" />
            </div>

            <div className="binary-option-sections">

                <div className="binary-option-section">
                    <div className="binary-option-section-title">
                        {t("binary-option-section-title-section1")}
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle1-section1")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text1-section1")}
                        </span>
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle2-section1")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text2-section1")}
                        </span>
                    </div>
                </div>

                <div className="binary-option-section">
                    <div className="binary-option-section-title">
                        {t("binary-option-section-title-section2")}
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle1-section2")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text1-section2")}
                        </span>
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle2-section2")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text2-section2")}
                        </span>
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle3-section2")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text3-section2")}
                        </span>
                    </div>
                </div>


                <div className="binary-option-section">
                    <div className="binary-option-section-title">
                        {t("binary-option-section-title-section3")}
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle1-section3")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text1-section3")}
                        </span>
                    </div>
                    <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle2-section3")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text2-section3")}
                        </span>
                    </div>
                    {/* <div className="binary-option-section-listitem">
                        <b className="binary-option-section-subtitle">
                            {t("binary-option-section-subtitle3-section3")}
                        </b>
                        <span className="binary-option-section-text">
                            {t("binary-option-section-text3-section3")}
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}