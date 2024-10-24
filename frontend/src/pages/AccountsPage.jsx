import { useContext, useEffect, useState } from 'react';
import { BiPlug, BiPlus} from 'react-icons/bi'

import { ImSpinner } from 'react-icons/im';
import AccountsContext from '../providers/AccountsProvider';
import ManageAccount from '../components/Accounts/ManageAccount';
import { Link } from 'react-router-dom';
import PlatformsContext from '../providers/PlatformsProvider';


const AccountsPage = () => {
  const [accounts, loading] = useContext(AccountsContext);

  const [platforms, loadingPlatforms] = useContext(PlatformsContext);


  return (
    <div className='overflow-y-auto flex flex-col w-full'>
      <div className='flex flex-row my-5 gap-8 place-self-center mx-5 w-full sm:w-11/12'>
          <div className="flex flex-col gap-8 border-2 rounded-xl shadow-xl py-5 px-5 w-full">
            <div className='border-b-2 pb-2'>
              <h1 className="text-2xl font-bold">Connect Account</h1>
            </div>
            
            <div className="grid grid-rows-1 grid-cols-1 gap-4 w-full">
              
            <div className="grid grid-rows-1 gird-cols-1 md:grid-cols-2 gap-4 ">
              {
                platforms.map((platform) => (
                <div key={platform.id} className="flex gap-4 flex-row place-content-between border-2 px-6 py-4 rounded-xl">               
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <img src={platform.icon} alt='platform-icon' className='h-max w-8' />
                    <h1 className="text-xl place-self-center">{platform.name}</h1>
                  </div>
                  <Link className="flex flex-row gap-2 hover:text-white hover:bg-black place-self-end border-2   p-2 rounded-xl">
                    <BiPlug className='place-self-center'/>
                    <h1 className="text-lg">Connect</h1>
                  </Link>
                </div>
              ))}
            </div>

              

            </div>
          </div>
      </div>

      <ManageAccount accounts={accounts} loading={loading}/>
    </div>
  )
}

export default AccountsPage
