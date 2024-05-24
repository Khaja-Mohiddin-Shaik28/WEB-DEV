import React, { useContext } from 'react'

import {countContext} from "./ReducerContext.jsx"

function ContextC() {
  const countContext2 = useContext(countContext);

  return (
    <div>
      Component C - 
    <button onClick={()=>countContext2.countDispatch("increment")}>Increment</button>
    <button onClick={()=>countContext2.countDispatch("decrement")}>Decrement</button>
    <button onClick={()=>countContext2.countDispatch("reset")}>Reset</button>
    
      
    </div>
  )
}

export default ContextC