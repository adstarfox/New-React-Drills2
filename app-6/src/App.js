import './App.css';
import Todo from './Todo'
import {useState} from 'react'

function App() {
  const [todoList, setTodoList] = useState(['stuff', 'more stuff'])
  const [newItem, setNewItem] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    setTodoList([...todoList, newItem])
  }

  const theList = todoList.map((todo, index) => {
    return(
      <div>
        <Todo key={index} todo={todo} />
      </div>
    )
  })


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={e => setNewItem(e.target.value)}/>
        <button>Add New Item</button>
      </form>
      {theList}
    </div>
  );
}

export default App;
