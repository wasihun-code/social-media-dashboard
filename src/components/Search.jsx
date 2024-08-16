import React from 'react'
import { BsSearchHeartFill } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='flex flex-row gap-6'>
      <BsSearchHeartFill   className='mt-2 text-2xl'/>
      <input placeholder='Search' className='border-2 border-red-700 rounded-md pl-6 py-2 text-xl'/>
    </div>
  )
}

export default Search
