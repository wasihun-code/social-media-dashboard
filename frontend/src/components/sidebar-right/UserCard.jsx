import React, { useContext } from 'react'

import  userImage from '../../assets/user.jpg'
import UserContext from '../../providers/UserProvider'


const UserCard = () => {
  const user = useContext(UserContext)

  return (
    <div className='flex flex-col gap-3 border-2 p-4 px-10 rounded-xl shadow-xl'>
      <div className="rounded-full w-52 h-52 mb-2 border-2 border-blue-700 place-self-center">
        <img src={userImage} alt='user-image' className='rounded-full place-self-center border-dotted border-2 p-4'/>
      </div>
      <div className='flex flex-col place-content-around gap-2'>
        <p className='place-self-center'>{`${user.firstName} ${user.lastName}`}</p>
        <p className='place-self-center'>{user.email}</p>
      </div>
    </div>
  )
}

export default UserCard
