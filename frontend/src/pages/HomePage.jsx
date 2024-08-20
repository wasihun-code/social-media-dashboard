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
    <div className='flex flex-col place-content-evenly lg:flex-row my-5'>
         <div className='flex flex-col bg-white'>
           <Overview />
           <Chart />
           <RecentUploads />
         </div>

        <div className='h-max'>
          <div className='flex flex-col place-content-between gap-8'>
              <Header />
              <UserCard />
              <hr />
              <ProfileVisitors />
              <hr />
              <DeviceUsability />
            </div>
        </div>
      </div> 
  )
}

export default HomePage
