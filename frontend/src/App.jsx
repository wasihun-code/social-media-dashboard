import './App.css'

import AccountsPage from './pages/AccountsPage'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import SignUp from './components/auth/SignUp'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/auth/Login'
import ProfileLayout from './layouts/ProfileLayout'
import GeneralSettings from './components/GeneralSettings'
import SecuritySettings from './components/SecuritySettings'
import AccountsSetting from './components/AccountsSetting'
import NotificationSetting from './components/NotificationSetting'
import DeleteAccount from './components/DeleteAccount'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "accounts",
        element: <AccountsPage />
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <GeneralSettings />
          },
          {
            path:'general',
            element: <GeneralSettings />
          },
          {
            path: 'security',
            element: <SecuritySettings />
          },
          {
            path: 'accounts',
            element: <AccountsSetting />
          },
          {
            path: 'notification',
            element: <NotificationSetting />
          },
          {
            path: 'delete_account',
            element: <DeleteAccount />
          }
        ]
      },
    ]
  },

  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
  {
    path: '/signup',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignUp />
      }
    ]
  }
])


function App() {

  return (
    <div className='flex flex-row bg-white h-screen w-screen'>
      <RouterProvider router={router} />   
    </div>

  )
}

export default App
