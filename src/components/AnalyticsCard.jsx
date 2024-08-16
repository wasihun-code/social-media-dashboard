import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const AnalyticsCard = () => {
  return (
    <div className='flex flex-row place-content-center sm:place-items-start gap-8 border-2 border-red-900 rounded-xl p-4 w-5/6'>
      <FaUserGroup className='place-self-start text-3xl text-orange-500' />
      <div className='flex flex-col gap-2 text-2xl'>
        <h1 className='text-3xl font-bold'>21092</h1>
        <h1>Followers</h1>
        <div className='flex flex-row gap-3 place-items-center text-lg'>
          <FaArrowUp />
          <p className='text-xs sm:text-md '>432% This Week</p>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsCard
