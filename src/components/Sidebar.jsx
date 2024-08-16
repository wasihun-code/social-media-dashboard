import React from 'react'
import SidebarSection from './SidebarSection'
import SidebarButton from './SidebarButton'
import  logo from '../assets/image.png'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-14 bg-zinc-200 w-24 sm:w-64 py-4 pl-2'>
      <div className="ml-2 w-3/4">
        <img src={logo} alt="Logo" />
      </div>
    
      <SidebarSection className=''/>
      <SidebarSection />
      <SidebarSection />

      <div className='ml-2 border-4'>
        <SidebarButton />
      </div>
    </div>
  )
}

export default Sidebar
