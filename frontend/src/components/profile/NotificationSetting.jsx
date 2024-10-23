import React, { useContext, useState } from 'react'
import UserContext from '../../providers/UserProvider';
import { ImSpinner } from 'react-icons/im';
import { BsExclamation } from 'react-icons/bs';


const NotificationSetting = () => {
  
  const [user, loading] = useContext(UserContext);
  
  const [notify, setNotify] = useState({
    message: '',
    type: ''
  });

  const [disabled, setDisabled] = useState(true);

  const [emailNotification, setEmailNotification] = useState(user.email_notification)
  const [inAppNotification, setInAppNotification] = useState(user.in_app_notification)
  const [smsNotification, setSmsNotification] = useState(user.sms_notification)


  const toggleEmailNotification = () => {
    setEmailNotification(!emailNotification);
  }

  const toggleInAppNotification = () => {
    setInAppNotification(!inAppNotification);
  }

  const toggleSmsNotification = () => {
    setSmsNotification(!smsNotification);
  }

  const editNotificationsSetting = () => {
    setDisabled(!disabled);
  }


  const saveNotificationSetting = async () => {
    const payload = {
      email_notification: emailNotification,
      in_app_notification: inAppNotification,
      sms_notification: smsNotification
    };
  
    try {
      const resp = await fetch(`http://localhost:9000/api/users/1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!resp.ok) {
        throw new Error("Failed to save notification settings");
      }
      console.log("Notification settings saved successfully");
      setDisabled(true);
      setNotify({
        type: 'success',
        message: "! Notification setting applied."
      })
      
    } catch (error) {
      console.error("Error saving notification settings:", error);
      setNotify({
        type: 'failure',
        message: "! Notification setting couldnt be applied."
      })
    }
    setTimeout(() => setNotify({message: '', type: ''}), 5000)
  };
  

   
  return (
    <>
    {
      loading ?
        <div className="flex flex-row w-full">
          <ImSpinner className='text-8xl w-full' /> 
        </div>
        :
      <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
        <div className="flex flex-col gap-4 p-2 w-full">
          <h1 className="text-2xl sm:text-xl font-bold">Notification Settings</h1>
          <hr className='my-2'/>

          <div className="flex flex-row gap-2">
            <input 
              type="checkbox" 
              className='text-2xl place-self-center mt-1' 
              onChange={toggleEmailNotification}
              checked={emailNotification}
              disabled={disabled} 
            />
            <label htmlFor='notify_email' className='font-light text-xl'>Email Notifications</label>
          </div>

          <div className="flex flex-row gap-2">
            <input 
              type="checkbox" 
              className='text-2xl place-self-center mt-1' 
              onChange={toggleInAppNotification}
              checked={inAppNotification}
              disabled={disabled} 
            />
            <label htmlFor='notify_email' className='font-light text-xl'>In App Notifications</label>
          </div>

          <div className="flex flex-row gap-2">
            <input 
              type="checkbox" 
              className='text-2xl place-self-center mt-1' 
              onChange={toggleSmsNotification}
              disabled={disabled} 
              checked={smsNotification}
            />
            <label htmlFor='notify_email' className='font-light text-xl'>SMS Notifications</label>
          </div>
          
          <p 
            className={`min-h-10 h-max text-lg px-5 w-max rounded-md py-1 ${notify.type == 'success'  ? 'border-2 bg-gray-50 text-green-500' : notify.type == 'failure' ? 'border-2 bg-gray-50 text-red-500' : ''}`}>
            {notify.message || '\u00A0'} {/* Render non-breaking space if notify is empty */}
          </p>


            {      
              !disabled ? 
                <div className="flex flex-row gap-2 place-self-end">
                  <button onClick={saveNotificationSetting} type="button" className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl">
                    Save
                  </button>
                  <button onClick={editNotificationsSetting} type="button" className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl">
                    Cancel
                  </button>
                </div>
              :
              <button onClick={editNotificationsSetting} type="button" className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl">
                Edit
              </button>
            }
        </div>
      </div> 
    }
    </>
  )
}

export default NotificationSetting