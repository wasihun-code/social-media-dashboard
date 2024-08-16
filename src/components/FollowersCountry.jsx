import React from 'react'
import { BiGroup } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'

const FollowersCountry = () => {
  return (
    <div className='border-2 rounded-xl shadow-xl'>
      <div className='flex flex-col gap-2 p-3'>
        <h1 className='text-3xl font-normal'>Followers</h1>
        <div className='flex flex-row justify-between w-full p-2'>
          <div className="flex flex-row place-items-center ">
            <BsDot className='text-3xl'/>
            <h3 className='text-2xl'>Asia</h3>
          </div>
          <div className="flex flex-row gap-4">
            <h3 className='text-2xl'>3.5K</h3>
            <BiGroup className='text-3xl'/>
          </div>
        </div>
        <div className='flex flex-row justify-between w-full p-2'>
          <div className="flex flex-row place-items-center">
            <BsDot className='text-3xl'/>
            <h3 className='text-2xl'>Asia</h3>
          </div>
          <div className="flex flex-row gap-4">
            <h3 className='text-2xl'>3.5K</h3>
            <BiGroup className='text-3xl'/>
          </div>
        </div>
        <div className='flex flex-row justify-between w-full p-2'>
          <div className="flex flex-row place-items-center">
            <BsDot className='text-3xl'/>
            <h3 className='text-2xl'>Asia</h3>
          </div>
          <div className="flex flex-row gap-4">
            <h3 className='text-2xl'>3.5K</h3>
            <BiGroup className='text-3xl'/>
          </div>
        </div>
        <div className='flex flex-row justify-between w-full p-2'>
          <div className="flex flex-row place-items-center">
            <BsDot className='text-3xl'/>
            <h3 className='text-2xl'>Asia</h3>
          </div>
          <div className="flex flex-row gap-4">
            <h3 className='text-2xl'>3.5K</h3>
            <BiGroup className='text-3xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowersCountry
