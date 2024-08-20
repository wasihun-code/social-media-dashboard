import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom'

const SidebarButton = ({title}) => {
  return (
    <div className="flex flex-row gap-4 mb-1 px-5 md:py-1 ">
    <MdOutlineDashboard className='hidden md:block text-xl mt-1' />
      <h3
        className='md:text-md py-1 '>
        {title}
      </h3>
    </div>
  )
}

export default SidebarButton
