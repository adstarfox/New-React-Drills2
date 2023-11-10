import './App.css';
import {useState} from 'react'
import List from './List'
import NewTask from './NewTask'

function App() {
  const [todoList, setTodoList] = useState(['stuff', 'more stuff'])

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask setTodoList={setTodoList} todoList={todoList}/>
      <List todoList = {todoList}/>
    </div>
  );
}

export default App;
