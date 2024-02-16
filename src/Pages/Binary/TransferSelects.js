
// import { ReactComponent as Swap } from './assets/swap-horizontal.svg'
import DropdownTransferSelects from './DropdownTransferSelects'


export default function TransferSelects(params) {
    const { handleFromChange, balances } = params

    return (
        <div className="form-container form-container--wallet">
            <div className='form-check-from-wrap'>
                <div className={`form-check-from-label edited`}>
                    <div className={`form-check-from-label-inner`}>
                        <div className='form-check-from-label-item'>
                            from
                        </div>
                        <div className='form-check-from-label-item icon'>
                            |
                        </div>
                        <div className='form-check-from-label-item'>
                            to
                        </div>
                    </div>
                </div>
                <div className='form-check-from'>
                    <div className={`form-check-from-item`}>
                        <DropdownTransferSelects
                            handleFromChange={handleFromChange}
                            balances={balances}
                            direction="from"
                        />
                    </div>
                    <div className={`form-check-from-item`}>
                        <DropdownTransferSelects
                            handleFromChange={handleFromChange}
                            balances={balances}
                            direction="to"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}