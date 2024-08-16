import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'

const SidebarButton = () => {
  return (
    <div className="flex flex-row gap-4 p-3 ml-4">
    <MdOutlineDashboard className='inline text-2xl' />
    <a 
      href="#" 
      className='hidden sm:block text-xl'>
      Dashboard
    </a>
  </div>
  )
}

export default SidebarButton
