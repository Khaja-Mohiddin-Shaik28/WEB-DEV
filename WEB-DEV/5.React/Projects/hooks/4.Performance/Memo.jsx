import React, { useCallback, useMemo, useState } from 'react'
import Todos from './Todos';
function Memo() {
    const [count, setCount] = useState(1);

    const [todos, setTodos] = useState(["Todo1", "Todo2"]);

   const addTodo = useCallback(()=>{
    setTodos((prevTodos)=>[...prevTodos, "NewTodo"])
    console.log("Todos added")
},[todos]) 



    // function BigComputation(todos){
    //     for(let i = 0; i < 2000000000; i++);
    //     let todo = todos;
    //     console.log("BigComputation")
        
    // }

    // let ans = useMemo(()=>BigComputation(todos),[todos]) 
    // this Big computation depends on todos so when ever todos are changed it takes time
    // if we dont add dependencies using useMemo hook then after every count increment also it renders

    function incrementCount(){
        console.log("Count Incremented")
        setCount((prevCount)=>prevCount + 1)
    }

  return (
    <div>
        <h1 className='text-2xl'>Count : {count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <Todos todos={todos} addTodo={addTodo}/>
       
    </div>
  )
}

export default Memo