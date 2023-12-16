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

import { AboutPage } from './Pages/FooterPages'
import { HistoryPage } from './Pages/FooterPages'
import { AnaliticsPage } from './Pages/FooterPages'

// Footer pages
import { LoginWrap } from './Pages/Auth/LoginWrap'
import { PrivateWrap } from './Pages/FooterPages'
import { PublicWrap } from './Pages/FooterPages'

import { AboutUs } from './Pages/FooterPages'
import { StoryMap } from './Pages/FooterPages'
import { Posibilities } from './Pages/FooterPages'
import { Partners } from './Pages/FooterPages'
import { Terms } from './Pages/FooterPages'

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

        path: "private",
        element: <PrivateWrap />,
        children: [
          {
            path: "about",
            element: <AboutUs />,
          },
          {
            path: "terms",
            element: <Terms />,
          },
          {
            path: "analitics",
            element: <Posibilities />,
          },
          {
            path: "partners",
            element: <Partners />,
          },
        ]
      },

      {
        path: "profile",
        element: <ProfilePage />,
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
    element: <LoginWrap />
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />
  // },
  {
    path: "/restore",
    element: <RestorePass />
  },
  {
    path: "/new-password",
    element: <SetNewPass />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  // {
  //   path: "public",
  //   element: <PublicWrap />,
  //   children: [
  //     {
  //       path: "about",
  //       element: <AboutUs />,
  //     },
  //     {
  //       path: "history",
  //       element: <StoryMap />,
  //     },
  //     {
  //       path: "analitics",
  //       element: <Posibilities />,
  //     },
  //     {
  //       path: "partners",
  //       element: <Partners />,
  //     },
  //     {
  //       path: "terms",
  //       element: <Terms />,
  //     },
  //   ]
  // },

]
