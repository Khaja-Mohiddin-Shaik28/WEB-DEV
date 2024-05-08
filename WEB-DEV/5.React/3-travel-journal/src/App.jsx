import Nav from './Nav'
import Card from "./Card"
import data from './data.js'


function App() {

 const card =  data.map( (item) =>{
  return(
    <Card  
      key={item.id}
      {...item}
    />
  )
  } )

  console.log(card)

  return (

      <div className="container min-w-full min-h-[100vh] grid grid-rows-[70px_1fr] grid-cols-[1fr] ">
        <Nav />
        <div className="flex flex-col w-full pl-14 pt-14 pb-14 cards">
        {card}
        </div>
        
      </div>

  )
}

export default App;
