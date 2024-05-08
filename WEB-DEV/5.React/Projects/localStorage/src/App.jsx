import { useState,useEffect } from 'react'


function App() {
let [name,nameSetter] = useState(()=>{
  const saved = localStorage.getItem("name");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
})
useEffect(() => {
  // storing input name
  localStorage.setItem("name", JSON.stringify(name));
}, [name]);
  return (
    <div>
      <form action="">
      <input type="text" 
      value={name}
      onChange={(e)=>nameSetter(e.target.value)}
      />
      <input type="submit" />
</form>

    </div>
  )
}

export default App
