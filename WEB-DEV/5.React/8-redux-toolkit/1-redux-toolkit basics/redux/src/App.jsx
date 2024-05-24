import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByValue } from '../features/counter/counterSlice'
function App() {
  const dispatch = useDispatch();
  // state.store.variableName
  const count = useSelector((state) => state.counter.count);

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(incrementByValue(10))}>Increment by 10</button>
    </> 
  )
}

export default App
