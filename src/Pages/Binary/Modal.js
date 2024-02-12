
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ReactComponent as ApprovedBet } from './assets/bet-casino-coin-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setBetHistory } from '../../toolkitReducers/actions.slice'

export default function Modal(params) {
    const { modalState, setModalState, modalText } = params;
    const [isDone, setDone] = useState(false)
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const switchDone = (bool) => {
        setDone(bool)
    }

    const closeChest = () => {
        setModalState()
        setDone(false)
        dispatch(setBetHistory())
    }

    return (
        <div>
            <modal-dialog id="replenishDeposit">
                <div class="popup modal-dialog" data-popup role="dialog" tabindex="-1" aria-modal="true" aria-hidden={modalState ? "false" : "true"}>
                    <button class="btn--reset" type="button" data-close-popup onClick={closeChest}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                            <path d="M11.333 1.28027L6.33301 7.36434M1.33301 13.4484L6.33301 7.36434M6.33301 7.36434L1.33301 1.28027L11.333 13.4484" stroke="#FFF831" stroke-width="2" />
                        </svg>
                    </button>

                    <div className="modal-content-wrap">
                        <div className="modal-content-icon">
                            <ApprovedBet />
                        </div>
                        <br />
                        <br />
                        <div className="modal-content-title">
                            {modalText}
                        </div>
                        <div
                            className={`binary-right-bet-button active`}
                            onClick={closeChest}
                        >
                            <i>{t("Done")}</i>
                        </div>
                    </div>



                </div>
            </modal-dialog>
        </div>
    )
}