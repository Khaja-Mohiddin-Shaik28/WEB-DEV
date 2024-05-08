import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import data from "./data.js";

    const card = data.map(
        (item) =>{
            return(
                <Card 
                key={item.id}
                {...item}
                />
            )
        }
    )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' container grid overflow-x-hidden grid-rows-row-layout grid-cols-1 min-w-full min-h-[100vh]'>
      <Nav />
      <Hero />
      <div className="flex h-full min-w-[100vw] overflow-x-scroll Cards">
       {card}
       {card}
       {card}
       {card}
     
      </div>
    </div>
  </React.StrictMode>,
)
