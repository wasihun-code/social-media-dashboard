import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'

const SidebarButton = () => {
  return (
    <div className="flex flex-row gap-4 py-2.5 px-10">
    <MdOutlineDashboard className='inline text-xl mt-1' />
    <a 
      href="#" 
      className='hidden lg:block text-lg '>
      Dashboard
    </a>
  </div>
  )
}

export default SidebarButton
