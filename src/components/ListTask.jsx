import React from 'react'
import { Task } from './Task'
import { TodoItems } from '../data'
import { useSelector } from 'react-redux';

export const ListTask = () => {
  const todo=useSelector((state)=>state.todoList);
  console.log(todo)
  return (
    <>
    <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-center ">Task List </h1>
    
    {todo&& todo.map((el)=>(

    <Task key={el.id} id={el.id} description={el.description} isDone={el.isDone} />
    ))}
    
    </>
  )
}
