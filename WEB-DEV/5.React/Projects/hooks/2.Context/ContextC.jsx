import React, { useContext } from 'react'
import {userContext} from './App.jsx';

function ContextC() {
    const user = useContext(userContext);
  return (

    <div>Context C - {user}</div>
  )
}

export default ContextC