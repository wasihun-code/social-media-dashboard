import React, { useEffect, useState } from 'react'

import { BiPlug, BiPlus} from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin, BsSearch, BsTelegram } from 'react-icons/bs'
import { CgSearchLoading, CgSpinner } from 'react-icons/cg';
import { ImSpinner } from 'react-icons/im';


const AccountsPage = () => {

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await fetch("http://localhost:3000/accounts")
        const data = await res.json();
        console.log(data)
        setAccounts(data)
      } catch {
        console.log("Error Occured");
      } finally {
        setLoading(false);
      }
    }
    fetchAccounts();
  }, [])

  return (
    <div className='overflow-y-auto flex flex-col w-full'>
      <div className='flex flex-row my-5 gap-8 place-self-center mx-5 w-full sm:w-11/12'>
          <div className="flex flex-col gap-8 border-2 rounded-xl shadow-xl py-5 px-5 w-full">
            <div className='border-b-2 pb-2'>
              <h1 className="text-2xl font-bold">Connect Account</h1>
            </div>
            
            <div className="grid grid-rows-1 grid-cols-1 gap-4 w-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:place-content-between border-2 px-6 py-4 rounded-xl">
                <div className="flex flex-row gap-4">
                  <BsFacebook className='place-self-center text-2xl'/>
                  <h1 className="text-xl">Facebook</h1>
                </div>
                <div className="flex flex-row gap-4 place-self-end">
                  <BiPlug className='place-self-center'/>
                  <h1 className="text-xl">Connect</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:place-content-between border-2 px-6 py-4 rounded-xl">
                <div className="flex flex-row gap-4">
                  <BsLinkedin className='place-self-center text-2xl'/>
                  <h1 className="text-xl">Linkedin</h1>
                </div>
                <div className="flex flex-row gap-4 place-self-end">
                  <BiPlug className='place-self-center'/>
                  <h1 className="text-xl">Connect</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:place-content-between border-2 px-6 py-4 rounded-xl">
                <div className="flex flex-row gap-4">
                  <BsInstagram className='place-self-center text-2xl'/>
                  <h1 className="text-xl">Instagram</h1>
                </div>
                <div className="flex flex-row gap-4 place-self-end">
                  <BiPlug className='place-self-center'/>
                  <h1 className="text-xl">Connect</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:place-content-between border-2 px-6 py-4 rounded-xl">
                <div className="flex flex-row gap-4">
                  <BsTelegram className='place-self-center text-2xl'/>
                  <h1 className="text-xl">Telegram</h1>
                </div>
                <div className="flex flex-row gap-4 place-self-end">
                  <BiPlug className='place-self-center'/>
                  <h1 className="text-xl">Connect</h1>
                </div>
              </div>

            </div>
          </div>
      </div>

      <div className='flex flex-row my-5 gap-8 place-self-center mx-5 w-full sm:w-11/12'>
          <div className="flex flex-col gap-8 border-2 rounded-xl shadow-xl py-5 px-5 w-full">
            <div className='border-b-2 pb-2'>
              <h1 className="text-2xl font-bold">Accounts</h1>
            </div>

            <div className="flex flex-row place-content-between">
              <div className="flex flex-row border-2 rounded-xl gap-4 p-2">
                <BsSearch className='place-self-center text-2xl' />
                <input placeholder='Search...' className='p-2 px-2 rounded-lg' />
              </div>
              <div className="flex flex-row gap-4  px-5">
                <BiPlus className='text-2xl place-self-center' />
                <h1 className='text-xl place-self-center'>Add Account</h1>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
            <table className="divide-y divide-gray-300 w-full">
              <thead className="bg-gray-100 text-xl">
                <tr className=''>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Social</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">Last Connected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xl">
                {
                  loading ? 
                      <ImSpinner className='place-self-center text-5xl w-full'/>
                    :
                  
                   accounts.map((account) => (
                    <tr key={accounts.id} className=''>
                      <td className="px-4 py-3.5 flex flex-row gap-4">
                        <BsFacebook className='place-self-center text-2xl' />
                        <h1 className="text-xl">{account.social}</h1>
                      </td>
                      <td className="px-4 py-3">{account.name}</td>
                      <td className="px-4 py-3">{account.type}</td>
                      <td className="px-4 py-3">{account.status}</td>
                      <td className="px-4 py-3">{account.lastConnected}</td>
                    </tr>      
                  ))
                }
              </tbody>
            </table>
            </div>
          
          </div>
      </div>
    </div>
  )
}

export default AccountsPage
