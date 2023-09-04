import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import { routes } from './routes'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import RestorePassPage from './Pages/Auth/RestorePass'
import NewPassPage from './Pages/Auth/SetNewPass'
import ProfilePage from './Pages/Profile/ProfilePage'
import Main from './Pages/Main'

import "./assets/stylesheets/application.sass.scss"


const router = createBrowserRouter(routes)


export default function App() {
  // console.log('routes :>> ', routes);
  return (

<>
      {/* <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link> */}

      <RouterProvider router={router}/>

        {/*
       <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} >
            {/* {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
            // <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/restore" element={<RestorePassPage />} />
        <Route path="/new-pass" element={<NewPassPage />} />
        <Route path="/login" element={<LoginPage />} />
            */}
      {/* </Routes> */}
      </>
  );
}

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // let isAuthenticated = true
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" />
}