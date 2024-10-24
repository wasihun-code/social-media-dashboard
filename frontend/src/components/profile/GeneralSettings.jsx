import React, { useContext, useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import UserContext from '../../providers/UserProvider';
import { ImSpinner } from 'react-icons/im';

const GeneralSettings = () => {
  const [user, loading] = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);

  // Controlled form state
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    email: '',
    phone: '',
    cityState: '',
    postalCode: '',
    country: '',
  });

  const [notify, setNotify] = useState({ message: '', type: '' });

  useEffect(() => {
    if (user) {
      setFormValues({
        firstName: user.first_name,
        lastName: user.last_name,
        bio: user.bio,
        email: user.email,
        phone: user.phone,
        cityState: user.city_state,
        postalCode: user.postal_code,
        country: user.country,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const saveGeneralSetting = async () => {
    const payload = {
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      bio: formValues.bio,
      email: formValues.email,
      phone: formValues.phone,
      city_state: formValues.cityState,
      postal_code: formValues.postalCode,
      country: formValues.country,
    };

    try {
      const resp = await fetch(`http://localhost:9000/api/users/1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) throw new Error('Failed to save general settings');
      setDisabled(true);
      setNotify({ type: 'success', message: 'General settings saved successfully!' });

      setTimeout(() => {
        window.location.reload();
      }, 2000); // 2-second delay for better UX
  
    } catch (error) {
      setNotify({ type: 'failure', message: 'Failed to save general settings.' });
    }
  };

  const editGeneralsSetting = () => {
    setDisabled(false);
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-row w-full">
          <ImSpinner className="text-8xl w-full" />
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row justify-between border rounded-xl p-4 w-full md:w-11/12">
            <div className="flex flex-row gap-4 p-2 w-max">
              <img src={user.profile_image} className="rounded-full w-32 h-32" alt="Profile" />
              <div className="flex flex-col gap-2 self-center">
                <h1 className="text-xl font-bold">
                  {user.first_name} {user.last_name}
                </h1>
                <div className="flex flex-row gap-2">
                  <h1>{user.bio}</h1>
                  <h1>{user.city_state}</h1>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col lg:flex-row justify-between border rounded-xl p-4 w-full md:w-11/12">
            <div className="flex flex-col gap-4 p-2 w-2/3">
              <h1 className="text-lg font-bold">Personal Information</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <InputField
                  label="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formValues.email}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Phone"
                  name="phone"
                  value={formValues.phone}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Bio"
                  name="bio"
                  value={formValues.bio}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between border rounded-xl p-4 w-full md:w-11/12">
            <div className="flex flex-col gap-4 p-2 w-2/3">
              <h1 className="text-lg font-bold">Address</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <InputField
                  label="Country"
                  name="country"
                  value={formValues.country}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
                <InputField
                  label="City/State"
                  name="cityState"
                  value={formValues.cityState}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Postal Code"
                  name="postalCode"
                  value={formValues.postalCode}
                  disabled={disabled}
                  onChange={handleInputChange}
                />
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-11/12">
            <p
              className={`min-h-10 h-max text-lg px-5 w-max rounded-md py-1 ${
                notify.type === 'success'
                  ? 'border-2 bg-gray-50 text-green-500'
                  : notify.type === 'failure'
                  ? 'border-2 bg-gray-50 text-red-500'
                  : 'hidden'
              }`}
            >
              {notify.message || '\u00A0'}
            </p>
            {
              disabled ? (
                <button
                  onClick={editGeneralsSetting}
                  className="border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl"
                >
                  Edit
                </button>
                ) : (
                <div className='flex flex-row gap-8'>
                  <button
                    onClick={saveGeneralSetting}
                    className="border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setDisabled(true)}
                    className="border-2 text-black hover:text-white hover:bg-black px-4 py-2 rounded-xl"
                  >
                    Cancel
                  </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

const InputField = ({ label, name, value, onChange, disabled }) => (
  <div className="flex flex-col gap-2">
    <h2 className="">{label}</h2>
    <input
      name={name}
      className="text-sm text-gray-500 disabled:border-none border-2 border-gray-300 rounded-xl px-4"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={label}
    />
  </div>
);

export default GeneralSettings;
