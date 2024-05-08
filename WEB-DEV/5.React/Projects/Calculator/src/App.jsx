import { useCallback, useMemo, useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
function App() {
  let [value, valueSetter] = useState("");

  let display = useCallback((value)=>{
    valueSetter((prevValue) => prevValue + value);  
  },[])

  let clear = useCallback(() => {
    valueSetter((prevValue) => "");
  }, []);
  
  
 let factorial = useCallback(
  ()=>{

    try{
    let n = eval(value);
    let fac = 1;
    for(let i = 1; i <= n; i++){
      fac = fac * i;
    }
    clear();
    display(fac.toString())
    }
    catch (ex) {
      valueSetter("Invalid");
    }
    
},[value] )


  let backspace = useCallback(() => {
    valueSetter((prevValue) => prevValue.slice(0, prevValue.length - 1));
  }, []);

  let evaluation = useCallback(() => {
    try {
      let evaluatedValue = eval(value);
      valueSetter((prevValue) => evaluatedValue);
    } catch (ex) {
      valueSetter("Invalid");
    }
  }, [value]);

 

  return (
    <div className="flex flex-col items-center justify-center w-1/4 h-full bg-blue-500">
      <Display value={value} display={display} />
      <KeyPad
        value={value}
        display={display}
        clear={clear}
        backspace={backspace}
        evaluation={evaluation}
        factorial={factorial}
      />
    </div>
  );
}

export default App;
