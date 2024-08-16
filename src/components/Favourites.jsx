import React from 'react'
import { BiGroup } from 'react-icons/bi'
import userimage from '../assets/image copy.png'

const Favourites = () => {
  return (
    <div className='border-2 rounded-xl shadow-xl'>
      <div className='flex flex-col gap-4 p-3 pl-5'>
        <h1 className='text-3xl font-normal'>Followers</h1>
        <div className='flex flex-row gap-5 w-full p-2'>
          <div className="flex flex-row place-items-center ">
            <img src={userimage} alt='user-image' className='w-16 h-16 rounded-full border-dotted border-2'/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-xl'>Frontend Dev</h3>
            <div className="flex flex-row gap-4">
              <h3 className='text-2xl'>3.5K</h3>
              <BiGroup className='text-3xl'/>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-5 w-full p-2'>
          <div className="flex flex-row place-items-center ">
            <img src={userimage} alt='user-image' className='w-16 h-16 rounded-full border-dotted border-2'/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-xl'>Frontend Dev</h3>
            <div className="flex flex-row gap-4">
              <h3 className='text-2xl'>3.5K</h3>
              <BiGroup className='text-3xl'/>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-5 w-full p-2'>
          <div className="flex flex-row place-items-center ">
            <img src={userimage} alt='user-image' className='ww-16 h-16 rounded-full border-dotted border-2'/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-xl'>Frontend Dev</h3>
            <div className="flex flex-row gap-4">
              <h3 className='text-2xl'>3.5K</h3>
              <BiGroup className='text-3xl'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourites
