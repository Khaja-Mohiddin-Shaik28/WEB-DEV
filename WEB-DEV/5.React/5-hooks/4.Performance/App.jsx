import React from 'react'
import Memo from './Memo'
function App() {
  return (
    <div>
       <Memo/> 
    </div>
  )
}

export default App



/* 

Todos Component:
It receives two props: todos (an array of todo items) and addTodo (a function to add a new todo).
Inside the component, React.memo is used to memoize the component. This means that the component will only re-render if its props (todos or addTodo) change.
The list of todo items is rendered using the map function. Each todo item is wrapped in a <li> element, and a unique key is assigned to each <li> using Math.random(). It's generally better to use stable IDs instead of Math.random() for keys.
Below the list, there's a button labeled "Add Todo", which triggers the addTodo function when clicked.
Memo Component:
It maintains a local state count using the useState hook to keep track of a count value.
Another local state todos is maintained to keep track of the todo items.
The addTodo function is defined using useCallback to memoize the function. This means that the function will only be re-created if its dependencies (in this case, the todos state) change.
There's an incrementCount function that increments the count state when a button labeled "Increment" is clicked.
The <Todos> component is rendered with todos and addTodo props.



Referential Integrity
*/