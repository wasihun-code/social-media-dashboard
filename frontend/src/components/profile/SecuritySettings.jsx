import React, { useContext, useEffect, useState } from 'react'
import { MdVisibility } from 'react-icons/md'
import { BsExclamation } from 'react-icons/bs'
import UserContext from '../../providers/UserProvider'
import { ImSpinner } from 'react-icons/im'
import { LoadingSpinner } from '../LoadingSpinner'





const SecuritySettings = () => {
  
  const [user, loading] = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);
  const [notify, setNotify] = useState({
    message: '',
    type: ''
  });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(user.two_factor_auth_enabled);

  const saveSecuritySettings = async (accountId) => {
 
    const payload = {
      password: newPassword,
      two_factor_auth_enabled: twoFactorAuthEnabled
    }

    try {
      const realAPIURL = 'http://127.0.0.1:9000/api/users/1'
      const resp = await fetch(realAPIURL, { 
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )
   
      if (!resp.ok) {
        throw new Error("Failed to save security settings");
      }

      console.log(resp.json())
      console.log("Successfully updated security settings.")
      setNotify({
        type: 'success',
        message: "! Security setting applied."
      })
      
    } catch (error) {
      console.error("Error saving Security settings:", error);
      setNotify({
        type: 'failure',
        message: "! Security setting couldnt be applied."
      })
    }
    setTimeout(() => setNotify({message: '', type: ''}), 5000)
  };
  
  const editSecuritySettings = () => {
    setDisabled(!disabled);
  }

  const toggleTwoFactorAuth = () => {
    setTwoFactorAuthEnabled(!twoFactorAuthEnabled)
  }
  return (
    <>
    {
        loading ? 
          <LoadingSpinner />
        :
        <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
          <div className="flex flex-col gap-4 p-2 w-full">
            <h1 className="text-2xl sm:text-xl font-bold">Security Settings</h1>
            <hr />
            <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-3 place-content-between gap-4'>
              <h1 className="font-normal text-xl">Change Password</h1>
              <div className="flex col-span-2 flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <input  
                    type='password' 
                    className="rounded-lg py-3 text-lg px-3 w-3/4 border-2"  
                    placeholder='Old Password' 
                    disabled={disabled}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <button type="button" className="place-self-center bg-transparent border-none cursor-pointer">
                    <MdVisibility />
                  </button>
                </div>
                <div className="flex flex-row gap-4">
                  <input  
                    type='password' 
                    className="rounded-lg py-3 text-lg px-3 w-3/4 border-2"  
                    placeholder='New Password' 
                    disabled={disabled}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button type="button" className="place-self-center bg-transparent border-none cursor-pointer">
                    <MdVisibility />
                  </button>
                </div>
                <div className='flex flex-row gap-0'>
                  <BsExclamation className='text-xl place-self-start'/>
                  <h6 className='font-light text-sm mb-4 place-self-center'>Your password must be different from your old passwords.</h6>
                </div>
                <div className="flex flex-row gap-4">
                  <input  
                    type='password' 
                    className="rounded-lg py-3 text-lg px-3 w-3/4 border-2"  
                    placeholder='Confirm New Password' 
                    disabled={disabled} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="button" className="place-self-center bg-transparent border-none cursor-pointer">
                    <MdVisibility />
                  </button>
                </div>
              </div>
            </div>
            <hr className='my-2'/>
            <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-3 place-content-between gap-4'>
              <h1 className="font-normal text-xl mb-4">Two Factor Authentication</h1>
              <div className="flex col-span-2 flex-col gap-4">   
                {
                  !disabled 
                  ? 
                    <div className="flex flex-row gap-4">
                      <input  
                        type='password' 
                        className="rounded-lg py-1.5 px-3 sm:w-3/4 border-2"  
                        placeholder='Phone number with country code' 
                        disabled={disabled}
                        onChange={(e) => setTwoFactorAuthEnabled(!twoFactorAuthEnabled)}
                      />
                      <button 
                        type="button" 
                        className="place-self-start border-2  hover:disabled:bg-white hover:disabled:text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl" 
                        disabled={disabled}
                      >
                        <h1>Get Code</h1>
                      </button>   
                    </div>
                  :
                  twoFactorAuthEnabled ? 
                    <p className='text-green-500'>Enabled. Two factor authentication protects your account' </p>
                      : 
                    <p className='text-red-500'>Please enable to enhance the security of your account.</p>

                } 
              </div>
              <button 
                type="button" 
                onClick={toggleTwoFactorAuth} 
                className="place-self-start border-2  hover:disabled:bg-white hover:disabled:text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl" 
                disabled={disabled}
              >
                <h1>{twoFactorAuthEnabled ? 'Disable' : 'Enable'} 2FA</h1>
              </button>     

            </div>
            <p 
              className={`min-h-10 h-max text-lg px-5 w-max rounded-md py-1 ${notify.type == 'success'  ? 'border-2 bg-gray-50 text-green-500' : notify.type == 'failure' ? 'border-2 bg-gray-50 text-red-500' : ''}`}>
              {notify.message || '\u00A0'} {/* Render non-breaking space if notify is empty */}
            </p>
              {
                !disabled ? 
                    <div className="flex flex-row gap-2 place-self-end">
                      <button onClick={saveSecuritySettings} type="button" className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl">
                        Save
                      </button>
                      <button onClick={editSecuritySettings} type="button" className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl">
                        Cancel
                      </button>
                    </div>
                  :
                  <button onClick={editSecuritySettings} type="button" className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl">
                    Edit
                  </button>
              }
          </div>
        </div> 
    }
    </>
  )
}

export default SecuritySettings