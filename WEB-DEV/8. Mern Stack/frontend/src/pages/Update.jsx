import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const {id} = useParams();
  const [data, setData] = useState({
    _id : "",
    userName :  '',
    title : "",
    body : ""
  });
  
  const navigate = useNavigate();

  useEffect(()=>{
    const dataFetching = async ()=>{
      try{
        const response = await fetch(`http://localhost:3000/api/articles/${id}`,{
          method : "GET"
        })
        const json = await response.json()
       if(response.ok){
        setData(json);
      }
      else{
        console.log("Data is not fetched properly")
       }
      }
      catch(err){
        console.log(err);
      }
    }
    dataFetching();
  },[])
  async function handleSubmit(event){
    try{
      event.preventDefault();
      const response = await fetch(`http://localhost:3000/api/articles/${id}`,{
        method : "PATCH",
        headers : {
          "Content-Type" :  "application/json"
        },
        body : JSON.stringify(data)
      });
      const json = await  response.json();
      if(response.ok){
        console.log(json.message);
        navigate("/");
      }else{
        console.log(json.message)
      }    
    }
    catch(err){
      console.log(err);
    }
  
  }
  return (
    <div className="h-[100vh] min-w-full">
    <NavBar/>
    <div className="create-form h-[90%] min-w-full flex justify-center items-center">
      <form  className='flex flex-col  w-[40%] justify-center  bg-gray-200 h-[80%] p-10'>
        <label htmlFor="userName" className='mb-2 ml-10 text-xl font-bold'>User Name : </label>
        <input type="text" required={true} name='userName' value={data.userName} onChange={(e)=>setData((prevData)=> prevData =  {...prevData,userName :  e.target.value})} className='w-[70%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <label htmlFor="title" className='mb-2 ml-10 text-xl font-bold'>Title : </label>
        <input type="text" required={true} name='title' value={data.title} onChange={(e)=>setData((prevData)=> prevData =  {...prevData,title :  e.target.value})} className='w-[70%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <label htmlFor="body" className='mb-2 ml-10 text-xl font-bold'>Body : </label>
        <textarea name="body" required={true} value={data.body}  onChange={(e)=>setData((prevData)=> prevData =  {...prevData,body :  e.target.value})} className='w-[80%] h-full border ml-10 mb-4 text-xl border-black border-solid rounded-sm' id=""></textarea>
        <button onClick={handleSubmit}  className='w-20 p-2 ml-48 text-xl text-white rounded-lg bg-slate-800'>Submit</button>
      </form>
    </div>
    </div>
  )





}



export default Update;