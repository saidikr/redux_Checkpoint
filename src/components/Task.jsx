import React from 'react'
import { useDispatch } from 'react-redux'



export const Task = ({id,description,isDone}) => {
  const dispatch=useDispatch()
  return (
   
<div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
    <p className={isDone?" mb-5 text-base text-green-500 sm:text-lg dark:text-green-400 inline":" font-bold mb-5 text-base sm:text-lg dark:text-green-400 inline"}>{description}</p>
    <div className="mt-4 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <button  onClick={()=>
            dispatch({
            type:"done",
            payload:id
            })} 
             className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Done</button>
        <button onClick={()=>
            dispatch({
            type:"remove",
            payload:id
            })} 
                className="  text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">remove {id}</button>
    </div>
</div>

  )
}


/*onClick={()=>
            dispatch({
            type:"chtitle",
            payload:(Math.random()+1).toString(36).substring(2)
            })}*/