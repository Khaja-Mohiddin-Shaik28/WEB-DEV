import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
  const [userDetails, setUserDetails] = useState({
    email : "",
    password : ""
  });
  const navigate = useNavigate()
  const [exists, setExist] = useState(false);
  async function handleSignup(e){
    try{
      e.preventDefault();
      const response = await fetch("http://localhost:3000/api/signup",{
        method : "POST",
        headers : {
          "Content-Type" :  "application/json"
        },
        body : JSON.stringify(userDetails)
      });
      const res = await response.json();
      if(response.ok){
        if(res.exists){
          setExist(prev => true);
        }
        else{
          console.log(res.status);
          navigate("/login")
        }
      }
      else{
        console.log(res.status);
      }
    }
   catch(err){
    console.log(err);
   }
  }
  
  return (
    <div className="h-[100vh] min-w-full bg-gray-200">
           <h1 className='pt-12 h-[20%] text-4xl font-bold text-center'>SignUp Page</h1>
           <div className="create-form h-[80%] min-w-full flex  justify-center ">
        <form   className='flex flex-col  w-[30%] justify-center bg-white rounded-md  h-[80%] p-8'>
        <label htmlFor="email" className='mb-2 ml-10 text-xl font-semibold'>Email : </label>
        <input type="text" required={true} value={userDetails.email} onChange={(e)=>setUserDetails((prevDetails)=> prevDetails =  {...prevDetails, email : e.target.value})} name='email'  className='w-[80%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <label htmlFor="password" className='mb-2 ml-10 text-xl font-semibold '>Password : </label>
        <input type="password" required={true} value={userDetails.password} onChange={(e)=>setUserDetails((prevDetails)=> prevDetails =  {...prevDetails, password : e.target.value})} name='password'  className='w-[80%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <button onClick={handleSignup}  className='p-2 mb-4 text-xl text-white rounded-lg ml-36 w-28 bg-slate-800'>Sign up</button>
        <p className='ml-28'>Have an account?<Link to="/login" className='text-blue-900 underline '>login</Link></p>
        {exists && <p className='text-2xl font-semibold text-center text-red-600'>User already exists!!</p>}
      </form>
    </div>
    </div>

  )
}

export default Signup