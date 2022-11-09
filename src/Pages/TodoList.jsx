import React, { useContext, useState } from 'react';

import Input from '../Components/Input'
import InputButton from '../Components/InputButton'
import ListItem from '../Components/ListItem'
import TodoContext from '../Helper/Context/TodoContext/TodoContext';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {

  const [title, setTitle] = useState("");
  const { addTodo, todos } = useContext(TodoContext);

  const handleSubmit = () => {

    const newTodo = {
      id: uuidv4(),
      title: title,
      isComplete: false,
    };

    console.log(newTodo);
    addTodo(newTodo);
  }



  const allTodos = todos.map(({ title, id, isComplete }, index) => {
    return <ListItem title={title} key={index} editId={id} />
  });

  return (
    <div>
      <div className='inputsection'>
        <Input title={title} setTitle={setTitle} />
        <InputButton handleSubmit={handleSubmit} />
      </div>
      <div className='itemssection'>
        {todos.length ? allTodos : <ListItem title="Add To do" />}
      </div>
    </div>
  )
}

export default TodoList