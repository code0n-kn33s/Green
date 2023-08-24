import { ReactComponent as GlobusIcon } from '../../assets/icons/GlobusIcon.svg'


export default function Algoritms(params) {
    return (
        <div className="algorithms-page__body-wrapper page__body-wrapper">

        <div className="algorithms-page__sections-wrapper page__sections-wrapper medium-wrapper">
          <section className="algorithms-section">
            <h1 className="algorithms-section__heading h3">Алгоритмы</h1>

            <div className="algorithms-section__wrapper">
              <div className="algorithms-section__item">
                <h2 className="algorithms-section__item-heading">Test AI</h2>

                <div className="algorithms-section__item-body">
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Сумма:</div>
                    <div className="algorithms-section__item-row-right bold">От 100 USD</div>
                  </div>
                  <div className="algorithms-section__item-row bold">
                    <div className="algorithms-section__item-row-left">Доходность:</div>
                    <div className="algorithms-section__item-row-right bold">До 25%</div>
                  </div>
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Возможность тонкой настройки:</div>
                    <div className="algorithms-section__item-row-right bold">Отсутсвует</div>
                  </div>
                </div>

                <modal-opener>
                  <button className="modal-opener btn btn--primary btn--large algorithms-section__item-button"
                          type="button"
                          id="replenishDeposit-open-1"
                          aria-controls="#replenishDeposit"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-label=""> Запустить AI</button>
                </modal-opener>
              </div>

              <div className="algorithms-section__item">
                <h2 className="algorithms-section__item-heading">Custom AI</h2>

                <div className="algorithms-section__item-body">
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Сумма:</div>
                    <div className="algorithms-section__item-row-right bold">От 500 USD</div>
                  </div>
                  <div className="algorithms-section__item-row bold">
                    <div className="algorithms-section__item-row-left">Доходность:</div>
                    <div className="algorithms-section__item-row-right bold">До 75%</div>
                  </div>
                  <div className="algorithms-section__item-row">
                    <div className="algorithms-section__item-row-left">Возможность тонкой настройки:</div>
                    <div className="algorithms-section__item-row-right bold">Доступна кастомизация</div>
                  </div>
                </div>

                <modal-opener>
                  <button className="modal-opener btn btn--primary btn--large algorithms-section__item-button"
                          type="button"
                          id="replenishDeposit-open-2"
                          aria-controls="#replenishDeposit"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-label=""> Запустить AI</button>
                </modal-opener>
              </div>

            </div>
          </section>

          <section className="algorithms-history">
            <tabs-component className="tabs">
              <div className="tabs__wrapper rel">
                <div className="tabs__navigation  hide-scrollbar" role="tablist" aria-labelledby="tablist">
                  <button className="tabs__header-tab btn btn--primary"
                          role="tab"
                          type="button"
                          tabIndex="0"
                          id="tab-1"
                          aria-controls="tabpanel-1"
                          aria-selected="true">
                    <span className="world_1">Активно</span>
                    <span className="world_2">1</span>
                  </button>

                  <button className="tabs__header-tab btn btn--primary"
                          role="tab"
                          type="button"
                          tabIndex="-1"
                          id="tab-2"
                          aria-controls="tabpanel-2"
                          aria-selected="false">
                    <span className="world_1">Завершено</span>
                    <span className="world_2">0</span>
                  </button>
                </div>

                <div className="tabs__accordions-wrapper">
                  <div className="tabs__list"
                       id="tabpanel-1"
                       role="tabpanel"
                       tabIndex="0"
                       aria-labelledby="tab-1">
                    <div className="algorithms-history__table-wrapper">
                      <table className="algorithms-history__table-body">
                        <tr className="algorithms-history__table-heading-row rel">
                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                               <span>Дата создания</span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>
                                Сумма
                              </span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>
                               Прибыль за период
                              </span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>
                                Прибыль за период
                              </span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper"></div>
                          </th>
                        </tr>

                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div className="tabs__list"
                       id="tabpanel-2"
                       role="tabpanel"
                       tabIndex="-1"
                       aria-labelledby="tab-2" hidden>
                    <div className="algorithms-history__table-wrapper">
                      <table className="algorithms-history__table-body">
                        <tr className="algorithms-history__table-heading-row rel">
                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>Дата создания</span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>
                                Сумма
                              </span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>
                               Прибыль за период
                              </span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper">
                              <span>
                                Прибыль за период
                              </span>
                            </div>
                          </th>

                          <th>
                            <div className="algorithms-history__table-td-wrapper"></div>
                          </th>
                        </tr>

                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                        <tr className="algorithms-history__table-body-row">
                          <td>03.10.2020</td>
                          <td>296.55 USDT</td>
                          <td>296.55 USDT</td>
                          <td>0.00998268 ETH</td>
                          <td>
                            <a href="#" className="link algorithms-history__table-body-row-link">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                  <g clipPath="url(#clip0_101_972)">
                                    <path d="M12.8298 0.772461C6.15769 0.772461 0.729492 6.7751 0.729492 14.1533C0.729492 21.5315 6.15769 27.5341 12.8298 27.5341C19.5019 27.5341 24.9301 21.5315 24.9301 14.1533C24.9301 6.7751 19.5019 0.772461 12.8298 0.772461ZM12.8298 25.1012C7.37073 25.1012 2.92955 20.19 2.92955 14.1533C2.92955 8.11659 7.37073 3.20534 12.8298 3.20534C18.2889 3.20534 22.7301 8.11659 22.7301 14.1533C22.7301 20.19 18.2888 25.1012 12.8298 25.1012Z" fill="#FFF831"/>
                                    <path d="M17.3672 9.42217L11.1444 16.3034L8.29241 13.1495C7.86289 12.6745 7.16635 12.6744 6.73675 13.1494C6.30715 13.6245 6.30715 14.3946 6.73675 14.8697L10.3666 18.8838C10.5728 19.1119 10.8526 19.2401 11.1443 19.2401C11.1444 19.2401 11.1443 19.2401 11.1444 19.2401C11.4361 19.2401 11.7159 19.1119 11.9222 18.8839L18.9229 11.1425C19.3525 10.6675 19.3525 9.89731 18.9229 9.42225C18.4933 8.94719 17.7968 8.94711 17.3672 9.42217Z" fill="#FFF831"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_101_972">
                                      <rect x="0.729492" y="0.772461" width="24.2006" height="26.7616" rx="10" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span>Подробно</span>
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </tabs-component>
          </section>
        </div>
      </div>
    )
}