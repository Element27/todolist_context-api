// this is where all the initial state and all pure functions go
// pure functions are functions that do not alter the data passed into them
// In this context, pure functions are used to dipatch types(action), and the data that this types(actions) will work on.
// Pure functions are usually called by the UI. The dispatched actions are sent to the reducers. the reducer is where the data can be and will be updated.
// it connects the state(initial) to the actions(reducers) that you want to perform.
// The state in the file is an higher order component that will wrap around other components. It serves as "provider" and provides all the props (value) for components that it wraps around(children). in this case, The props are the state and action;

import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO_BY_ID, LOAD_TODOS, LOAD_TODO_BY_ID, LOGIN_USER, TOGGLE_COMPLETE } from './TodoType';

export const TodoState = ({ children }) => {

  const initialState = {
    todos: [],
    todo: {},
    isAuthenticated: true,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // pure function that will dispatch actions to the reducer
  const userLogin = () => {
    dispatch({ type: LOGIN_USER })
  }
  const loadTodos = (todosArray) => {
    dispatch({ type: LOAD_TODOS, payload: todosArray })
  }

  const addTodo = (todoObj) => {
    dispatch({ type: ADD_TODO, payload: todoObj })
  }
  const toggleComplete = (todoId) => {
    dispatch({ type: TOGGLE_COMPLETE, payload: todoId })
  }

  const deleteTodo = (todoId) => {
    dispatch({ type: DELETE_TODO, payload: todoId })
  }

  const editTodo = (newTodoObj) => {
    dispatch({ type: EDIT_TODO, payload: newTodoObj })
  }

  const getTodoById = (todoId) => {
    dispatch({ type: GET_TODO_BY_ID, payload: todoId })
  }
  const loadTodoById = (todoId) => {
    dispatch({ type: LOAD_TODO_BY_ID, payload: todoId })
  }


  return (
    <TodoContext.Provider
      value={{
        userLogin,
        loadTodos,
        isAuthenticated: state.isAuthenticated,
        todos: state.todos,
        addTodo,
        toggleComplete,
        editTodo,
        deleteTodo,
        getTodoById,
        loadTodoById,
        ...state,

      }}>

      {children}</TodoContext.Provider>
  )
}
