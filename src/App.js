import { Routes, Route } from 'react-router-dom'
import './App.css';
import TodoDetails from './Pages/TodoDetails';
import TodoList from './Pages/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path=':todoId' element={<TodoDetails />} />
      </Routes>
    </div>
  );
};

export default App;
