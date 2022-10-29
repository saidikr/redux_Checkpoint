import React from 'react'
import { useDispatch } from 'react-redux'

export const SearchBar = () => {
  const dispatch=useDispatch();
    return (
    <>
        <div className="mb-6">
        <label  className="block mb-2 font-semibold text-2xl text-gray-900 dark:text-gray-300 text-center">Filter Task Here</label>
        <div className='flex mx-28'>
        <input type="text" onChange={(e)=>dispatch({
            type:"filter",
            payload:e.target.value
            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your Task name" required />
        </div>
        </div>

    </>
  )
}
