import { useState } from 'react'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App