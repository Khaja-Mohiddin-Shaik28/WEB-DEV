import React from 'react'

function Todos({todos, addTodo}) {
    console.log("Child Component")
  return (
    <div>
    <ul>
    {todos.map(todo=>(
        
            <li key={Math.random()}>{todo}</li>
        ))}
            </ul>
    <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default React.memo(Todos)
