import React, { useContext } from 'react'
import ContextB from './ContextB';
import {countContext} from "./ReducerContext.jsx"

function ContextA() {
  const countContext2 = useContext(countContext);
  // const { countDispatch } = useContext(countContext); explanation below

  return (
    <div>
      Component A - 
    <button onClick={()=>countContext2.countDispatch("increment")}>Increment</button>
    <button onClick={()=>countContext2.countDispatch("decrement")}>Decrement</button>
    <button onClick={()=>countContext2.countDispatch("reset")}>Reset</button>
    
    <ContextB/>
 
    </div>
  )
}

export default ContextA;


/* 
You're destructuring the context value object returned by useContext. In this case, you're extracting
 the countDispatch function from the context value object. This allows you to directly access the
  countDispatch function in your component without having to reference the entire context value 
  object. It's a way of extracting specific values from the context value object for easier access
   within your component.
*/