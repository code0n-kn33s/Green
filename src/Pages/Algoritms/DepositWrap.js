import { useState, useRef } from "react"
import DepositInProgress from "./DepositInProgress"
import DepositSuccess from "./DepositSuccess"

const currencies = [
    { value: "Ethereum", index: 0 },
    { value: "Bitcoin", index: 1 },
    { value: "USDT", index: 2 }
]

const wallet_addresses = { first_address: '1KsMPLcdGoCKGWJPeYiBebectovMuzxMzA' }

export default function DepositWrap(params) {
    const {isDone, switchDone} = params

    return (
        <div class="modal-dialog__body rel">
            <div class="modal-dialog__body-wrapper">
                {/* <%= form_tag algorithms_path, method: :post, remote: true do %> */}
                {/* <%= hidden_field_tag :kind, :test %> */}
                <div class="modal-dialog__header">
                    <h2 class="modal-dialog__body-heading h3">Настройка AI</h2>
                    <h3 class="modal-dialog__body-subheading">Выбор монеты</h3>

                    <div class="tabs__navigation  hide-scrollbar" role="tablist" aria-labelledby="tablist">
                        {isDone ?
                            <DepositSuccess
                                setModalState={params.setModalState}
                                switchDone={switchDone}
                            /> :
                            <DepositInProgress
                                wallet_addresses={wallet_addresses}
                                currencies={currencies}
                                switchDone={switchDone}
                            />
                        }
                    </div>
                </div>


                {/* <% end %> */}
            </div>
        </div>
    )
}