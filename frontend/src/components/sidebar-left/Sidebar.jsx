import React from 'react'
import SidebarButton from './SidebarButton'
import  logo from '../../assets/logo.png'

const Sidebar = () => {

  const arr = ['Overview', 'Visibility', 'Content', 'Media', 'Settings', 'Help'];

  return (
    <div className='flex flex-col h-screen place-content-between bg-zinc-200 px-1 sm:px-4  py-1'>
      <div className="flex flex-col">
        <img src={logo} alt='user-image' className='w-20 sm:w-24 h-20 place-self-center border-dotted border-2 mt-4'/>
        <div className="mt-5 flex flex-col gap-2 place-self-center">
          {
            arr.map((title)=> (
              <div className='hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
                <SidebarButton title={title}/>
              </div>
            ))
          }
        </div>
        
      </div>

      <div className="mt-5 flex flex-col gap-2 place-self-center">
        <div className='hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
          <SidebarButton title={"Logout"}/>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
