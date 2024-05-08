import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./assets/logo.svg"



function Nav(){
    return(
     <div className="w-full h-full shadow-lg place-self-center nav">
        <img src={logo} alt="" className="pt-6 pl-8"/>
     </div>  
    )
}

export default Nav;