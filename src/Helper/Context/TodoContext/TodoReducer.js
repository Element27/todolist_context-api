// the recuder is where we update(reduce) the state 
// switch case will check for the action that matches the type(action) sent from the todoState ad=nd excute the associated function
// State is the payload sent from the todo state, while action is the type.
// the reducer performs the action on the state ie executes the type on the payload
// const [state, dispatch] = useReducer(TodoReducer, initialState);
// the state in the const above is the state that we recieve as a prop in the todoReducer below.
// the dispatch contains the action and the type.
// the useReducer assignes the values in the state and dispatch into our todoReducer as arguements for us to read in as parameters here
// the contents of the initialState above is assigned to the state. This is so because when we spread the state, we have access to all the objects in the initial state.

import { ADD_TODO, TOGGLE_COMPLETE, LOGIN_USER, DELETE_TODO, EDIT_TODO, GET_TODO_BY_ID } from "./TodoType";

const TodoReducer = (state, action) => {
  const { todos } = state;
  const { type, payload } = action;
  switch (type) {

    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };

    case ADD_TODO:
      return {
        // we first spread the state so as to have access to all the context being provided from the TodoState.
        ...state,
        // then we spread the todos in the state, and add a new todo(action.payload) to the todos (state.todos)
        todos: [...todos, payload]
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: todos.map((todo) => {
          if (todo.id === payload) {
            const updatedTodo = {
              ...todo,
              isComplete: !todo.isComplete,
            };
            return updatedTodo;
          }

          return todo;
        }),
      };

    case EDIT_TODO:
      // *1 first we get the todo we want to edit into updatedTodo (The payload is passed from the handleUpdateTodo in the TodoList)
      // *2 then we return the value into  updatedTodos
      // *3 and pass the updatedTodos into the todos object
      return {
        ...state,
        todos: todos.map((todo) => todo.id === payload.id ? { ...todo, title: payload.title } : todo)
      }
    // *** The following lines of code is a breakdown of the above one liner *** //
    // const updatedTodo = payload;
    // const updateTodos = todos.map((todo) => {
    //   if (todo.id === updatedTodo.id) {
    //     return updatedTodo;
    //   }
    //   return todo;
    // })
    // return {
    //   ...state,
    //   todos: updateTodos
    // }

    // ***************************** Ends Here ******************************* //


    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: todos.find((todo) => todo.id === payload)
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== payload)
      }

    default:
      return state;
  };
};

export default TodoReducer;