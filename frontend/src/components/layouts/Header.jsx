import React from 'react'
import HeaderButton from './HeaderButton'
import  logo from '../../assets/logo4.png'
import { Link } from 'react-router-dom';

const Header = () => {

  const arr = [
    {
      'id': 1,
      'label': 'Dashboard',
      'to': '/'
    },
    {
      'id': 2,
      'label': 'Accounts',
      'to': 'accounts'
    },
    {
      'id': 3,
     'label':  'Profile',
     'to': 'profile'
    }
  ];

  return (
    <div className='border-b-4 bg-stone-100 w-full flex flex-col'>
      <div className='grid grid-rows-1 grid-cols-3 gap-4 md:gap-0 w-11/12 place-self-center items-center my-2'>
        <img src={logo} className='w-36 col-span-3 md:col-span-1 py-3' />

        {/** Links */}
        <div className="col-span-2 md:col-span-1 place-self-center flex flex-row w-full">
            <div className="px-2 flex flex-col  sm:flex-row gap-2 overflow-x-auto w-max items-center">
              {
                arr.map((obj)=> (
                  <Link 
                    key={obj.id} 
                    to={obj.to}
                    className='hover:rounded-lg hover:bg-cyan-950 hover:text-white rounded-sm \
                              transition-all duration-300 ease-in-out text-center '
                    >
                    <HeaderButton label={obj.label}/>
                  </Link>
                ))
              }
            </div>  
        </div>
       
        {/** Logout Button */}
        <Link 
          to="/"
          className='place-self-center w-max my-2 hover:rounded-lg hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
          <HeaderButton label="Logout"/>
        </Link>
        

      </div>
    </div>
  )
}

export default Header
