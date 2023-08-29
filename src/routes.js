import Todo from './Pages/Todo'

import Main from './Pages/Main'
import LoginPage from './Pages/Auth/LoginPage'
import RestorePass from './Pages/Auth/RestorePass'
import SetNewPass from './Pages/Auth/SetNewPass'
import RegisterPage from './Pages/Auth/RegisterPage'

import TodoItem from './Pages/TodoItem'
import FaqPage from './Pages/Faq/FaqPage'
import ProfilePage from './Pages/Profile/ProfilePage'
import StatisticPage from './Pages/Statistics/StatisticPage'
import Placeholders from './Pages/Placeholders'
import PlaceholdersItem from './Pages/PlaceholdersItem'
import AlgoritmsPage from './Pages/Algoritms/AlgoritmsPage'
import NotFound from './Pages/NotFound'

export const routes = [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "set-new-password",
          element: <SetNewPass />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "restore-password",
          element: <RestorePass />,
        },
        {
          path: "statistics",
          element: <StatisticPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "faq",
          element: <FaqPage />,
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
          element: <LoginPage />,
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
