import { useState } from 'react'
import ContextA from './ContextA'
import React from 'react';

export const userContext = React.createContext();
export const ageContext = React.createContext();
export const valueContext = React.createContext();



function App() {
  const [value, valueSetter]  = useState(0);
  

  return (
    <div>
        <userContext.Provider value={"Khaja"}>
          <ageContext.Provider value={20}>
            <valueContext.Provider value={{value,valueSetter}}>
        <ContextA/>
        </valueContext.Provider>
        </ageContext.Provider>
        </userContext.Provider>
    </div>
  )
}

export default App;


/* 
App->A->B->C
This is the tree now we need to import childs to establish relationships
Now pass Value from App to C By providing value to A (indirectly to all the childs)
then use value in not only C but in all the child components

and prop syntax go through (pass state and state func as object)
*/
