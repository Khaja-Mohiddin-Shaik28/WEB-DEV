import React, { useEffect, useState } from 'react'

function Effect1() {
const [count, setCounter] = useState(0);
const [name, setName] = useState("");


function countIncrement(){
    console.log("useEffect is called")
    document.title = `The count is :  ${count}`;
}

useEffect(()=>{
    countIncrement();
},[count])

return (
    <>
    <input type="text" value={name} onChange={(e)=>setName(()=>e.target.value)}/>
    <button onClick={()=> setCounter((prevCount)=>prevCount + 1)}>{`The count is :  ${count}`}</button>
    
    </>
  )
}

export default Effect1;


/* 
It helps to manage side effects effectively

In this code the document title is updated after each button click so it is directly dependant
on count value

Here useEffect is rendered called only when count is changed and when the component is mounted

if no dependencies are mentioned it will be called after every render.

if we leave the second parameter as empty array [] it will be called only when component is mounted
ex : mouse coordinates tracker function directly assigning to window object on mounting


cleanup effect1 and effect2 image :  after deleting the component it still runs the func so we need 
to clean it up

we can fetch data from api depending on id by adding /{id} and dependancy as id
*/