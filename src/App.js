import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { routes } from './routes'
import LoginPage from './Pages/Auth/LoginPage'

import "./assets/stylesheets/application.sass.scss"

export default function App() {
  return (
    // <RouterProvider router={router} fallbackElement={<BigSpinner />} />

    <BrowserRouter>
      {/* <MyMenu /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          >
            {route.children.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={
                  <PrivateRoute>
                    {childRoute.element}
                  </PrivateRoute>
                }
              />
            ))}
          </Route>
        ))}

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function isAuth() {
  window.localStorage.setItem('isAuthenticated', false)
  const isAuthenticated = window.localStorage.getItem('isAuthenticated');

  return isAuthenticated
}

function PrivateRoute({ children }) {
  const auth = isAuth();
  return auth === 'true' ? children : <Navigate to="/login" replace={true} />;
}