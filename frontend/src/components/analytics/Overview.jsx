import React, { useContext } from 'react'
import Search from './Search'
import OverviewCard from './OverviewCard'
import AccountsContext from '../../providers/AccountsProvider'
import { ImSpinner } from 'react-icons/im'


const Overview = () => {
  const [accounts, loading] = useContext(AccountsContext);
  return (
    <div className='flex flex-col place-content-between bg-white shadow-2xl rounded-xl p-4 px-6'>
      <div className='flex flex-col place-content-between'>
        <div className='flex flex-col lg:flex-row m-4 place-content-between gap-4'>
          <h1 className='text-3xl'>Overview</h1>
          <Search className='place-self-center'/>
        </div>
        <div className='grid grid-row-1 grid-cols-1 md:grid-rows-1  md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-6 m-2 w-max'>
          {
            loading ?
              <div className="flex flex-row w-full col-span-1 md:col-span-2 lg:col-span-3">
                <ImSpinner className='text-5xl place-self-center' />
              </div>
            :
              accounts[0]["metrics"].map((metric) => (
                   <OverviewCard title={metric.title} count={metric.count} percent={metric.percent} color='bg-red-950'/>
              ))
          }
       </div>
      </div>
    </div>
  )
}

export default Overview
