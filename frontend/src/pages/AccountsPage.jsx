import { useContext, useEffect, useState } from 'react';
import { BiPlug, BiPlus} from 'react-icons/bi'

import { ImSpinner } from 'react-icons/im';
import AccountsContext from '../providers/AccountsProvider';
import ManageAccount from '../components/Accounts/ManageAccount';
import { Link } from 'react-router-dom';


const AccountsPage = () => {
  const [accounts, loading] = useContext(AccountsContext);

  const [platforms, setPlatforms] = useState([]);
  const [loadingPlatforms, setLoadingPlatforms] = useState(false)

  const connectedPlatforms = accounts.map(account => account.platform);
  // console.log(connectedPlatforms);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9000/api/platforms")
        
        if (!res.ok) {
          throw new Error("Network Error: Fetching Platforms to Connect")
        }

        const data = await res.json()

        const availablePlatforms = data.filter(platform => !connectedPlatforms.includes(platform.id));
        setPlatforms(availablePlatforms);

      } catch {
        console.log("Fetching Platforms failed")
      } finally {
        setLoadingPlatforms(false);
      }
    }
    fetchPlatforms()
  }, [])


  
  

  return (
    <div className='overflow-y-auto flex flex-col w-full'>
      <div className='flex flex-row my-5 gap-8 place-self-center mx-5 w-full sm:w-11/12'>
          <div className="flex flex-col gap-8 border-2 rounded-xl shadow-xl py-5 px-5 w-full">
            <div className='border-b-2 pb-2'>
              <h1 className="text-2xl font-bold">Connect Account</h1>
            </div>
            
            <div className="grid grid-rows-1 grid-cols-1 gap-4 w-full">
              {
                loadingPlatforms ? 
                <div className="flex flex-row w-full col-span-1">
                  <ImSpinner className='text-5xl' />
                </div>
                :
                platforms.map((platform, index) => (
                  <div key={platform.id} className="flex flex-col gap-4 sm:flex-row sm:place-content-between border-2 px-6 py-4 rounded-xl">
                   
                      <div className="flex flex-row gap-4">
                        {/** <BsFacebook className='place-self-center text-2xl'/>**/}
                        <h1 className="text-2xl place-self-center">{platform.name}</h1>
                      </div>
                    <Link className="flex flex-row gap-2 hover:text-white hover:bg-black place-self-end border-2   p-2 rounded-xl">
                      <BiPlug className='place-self-center'/>
                      <h1 className="text-xl">Connect</h1>
                    </Link>
                  </div>
                ))
              }
              

            </div>
          </div>
      </div>

      <ManageAccount accounts={accounts} loading={loading}/>
    </div>
  )
}

export default AccountsPage
