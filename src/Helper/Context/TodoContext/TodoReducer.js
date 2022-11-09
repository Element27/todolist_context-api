// the recuder is where we update(reduce) the state 
// switch case will check for the action that matches the type(action) sent from the todoState ad=nd excute the associated function
// State is the payload sent from the todo state, while action is the type.
// the reducer performs the action on the state ie executes the type on the payload
// const [state, dispatch] = useReducer(TodoReducer, initialState);
// the state in the const above is the state that we recieve as a prop in the todoReducer below.
// the dispatch contains the action and the type.
// the useReducer assignes the values in the state and dispatch into our todoReducer as arguements for us to read in as parameters here
// the contents of the initialState above is assigned to the state. This is so because when we spread the state, we have access to all the objects in the initial state.

import { ADD_TODO, TOGGLE_COMPLETE } from "./TodoType";

const TodoReducer = (state, action) => {
  const { todos } = state;
  const { type, payload } = action;
  switch (type) {
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
        todos: todos.filter((todo) => {
          if (todo.id === payload) {
            console.log(todo);
            const updatedTodo = {
              ...todo,
              isComplete: !todo.isComplete,
            };
            console.log(updatedTodo);
            return updatedTodo;
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  };
};

export default TodoReducer;