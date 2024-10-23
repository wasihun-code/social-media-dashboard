import React, { useContext } from 'react'
import AccountsContext from '../../providers/AccountsProvider'
import { FaFacebook } from 'react-icons/fa'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { ImSpinner } from 'react-icons/im'
import { LoadingSpinner } from '../LoadingSpinner'

const AccountsSetting = () => {
  const [accounts, loading] = useContext(AccountsContext)

  return (
    <>
      {
        loading ? 
          <LoadingSpinner />
          :
          <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
            <div className="flex flex-col gap-4 p-2 w-full">
              <h1 className="text-2xl sm:text-xl font-bold">Accounts Settings</h1>
              <hr className='my-2' />
              {    
                accounts && accounts.length > 0 ?
                  accounts.map((account) => (
                    <div key={account.id} className='flex flex-row place-content-between p-0 px-4 w-full'>
                      {/** Account */}
                      <div className='flex flex-row gap-4'>
                          <div className='flex flex-row gap-4 px-4 py-2'>
                            <FaFacebook className='place-self-center'/>
                            <p className='place-self-center text-xl'>{account.name}</p>
                          </div>
                      </div>
                      {/** Accounts -> Setting Buttons */}
                      <div className='flex flex-row gap-4'>
                        <Link className='flex flex-row gap-4 px-5 py-2 border-2 rounded-lg border-gray-300  text-red-400 hover:bg-red-700 hover:text-white hover:text-md'>
                          <BiTrash className='place-self-center'/>
                          <p className='place-self-center'>Delete</p>
                        </Link>
                        <Link className='flex flex-row gap-4 px-5 py-2 border-2 rounded-lg border-gray-300  text-black hover:bg-black hover:text-white hover:text-md'>
                          <BiEdit className='place-self-center'/>
                          <p className='place-self-center'>Edit</p>
                        </Link>
                      </div>
                
                    </div>     
                  ))
                :
                <div className=''>
                  No accounts. Connect one or more social media accounts to view them here.
                </div>
              } 
              
              <hr className='my-2'/>
            </div>
          </div> 
      }
    </>
  )
}

export default AccountsSetting