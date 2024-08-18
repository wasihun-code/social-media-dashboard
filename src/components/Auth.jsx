import React from 'react'
import logo from '../assets/logo3.png'
import { BsGoogle } from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'
import authSide from '../assets/authSideImage2.png'
import AuthSidebar from './AuthSidebar'
import Login from './Login'
import SignUp from './SignUp'


const Auth = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2  w-screen'>
      <SignUp />
      {/* <Login /> */}
      <AuthSidebar/>
    </div>
  )
}

export default Auth
