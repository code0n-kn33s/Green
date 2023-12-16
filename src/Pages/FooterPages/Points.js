import { useTranslation } from 'react-i18next';
export function Points(params) {
    const {t} = useTranslation();
    return (
        <>
            <div className="points">
                <div className="points-title public-title">
                    {t("Story map")}
                </div>
                <div className="points-info">
                    <div className="points-info-wrap">
                        <div className="points-info-top">
                            <div className="point-item">
                                <div className="point-item-number">
                                    2
                                </div>
                                <div className="point-item-hidden">
                                    <div className="point-item-title">
                                        {t("Development")}
                                    </div>
                                    <div className="point-item-text">
                                        {t("teamStart")}
                                    </div>
                                </div>
                            </div>
                            <div className="point-item">
                                <div className="point-item-number">
                                    4
                                </div>
                                <div className="point-item-hidden">
                                    <div className="point-item-title">
                                        {t("Progress")}
                                    </div>
                                    <div className="point-item-text">
                                        {t("m23")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="points-info-line"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
                        <div className="points-info-bottom">
                            <div className="point-item">
                                <div className="point-item-number">
                                    1
                                </div>
                                <div className="point-item-hidden">
                                    <div className="point-item-title">
                                        {t("Ideas")}
                                    </div>
                                    <div className="point-item-text">
                                        {t("CryproArbitrag")}
                                    </div>
                                </div>
                            </div>
                            <div className="point-item">
                                <div className="point-item-number">
                                    3
                                </div>
                                <div className="point-item-hidden">
                                    <div className="point-item-title">
                                        {t("Research")}
                                    </div>
                                    <div className="point-item-text">
                                        {t("bigData")}
                                    </div>
                                </div>
                            </div>
                            <div className="point-item">
                                <div className="point-item-number">
                                    5
                                </div>
                                <div className="point-item-hidden">
                                    <div className="point-item-title">
                                    </div>
                                    <div className="point-item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}