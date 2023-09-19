import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import { routes } from './routes'

import "./assets/stylesheets/application.sass.scss"

const router = createBrowserRouter(routes)

const App = () => <RouterProvider router={router} />

export default App
