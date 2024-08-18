import React from 'react'
import graph from '../../assets/graph.png'
import { RiArrowDropDownFill } from 'react-icons/ri'

const Chart = () => {
  return (
    <div className='rounded-sm flex flex-col p-4 gap-4 shadow-xl w-full my-2 shadow-gray-400'>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold text-xl place-content-center'>Visitors site</h1>
        <div className='flex flex-row gap-2 place-content-center justify-between rounded-lg border-2 px-4'>
          <h1 className='text-xl place-self-center'>Yearly</h1>
          <RiArrowDropDownFill className='text-5xl'/>
        </div>
      </div>
      <div className='flex flex-col  border-2 rounded-xl'>
        <img src={graph} alt='Graph' className='' />
      </div>
    </div>
  )
}

export default Chart
