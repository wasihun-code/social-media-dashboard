import './App.css'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
import Chart from './components/Chart'
import RecentUploads from './components/RecentUploads'

function App() {

  return (
    <div className='flex flex-row bg-white h-screen'>
      <div className='flex-shrink-0'>
        <Sidebar />
      </div>
      <div className='flex flex-col bg-white overflow-y-auto'>
        <Overview />
        <Chart />
        <RecentUploads />

      </div>

      <div className='flex-shrink-0'>
        
      </div>
    </div>

  )
}

export default App
