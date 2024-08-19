import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'

const SidebarButton = ({title}) => {
  return (
    <div className="flex flex-row gap-4 mb-1 px-5 md:py-1 ">
    <MdOutlineDashboard className='hidden md:block text-xl mt-1' />
      <a 
        href="#" 
        className='md:text-md py-1 '>
        {title}
      </a>
    </div>
  )
}

export default SidebarButton
