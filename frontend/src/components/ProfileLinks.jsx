import React from 'react'
import { BiMessageSquare, BiNotification } from 'react-icons/bi'
import { CgNotifications, CgProfile } from 'react-icons/cg'
import { MdAccountCircle, MdNoAccounts, MdOutlineManageAccounts, MdOutlineSecurity, MdSecurity } from 'react-icons/md'
import { SiParrotsecurity } from 'react-icons/si'

const ProfileLinks = () => {
  return (
    <div className="flex flex-row gap-12 place-self-center md:place-self-start w-full md:w-max">
          <div className="flex flex-row md:flex-col overflow-auto m-4 gap-4 w-full">
            <button className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <CgProfile className='text-xl place-self-center' />
              <h1 className='w-max text-md md:text-md lg:text-md'>My Profile</h1>
            </button>

            <button className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <MdOutlineSecurity className='text-xl place-self-center' />
              <h1 className='w-max sm:text-sm md:text-md lg:text-md'>Security</h1>
            </button>

            <button className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <MdOutlineManageAccounts className='text-xl place-self-center' />
              <h1 className='w-max sm:text-sm md:text-md lg:text-md'>Accounts</h1>
            </button>

            <button className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <BiMessageSquare className='text-xl place-self-center' />
              <h1 className='w-max sm:text-sm md:text-md lg:text-md'>Notifications</h1>
              </button> 
              
            <button className="p-2 px-4 md:mt-5  text-red-400 hover:bg-red-700 hover:text-white hover:text-md rounded-xl border-2 mb-4 sm:mb-0">
              <h1 className='w-max'> Delete Account </h1>
            </button>
          </div>
        </div>
  )
}

export default ProfileLinks