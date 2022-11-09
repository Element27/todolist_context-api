// in this file we create an instance of react's create context api
import { createContext } from "react";

const TodoContext = createContext();

export default TodoContext;


/* 
*1 create the context for the concept. ie create the context api for the todocontext
*2 create the type, which specifies the type of actions you wish to happen and make available for children components
*3 create the state, which contains the pure functions that will dispatch the actions that will update the data(state) and also make all the required information available to in the provider for the children components
*4 create the reducers that contains the functions that we want to execute. this functions will be dispatched from the state by the pure functions.
*/
