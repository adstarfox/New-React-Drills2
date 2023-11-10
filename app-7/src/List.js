import Todo from './Todo'

const List = ({todoList}) => {
    const theList = todoList.map((todo, index) => {
        return (
            <div>
                <Todo key={index} todo={todo}/>
            </div>
        )
    })

    return (
        <>
            {theList}
        </>        
    )
}

export default List