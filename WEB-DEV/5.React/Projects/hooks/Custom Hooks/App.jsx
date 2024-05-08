import React from 'react'
import useCounter from './useCounter'

function App() {
  const [value, Increment, Decrement, Reset] = useCounter();
  return (
    <div>
       <h1>Count : {value}</h1>
       <button onClick={()=>Increment()}>Increment</button>
       <button onClick={()=>Decrement()}>Decrement</button>
       <button onClick={()=>Reset()}>Reset</button>
    </div>
  )
}

export default App


