
function Nav(){
    return(
    <div className="nav h-[12%] w-full flex items-center justify-between bg-gradient-to-r pl-5 pr-5 from-purple-800 via-purple-600 to-purple-500">
      <div className="flex items-center left">
      <img src="/images/Troll-Face.png" alt="meme-logo" width="50px" />
      <h1 className="ml-1 text-3xl text-white">Meme Generator</h1>
      </div>
     <div className="pr-20 text-2xl text-white right">
     <h1>React Course - Project 3</h1>
     </div>
    
    </div>
    )
}

export default Nav;