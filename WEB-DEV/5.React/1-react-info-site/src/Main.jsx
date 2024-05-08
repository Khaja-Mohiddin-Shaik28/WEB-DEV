import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function Main(){
  return(
    <div className="container min-w-full overflow-auto h-[100vh] bg-black bg-opacity-85 text-[#00CEFF]">
      <Header/>
      <MainContent/>
      <Footer/>
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
