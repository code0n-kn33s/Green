import React from "react";
import Header from "../Elements/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "../Elements/Aside";
import Overlay from "../Elements/Overlay";
import Footer from '../Elements/Footer';
import { getToken } from '../helpers';
import { useDispatch, useSelector } from "react-redux";
import { closeTooltip } from "../toolkitReducers";

export default function Main() {
  const navigate = useNavigate()
  const {tooltip} = useSelector(({state}) => state)

  React.useEffect(() => {
    if (getToken() === null) {
      navigate('/login')
    }
  }, [])

  console.log('tooltip :>> ', tooltip);
  return (
    <div className="page">
      <Overlay />
      <Header />
      {tooltip && <Tooltip />}
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

  const clickDone = () => {
    navigate('/profile')
    dispatch(closeTooltip())
  }
  return (
    <>
      <div class="tooltip">
        <div>Данные были успешно обновленны</div>
        <div>
        <button
          className="KYS-section__next-page btn btn--primary"
          onClick={clickDone}
          type="button"
        >
          Готово
        </button>
        </div>
      </div>
    </>
  )
}