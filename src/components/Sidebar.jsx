import React from 'react'
import SidebarSection from './SidebarSection'
import SidebarButton from './SidebarButton'
import  logo from '../assets/logo.png'
import  user from '../assets/user.jpg'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen place-content-between  bg-zinc-200'>
      <div className="flex flex-col">
        <img src={logo} alt='user-image' className='w-48 h-20 place-self-center border-dotted border-2 p-3'/>
        <div className='flex flex-col place-content-center gap-1 m-2 mb-5'> 
          <img src={user} alt='user-image' className='w-24 h-24 rounded-full place-self-center border-dotted border-2 p-3'/>
          <p className='place-self-center'>Wasihun Ageru</p>
          <p className='place-self-center'>wasebruno@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 place-self-center ">
          <div className='hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
            <SidebarButton />
          </div>
          <div className=' hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
            <SidebarButton />
          </div>   
          <div className=' hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
            <SidebarButton />
          </div>   
          <div className=' hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
            <SidebarButton />
          </div>  
          <div className=' hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
            <SidebarButton />
          </div>  
          <div className=' hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
            <SidebarButton />
          </div>   
        </div>
        
      </div>

      <div className='mb-0.5 hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
        <SidebarButton />
      </div>

    </div>
  )
}

export default Sidebar
