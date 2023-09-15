import React from "react";
import Header from "../Elements/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "../Elements/Aside";
import Overlay from "../Elements/Overlay";
import Footer from '../Elements/Footer';
import {getToken} from '../helpers';

export default function Main() {
  const navigate = useNavigate()

  React.useEffect(() => {
    if(getToken() === null) {
      navigate('/login')
    } else {
      navigate('/profile')
    }
  },[])

  return (
    <div className="page">
      <Overlay />
      <Header />

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
