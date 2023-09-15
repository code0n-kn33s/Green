import { useState, useRef } from "react"
import DepositInProgress from "./DepositInProgress"
import DepositSuccess from "./DepositSuccess"

export default function DepositWrap(params) {
    const {isDone, switchDone, promotion} = params

    return (
        <div class="modal-dialog__body rel">
            <div class="modal-dialog__body-wrapper">

                <div class="modal-dialog__header">
                    <h2 class="modal-dialog__body-heading h3">Настройка {promotion === 100 ? "Test AI 100" : "Test AI 500" }</h2>
                    <h3 class="modal-dialog__body-subheading">Выбор монеты</h3>

                    <div class="tabs__navigation  hide-scrollbar" role="tablist" aria-labelledby="tablist">
                        {isDone ?
                            <DepositSuccess
                                setModalState={params.setModalState}
                                switchDone={switchDone}
                            /> :
                            <DepositInProgress
                                switchDone={switchDone}
                                promotion={promotion}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}