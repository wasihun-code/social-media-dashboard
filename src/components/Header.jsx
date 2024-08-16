import React from 'react'
import { BiBell, BiMoon, BiNotification } from 'react-icons/bi'
import { BsPostcard } from 'react-icons/bs'
import { CgDarkMode } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import {FaPlus, FaUser} from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { RiNotificationBadgeFill } from 'react-icons/ri'


const Header = () => {
  return (
    <div className=''>
      <div className='m-1 ml-8 flex flex-col my-2 gap-4 md:flex-col lg:justify-between lg:flex-row '>
          <div className='flex flex-row gap-3 sm:place-items-start md:my-0 md:place-self-start lg:place-self-center  p-3 bg-black text-white justify-center px-4 rounded-xl'>
            <FaPlus className='inline text-xl m-1' />
            <a href='#' className='text-xl'>Add New Account</a>
          </div>

          <div className='flex flex-col place-items-center  sm:flex-row sm:justify-between  border-red-700 gap-6'>
            <div className='flex flex-row gap-4 p-2 place-items-center justify-center md:justify-start  '>
              <CiSearch className='text-3xl' />
              <input placeholder='Search' className='text-2xl p-2 w-1/2 sm:w-full' />
            </div>  
            <div className='flex flex-row gap-5 p-2 text-2xl'>
              <BiMoon />
              <BsPostcard />
              <RiNotificationBadgeFill />
              <BiBell />
              <div className='ml-4'>
                <FaUser />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
