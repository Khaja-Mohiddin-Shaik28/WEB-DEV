import React, {useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigate = useNavigate();
  useEffect(()=>{
    verify();
  },[])
  async function verify(){
  const response = await fetch("http://localhost:3000/api/verify",{
    method : "GET",
    credentials: "include"
  });
  const json = await response.json();
  if(response.ok){
    if(json.status){
      navigate("/dashboard")
    }
    else{
      navigate("/signup")
    }
  }
 } 
 async function handleLogout(){
  try{


  const response = await fetch("http://localhost:3000/api/logout",{
    method : "GET",
    credentials: "include"
  });
  const json = await response.json();
  if(response.ok){
    if(json.status){
      navigate("/home");
    }
  }
  }
  catch(err){
    console.log(err)
  }
 }
  return (
    <div className="">
      <h1>Dashboard</h1>
    <div className='flex justify-end'>
      <button onClick={handleLogout} className='p-2 m-4 text-xl text-white rounded-lg w-28 bg-slate-800'>Log out</button>
    </div>
    </div>
  )
}

export default Dashboard