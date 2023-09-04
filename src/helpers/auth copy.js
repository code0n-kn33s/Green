export const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

export const setUserData = (value) => {
    const user = window.localStorage.setItem("user", "true");
    // resolve(user);

}

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    defer
  } from "react-router-dom";

  import { AuthLayout } from "./components/AuthLayout";
  // ideally this would be an API call to server to get logged in user data
  const getUserData = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        const user = window.localStorage.getItem("user");
        resolve(user);
      }, 3000)
    );

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<AuthLayout />}
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route element={<HomeLayout />}>
          ...
        </Route>

        <Route path="/dashboard" element={<ProtectedLayout />}>
          ...
        </Route>
      </Route>
    )
  );

//   https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/