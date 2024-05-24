import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Update from './Update'
import Read from './Read'
function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Create' element={<Create/>}></Route>            
                <Route path='/Update/:id' element={<Update/>}></Route>
                <Route path='/Read/:id' element={<Read />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App