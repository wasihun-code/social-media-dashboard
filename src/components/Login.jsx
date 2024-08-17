import React from 'react'
import logo from '../assets/logo3.png'
import { BsGoogle } from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'


const Login = () => {
  return (
<div className='flex flex-col place-content-around h-full'> 
        <img src={logo} className='mt-0 place-self-start ml-4 px-2 w-1/4' />
        <div className='flex flex-col w-max p-8 place-content-between place-self-center px-24'>
          {/** Greeting Wrapper */}
          <div className='flex flex-col gap-2 mb-10 w-max'>
            <h1 className='text-3xl'>Welcome back Olivia</h1>
            <p>Sign in to continue using your favorite app</p>
          </div>

          {/** API Login */}
          <div className='flex flex-row place-content-center w-full border-2 gap-2 mb-10 p-3 px-24'>
            <BsGoogle className='text-lg place-self-center'/>
            <a href='#' className='text-lg'>Sign in with Google</a>
          </div>

          {/** Fields wrapper */}
          <div className='flex flex-col gap-8 mb-4'>
            <input placeholder='Email' className='border-b-2 border-gray-400 p-2 px-4' />
            <input placeholder='Email' className='border-b-2 border-gray-400 p-2 px-4' />
          </div>
          
          {/** Misc(forgot password) Wrapper */}
          <div className='flex flex-row w-max place-content-between gap-8 mb-10'>
            <div className="flex flex-row gap-2">
              <MdCheckBox className='text-xl' />
              <h4 className='text-xs'>Remember for 30 days</h4>
            </div>
            <a className='text-xs'>Forgot Password</a>
          </div>

          {/** API Login */}
          <div className='flex flex-row place-content-center w-full rounded-xl bg-black text-white gap-2 mb-10 p-3'>
            <a href='#' className='text-xl'>LOGIN</a>
          </div>

          <h1 className='text-md text-center'>Don't have an account? <span className='font-bold'>Sign Up</span></h1>

        </div>
      </div>
  )
}

export default Login
