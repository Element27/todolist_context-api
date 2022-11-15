import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TodoServices from '../Helper/Context/TodoContext/todo.service';
import TodoContext from '../Helper/Context/TodoContext/TodoContext';

const TodoDetails = () => {
  const { todoId } = useParams();
  const { getTodoById, loadTodoById, todo } = useContext(TodoContext)

  useEffect(() => {

    TodoServices.getTodoById(todoId).then((res) => {
      // console.log(res.id)
      loadTodoById(res)
      // getTodoById(todoId);
    })

  }, [])

  // const getTodoById = (todoId) => {
  //   const result = todos.filter((todo) => todo.id === todoId);
  //   setTodo(...result)
  // }
  // console.log(todo)
  // useEffect(() => {
  //   getTodoById(todoId)
  // }, [])

  // console.log(todo);
  return (
    <div>
      <h3>{todo?.id}</h3>
      <h3>{todo?.title}</h3>
      <h3>{todo?.isComplete ? "Done" : "Pending"}      </h3>
    </div>
  )
}

export default TodoDetails