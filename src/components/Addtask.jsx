import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

export const Addtask = () => {
  const [textAdded, setTextAdded] = useState("");
  const dispatch=useDispatch();
  return (
    <>
    <div className="mb-6">
        <label  className="block mb-2 font-semibold text-2xl text-gray-900 dark:text-gray-300 text-center">Add Task Here</label>
        <div className='flex mx-28'>
        <input type="text" onChange={(e)=>setTextAdded(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your Task name" required />
        <button onClick={(e)=>
            dispatch({
            type:"add",
            payload:textAdded,
            })}
             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </div>
    </div>

    </>
  )
}
/*onClick={()=>
            dispatch({
            type:"chtitle",
            payload:(Math.random()+1).toString(36).substring(2)
            })}*/