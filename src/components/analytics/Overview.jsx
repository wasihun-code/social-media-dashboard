import React from 'react'
import Search from './Search'
import OverviewCard from './OverviewCard'


const Overview = () => {
  return (
    <div className='flex flex-col place-content-between border-red-950 shadow-xl shadow-gray-400 p-2'>
      <div className='flex flex-col place-content-between'>
        <div className='flex flex-col lg:flex-row m-4 place-content-between gap-4'>
          <h1 className='text-3xl'>Overview</h1>
          <Search className='place-self-center'/>
        </div>
        <div className='grid grid-row-1 grid-cols-1 md:grid-rows-1  md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-6 m-2 w-max'>
          <OverviewCard title='Followers' count={48245} percent={21} color='bg-red-950'/>
          <OverviewCard title='Likes' count={245} percent={21} color='bg-orange-700'/>
          <OverviewCard title='Comments' count={245} percent={21} color='bg-blue-600'/>
        </div>
      </div>
    </div>
  )
}

export default Overview
