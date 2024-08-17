import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'

const SidebarButton = ({title}) => {
  return (
    <div className="flex flex-row gap-4 py-3 px-8">
    <MdOutlineDashboard className='hidden md:block text-xl mt-1' />
    <a 
      href="#" 
      className='text-xs sm:text-sm md:text-md py-1'>
      {title}
    </a>
  </div>
  )
}

export default SidebarButton
