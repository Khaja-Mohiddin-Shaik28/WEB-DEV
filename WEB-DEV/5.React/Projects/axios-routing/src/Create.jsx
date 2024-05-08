import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';


function Create() {
  const [user,addUser] = useState({
    name:"",
    username:"",
    email:"",
})
const navigate = useNavigate()
function handleSubmit(e){
  e.preventDefault();
  if(user.name === "" || user.username === "" || user.email === "" ){
    alert("Enter all the fields");
    return;
  }
  else{
    alert("New User Created")
  }
  axios.post("http://localhost:3000/users",user)
  .then((response)=>{
    navigate('/')
  })
}

  return (
    <div className='w-full h-[100vh] text-white flex flex-col items-center justify-center bg-gray-900'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center w-1/3 p-10 bg-black rounded textxl h-[75%] drop-shadow-2xl ' style={{boxShadow: '0 0 10px 0 white'}}>
      <h1 className='pr-20 mb-4 text-4xl font-semibold '>Add User</h1>
        <label htmlFor="name" className='text-xl' >Name:</label>
        <input type="text" id='name' onChange={(e)=>addUser({...user,name:e.target.value})} className='p-2 text-xl text-black border border-white rounded'/>
        <label htmlFor="Username" className='text-xl'>Username:</label>
        <input type="text" id='Username' onChange={e=>addUser({...user,username:e.target.value})} className='p-2 text-xl text-black border border-white rounded'/>
        <label htmlFor="Email" className='text-xl'>Email:</label>
        <input type="text" id='Email' onChange={e=>addUser({...user,email:e.target.value})} className='p-2 text-xl text-black border border-white rounded'/>
        <button className='h-12 mt-3 text-xl bg-green-700 rounded'>Submit</button>
        <Link to="/" className='flex items-center w-20 p-2 mt-5 text-xl border-gray-700 rounded hover:border-b-[3px] '><span className="material-symbols-outlined">arrow_back  </span>Back</Link>
      </form>
    </div>
  )
}

export default Create