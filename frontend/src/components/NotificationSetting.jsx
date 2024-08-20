import React from 'react'

const NotificationSetting = () => {
  return (
    <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
      <div className="flex flex-col gap-4 p-2 w-full">
        <h1 className="text-2xl sm:text-xl font-bold">Notification Settings</h1>
        <hr className='my-2'/>
        <div className="flex flex-row gap-2">
          <input type="checkbox" className='text-2xl place-self-center mt-1' />
          <label htmlFor='notify_email' className='font-light text-xl'>Email Notification</label>
        </div>
        <div className="flex flex-row gap-2">
          <input type="checkbox" className='text-2xl place-self-center mt-1' />
          <label htmlFor='notify_email' className='font-light text-xl'>SMS Notification</label>
        </div>
        <div className="flex flex-row gap-2">
          <input type="checkbox" className='text-2xl place-self-center mt-1' />
          <label htmlFor='notify_email' className='font-light text-xl'>In App Notification</label>
        </div>

        <button type="button" className="place-self-start my-4 border-2 text-white bg-black hover:text-lg  px-4 py-2 rounded-xl">
          Save Changes
        </button>
      </div>
    </div> 
  )
}

export default NotificationSetting