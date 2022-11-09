import { useContext } from 'react';
import TodoContext from '../Helper/Context/TodoContext/TodoContext';
import ActionButton from './ActionButton'


const ListItem = ({ title, editId }) => {

  const { toggleComplete, todos } = useContext(TodoContext);

  const toggleIsComplete = (id) => {
    toggleComplete(id);
    console.log(todos)
  }


  return (
    <div className='listitem'>
      <ActionButton
        title="✅"
        classname="done"
        editId={editId}
        func={() => toggleIsComplete(editId)}
      />
      <p> {title}</p>
      <ActionButton title="✍🏽" classname="edit" />
      <ActionButton title="📖" classname="view" />
      <ActionButton title="🚮" classname="delete" />
    </div>
  )
}

export default ListItem