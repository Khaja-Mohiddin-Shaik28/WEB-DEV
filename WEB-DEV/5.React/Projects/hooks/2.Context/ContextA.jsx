import React, { useContext } from 'react'
import ContextB from './ContextB';
import { valueContext } from './App';


function ContextA() {

  const {value,valueSetter} = useContext(valueContext);

  return (
    <div>
      <button onClick={()=>valueSetter((prevValue)=>prevValue +  1)}>{value}</button>
    
    <ContextB/>
 
    </div>
  )
}

export default ContextA;