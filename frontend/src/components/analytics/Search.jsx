import React from 'react'
import { BsSearchHeartFill } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='flex flex-row gap-6'>
      <BsSearchHeartFill  className='hidden md:block mt-2 text-2xl'/>
      <input placeholder='Search' className='border-2 border-red-700 rounded-md p-2 text-xl'/>
    </div>
  )
}

export default Search
