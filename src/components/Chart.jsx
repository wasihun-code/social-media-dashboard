import React from 'react'
import graph from '../assets/graph.png'
import { RiArrowDropDownFill } from 'react-icons/ri'

const Chart = () => {
  return (
    <div className='rounded-sm flex flex-col border-2 p-4 gap-4 m-6 '>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold'>Visitors site</h1>
        <RiArrowDropDownFill className='text-3xl'/>
      </div>
      <div className='flex flex-col  border-2 rounded-xl'>
        <img src={graph} alt='Graph' className='' />
      </div>
    </div>
  )
}

export default Chart
