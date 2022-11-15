import React, { useContext, useEffect, useState } from 'react';

import Input from '../Components/Input'
import { InputButton, UpdateButton } from '../Components/InputButton'
import ListItem from '../Components/ListItem'
import TodoContext from '../Helper/Context/TodoContext/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import TodoServices from '../Helper/Context/TodoContext/todo.service';

function TodoList() {

  const [title, setTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});
  const { addTodo, todos, isAuthenticated, userLogin, editTodo, loadTodos } = useContext(TodoContext);


  const handleAddtodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      isComplete: false,
    };
    addTodo(newTodo);
    setTitle("");
  }

  const toggleEditMode = (todoObj) => {
    setEditMode(true);
    setTitle(todoObj.title)
    setTodoToEdit(todoObj)
  }

  // *Here we create the payload we want to send to the reducer by obtaining the curent value of the title and the id from the todoToEdit and pass the payload to the editTodo pure function.
  const handleUpdateTodo = () => {
    const payload = { title, id: todoToEdit.id }
    editTodo(payload)
    setEditMode(false)
    setTitle("");
  }
  useEffect(() => {
    TodoServices.getTodos().then((todos) => {
      loadTodos(todos)
    })
  }, [])

  const allTodos = todos.map((todo, index) => {
    const { title, id, isComplete } = todo
    return <ListItem
      key={index}
      title={title}
      todoId={id}
      isComplete={isComplete}
      toggleEditMode={toggleEditMode}
      todoObj={todo}
      editMode={editMode} />
  });



  return (
    <div>
      {/* {todoToEdit} */}
      {isAuthenticated ? <>

        <div className='inputsection'>
          {editMode ?
            <>
              <Input title={title} setTitle={setTitle} />
              <UpdateButton handleSubmit={handleUpdateTodo} classname="updatebutton" label='Update' />
            </>
            :
            <>
              <Input title={title} setTitle={setTitle} />
              <InputButton handleSubmit={handleAddtodo} classname="inputbutton" label='Add' />
            </>
          }</div>
        <div className='itemssection'>
          {todos.length ? allTodos : "You never tell me wetin you wan do...!"}
        </div>
      </> : <div className='_login'>
        <h2>
          Oya, login
        </h2>
        <button onClick={userLogin}>Login</button>
      </div>}
    </div>
  )
}

export default TodoList
