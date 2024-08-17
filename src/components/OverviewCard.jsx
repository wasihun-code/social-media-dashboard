import React from 'react'
import { BiSolidUpArrow } from 'react-icons/bi'
import { SlUserFollow } from 'react-icons/sl'

const OverviewCard = ({title, count, percent, color}) => {
  return (
    <div className={`flex flex-col lg:flex-row w-max gap-8 border-2 place-content-between rounded-xl px-8 py-8 ${color} text-white`}>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row gap-2'>
          <SlUserFollow className='text-3xl'/>
          <h1 className='text-xl'>{title}</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl'>{count}</h1>
          <p className='text-lg text-zinc-300'>From last 7 days</p>
        </div>
      </div>
      <div className='flex flex-row gap-2 w-48 p-3 h-1/4 lg:w-max place-self-center lg:place-self-start justify-center border-2 bg-gray-500 bg-opacity-25 rounded-2xl'>
        <BiSolidUpArrow className='text-xl place-self-center'/>
        <p className='text-lg place-self-center'>+{percent}%</p>
      </div>
  </div>
  )
}

export default OverviewCard
