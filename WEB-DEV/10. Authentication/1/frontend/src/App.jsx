import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Redirect from './pages/Redirect'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Redirect/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
    <Route path='/resetpassword/:token' element={<ResetPassword/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
   </Routes>
   </BrowserRouter>  
  )
}

export default App
