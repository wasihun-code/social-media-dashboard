import React from 'react'
import SidebarButton from './SidebarButton'
import  logo from '../../assets/logo4.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const arr = ['Overview', 'Visibility', 'Content', 'Media', 'Settings', 'Help'];

  return (
    <div className='flex flex-col md:gap-4 md:h-screen w-full md:bg-zinc-200 px-1 sm:px-4 sm:py-1'>
        <img src={logo} className='mt-4 mb-0 place-self-start w-36 md:h-max' />
        <div className="flex flex-row md:flex-col md:h-full md:place-content-between ">
          <div className="mt-4 flex sm:flex-row md:flex-col gap-4 md:gap-2 place-self-center overflow-x-auto w-full">
            {
              arr.map((title, index)=> (
                <Link key={index} className='my-2 hover:rounded-lg hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
                  <SidebarButton title={title}/>
                </Link>
              ))
            }
          </div>  
          <div className="flex flex-col gap-2 place-self-end md:place-self-center">
            <Link className='my-2 hover:rounded-lg hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
              <SidebarButton title={"Logout"}/>
            </Link>
          </div>
        
      </div>
     

    </div>
  )
}

export default Sidebar
