import React, { useContext, useEffect, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { BsExclamation } from 'react-icons/bs';
import UserContext from '../../providers/UserProvider';
import { ImSpinner } from 'react-icons/im';
import { LoadingSpinner } from '../LoadingSpinner';

const SecuritySettings = () => {
  const [user, loading] = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);
  const [notify, setNotify] = useState({ message: '', type: '' });
  const [formValues, setFormValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuthEnabled: false,
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  // Separate state for the phone number
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (user) {
      setFormValues((prev) => ({
        ...prev,
        twoFactorAuthEnabled: user.two_factor_auth_enabled,
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);  // Update only the phone number state
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const validatePasswords = () => {
    const { newPassword, confirmPassword } = formValues;
    if (newPassword !== confirmPassword) {
      setNotify({ type: 'failure', message: 'Passwords do not match.' });
      return false;
    }
    return true;
  };

  const saveSecuritySettings = async () => {
    if (!validatePasswords()) return;

    const payload = {
      password: formValues.newPassword,
      two_factor_auth_enabled: formValues.twoFactorAuthEnabled,
    };

    try {
      const realAPIURL = 'http://127.0.0.1:9000/api/users/1'; // Update with actual API endpoint
      const resp = await fetch(realAPIURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) throw new Error('Failed to save security settings');

      setNotify({ type: 'success', message: 'Security settings updated successfully!' });
    } catch (error) {
      setNotify({ type: 'failure', message: 'Error saving security settings.' });
    }

    setDisabled(true);
    setTimeout(() => setNotify({ message: '', type: '' }), 5000);
  };

  const editSecuritySettings = () => {
    setDisabled(false);
  };

  const toggleTwoFactorAuth = () => {
    setFormValues((prev) => ({
      ...prev,
      twoFactorAuthEnabled: !prev.twoFactorAuthEnabled, // Only toggle when the button is clicked
    }));
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col lg:flex-row rounded-xl p-2 border-2 w-full md:w-11/12">
          <div className="flex flex-col gap-4 p-2 w-full">
            <h1 className="text-2xl sm:text-xl font-bold">Security Settings</h1>
            <hr />
            <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 place-content-between gap-4">
              <h1 className="font-normal text-xl">Change Password</h1>
              <div className="flex col-span-2 flex-col gap-4">
                {/* Old Password */}
                <PasswordInput
                  label="Old Password"
                  name="oldPassword"
                  value={formValues.oldPassword}
                  showPassword={showPassword.old}
                  onChange={handleInputChange}
                  onToggle={() => togglePasswordVisibility('old')}
                  disabled={disabled}
                />
                {/* New Password */}
                <PasswordInput
                  label="New Password"
                  name="newPassword"
                  value={formValues.newPassword}
                  showPassword={showPassword.new}
                  onChange={handleInputChange}
                  onToggle={() => togglePasswordVisibility('new')}
                  disabled={disabled}
                />
                <div className="flex flex-row gap-0">
                  <BsExclamation className="text-xl place-self-start" />
                  <h6 className="font-light text-sm mb-4 place-self-center">
                    Your password must be different from your old passwords.
                  </h6>
                </div>
                {/* Confirm Password */}
                <PasswordInput
                  label="Confirm New Password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  showPassword={showPassword.confirm}
                  onChange={handleInputChange}
                  onToggle={() => togglePasswordVisibility('confirm')}
                  disabled={disabled}
                />
              </div>
            </div>

            <hr className="my-2" />
            {/* Two Factor Authentication */}
            <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 place-content-between gap-4">
              <h1 className="font-normal text-xl mb-4">Two Factor Authentication</h1>
              <div className="flex col-span-2 flex-col gap-4">
                {!disabled ? (
                  <input
                    type="text"
                    className="rounded-lg py-1.5 px-3 sm:w-3/4 border-2"
                    placeholder="Phone number with country code"
                    value={phoneNumber}  // Bind the phone number input to the phoneNumber state
                    onChange={handlePhoneNumberChange}  // Handle phone number change separately
                  />
                ) : formValues.twoFactorAuthEnabled ? (
                  <p className="text-green-500">Enabled. Two-factor authentication is protecting your account.</p>
                ) : (
                  <p className="text-red-500">Please enable 2FA to enhance the security of your account.</p>
                )}
              </div>
              <button
                onClick={toggleTwoFactorAuth}
                className="place-self-start border-2 px-4 py-2 rounded-xl hover:text-white hover:bg-black"
                disabled={disabled}
              >
                {formValues.twoFactorAuthEnabled ? 'Disable' : 'Enable'} 2FA
              </button>
            </div>

            {/* Notification message */}
            <p
              className={`min-h-10 h-max text-lg px-5 w-max rounded-md py-1 ${
                notify.type === 'success'
                  ? 'border-2 bg-gray-50 text-green-500'
                  : notify.type === 'failure'
                  ? 'border-2 bg-gray-50 text-red-500'
                  : ''
              }`}
            >
              {notify.message || '\u00A0'}
            </p>

            {/* Action buttons */}
            {!disabled ? (
              <div className="flex flex-row gap-2 place-self-end">
                <button
                  onClick={saveSecuritySettings}
                  className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl"
                >
                  Save
                </button>
                <button
                  onClick={() => setDisabled(true)}
                  className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={editSecuritySettings}
                className="place-self-end border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Password Input Field with Visibility Toggle
const PasswordInput = ({ label, name, value, showPassword, onChange, onToggle, disabled }) => (
  <div className="flex flex-row gap-4">
    <input
      type={showPassword ? 'text' : 'password'}
      name={name}
      value={value}
      className="rounded-lg py-3 text-lg px-3 w-3/4 border-2"
      placeholder={label}
      onChange={onChange}
      disabled={disabled}
    />
    <button
      type="button"
      className="place-self-center bg-transparent"
      onClick={onToggle}
      disabled={disabled}
    >
      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
    </button>
  </div>
);

export default SecuritySettings;
