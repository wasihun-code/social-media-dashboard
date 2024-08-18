import React from 'react'
import Sidebar from '../components/sidebar-left/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-row bg-white h-screen w-screen'>
      <div className='flex-shrink-0'>
        <Sidebar />
      </div>
      <Outlet />
  </div>
  )
}

export default MainLayout
