import React,{useReducer, useContext} from 'react'
import ContextA from './ContextA';


let initialState = 0;

export const countContext = React.createContext();

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



function ReducerContext() {
    
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
    <p>Count - {count}</p>
    <countContext.Provider value={{countValue : count,countDispatch:dispatch}}>
        <ContextA/>
    </countContext.Provider>
  
    </div>
  )
 
}

export default ReducerContext