import React from 'react'
import { BsSearchHeartFill } from 'react-icons/bs'
import OverviewCard from './OverviewCard'
import Search from './Search'

const Overview = () => {
  return (
    <div className='m-6 p-1 flex flex-col place-content-between border-red-950'>
      <div className='flex flex-col place-content-between'>
        <div className='sticky flex flex-col md:flex-row place-content-between gap-8 m-4'>
          <h1 className='text-4xl'>Overview</h1>
          <Search />
        </div>
        <div className='grid grid-row-1 grid-cols-1 md:grid-rows-1  md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-6  m-2'>
          <OverviewCard title='Followers' count={48245} percent={21} color='bg-red-950'/>
          <OverviewCard title='Likes' count={245} percent={21} color='bg-orange-700'/>
          <OverviewCard title='Comments' count={245} percent={21} color='bg-blue-600'/>
        </div>
      </div>
    </div>
  )
}

export default Overview
