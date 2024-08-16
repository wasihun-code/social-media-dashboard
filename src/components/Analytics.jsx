import React from 'react'
import AnalyticsCard from './AnalyticsCard'
import { FaArrowDown } from 'react-icons/fa'

const Analytics = () => {
  return (
    <div className='flex flex-col gap-3 border-2 border-orange-50'>
      <div className='mt-2 ml-8 flex flex-row justify-between'>
        <h1 className='text-2xl mb-2'>Analytics</h1>
        <input className='w-2/5  mr-10 sm:mr-20 sm:w-2/12  p-2' value={'Last 7 days'}/>
      </div>
      <div className='p-2 grid grid-rows-3 sm:grid-cols-2 md:grid-rows-1 \
        md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 lg:justify-between w-full  md:place-items-start gap-4'>      
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </div>
  )
}

export default Analytics
