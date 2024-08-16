import React from 'react'
import SidebarButton from './SidebarButton'


const SidebarSection = () => {
  return (
    <section className='flex flex-col gap-5 border-2'>
      <h1 className='font-bold text-2xl '>Menu</h1>
      <div className=''>
        <div className='flex flex-col gap-2'>
        <div className='thisdiv hover:bg-cyan-950 hover:text-white rounded-lg transition-all duration-300 ease-in-out'>
          <SidebarButton/>
        </div>
        <div className='thisdiv hover:bg-cyan-950 hover:text-white rounded-lg transition-all duration-300 ease-in-out'>
          <SidebarButton />
        </div>
        <div className='thisdiv hover:bg-cyan-950 hover:text-white rounded-lg transition-all duration-300 ease-in-out'>
          <SidebarButton />
        </div>
        <div className='thisdiv hover:bg-cyan-950 hover:text-white rounded-lg transition-all duration-300 ease-in-out'>
          <SidebarButton />
        </div>
        </div>
      </div>
    </section>
  )
}

export default SidebarSection
