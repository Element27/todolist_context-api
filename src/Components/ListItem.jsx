import { useContext } from 'react';
import TodoContext from '../Helper/Context/TodoContext/TodoContext';
import ActionButton from './ActionButton'
import { Link } from 'react-router-dom'


const ListItem = ({ title, todoId, isComplete, todoObj, toggleEditMode, editMode }) => {
  const { toggleComplete, deleteTodo } = useContext(TodoContext);

  const toggleIsComplete = (id) => {
    toggleComplete(id);
  }


  return (
    <div className={isComplete ? "completed" : 'listitem'}>
      <ActionButton
        title={isComplete ? "❌" : "✅"}
        classname="done"
        func={() => toggleIsComplete(todoId)}
      />
      <p> {title}</p>
      <ActionButton title="✍🏽" classname="edit" func={() => toggleEditMode(todoObj)} />
      <Link to={`${todoId}`}>
        <ActionButton title="📖" classname="view" />
      </Link>
      <ActionButton title="🚮" classname="delete" func={() => deleteTodo(todoId)} />
    </div>
  )
}

export default ListItem
