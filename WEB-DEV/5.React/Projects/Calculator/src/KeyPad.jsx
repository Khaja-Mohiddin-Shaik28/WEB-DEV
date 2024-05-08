
export default function KeyPad(props){
    return(
        <div className="flex flex-wrap w-full h-full p-2 ">
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("1")}>1</button>
            <button className="bg-white  hover:bg-sky-300 hover:text-white w-[22%] h-10 m-1" onClick={()=>props.display("2")}>2</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display('3')}>3</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("4")}>4</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("5")}>5</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("6")}>6</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("7")}>7</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("8")}>8</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("9")}>9</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("+")}>+</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("-")}>-</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("*")}>*</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.display("/")}>/</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.evaluation()}>=</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.clear()}>AC</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.backspace()}>b</button>
            <button className="bg-white hover:bg-sky-300 hover:text-white  w-[22%] h-10 m-1" onClick={()=>props.factorial()}>Fac</button>
        </div>
    )
}