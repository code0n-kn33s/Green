import Todo from './Pages/Todo'

import Main from './Pages/Main'
import Login from './Pages/Login/Login'
import TodoItem from './Pages/TodoItem'
import NewFitches from './Pages/NewFitches'
import Placeholders from './Pages/Placeholders'
import PlaceholdersItem from './Pages/PlaceholdersItem'
import NotFound from './Pages/NotFound'
import AlgoritmsPage from './Pages/Algoritms/AlgoritmsPage'

export const routes = [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "new",
          element: <NewFitches />,
        },
        {
          path: "todo",
          element: <Todo />,
          value: "value from todo"
        },
        {
          path: "todo/item",
          element: <TodoItem />,
        },
        {
          path: "placeholders",
          element: <Placeholders />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "algoritms",
          element: <AlgoritmsPage />,
        },
        {
          path: "placeholders/:id",
          element: <PlaceholdersItem />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]
