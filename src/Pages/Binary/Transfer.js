import { useTranslation } from 'react-i18next';
import SwitcherSymbol from './SwitcherSymbol';
import { Link } from 'react-router-dom';

export default function BinaryHeader(params) {

    const { t } = useTranslation();

    return (
        <div>
            <Link
                to="transfer"
                className="binary-right-button"
            >
                {t("TRANSFER")}
            </Link>
            <div className="binary-right-currency">
                {/* <div className="binary-right-currency-icon"></div> */}
                <SwitcherSymbol
                    selectedPair={params.selectedPair}
                    setSelectedPair={params.setSelectedPair}
                    symbols={params.symbols}
                />
                {/* <div className="binary-right-currency-text">{"btc/usdt"}</div>
                <input type="text" /> */}
                <button className="binary-right-currency-button">80%</button>
            </div>
        </div>
    )
}