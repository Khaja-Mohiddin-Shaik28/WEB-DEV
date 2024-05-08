import React from "react";
import  ReactDOM  from "react-dom/client";
import reactBackground from "./assets/react-background.svg"

function MainContent(){
return(
    <div className="min-h-[78%]  w-full p-8 bg-[url('./assets/react-background.svg')] bg-no-repeat bg-right">
        <h1 className="text-4xl font-semibold text-center sm:text-6xl selection:bg-white">Fun facts about React</h1>
      <ul className="text-xl sm:text-3xl sm:pt-12 pt-6 sm:pl-12  sm:leading-loose leading-loose text-white list-disc selection:bg-[#00CEFF] marker:text-[#00CEFF] sm:marker:text-3xl">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
)
}

export default MainContent;