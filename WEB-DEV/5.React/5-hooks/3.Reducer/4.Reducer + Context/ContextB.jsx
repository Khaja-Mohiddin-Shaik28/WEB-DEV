import React, { useContext } from 'react'
import ContextC from './ContextC'
import {countContext} from "./ReducerContext.jsx"

function ContextB() {
  const countContext2 = useContext(countContext);

  return (
    <div>
      Component B - 
    <button onClick={()=>countContext2.countDispatch("increment")}>Increment</button>
    <button onClick={()=>countContext2.countDispatch("decrement")}>Decrement</button>
    <button onClick={()=>countContext2.countDispatch("reset")}>Reset</button>
    
    <ContextC/>
    </div>
  )
}

export default ContextB