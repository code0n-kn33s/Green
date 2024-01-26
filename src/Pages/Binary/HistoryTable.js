import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setTransactionsHistory } from '../../toolkitReducers/actions.slice'


import moment from 'moment';

export default function OptionsTable(params) {
    const transactionsHistory = useSelector(state => state.state.transactionsHistory)
    const dispatch = useDispatch()
    const { t } = useTranslation();


    useEffect(() => {
        dispatch(setTransactionsHistory())
    }, [dispatch])

    return (
        <section className="sessions-section medium-wrapper">
            <div className="sessions-section__header">
                <h2 className="sessions-section__header-heading">{t("История транзакций")}</h2>
            </div>

            <div className="sessions-section__table-wrapper">
                <table className="sessions-section__table-body">
                    <tr className="sessions-section__table-heading-row rel">
                        <th>
                            <div className="sessions-section__table-td-wrapper">
                                <span>
                                    {t("id")}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M9 6L5 2L1 6" stroke="#FFF831" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </th>

                        <th>
                            <div className="sessions-section__table-td-wrapper">
                                <span>
                                    {t("from_balance")}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M9 6L5 2L1 6" stroke="#FFF831" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </th>

                        <th>
                            <div className="sessions-section__table-td-wrapper">
                                <span>
                                    {t("to_balance")}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M9 6L5 2L1 6" stroke="#FFF831" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </th>

                        <th>
                            <div className="sessions-section__table-td-wrapper">
                                <span>
                                    {t("amount")}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M9 6L5 2L1 6" stroke="#FFF831" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className="sessions-section__table-td-wrapper">
                                <span>
                                    {t("currency")}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M9 6L5 2L1 6" stroke="#FFF831" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className="sessions-section__table-td-wrapper">
                                <span>
                                    {t("date")}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M9 6L5 2L1 6" stroke="#FFF831" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </th>

                    </tr>

                    {
                        transactionsHistory
                            && transactionsHistory?.length
                            ? transactionsHistory.map((transaction, index) => (
                                <tr key={index} className="betHistorys-section__table-body-row">

                                    <td>{transaction.id}</td>
                                    <td>{transaction.from_balance}</td>
                                    <td>{transaction.to_balance}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.from_ticker.toUpperCase()}</td>
                                    <td>{moment(transaction.timestamp).format()}</td>

                                </tr>
                            )).reverse() : ''
                    }
                </table>
            </div>

            <div className="sessions-section__controls">
                <div className="sessions-section__controls-counter">
                    <span className="sessions-section__controls-counter-current-page">0</span>
                    /
                    <span className="sessions-section__controls-counter-all-pages">0</span>
                </div>
                <div className="sessions-section__controls-buttons">
                    <button type="button" className="sessions-section__controls-first-page btn--reset link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 0V14M13 1L7 7L13 13" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                    <button type="button" className="sessions-section__controls-previous-page btn--reset link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                            <path d="M8 1L2 7L8 13" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>

                    <button type="button" className="sessions-section__controls-next-page btn--reset link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>

                    <button type="button" className="sessions-section__controls-last-page btn--reset link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13 0V14M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}