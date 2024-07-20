import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {token} = useParams();
    async function handleSubmit(e){
      try{
        e.preventDefault();
        const response  = await fetch(`http://localhost:3000/api/resetpassword/${token}`, {
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({password : password})
        });
        const json = await response.json();
        if(response.ok){
            console.log(json.status);
            navigate("/login")
        }
      }
      catch(err){
        console.log(json.status);
      }
    }
  return (
    <div className='flex h-[100vh] w-full justify-center items-center bg-gray-200'>
    <form onSubmit={handleSubmit} className='flex flex-col w-[30%] p-10 bg-white rounded-md border'>
    <label htmlFor="password" className='mb-2 ml-10 text-xl font-semibold'>Password : </label>
    <input type="password" required={true} value={password} onChange={(e)=>setPassword((prev)=>prev = e.target.value)}  className='w-[80%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <button type='submit' className='p-2 mb-4 text-xl text-white rounded-lg ml-28 w-28 bg-slate-800'>Submit</button>
    </form>
</div>
  )
}

export default ResetPassword