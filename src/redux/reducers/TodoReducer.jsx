import {TodoItems} from '../../data/index'

const initialState={
    todoList:TodoItems
};

 const filterfunc=(text)=>{
    return initialState.todoList.filter((element)=>element.name.search(text))
    }


const TodoReducer=(state=initialState,action)=>{
    
    const {type,payload}=action;
    switch(type){
        case"add":
        return{...state,todoList:[...state.todoList,{id:new Date().getTime(),description:payload,isDone:false}]};
        case"done":
        const newTodo=state.todoList.map((item)=>{
        if(item.id===payload) return {...item,isDone:true}
        else{return item}
        })

        return{...state,todoList:newTodo};
        
        case"filter":
        if(payload==="")return{...state,todoList:TodoItems};
        else {
        const newTodo2=filterfunc(payload)
        return{...state,todoList:newTodo2};
        }
        
        default: return state
}}

export default TodoReducer;