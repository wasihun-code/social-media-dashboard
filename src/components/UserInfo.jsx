import React from 'react'
import userimage from '../assets/image copy.png'

const UserInfo = () => {
  return (
    <div className='border-2 rounded-xl shadow-xl'>

      <div className='flex flex-col gap-6 place-items-center  text-xl p-4'>
        <div className='flex flex-col gap-2 place-items-center'>
          <img src={userimage} alt='user-image' className='w-32 h-32 rounded-full border-dotted border-2'/>
          <h1>Wasihun Ageru</h1>
          <h2>Fullstack Developer</h2>
        </div>

        <div className='flex flex-row gap-8 place-items-center text-lg'>
          <div className='flex flex-col gap-1 text-center'>
            <h1 className='font-bold text-2xl'>24B</h1>
            <h3>Followers</h3>
          </div>

          <div className='flex flex-col gap-1 text-center'>
            <h1 className='font-bold text-2xl'>1.2M</h1>
            <h3>Following</h3>
          </div>

          <div className='flex flex-col gap-1 text-center'>
            <h1 className='font-bold text-2xl'>56K</h1>
            <h3>Friends</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
