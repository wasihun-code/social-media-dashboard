import React from 'react'
import SidebarButton from './SidebarButton'
import  logo from '../assets/logo.png'
import UserCard from './UserCard'

const Sidebar = () => {

  const arr = ['Overview', 'Visibility', 'Content', 'Media', 'Settings', 'Help'];

  return (
    <div className='flex flex-col h-screen place-content-between bg-zinc-200'>
      <div className="flex flex-col">
        <img src={logo} alt='user-image' className='w-20 sm:w-24 h-20 place-self-center border-dotted border-2'/>
        <UserCard />
        <div className="flex flex-col gap-2 place-self-center">
          {
            arr.map((title)=> (
              <div className='hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
                <SidebarButton title={title}/>
              </div>
            ))
          }
        </div>
        
      </div>

      <div className='mb-0.5 hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
        <SidebarButton title={'ogout'}/>
      </div>

    </div>
  )
}

export default Sidebar
