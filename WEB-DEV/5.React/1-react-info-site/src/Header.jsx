import React from "react";
import  ReactDOM  from "react-dom/client";
import reactLogo from "./assets/react.svg"

function Header(){
return(
    <header className="h-[12%] shadow-black shadow-lg selection:bg-white">
        <nav className="flex items-center justify-between w-full h-full">
        <div className="flex items-center w-1/2">
            <img src={reactLogo} alt="react-logo" className="h-10 ml-5 mr-2 sm:w-16 w-7 sm:mr-4"/> 
            <h1 className="text-xl font-bold sm:text-3xl">React</h1>
        </div>
            <ul className="flex justify-around w-1/2 text-lg sm:text-3xl">
                <li><a href="">Learn</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>
)
}

export default Header;