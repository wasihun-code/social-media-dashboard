import React from 'react'
import { BsExclamation } from 'react-icons/bs'
import { MdVisibility } from 'react-icons/md'

const AccountsSetting = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
        <div className="flex flex-col gap-4 p-2 w-full">
          <h1 className="text-2xl sm:text-xl font-bold">Accounts Settings</h1>
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