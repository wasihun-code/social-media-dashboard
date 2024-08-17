import './App.css'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
import Chart from './components/Chart'
import RecentUploads from './components/RecentUploads'
import { BiBellPlus, BiDownArrow, BiPlus, BiSolidDownArrow } from 'react-icons/bi'
import Header from './components/Header'
import DeviceUsability from './components/DeviceUsability'
import ProfileVisitors from './components/ProfileVisitors'
import UserCard from './components/UserCard'

function App() {

  return (
    <div className='flex flex-row bg-white h-screen'>
      <div className='flex-shrink-0'>
        <Sidebar />
      </div>
      <div className='flex flex-col lg:flex-row overflow-auto gap-8'>

        <div className='flex flex-col bg-white'>
          <Overview />
          <Chart />
          <RecentUploads />
        </div>

        <div className='flex flex-col h-full place-content-between gap-8 m-2 my-5'>
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

export default App
