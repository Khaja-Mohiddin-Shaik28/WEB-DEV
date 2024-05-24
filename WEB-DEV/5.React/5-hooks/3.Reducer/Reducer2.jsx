import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

function reducer(state, action){
    switch(action.type){
        case "increment1":
            return {...state, firstCounter : state.firstCounter + action.value};
        case "decrement1":
            return {...state, firstCounter : state.firstCounter - action.value};
        case "reset1":
            return {...state,firstCounter: initialState.firstCounter};
        
        case "increment2":
            return {...state, secondCounter : state.secondCounter + action.value};
        case "decrement2":
            return {...state, secondCounter : state.secondCounter - action.value};
        case "reset2":
            return {...state,secondCounter: initialState.secondCounter};
        
    }
}

function Reducer2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
    <div>
        <p>{count.firstCounter}</p>
        <p>{count.secondCounter}</p>
        <button onClick={()=>dispatch({type: "increment1", value : 1})}>Increment Counter 1</button>
        <button onClick={()=>dispatch({type: "decrement1", value : 1})}>Decrement Counter 1</button>
        <button onClick={()=>dispatch({type: "reset1", value : 1})}>Reset Counter 1</button>
        <button onClick={()=>dispatch({type: "increment2", value : 5})}>Increment Counter 2</button>
        <button onClick={()=>dispatch({type: "decrement2", value : 5})}>Decrement Counter 2</button>
        <button onClick={()=>dispatch({type: "reset2", value : 5})}>Reset Counter 2</button>
    </div>
  )
}

export default Reducer2