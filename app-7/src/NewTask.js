import {useState} from 'react'

const NewTask = ({setTodoList, todoList}) => {
    const [newItem, setNewItem] = useState('Add new to-do item')

    const submitHandler = (e) => {
        e.preventDefault()
        setTodoList([...todoList, newItem])
        setNewItem('Add new to-do item')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input placeholder={newItem} type='text' onChange={e => setNewItem(e.target.value)}/>
                <button>add</button>
            </form>
        </div>
    )
} 

export default NewTask