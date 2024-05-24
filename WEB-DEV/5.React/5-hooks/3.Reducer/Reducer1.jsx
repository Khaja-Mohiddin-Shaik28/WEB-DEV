import React, { useCallback, useReducer } from 'react'
let initialState = 0;


const reducer = (state, action)=>{
    
    switch(action){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;

    }
}

function Reducer1() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
    <p>{count}</p>
    <button onClick={()=>dispatch("increment")}>Increment</button>
    <button onClick={()=>dispatch("decrement")}>Decrement</button>
    <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Reducer1;

/* 
 Explicitly using useCallback to memoize the reducer function in this scenario is unnecessary
 because useReducer already takes care of its memoization internally. Using useCallback in this 
 case wouldn't provide any additional performance benefits and would only add unnecessary 
 complexity to the code.
*/