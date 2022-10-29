import TodoReducer from "./reducers/TodoReducer";
import {createStore,compose,combineReducers} from "redux";


const store =createStore(TodoReducer,compose(window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()));

export default store