import React from 'react'

import  user from '../assets/user.jpg'


const UserCard = () => {
  return (
    <div className='flex flex-col place-content-center gap-1 py-2 my-5 text-sm'> 
      <img src={user} alt='user-image' className='w-16 sm:w-20 h-16 sm:h-24 rounded-full place-self-center border-dotted border-2'/>
      <p className='place-self-center'>Wasihun Ageru</p>
      <p className='place-self-center text-xs'>wasebruno@gmail.com</p>
    </div>
  )
}

export default UserCard
