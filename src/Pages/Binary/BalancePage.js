import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserSessions, setBetHistory } from '../../toolkitReducers/actions.slice'
import { getUserData, } from '../../toolkitReducers/auth.slice'
import { ReactComponent as Twitter } from '../../assets/icons/social-links/linkedin.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import HistoryTable from './HistoryTable';
import ModalDialog from './DepositMain/Modal'

export default function ProfilePage() {
  const [useTwoFa, setTwoFa] = useState(false)
  const [useBot, setBot] = useState(false)
  const [isModal, setModal] = useState(false)

  const { t } = useTranslation();
  const dispatch = useDispatch()


  const inputRef = useRef()

  const openModal = () => {
    setModal(!isModal)
  }

  useEffect(() => {
    dispatch(getUserSessions())
    dispatch(getUserData())
    dispatch(setBetHistory())

  }, [dispatch])

  const trunc = (number) => {
    let precision = 3;
    let truncatedNumber = Math.trunc(number * Math.pow(10, precision)) / Math.pow(10, precision)

    return truncatedNumber;
  }

  return (
    <div className="profile-page__body-wrapper balance-page algorithms-page algorithms-page__body-wrapper page__body-wrapper">

      <ModalDialog modalState={isModal} setModalState={openModal}/>
      <div className="profile-page__sections-wrapper medium-wrapper">
        <section className="profile-section">
          {/* <h1 className="profile-section__heading h3">{t("Профиль")}</h1> */}
          <div className="profile-section__wrapper ballance-page rel">


            <div className="profile-section__content-top">
              <div className="profile-section__content-top-side">
                <div className="profile-section__client-info-wrapper">


                  <div className="profile-section__client-top-title">
                    Main Balance
                  </div>

                  <div className="profile-section__client-info">
                    <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">BTC</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('main_crypto_balance_btc'))} BTC
                        </p>
                      </div>

                    </div>
                    <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">ETH</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('main_crypto_balance_eth'))} ETH
                        </p>
                      </div>

                    </div>
                    <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">USDT</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('main_crypto_balance_usdt'))} USDT
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className="profile-section__content-bottom">
                    <div onClick={() => openModal()} className="profile-section__big-button link rel">
                      <button className='withdrawal-button'>{t("deposit")}</button>
                    </div>
                    <Link to="/withdraw" className="profile-section__big-button link rel">
                      <button className='withdrawal-button'>{t("withdraw")}</button>
                    </Link>
                    <Link to="/binary/transfer" className="profile-section__big-button link rel">
                      <button className='withdrawal-button'>{t("transfer")}</button>
                    </Link>
                  </div>
                </div>

              </div>

              <div className="profile-section__content-top-side">
                <p className="profile-section__heading">
                  {t("Реферальный ID")}
                </p>

                <div className="profile-section__input">
                  <copy-past className="form-container rel">
                    <label className="copy-email-label" aria-roledescription="button" for="register-link" onClick={() => navigator.clipboard.writeText(inputRef.current.value)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M7.91647 15H3.04176C1.9159 15 1 14.0187 1 12.8125V5.40234C1 4.19612 1.9159 3.21484 3.04176 3.21484H7.91647C9.04233 3.21484 9.95824 4.19612 9.95824 5.40234V12.8125C9.95824 14.0187 9.04233 15 7.91647 15ZM3.04176 4.30859C2.47888 4.30859 2.02088 4.79929 2.02088 5.40234V12.8125C2.02088 13.4156 2.47888 13.9062 3.04176 13.9062H7.91647C8.47935 13.9062 8.93736 13.4156 8.93736 12.8125V5.40234C8.93736 4.79929 8.47935 4.30859 7.91647 4.30859H3.04176ZM12 11.4453V3.1875C12 1.98128 11.0841 1 9.95824 1H4.29234C4.0104 1 3.7819 1.24481 3.7819 1.54688C3.7819 1.84894 4.0104 2.09375 4.29234 2.09375H9.95824C10.5211 2.09375 10.9791 2.58444 10.9791 3.1875V11.4453C10.9791 11.7474 11.2076 11.9922 11.4896 11.9922C11.7715 11.9922 12 11.7474 12 11.4453Z" fill="#FFF831" stroke="#FFF831" strokeWidth="0.5" />
                      </svg>
                    </label>
                    <input className="copy-email" type="text" name="register-link" id="register-link" value={"10000" + localStorage.getItem('id')} readOnly ref={inputRef} />
                  </copy-past>
                </div>

                <div className="profile-section__social-links-wrapper">
                  <p className="profile-section__social-links-title">{t("Поделится")}:</p>

                  <ul className="profile-section__social-links-list">
                    <a target="_blank" href="https://www.instagram.com/arbitech7/?igshid=MzRlODBiNWFlZA%3D%3D">
                      <li className="profile-section__social-links-list-item link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <g clipPath="url(#clip0_101_1183)">
                            <path d="M10.9973 10.9996V10.9992H11.0001V6.96494C11.0001 4.99136 10.5752 3.47107 8.26795 3.47107C7.15879 3.47107 6.41445 4.07974 6.11058 4.65678H6.07849V3.65532H3.89087V10.9992H6.16879V7.36278C6.16879 6.40532 6.35029 5.47949 7.53599 5.47949C8.70429 5.47949 8.7217 6.57215 8.7217 7.42419V10.9996H10.9973Z" fill="black" />
                            <path d="M0.181641 3.65588H2.46231V10.9998H0.181641V3.65588Z" fill="black" />
                            <path d="M1.32092 0C0.591708 0 0 0.591708 0 1.32092C0 2.05013 0.591708 2.65421 1.32092 2.65421C2.05013 2.65421 2.64183 2.05013 2.64183 1.32092C2.64138 0.591708 2.04967 0 1.32092 0V0Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_101_1183">
                              <rect width="11" height="11" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </li>
                    </a>

                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100090426237643">
                      <li className="profile-section__social-links-list-item link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                          <path d="M4.35239 11V5.98275H6.0358L6.28836 4.02686H4.35239V2.77831C4.35239 2.21221 4.50895 1.82642 5.32165 1.82642L6.3565 1.82599V0.0765765C6.17754 0.0533199 5.56322 0 4.84823 0C3.3552 0 2.33304 0.911331 2.33304 2.5846V4.02686H0.644531V5.98275H2.33304V11H4.35239Z" fill="black" />
                        </svg>
                      </li>
                    </a>

                    <a target="_blank" href="https://t.me/arbitech777">
                      <li className="profile-section__social-links-list-item link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.88739 6.83762L4.37988 10.5686L6.32291 8.62555L9.65433 11.2734L12 0.726562L0 5.72498L2.88739 6.83762ZM8.57098 3.75256L4.89798 7.10275L4.44049 8.82697L3.59537 6.71375L8.57098 3.75256Z" fill="black" />
                        </svg>
                      </li>
                    </a>

                    <a target="_blank" href="https://twitter.com/?lang=ru">
                      <li className="profile-section__social-links-list-item link">
                        <Twitter />
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            {/* summ sections */}

            <div className="profile-section__content-top-side-wrap">
              <div className="profile-section__content-top-side">
                <div className="profile-section__client-info-wrapper">

                  <div className="profile-section__client-top-title">
                    Arbitage Balance
                  </div>

                  <div className="profile-section__client-info">
                    <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">BTC</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('arbitech_crypto_balance_btc'))} BTC
                        </p>
                      </div>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Профит")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('arbitech_profit_btc'))} BTC
                        </p>
                      </div>
                    </div>
                    <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">ETH</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('arbitech_crypto_balance_eth'))} ETH
                        </p>
                      </div>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Профит")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('arbitech_profit_eth'))} ETH
                        </p>
                      </div>
                    </div>
                    <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">USDT</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('arbitech_crypto_balance_usdt'))} USDT
                        </p>
                      </div>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Профит")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('arbitech_profit_usdt'))} USDT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="profile-section__content-top-side">
                <div className="profile-section__client-info-wrapper">

                  <div className="profile-section__client-top-title">
                    Options Balance
                  </div>

                  <div className="profile-section__client-info">
                    {/* <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">BTC</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('options_crypto_balance_btc'))} BTC
                        </p>
                      </div>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Профит")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('options_profit_btc'))} BTC
                        </p>
                      </div>
                    </div> */}
                    {/* <div className="profile-section__client-btc-info-wrap">
                      <p className="profit_currencies-title">ETH</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('options_crypto_balance_eth'))} ETH
                        </p>
                      </div>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Профит")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('options_profit_eth'))} ETH
                        </p>
                      </div>
                    </div> */}
                    <div className="profile-section__client-btc-info-wrap new">
                      <p className="profit_currencies-title">USDT</p>
                      <div className="profile-section__client-btc-info">
                        <p className="profile-section__client-btc-info-title">{t("Баланс")}:</p>
                        <p className="profile-section__client-btc-info-balance h3">
                          {trunc(localStorage.getItem('options_crypto_balance_usdt'))} USDT
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* end of sections top */}
        <HistoryTable />


      </div>
    </div>
  )
}