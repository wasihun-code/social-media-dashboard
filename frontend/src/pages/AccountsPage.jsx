import React from 'react'

import { BiPlug, BiPlus} from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin, BsSearch, BsTelegram } from 'react-icons/bs'


const AccountsPage = () => {
  return (
    <div className='overflow-y-auto w-full'>
      <div className='flex flex-row my-5 gap-8 overflow-y-auto mx-5 lg:w-3/4'>
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

      <div className='flex flex-row my-5 gap-8 overflow-y-auto mx-5 lg:w-3/4'>
          <div className="flex flex-col gap-8 border-2 rounded-xl shadow-xl py-5 px-5 w-full overflow-x-auto">
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

            <table className="divide-y divide-gray-300">
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
                <tr className=''>
                  <td className="px-4 py-3.5 flex flex-row gap-4">
                    <BsFacebook className='place-self-center text-2xl' />
                    <h1 className="text-xl">Facebook</h1>
                  </td>
                  <td className="px-4 py-3">Wasihun Ageru</td>
                  <td className="px-4 py-3">Personal</td>
                  <td className="px-4 py-3">Connected</td>
                  <td className="px-4 py-3">2024-08-18</td>
                </tr>
                <tr className=''>
                  <td className="px-4 py-3.5 flex flex-row gap-4">
                    <BsInstagram className='place-self-center text-2xl' />
                    <h1 className="text-xl">Instagram</h1>
                  </td>
                  <td className="px-4 py-3">Wase Bruno</td>
                  <td className="px-4 py-3">Personal</td>
                  <td className="px-4 py-3">Connected</td>
                  <td className="px-4 py-3">2024-08-18</td>
                </tr>
                <tr className=''>
                <td className="px-4 py-3.5 flex flex-row gap-4">
                    <BsLinkedin className='place-self-center text-2xl' />
                    <h1 className="text-xl">LinkedIn</h1>
                  </td>
                  <td className="px-4 py-3">Wswase Company</td>
                  <td className="px-4 py-3">Channel</td>
                  <td className="px-4 py-3">Disconnected</td>
                  <td className="px-4 py-3">2024-08-15</td>
                </tr>
                <tr className=''>
                <td className="px-4 py-3.5 flex flex-row gap-4">
                    <BsTelegram className='place-self-center text-2xl' />
                    <h1 className="text-xl">Telegram</h1>
                  </td>
                  <td className="px-4 py-3">Crypto World</td>
                  <td className="px-4 py-3">Group</td>
                  <td className="px-4 py-3">Connected</td>
                  <td className="px-4 py-3">2024-08-18</td>
                </tr>
              </tbody>
            </table>

          
          </div>
      </div>
    </div>
  )
}

export default AccountsPage
