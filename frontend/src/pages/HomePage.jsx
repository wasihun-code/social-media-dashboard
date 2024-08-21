import React from 'react'
import Overview from '../components/analytics/Overview'
import Chart from '../components/analytics/Chart'
import RecentUploads from '../components/analytics/RecentUploads'
import Header from '../components/sidebar-right/Header'
import DeviceUsability from '../components/sidebar-right/DeviceUsability'
import ProfileVisitors from '../components/sidebar-right/ProfileVisitors'
import UserCard from '../components/sidebar-right/UserCard'


const HomePage = () => {
  return (
    <div className='flex flex-col place-content-evenly lg:flex-row  bg-neutral-50'>
         <div className='flex flex-col gap-4 my-5'>
           <Overview />
           <Chart />
           <RecentUploads />
         </div>

          <div className='flex flex-col my-5 gap-10 h-full'>
            <Header />
            <UserCard />
            <ProfileVisitors />
            <DeviceUsability />
          </div>
      </div> 
  )
}

export default HomePage
