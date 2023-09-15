import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserSessions } from '../../toolkitReducers/actions.slice'

import { useSelector, useDispatch } from 'react-redux'

export default function ProfilePage() {
  const [useTwoFa, setTwoFa] = useState(false)
  const [useBot, setBot] = useState(false)

  const dispatch = useDispatch()
  const sessions = useSelector(state => state.state.sessions)

  const inputRef = useRef()
  useEffect(() => {
    dispatch(getUserSessions())
  }, [dispatch])

  return (
    <div className="profile-page__body-wrapper">

      <div className="profile-page__sections-wrapper medium-wrapper">
        <section className="profile-section">
          <h1 className="profile-section__heading h3">Профиль</h1>

          <div className="profile-section__wrapper rel">
            <div className="profile-section__label">Настроить AI</div>

            <div className="profile-section__content-top">
              <div className="profile-section__content-top-side">
                <div className="profile-section__client-info-wrapper">
                  <div className="profile-section__client-photo-wrapper rel">
                    <img src="https://i.ibb.co/CHHY89Y/profile.png" className="profile-section__client-photo" alt="profile" border="0" />
                  </div>

                  <div className="profile-section__client-info">
                    <h2 className="profile-section__client-name h2">Павел Техник</h2>

                    <div className="profile-section__client-btc-info">
                      <p className="profile-section__client-btc-info-title">Баланс BTC:</p>
                      <p className="profile-section__client-btc-info-balance h3">0.00034221 BTC</p>
                    </div>

                    <div className="profile-section__client-usd-info">
                      <p className="profile-section__client-usd-info-title">Баланс USD:</p>
                      <p className="profile-section__client-usd-info-balance">$ 12,341.34 USD</p>
                    </div>
                  </div>
                </div>

                <div className="profile-section__client-contacts">
                  <div className="profile-section__client-contacts-item profile-section__client-contacts-item--login">
                    <p className="profile-section__client-contacts-item-title">Login:</p>
                    <p className="profile-section__client-contacts-item-info">Pavel_tech</p>
                    <Link to="/new-password" className="profile-section__client-contacts-item-link link">Сменить пароль</Link>
                  </div>
                  <div className="profile-section__client-contacts-item profile-section__client-contacts-item--email">
                    <p className="profile-section__client-contacts-item-title">E-mail:</p>
                    <p className="profile-section__client-contacts-item-info">pavel777@gmail.com</p>
                    <a href="https://web.telegram.org/a/" className="profile-section__client-contacts-item-link link">Подтвердить</a>
                  </div>
                  <div className="profile-section__client-contacts-item profile-section__client-contacts-item--get-money">
                    <p className="profile-section__client-contacts-item-title">Вывод средств:</p>
                    <Link to="/withdraw" className="profile-section__client-contacts-item-link link">Заполнить заявку</Link>
                  </div>
                </div>
              </div>

              <div className="profile-section__content-top-side">
                <p className="profile-section__heading">
                  Ссылка для регистрации
                </p>

                <div className="profile-section__input">
                  <copy-past className="form-container rel">
                    <label className="copy-email-label" aria-roledescription="button" for="register-link" onClick={() => navigator.clipboard.writeText(inputRef.current.value)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M7.91647 15H3.04176C1.9159 15 1 14.0187 1 12.8125V5.40234C1 4.19612 1.9159 3.21484 3.04176 3.21484H7.91647C9.04233 3.21484 9.95824 4.19612 9.95824 5.40234V12.8125C9.95824 14.0187 9.04233 15 7.91647 15ZM3.04176 4.30859C2.47888 4.30859 2.02088 4.79929 2.02088 5.40234V12.8125C2.02088 13.4156 2.47888 13.9062 3.04176 13.9062H7.91647C8.47935 13.9062 8.93736 13.4156 8.93736 12.8125V5.40234C8.93736 4.79929 8.47935 4.30859 7.91647 4.30859H3.04176ZM12 11.4453V3.1875C12 1.98128 11.0841 1 9.95824 1H4.29234C4.0104 1 3.7819 1.24481 3.7819 1.54688C3.7819 1.84894 4.0104 2.09375 4.29234 2.09375H9.95824C10.5211 2.09375 10.9791 2.58444 10.9791 3.1875V11.4453C10.9791 11.7474 11.2076 11.9922 11.4896 11.9922C11.7715 11.9922 12 11.7474 12 11.4453Z" fill="#FFF831" stroke="#FFF831" strokeWidth="0.5" />
                      </svg>
                    </label>
                    <input className="copy-email" type="text" name="register-link" id="register-link" value="http://dashboard.arbitech7.com" readOnly ref={inputRef} />
                  </copy-past>
                </div>

                <div className="profile-section__social-links-wrapper">
                  <p className="profile-section__social-links-title">Поделится:</p>

                  <ul className="profile-section__social-links-list">
                    <li className="profile-section__social-links-list-item link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <g clip-path="url(#clip0_101_1183)">
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

                    <li className="profile-section__social-links-list-item link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                        <path d="M4.35239 11V5.98275H6.0358L6.28836 4.02686H4.35239V2.77831C4.35239 2.21221 4.50895 1.82642 5.32165 1.82642L6.3565 1.82599V0.0765765C6.17754 0.0533199 5.56322 0 4.84823 0C3.3552 0 2.33304 0.911331 2.33304 2.5846V4.02686H0.644531V5.98275H2.33304V11H4.35239Z" fill="black" />
                      </svg>
                    </li>

                    <li className="profile-section__social-links-list-item link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.88739 6.83762L4.37988 10.5686L6.32291 8.62555L9.65433 11.2734L12 0.726562L0 5.72498L2.88739 6.83762ZM8.57098 3.75256L4.89798 7.10275L4.44049 8.82697L3.59537 6.71375L8.57098 3.75256Z" fill="black" />
                      </svg>
                    </li>

                    <li className="profile-section__social-links-list-item link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                        <path d="M13 1.65669C12.5166 1.86875 12.0014 2.00931 11.4644 2.07756C12.0169 1.74769 12.4386 1.22931 12.6368 0.6045C12.1217 0.911625 11.5529 1.12856 10.9468 1.24963C10.4577 0.728813 9.76056 0.40625 9.00006 0.40625C7.52456 0.40625 6.33669 1.60388 6.33669 3.07206C6.33669 3.28331 6.35456 3.48644 6.39844 3.67981C4.18275 3.57175 2.22219 2.50981 0.905125 0.892125C0.675187 1.29106 0.540313 1.74769 0.540313 2.23925C0.540313 3.16225 1.01562 3.98044 1.72413 4.45412C1.29594 4.446 0.875875 4.32169 0.52 4.12587C0.52 4.134 0.52 4.14456 0.52 4.15512C0.52 5.45025 1.44381 6.526 2.65525 6.77381C2.43831 6.83313 2.20187 6.86156 1.9565 6.86156C1.78587 6.86156 1.61362 6.85181 1.45194 6.81606C1.79725 7.8715 2.77713 8.64744 3.94225 8.67262C3.0355 9.38194 1.88419 9.80931 0.637812 9.80931C0.41925 9.80931 0.209625 9.79956 0 9.77275C1.18056 10.5341 2.57969 10.9688 4.0885 10.9688C8.99275 10.9688 11.674 6.90625 11.674 3.38487C11.674 3.26706 11.6699 3.15331 11.6643 3.04037C12.1932 2.665 12.6376 2.19619 13 1.65669Z" fill="black" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="profile-section__content-bottom">
              <Link to="/profile/kyc/step1" className="profile-section__big-button link rel">
                <div className="profile-section__big-button-left">
                  <span className="profile-section__big-button-title">KYC</span>
                  <span className="profile-section__big-button-state">НАЧАТЬ</span>
                </div>

                <div className="profile-section__big-button-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="52" viewBox="0 0 46 52" fill="none">
                    <path d="M43.5321 21.6488C43.0199 21.6488 42.5142 21.4023 42.2082 20.9433C37.784 14.3559 30.5336 10.4225 22.8135 10.4225C15.0935 10.4225 7.84305 14.3559 3.41884 20.9433C2.92797 21.6764 1.93561 21.8698 1.20674 21.3789C0.475748 20.888 0.28025 19.8978 0.77112 19.1668C5.78819 11.6975 14.0289 7.23718 22.8135 7.23718C31.5982 7.23718 39.8388 11.6975 44.8559 19.1689C45.3468 19.8999 45.1534 20.8902 44.4203 21.381C44.1483 21.5617 43.8402 21.6488 43.5321 21.6488Z" fill="black" />
                    <path d="M43.5321 21.6488C43.0199 21.6488 42.5142 21.4023 42.2082 20.9433C37.784 14.3559 30.5336 10.4225 22.8135 10.4225C15.0935 10.4225 7.84305 14.3559 3.41884 20.9433C2.92797 21.6764 1.93561 21.8698 1.20674 21.3789C0.475748 20.888 0.28025 19.8978 0.77112 19.1668C5.78819 11.6975 14.0289 7.23718 22.8135 7.23718C31.5982 7.23718 39.8388 11.6975 44.8559 19.1689C45.3468 19.8999 45.1534 20.8902 44.4203 21.381C44.1483 21.5617 43.8402 21.6488 43.5321 21.6488Z" fill="black" />
                    <path d="M43.5321 21.6488C43.0199 21.6488 42.5142 21.4023 42.2082 20.9433C37.784 14.3559 30.5336 10.4225 22.8135 10.4225C15.0935 10.4225 7.84305 14.3559 3.41884 20.9433C2.92797 21.6764 1.93561 21.8698 1.20674 21.3789C0.475748 20.888 0.28025 19.8978 0.77112 19.1668C5.78819 11.6975 14.0289 7.23718 22.8135 7.23718C31.5982 7.23718 39.8388 11.6975 44.8559 19.1689C45.3468 19.8999 45.1534 20.8902 44.4203 21.381C44.1483 21.5617 43.8402 21.6488 43.5321 21.6488Z" stroke="#FFF831" />
                    <path d="M17.0019 51.1756L17.0017 51.1754C16.8396 51.0123 14.7355 48.8664 12.6752 45.7726C10.6054 42.6645 8.63232 38.6766 8.63232 34.815C8.63232 26.7476 15.0071 20.2085 22.8138 20.2085C30.6205 20.2085 36.9953 26.7476 36.9953 34.815C36.9953 35.4186 36.5051 35.9087 35.9015 35.9087C35.2979 35.9087 34.8078 35.4186 34.8078 34.815C34.8078 27.9835 29.4457 22.396 22.8138 22.396C16.1819 22.396 10.8198 27.9835 10.8198 34.815C10.8198 38.3394 12.7754 42.0446 14.6744 44.8263C16.5742 47.6091 18.4828 49.561 18.5576 49.6363C18.983 50.0647 18.9805 50.757 18.55 51.1832L18.5494 51.1838C18.3373 51.3944 18.06 51.4997 17.7797 51.4997C17.4975 51.4997 17.2167 51.3919 17.0019 51.1756Z" fill="black" stroke="#FFF831" />
                    <path d="M10.7231 20.9755L10.723 20.9756C6.94359 24.5104 4.78036 29.5565 4.78036 34.8174C4.78036 39.1448 6.24567 43.3627 8.90998 46.6955C9.28666 47.169 9.21012 47.8553 8.73787 48.2328L8.73728 48.2333C8.26675 48.6106 7.57922 48.5352 7.20137 48.061L7.20097 48.0605C4.23188 44.3445 2.5929 39.6397 2.5929 34.8153C2.5929 28.9461 5.01501 23.3182 9.22803 19.3769L9.22806 19.3769C13.3207 15.5478 18.623 13.6445 24.159 14.0176L24.1593 14.0176C34.7156 14.7229 43.0363 24.1302 43.0363 35.491V35.8544C43.0363 39.9082 39.8229 43.1849 35.9013 43.1849C31.9799 43.1849 28.7684 39.9084 28.7684 35.8544V34.8153C28.7684 33.117 28.1182 31.5309 26.934 30.3513L26.934 30.3513C25.8222 29.2441 24.3594 28.6331 22.8157 28.6331H22.8156H22.8156H22.8155H22.8154H22.8154H22.8153H22.8152H22.8152H22.8151H22.8151H22.815H22.8149H22.8149H22.8148H22.8148H22.8147H22.8146H22.8146H22.8145H22.8144H22.8144H22.8143H22.8143H22.8142H22.8141H22.8141H22.814H22.814H22.8139H22.8138H22.8138H22.8137H22.8137H22.8136H22.8135H22.8135H22.8134H22.8133H22.8133H22.8132H22.8132H22.8131H22.813H22.813H22.8129H22.8129H22.8128H22.8127H22.8127H22.8126H22.8126H22.8125H22.8124H22.8124H22.8123H22.8123H22.8122H22.8121H22.8121H22.812H22.812H22.8119H22.8118H22.8118H22.8117H22.8117H22.8116H22.8116H22.8115H22.8114H22.8114H22.8113H22.8113H22.8112H22.8111H22.8111H22.811H22.811H22.8109H22.8108H22.8108H22.8107H22.8107H22.8106H22.8105H22.8105H22.8104H22.8104H22.8103H22.8103H22.8102H22.8101H22.8101H22.81H22.81H22.8099H22.8098H22.8098H22.8097H22.8097H22.8096H22.8096H22.8095H22.8094H22.8094H22.8093H22.8093H22.8092H22.8091H22.8091H22.809H22.809H22.8089H22.8089H22.8088H22.8087H22.8087H22.8086H22.8086H22.8085H22.8084H22.8084H22.8083H22.8083H22.8082H22.8082H22.8081H22.808H22.808H22.8079H22.8079H22.8078H22.8078H22.8077H22.8076H22.8076H22.8075H22.8075H22.8074H22.8074H22.8073H22.8072H22.8072H22.8071H22.8071H22.807H22.807H22.8069H22.8068H22.8068H22.8067H22.8067H22.8066H22.8066H22.8065H22.8064H22.8064H22.8063H22.8063H22.8062H22.8062H22.8061H22.806H22.806H22.8059H22.8059H22.8058H22.8058H22.8057H22.8056H22.8056H22.8055H22.8055H22.8054H22.8054H22.8053H22.8052H22.8052H22.8051H22.8051H22.805H22.805H22.8049H22.8049H22.8048H22.8047H22.8047H22.8046H22.8046H22.8045H22.8045H22.8044H22.8043H22.8043H22.8042H22.8042H22.8041H22.8041H22.804H22.8039H22.8039H22.8038H22.8038H22.8037H22.8037H22.8036H22.8036H22.8035H22.8034H22.8034H22.8033H22.8033H22.8032H22.8032H22.8031H22.803H22.803H22.8029H22.8029H22.8028H22.8028H22.8027H22.8027H22.8026H22.8025H22.8025H22.8024H22.8024H22.8023H22.8023H22.8022H22.8022H22.8021H22.802H22.802H22.8019H22.8019H22.8018H22.8018H22.8017H22.8016H22.8016H22.8015H22.8015H22.8014H22.8014H22.8013H22.8013H22.8012H22.8011H22.8011H22.801H22.801H22.8009H22.8009H22.8008H22.8008H22.8007H22.8006H22.8006H22.8005H22.8005H22.8004H22.8004H22.8003H22.8002H22.8002H22.8001H22.8001H22.8H22.8H22.7999H22.7999H22.7998H22.7997H22.7997H22.7996H22.7996H22.7995H22.7995H22.7994H22.7993H22.7993H22.7992H22.7992H22.7991H22.7991H22.799H22.799H22.7989H22.7988H22.7988H22.7987H22.7987H22.7986H22.7986H22.7985H22.7985H22.7984H22.7983H22.7983H22.7982H22.7982H22.7981H22.7981H22.798H22.7979H22.7979H22.7978H22.7978H22.7977H22.7977H22.7976H22.7976H22.7975H22.7974H22.7974H22.7973H22.7973H22.7972H22.7972H22.7971H22.797H22.797H22.7969H22.7969H22.7968H22.7968H22.7967H22.7966H22.7966H22.7965H22.7965H22.7964H22.7964H22.7963H22.7963H22.7962H22.7961H22.7961H22.796H22.796H22.7959H22.7959H22.7958H22.7957H22.7957H22.7956H22.7956H22.7955H22.7955H22.7954H22.7953H22.7953H22.7952H22.7952H22.7951H22.7951H22.795H22.7949H22.7949H22.7948H22.7948H22.7947H22.7947H22.7946H22.7945H22.7945H22.7944H22.7944H22.7943H22.7943H22.7942H22.7941H22.7941H22.794H22.794H22.7939H22.7939H22.7938H22.7937H22.7937H22.7936H22.7936H22.7935H22.7935H22.7934H22.7933H22.7933H22.7932H22.7932H22.7931H22.793H22.793H22.7929H22.7929H22.7928H22.7928H22.7927H22.7926H22.7926H22.7925H22.7925H22.7924H22.7924H22.7923H22.7922H22.7922H22.7921H22.7921H22.792H22.7919H22.7919H22.7918H22.7918H22.7917H22.7917H22.7916H22.7915H22.7915H22.7914H22.7914H22.7913H22.7912H22.7912H22.7911H22.7911H22.791H22.7909H22.7909H22.7908H22.7908H22.7907H22.7907H22.7906H22.7905H22.7905H22.7904H22.7904H22.7903H22.7902H22.7902H22.7901H22.7901H22.79H22.7899H22.7899H22.7898H22.7898H22.7897H22.7896H22.7896H22.7895H22.7895H22.7894H22.7893H22.7893H22.7892H22.7892H22.7891H22.789H22.789H22.7889H22.7889H22.7888H22.7887H22.7887H22.7886H22.7886H22.7885H22.7884H22.7884H22.7883H22.7883H22.7882H22.7881H22.7881H22.788H22.788H22.7879H22.7878H22.7878H22.7877H22.7877H22.7876H22.7875H22.7875H22.7874H22.7874H22.7873H22.7872H22.7872H22.7871H22.787H22.787H22.7869H22.7869H22.7868H22.7867H22.7867H22.7866H22.7866H22.7865H22.7864H22.7864H22.7863H22.7862H22.7862H22.7861H22.7861H22.786L22.7859 28.6331L22.7836 28.6331C20.7983 28.6425 19.4651 29.6779 18.7118 30.5207C17.3667 32.0222 16.714 34.1845 16.938 36.3022L16.938 36.3024C17.3067 39.775 19.4722 43.0158 21.7613 45.3657C22.9116 46.5464 24.1103 47.5203 25.1638 48.2027C25.6904 48.5438 26.1879 48.8168 26.6309 49.0062C27.0634 49.1911 27.4853 49.3146 27.8476 49.3146C28.4512 49.3146 28.9414 49.8048 28.9414 50.4084C28.9414 51.0111 28.4521 51.5 27.8476 51.5C27.022 51.5 25.8409 51.097 24.4819 50.302C23.1382 49.5159 21.6751 48.3786 20.2979 46.9866C17.5345 44.1937 15.1781 40.4398 14.7641 36.5328C14.4743 33.7946 15.3487 31.0003 17.0811 29.0628C18.5838 27.3837 20.6032 26.4601 22.7703 26.4477H22.8136C24.9363 26.4477 26.9436 27.2802 28.4748 28.8014C30.0746 30.3911 30.9558 32.5259 30.9558 34.8174V35.8565C30.9558 38.6725 33.1526 40.9996 35.9013 40.9996C38.6497 40.9996 40.8489 38.6728 40.8489 35.8565V35.4931C40.8489 25.3395 33.488 16.8349 24.016 16.2031C19.0923 15.8685 14.365 17.5718 10.7231 20.9755Z" fill="black" stroke="#FFF831" />
                    <path d="M33.7615 48.3821C31.0999 48.3821 28.0586 46.7421 25.6628 44.0478C23.2766 41.3643 21.5945 37.7021 21.5945 33.7756C21.5945 33.172 22.0846 32.6819 22.6882 32.6819C23.2918 32.6819 23.7819 33.172 23.7819 33.7756C23.7819 37.0665 25.1626 40.157 27.0728 42.4225C28.9702 44.6729 31.4671 46.1946 33.7615 46.1946C34.3651 46.1946 34.8552 46.6848 34.8552 47.2884C34.8552 47.892 34.3651 48.3821 33.7615 48.3821Z" fill="black" stroke="#FFF831" />
                    <path d="M40.6061 10.9116C40.1585 10.9116 39.7165 10.6651 39.4491 10.2061C34.1861 5 28.9327 3.5 22.186 3.5C16.686 4 11.1861 5 5.5504 10.2061C5.12142 10.9392 4.25418 11.1326 3.61721 10.6417C2.97838 10.1509 2.80753 9.16062 3.23651 8.42963C9.18611 2 15.8724 0.5 22.186 0C29.8631 0 35.186 2 41.763 8.43175C42.369 9.02435 42.023 10.153 41.3823 10.6439C41.1446 10.8245 40.8753 10.9116 40.6061 10.9116Z" fill="black" />
                    <path d="M40.6061 10.9116C40.1585 10.9116 39.7165 10.6651 39.4491 10.2061C34.1861 5 28.9327 3.5 22.186 3.5C16.686 4 11.1861 5 5.5504 10.2061C5.12142 10.9392 4.25418 11.1326 3.61721 10.6417C2.97838 10.1509 2.80753 9.16062 3.23651 8.42963C9.18611 2 15.8724 0.5 22.186 0C29.8631 0 35.186 2 41.763 8.43175C42.369 9.02435 42.023 10.153 41.3823 10.6439C41.1446 10.8245 40.8753 10.9116 40.6061 10.9116Z" fill="black" />
                    <path d="M40.6061 10.9116C40.1585 10.9116 39.7165 10.6651 39.4491 10.2061C34.1861 5 28.9327 3.5 22.186 3.5C16.686 4 11.1861 5 5.5504 10.2061C5.12142 10.9392 4.25418 11.1326 3.61721 10.6417C2.97838 10.1509 2.80753 9.16062 3.23651 8.42963C9.18611 2 15.8724 0.5 22.186 0C29.8631 0 35.186 2 41.763 8.43175C42.369 9.02435 42.023 10.153 41.3823 10.6439C41.1446 10.8245 40.8753 10.9116 40.6061 10.9116Z" stroke="#FFF831" />
                  </svg>
                </div>
              </Link>

              <div onClick={() => setTwoFa(!useTwoFa)} className="profile-section__big-button link rel">
                <div className="profile-section__big-button-left">
                  <span className="profile-section__big-button-title">2FA</span>
                  <span className="profile-section__big-button-state">
                    {useTwoFa ? "ВКЛ" : "ВЫКЛ"}
                  </span>
                </div>

                <div className="profile-section__big-button-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="50" viewBox="0 0 44 50" fill="none">
                    <path d="M41.5312 3.12502C35.0803 3.12502 28.8366 2.19436 22.4941 0.0802002C22.1734 -0.0267334 21.8267 -0.0267334 21.506 0.0802002C15.1629 2.19456 8.91924 3.12502 2.46875 3.12502C1.60586 3.12502 0.90625 3.82463 0.90625 4.68752V23.6642C0.90625 36.0896 9.42002 47.0252 21.6354 49.9569C21.8685 50.0128 22.1182 50.0159 22.3646 49.9569C34.4469 47.0572 43.0938 36.2264 43.0938 23.6642V4.68752C43.0938 3.82454 42.3941 3.12502 41.5312 3.12502ZM39.9688 23.6642C39.9688 34.6398 32.5993 44.1114 22 46.8277C11.4007 44.1113 4.03125 34.6398 4.03125 23.6642V6.23684C10.1438 6.11145 16.1794 5.09426 22 3.20735C27.8206 5.09426 33.8563 6.11155 39.9688 6.23684V23.6642Z" fill="#FFF831" />
                    <path d="M21.5516 6.62014C17.3281 7.88528 12.9638 8.72493 8.57996 9.11565C7.774 9.18752 7.15613 9.86282 7.15613 10.672V23.6641C7.15613 32.4721 12.7661 40.5793 21.5154 43.4332C21.8301 43.5359 22.1696 43.536 22.4844 43.4332C31.2332 40.5794 36.8437 32.4727 36.8437 23.6641V10.672C36.8437 9.86282 36.226 9.18752 35.4199 9.11565C31.0361 8.72493 26.6718 7.88528 22.4483 6.62014C22.1558 6.53254 21.8441 6.53254 21.5516 6.62014ZM33.7187 12.0863V23.664C33.7187 30.9252 29.2131 37.7143 22 40.2964C14.7862 37.7141 10.2812 30.9243 10.2812 23.664V12.0863C14.2397 11.6492 18.1734 10.864 22 9.74631C25.8265 10.8641 29.7602 11.6493 33.7187 12.0863Z" fill="#FFF831" />
                    <path d="M18.6339 19.5557L18.894 19.5179L19.0104 19.2822L21.0473 15.1551C21.4362 14.3671 22.5642 14.3674 22.9529 15.1551L22.9529 15.1551L24.9898 19.2822L25.1062 19.5179L25.3663 19.5557L29.9209 20.2175L29.9928 19.7227L29.9209 20.2175C30.7903 20.3439 31.1387 21.4167 30.5097 22.0298L27.214 25.2423L27.0258 25.4258L27.0702 25.6849L27.8481 30.2211L27.8481 30.2212C27.9968 31.0878 27.0833 31.7497 26.3065 31.3412L26.3065 31.3412L22.2328 29.1995L22.0001 29.0772L21.7674 29.1995L17.6937 31.3412L17.6936 31.3412C16.9162 31.7501 16.0036 31.0869 16.1521 30.2212L16.1521 30.2211L16.93 25.6849L16.9744 25.4258L16.7862 25.2423L13.4905 22.0298C13.4905 22.0298 13.4905 22.0298 13.4905 22.0298C12.8613 21.4165 13.2101 20.3438 14.0793 20.2176L14.0793 20.2175L18.6339 19.5557ZM24.2478 21.5404L24.2477 21.5404C23.9017 21.4902 23.6025 21.2729 23.4478 20.9593L23.4478 20.9593L22.4485 18.9345L22.0001 18.0261L21.5517 18.9344L20.5522 20.9592C20.3974 21.2728 20.0983 21.4902 19.7522 21.5404L19.7522 21.5404L17.5177 21.8652L16.5152 22.0108L17.2406 22.718L18.8575 24.2941C19.108 24.5383 19.2223 24.8899 19.1632 25.2344L19.1631 25.2345L18.7815 27.46L18.6103 28.4585L19.507 27.9871C19.9396 27.7597 20.2836 27.576 20.5625 27.4271C20.9752 27.2068 21.2455 27.0625 21.4498 26.9648C21.6144 26.8861 21.7064 26.8526 21.7737 26.8358C21.8344 26.8206 21.893 26.8144 22 26.8144C22.1031 26.8144 22.1632 26.821 22.227 26.8373C22.2978 26.8554 22.3936 26.8907 22.5604 26.9705C22.7688 27.0703 23.0434 27.2168 23.4596 27.4389C23.7348 27.5858 24.072 27.7658 24.493 27.9871L25.3897 28.4586L25.2185 27.46L24.8369 25.2345C24.7778 24.8899 24.892 24.5382 25.1425 24.2941L26.7594 22.718L27.4848 22.0108L26.4823 21.8652L24.2478 21.5404Z" fill="black" stroke="#FFF831" />
                  </svg>
                </div>
              </div>

              <div onClick={() => setBot(!useBot)} className="profile-section__big-button link rel">
                <div className="profile-section__big-button-left">
                  <span className="profile-section__big-button-title">TELEGRAM<br />БОТ</span>
                  <span className="profile-section__big-button-state">{useBot ? "ВКЛ" : "ВЫКЛ"} </span>
                </div>

                <div className="profile-section__big-button-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="39" viewBox="0 0 47 39" fill="none">
                    <path d="M20.3645 35.0906L20.3839 35.0715L20.3876 35.068L25.0082 30.6301L35.0234 37.8756L35.0457 37.8917L35.0697 37.9053C36.0901 38.4846 37.0942 38.6835 37.953 38.3111C38.8132 37.9381 39.3546 37.067 39.6233 35.908L39.6234 35.908L39.6251 35.8998L46.3595 4.46249C46.3595 4.46212 46.3596 4.46175 46.3597 4.46137C46.68 2.99452 46.4436 1.82303 45.7143 1.12428C44.9796 0.420311 43.9017 0.344864 42.8793 0.734373C42.879 0.734501 42.8787 0.734629 42.8783 0.734758L2.87347 15.8131L2.87343 15.813L2.86434 15.8167C2.15369 16.1005 1.59378 16.4228 1.19782 16.7767C0.80428 17.1285 0.532952 17.5493 0.502746 18.0232C0.471645 18.5111 0.703108 18.9327 1.05975 19.2567C1.41043 19.5752 1.90569 19.8256 2.49883 20.0106L2.49882 20.0107L2.50365 20.0121L12.6561 23.0674L12.8709 23.132L13.0621 23.0145L36.7846 8.42823L36.7991 8.4193L36.813 8.4094C37.0127 8.26701 37.2043 8.18181 37.3674 8.1375L18.2994 24.9733L18.1454 25.1093L18.1314 25.3142L17.4278 35.6626L17.3915 36.1965H17.9267C18.5442 36.1965 19.008 36.0851 19.4112 35.8637C19.7862 35.6578 20.0805 35.3692 20.3645 35.0906Z" fill="black" stroke="#FFF831" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sessions-section medium-wrapper">
          <div className="sessions-section__header">
            <h2 className="sessions-section__header-heading">История сеансов</h2>

            <div className="sessions-section__header-settings">
              <span>ОТОБРАЗИТЬ</span>

              <custom-select className="custom-select">
                <button className="custom-select__btn" tabIndex="0" aria-expanded="false" aria-controls="dropdown-2">
                  <span data-button-label className="custom-select__btn-text">10</span>

                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M0.721313 1.42859L6.86885 7.50002L13.0164 1.42859" stroke="#FFF831" color="#FFF831" strokeWidth="1.5" />
                  </svg>
                </button>

                <ul data-dropdown className="custom-select__dropdown list-menu" id="dropdown-2">
                  <li className="custom-select__dropdown-option" data-option-value="1" aria-selected="false">
                    <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                      1
                    </button>
                  </li>

                  <li className="custom-select__dropdown-option" data-option-value="2" aria-selected="false">
                    <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                      2
                    </button>
                  </li>

                  <li className="custom-select__dropdown-option" data-option-value="3" aria-selected="false">
                    <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                      3
                    </button>
                  </li>

                  <li className="custom-select__dropdown-option" data-option-value="10" aria-selected="true">
                    <button data-dropdown-button className="btn--reset link custom-select__dropdown-button">
                      10
                    </button>
                  </li>
                </ul>

                <input type="hidden" className="custom-select__input-hidden" value="10" />
              </custom-select>
            </div>
          </div>

          <div className="sessions-section__table-wrapper">
            <table className="sessions-section__table-body">
              <tr className="sessions-section__table-heading-row rel">
                <th>
                  <div className="sessions-section__table-td-wrapper">
                    <span>
                      Date
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
                      IP address
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
                      OS
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
                      Browser
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
                sessions && sessions.map(session => (
                  <tr className="sessions-section__table-body-row">
                    <td>{session.last_login_date}</td>
                    <td>{session.last_ip_address}</td>
                    <td>{session.last_os}</td>
                    <td>{session.last_browser}</td>
                  </tr>
                ))
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
      </div>
    </div>
  )
}