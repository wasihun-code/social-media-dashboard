import React, { useContext } from 'react'
import AccountsContext from '../../providers/AccountsProvider'
import UserContext from '../../providers/UserProvider';

const NotificationSetting = () => {
  const formatSnakeCaseToReadable = (text) => {
    return text
      .split('_')  // Split at underscores
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
      .join(' ');  // Join words with a space
  };
  
  const user = useContext(UserContext);
  
  const notifications = user.notifications ? Object.entries(user.notifications) : [];
  console.log(notifications);

  return (
    <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
      <div className="flex flex-col gap-4 p-2 w-full">
        <h1 className="text-2xl sm:text-xl font-bold">Notification Settings</h1>
        <hr className='my-2'/>
        {
           notifications.map(([key, value]) => (
            <div key={key} className="flex flex-row gap-2">
              <input type="checkbox" className='text-2xl place-self-center mt-1' checked={value} />
              <label htmlFor='notify_email' className='font-light text-xl'>{formatSnakeCaseToReadable(key)}</label>
            </div>
           )
          )
        }
        <button type="button" className="place-self-start my-4 border-2 text-white bg-black hover:text-lg  px-4 py-2 rounded-xl">
          Save Changes
        </button>
      </div>
    </div> 
  )
}

export default NotificationSetting