import React, { useEffect } from 'react'
import {  Link } from 'react-router-dom';

function Home() {
  
  return (
    <div className='flex justify-end'>
       <Link to="/dashboard" className='p-2 m-4 text-xl text-white rounded-lg w-28 bg-slate-800'>Dashboard</Link>
    </div>
  )
}

export default Home