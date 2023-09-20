import React from "react";
import Header from "../Elements/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "../Elements/Aside";
import Overlay from "../Elements/Overlay";
import Footer from '../Elements/Footer';
import { getToken } from '../helpers';
import { useDispatch, useSelector } from "react-redux";
import { closeTooltip, openTooltip, openLiq, closeLiq } from "../toolkitReducers";

export default function Main() {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (getToken() === null) {
      navigate('/login')
    }

  }, [])

  return (
    <div className="page">
      <Overlay />
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

  const { tooltip } = useSelector(({ state }) => state)

  const clickDone = () => {
    navigate('/profile')
    dispatch(closeTooltip())
  }

  return (
    <>
      {tooltip && <div class="tooltip">
         <div>Данные были успешно обновленны</div>


          <button
            className="KYS-section__next-page btn btn--primary"
            onClick={clickDone}
            type="button"
          >
            Готово
          </button>

      </div>}
    </>
  )
}

export const Liquidated = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { liq } = useSelector((state) => state.auth)

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
          <h2>УВЕДОМЛЕНИЕ О ЛИКВИДАЦИИ ПОЗИЦИИ!</h2>
          <p>Мы с сожалением сообщаем вам, что ваша позиция на арбитражном аккаунте Arbitech7, была ликвидирована.</p>
          <p>Пожалуйста, подходите к управлению рисками со всей ответственностью.</p>
          <p>Узнайте больше о том, как минимизировать риски, на странице  «Управление рисками»</p>


        </div>
        }
        <div>
          <button
            className="KYS-section__next-page btn btn--primary"
            onClick={clickDone}
            type="button"
          >
            Готово
          </button>
        </div>
      </div>}
    </>
  )
}