import React from 'react'
import Header from '../components/sidebar-left/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col  bg-white w-screen'>
      <div className='flex-shrink-0 top-0 sticky'>
        <Header />
      </div>
      <Outlet />
  </div>
  )
}

export default MainLayout
