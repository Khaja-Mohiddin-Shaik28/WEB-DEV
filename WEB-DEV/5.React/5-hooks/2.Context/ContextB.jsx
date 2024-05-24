import React, { useContext } from 'react'
import ContextC from './ContextC'
import {ageContext} from './App.jsx';
function ContextB() {
    const age = useContext(ageContext);
  return (
    <div>
        Context B {age}
    <ContextC/>
    </div>
  )
}

export default ContextB