import React from 'react'
import Sidebar from '../components/sidebar-left/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col md:flex-row bg-white h-screen w-screen'>
      <div className='flex-shrink-0 top-0 sticky'>
        <Sidebar />
      </div>
      <Outlet />
  </div>
  )
}

export default MainLayout
