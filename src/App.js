import { Route, Redirect, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from './routes'
import "./assets/stylesheets/application.sass.scss"

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

function PrivateRoute({component: Component, isAuth, ...rest}) {

  return (
    <Route
      {...rest}
      render={props => {
        isAuth ? <Component {...props} /> : <Redirect to="login"/>
      }}
    />
  )
}
export default App;
