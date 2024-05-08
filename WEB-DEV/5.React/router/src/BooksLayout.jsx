import React from 'react'
import { Link, Outlet } from 'react-router-dom';
function BooksLayout() {


  return (
    <>
      <Outlet/>
      <div className="flex flex-col mt-4 text-xl text-white w-fit links">
      <Link to="/books/1" className='w-full p-2 mb-2 ml-10 rounded-lg bg-violet-800'>Book1</Link>
      <Link to="/books/2" className='w-full p-2 mb-2 ml-10 rounded-lg bg-violet-800'>Book2</Link>
      <Link to="/books/new" className='w-full p-2 ml-10 rounded-lg bg-violet-800'>New Book</Link>
      </div>
    </>
  )
}

export default BooksLayout;
