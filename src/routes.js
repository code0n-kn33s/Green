import Main from './Pages/Main'
// PUBLIC
import LoginPage from './Pages/Auth/LoginPage'
import RestorePass from './Pages/Auth/RestorePass'
import SetNewPass from './Pages/Auth/SetNewPass'
import RegisterPage from './Pages/Auth/RegisterPage'

// PRIVATE
import KYCPage from './Pages/KYC/KYCPage'
import KYCStep1 from './Pages/KYC/KYCStep1'
import KYCStep2 from './Pages/KYC/KYCStep3'
// import KYCStep3 from './Pages/KYC/KYCStep2'

import WithdrawPage from './Pages/Withdrawal/WithdrawPage'
import FaqPage from './Pages/Faq/FaqPage'
import ProfilePage from './Pages/Profile/ProfilePage'

import {AboutPage} from './Pages/FooterPages/'
import {HistoryPage} from './Pages/FooterPages/'
import {AnaliticsPage} from './Pages/FooterPages/'

import StatisticPage from './Pages/Statistics/StatisticPage'
import Placeholders from './Pages/Placeholders'
import PlaceholdersItem from './Pages/PlaceholdersItem'
import AlgoritmsPage from './Pages/Algoritms/AlgoritmsPage'
import NotFound from './Pages/NotFound'

// if (!authUser) {
//   return <Navigate to="/login" state={{ from: history.location }} />
// }

export const routes = [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "about",
          element: <AboutPage /> ,
        },
        {
          path: "history",
          element: <HistoryPage /> ,
        },
        {
          path: "analitics",
          element: <AnaliticsPage /> ,
        },
        {
          path: "profile",
          element: <ProfilePage /> ,
        },
        {
          path: "profile",
          element: <ProfilePage /> ,
        },
        {
          path: "statistics",
          element: <StatisticPage />,
        },
        {
          path: "profile/kyc",
          element: <KYCPage />,
          children: [
            {
              path: "step1",
              element: <KYCStep1 />,
            },
            {
              path: "step2",
              element: <KYCStep2 />,
            },
          ]
        },
        {
          path: "faq",
          element: <FaqPage />,
        },
        {
          path: "withdraw",
          element: <WithdrawPage />,
        },
        {
          path: "placeholders",
          element: <Placeholders />,
        },
        {
          path: "algoritms",
          element: <AlgoritmsPage />,
        },
        {
          path: "algoritms/:id",
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

      ]
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/restore",
      element: <RestorePass/>
    },
    {
      path: "/new-password",
      element: <SetNewPass/>
    },
    {
      path: "/register",
      element: <RegisterPage/>
    },
    {
      path: "/about-guest",
      element: <AboutPage /> ,
    },
    {
      path: "/history-guest",
      element: <HistoryPage /> ,
    },
    {
      path: "/analitics-guest",
      element: <AnaliticsPage /> ,
    },
  ]
