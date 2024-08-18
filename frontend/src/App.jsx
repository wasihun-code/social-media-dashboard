import './App.css'

import AccountsPage from './pages/AccountsPage'

import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import SignUp from './components/auth/SignUp'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/auth/Login'


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
        path: "/accounts",
        element: <AccountsPage />
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
