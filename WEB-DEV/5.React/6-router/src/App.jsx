import { useState } from 'react'
import './App.css'
import { Routes, Route, Link,NavLink } from 'react-router-dom'
import Home from './Home'
import BooksList from './BooksList'
import Books from './Books'
import NewBooks from './NewBooks'
import BooksLayout from './BooksLayout'
import PageNotFound from './PageNotFound'
import Home2 from './Home2'
import "./style.css"

function App() {
  return (
    <>
    <div className="h-12 mb-10 bg-purple-600 Nav">
      <ul className='flex items-center h-full text-2xl text-white'>
        <li><NavLink to="/" className='m-10 '>Home</NavLink></li>
        <li><NavLink  to="/books">Books</NavLink></li>
      </ul>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route  path='/*' element={<h1>Home2</h1>}></Route> */}

        <Route path='/books' element={<BooksLayout/>}>
          <Route index element={<BooksList/>}></Route>
          <Route path=':id'  element={<Books/>}></Route>
          <Route path='new'  element={<NewBooks/>}></Route>
        </Route>
    <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App;
