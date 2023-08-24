import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from './routes'
import "./assets/stylesheets/application.sass.scss"

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
