import React from 'react'
import ProfileLinks from '../components/profile/ProfileLinks'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <div className='m-2 w-full overflow-y-auto  rounded-lg p-2 px-5 py-5 border-2'>
    <h1 className='text-2xl my-4 mx-4'>Account Setting</h1>
    <hr className=''/>
    <div className="flex flex-col md:gap-2 md:flex-row bg-white rounded-xl p-2 mr-2 md:mt-5">
      {/** Links */}
      <ProfileLinks />
      {/** Form */}
      <hr />
      <div className="md:border-l-2 w-full my-3 h-full" >
        <div className="flex flex-col gap-6 ml-10 my-4">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileLayout