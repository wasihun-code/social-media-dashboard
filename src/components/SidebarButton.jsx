import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'

const SidebarButton = ({title}) => {
  return (
    <div className="flex flex-row gap-4 py-3 px-8">
    <MdOutlineDashboard className='md:block text-xl mt-1' />
    <a 
      href="#" 
      className='text-sm py-1'>
      {title}
    </a>
  </div>
  )
}

export default SidebarButton
