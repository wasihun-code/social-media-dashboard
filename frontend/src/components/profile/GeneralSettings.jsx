import React, { useContext, useEffect, useState } from 'react'
import { BiEdit, BiUser } from 'react-icons/bi'
import UserContext from '../../providers/UserProvider'
import { Link } from 'react-router-dom';


const GeneralSettings = () => {
  const user = useContext(UserContext);

  return (
    <>
      {/**Form Row */}
      <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
        <div className="flex flex-row gap-4 p-2 w-max">
          <img src={user.profileImage} className='rounded-full w-32 h-32 text-3xl' />
          <div className="flex flex-col gap-3 place-self-center">
            <h1 className="font-bold text-lg">{user.firstName} {user.lastName}</h1>
            <h2 className="text-md">{user.bio}</h2>
            <h3 className="text-sm">{user.cityState}</h3>
          </div>
        </div>
        {/**Edit Button */}
        <Link className="flex flex-row gap-4 hover:text-white hover:bg-black border-2 mr-10 px-4 py-2 rounded-xl place-self-center ">
          <h3 className="">Edit</h3>
          <BiEdit className='text-xl place-self-center' />
        </Link>
      </div>

      {/**Personal Information*/}
      <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
        <div className="flex flex-col gap-4 p-2 w-2/3">
          <h1 className="text-md sm:text-xl font-bold">Personal Information</h1>
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">First Name</h2>
              <h1 className="font-normal font-lg">{user.firstName}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">Last Name</h2>
              <h1 className="font-normal font-lg">{user.lastName}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">Email</h2>
              <h1 className="font-normal font-lg">{user.email}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">Phone</h2>
              <h1 className="font-normal font-lg">{user.phone}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">Bio</h2>
              <h1 className="font-normal font-lg">{user.bio}</h1>
            </div>
          </div>
        </div>

        <Link className="flex flex-row gap-4  hover:text-white hover:bg-black border-2 mr-10 px-4 py-2 rounded-xl place-self-center lg:place-self-start">
          <h3 className="">Edit</h3>
          <BiEdit className='text-xl place-self-center' />
        </Link>
      </div>

      {/**Address Information*/}
      <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
        <div className="flex flex-col gap-4 p-2 w-2/3">
          <h1 className="text-xl font-bold">Address</h1>
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">Country</h2>
              <h1 className="font-normal font-lg">{user.country}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">City/State</h2>
              <h1 className="font-normal font-lg">{user.cityState}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extralight font-lg">Postal Code</h2>
              <h1 className="font-normal font-lg">{user.postalCode}</h1>
            </div>
          </div>
        </div>

        <Link className="flex flex-row gap-4 hover:text-white hover:bg-black border-2 mr-10 px-4 py-2 rounded-xl place-self-center lg:place-self-start">
          <h3 className="">Edit</h3>
          <BiEdit className='text-xl place-self-center' />
        </Link>
      </div>
    </>
  )
}

export default GeneralSettings