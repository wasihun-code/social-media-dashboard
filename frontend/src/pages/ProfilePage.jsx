import React from 'react'
import { BiEdit, BiUser } from 'react-icons/bi'
import userImg from '../assets/user.jpg'
import { CgProfile } from 'react-icons/cg'
import ProfileLinks from '../components/ProfileLinks'


const ProfilePage = () => {
  return (
    <div className='m-2 w-full overflow-y-auto  rounded-lg p-2 px-5 py-5 border-2'>
      <h1 className='text-2xl my-4 mx-4'>Account Setting</h1>
      <hr className=''/>
      <div className="flex flex-col md:gap-2 md:flex-row bg-white rounded-xl p-2 mr-2 md:mt-5">
        {/** Links */}
        <ProfileLinks />
        {/** Form */}
        <hr />
        <div className="border-l-2 w-full my-3 h-full" >
          
          <div className="flex flex-col gap-6 ml-10 my-4">
            {/**Form Row */}
            <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
              <div className="flex flex-row gap-4 p-2 w-max">
                <img src={userImg} className='rounded-full w-32 h-32 text-3xl' />
                <div className="flex flex-col gap-3 place-self-center">
                  <h1 className="font-bold text-lg">Wasihun Ageru</h1>
                  <h2 className="text-md">Team Manager</h2>
                  <h3 className="text-sm">Rajkot, Gujarat</h3>
                </div>
              </div>
              {/**Edit Button */}
              <div className="flex flex-row gap-4 border-2 mr-10 px-4 py-2 rounded-xl place-self-center ">
                <h3 className="text-gray-800">Edit</h3>
                <BiEdit className='text-xl place-self-center' />
              </div>
            </div>

            {/**Personal Information*/}
            <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
              <div className="flex flex-col gap-4 p-2 w-2/3">
                <h1 className="text-md sm:text-xl font-bold">Personal Information</h1>
                <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">First Name</h2>
                    <h1 className="font-normal font-lg">Wasihun</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Last Name</h2>
                    <h1 className="font-normal font-lg">Wasihun</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Email</h2>
                    <h1 className="font-normal font-lg">wasebruno123@gmail.com</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Phone</h2>
                    <h1 className="font-normal font-lg">+01 235 42 1234</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Bio</h2>
                    <h1 className="font-normal font-lg">Team Manager</h1>
                  </div>
                </div>
              </div>
     
              <div className="flex flex-row gap-4 border-2 mr-10 px-4 py-2 rounded-xl place-self-center lg:place-self-start">
                <h3 className="text-gray-800">Edit</h3>
                <BiEdit className='text-xl place-self-center' />
              </div>
            </div>

            {/**Address Information*/}
            <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
              <div className="flex flex-col gap-4 p-2 w-2/3">
                <h1 className="text-xl font-bold">Address</h1>
                <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Country</h2>
                    <h1 className="font-normal font-lg">Ethiopia</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">City/State</h2>
                    <h1 className="font-normal font-lg">Rajkot, Gujarat</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Postal Code</h2>
                    <h1 className="font-normal font-lg">360003</h1>
                  </div>
                </div>
              </div>
     
              <div className="flex flex-row gap-4 border-2 mr-10 px-4 py-2 rounded-xl place-self-center lg:place-self-start">
                <h3 className="text-gray-800">Edit</h3>
                <BiEdit className='text-xl place-self-center' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage