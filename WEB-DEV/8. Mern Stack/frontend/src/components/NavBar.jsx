import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar h-[10%] w-full flex justify-between p-2">
    <NavLink to="/"  className="w-20 p-2 text-2xl text-white bg-green-600 rounded-lg cursor-pointer">Home</NavLink>
    <NavLink to="/create" className="w-20 p-2 text-2xl text-white bg-red-600 rounded-lg cursor-pointer">Create</NavLink>
    </div>
  )
}

export default NavBar