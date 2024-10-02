import React, { useContext } from 'react'
import AccountsContext from '../../providers/AccountsProvider'
import { FaFacebook } from 'react-icons/fa'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AccountsSetting = () => {
  const [accounts, loading] = useContext(AccountsContext)

  return (
    <>
      <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
        <div className="flex flex-col gap-4 p-2 w-full">
          <h1 className="text-2xl sm:text-xl font-bold">Accounts Settings</h1>
          <hr className='my-2' />
          {accounts.map((account) => (
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
                <Link className='flex flex-row gap-4 px-5  py-2 border-2 rounded-md  text-red-400 hover:bg-red-700 hover:text-white hover:text-md'>
                  <BiTrash className='place-self-center'/>
                  <p className='place-self-center'>Delete</p>
                </Link>
                <Link className='flex flex-row gap-4 px-5 py-2  border-2 rounded-md  text-black hover:bg-black hover:text-white hover:text-md'>
                  <BiEdit className='place-self-center'/>
                  <p className='place-self-center'>Edit</p>
                </Link>
              </div>
            </div>        
          ))}
          
          <hr className='my-2'/>

          <button type="button" className="place-self-end border-2 text-white bg-black hover:text-lg  px-4 py-2 rounded-xl">
            <>Save Changes</>
          </button>
        </div>
      </div> 
    </>
  )
}

export default AccountsSetting