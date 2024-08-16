import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

import UserInfo from './components/UserInfo'
import Analytics from './components/Analytics'
import Impression from './components/Impression'
import FollowersCountry from './components/FollowersCountry'
import Favourites from './components/Favourites'

function App() {

  return (
    <div className='flex flex-row m-3 md:m-5 bg-white' style={{ height: 'auto' }}>
      <div className='flex-shrink-0'>
        <Sidebar />
      </div>
      <div className='flex flex-col w-full bg-white overflow-y-auto' style={{ height: '1269.6px' }}>
        <Header />
        <div className='flex flex-col-reverse sm:flex-col-reverse lg:flex-row lg:justify-between gap-8 place-content-center'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col rounded-xl shadow-2xl p-10'>
              <Analytics />
            </div>
            <div className='flex flex-col rounded-xl shadow-2xl p-10'>
              <Impression />
            </div>
            <div className='flex flex-col rounded-xl shadow-2xl p-10'>
              <Impression />
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <UserInfo />
            <FollowersCountry />
            <Favourites />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
