import React from "react";
import Header from "../Elements/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Aside from "../Elements/Aside";
import Overlay from "../Elements/Overlay";
import Footer from '../Elements/Footer';
import { useTranslation } from 'react-i18next';
import { getToken } from '../helpers';
import { useDispatch, useSelector } from "react-redux";
import { closeTooltip, openTooltip, openLiq, closeLiq } from "../toolkitReducers";

export default function Main() {
  const {fetching} = useSelector(state => state.state)
  const navigate = useNavigate()
  const location = useLocation()

  const {t} = useTranslation();

  React.useEffect(() => {
    if(location.pathname === "/" && getToken() !== null) {
      navigate('/profile')
    }
    if (getToken() === null) {
      navigate('/login')
    }

  }, [])

  return (
    <div className="page">
      <Overlay > </Overlay>
      {fetching === "loading" && <Spinner />}
      <Header />
      <Tooltip />

      <Liquidated />
      <div className="page__body-wrapper">
        <Aside />

        <div className="page__sections-wrapper medium-wrapper">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const Tooltip = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirect = useSelector((state) => state.state.tooltipRedirect)
  const text = useSelector((state) => state.state.tooltipText)
  const { t } = useTranslation();

  const { tooltip } = useSelector(({ state }) => state)

  const clickDone = () => {
    // navigate('/profile')
    console.log('redirect :>> ', redirect);
    dispatch(closeTooltip())
  }

  return (
    <>
      {tooltip && <div class="tooltip">
         <div>{text ? text : t("Данные были успешно обновленны")}</div>


          <button
            className="KYS-section__next-page btn btn--primary"
            onClick={clickDone}
            type="button"
          >
            {t("Готово")}
          </button>

      </div>}
    </>
  )
}

export const Liquidated = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { liq } = useSelector((state) => state.auth)
  const { t } = useTranslation();


  React.useEffect(() => {
    if (liq === true) {
      dispatch(openLiq())
    }
  }, [liq])

  const clickDone = () => {
    navigate('/profile')
    dispatch(closeLiq())
  }

  return (
    <>
      {(liq) && <div class="tooltip">

        {liq && <div className="tooltip-liqi">
          <h2>{t("УВЕДОМЛЕНИЕ О ЛИКВИДАЦИИ ПОЗИЦИИ!")}</h2>
          <p>{t("Мы с сожалением сообщаем вам, что ваша позиция на арбитражном аккаунте Arbitech7, была ликвидирована.")}</p>
          <p>{t("Пожалуйста, подходите к управлению рисками со всей ответственностью.")}</p>
          <p>{t("Узнайте больше о том, как минимизировать риски, на странице  «Управление рисками»")}</p>


        </div>
        }
        <div>
          <button
            className="KYS-section__next-page btn btn--primary"
            onClick={clickDone}
            type="button"
          >
            {t("Готово")}
          </button>
        </div>
      </div>}
    </>
  )
}

const Spinner = () => {
  return <div className="site-spinner"><span class="loader"></span></div>
}