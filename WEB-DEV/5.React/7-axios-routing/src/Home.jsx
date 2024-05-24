import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            setUsers(()=>response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    

  return (
   <div className='w-full min-h-[100vh] text-white p-4 bg-gray-900'>
    <h1 className='mb-4 text-4xl font-bold text-center'>users</h1>
    <div className='flex justify-end w-full pr-10 mb-2'>
    <Link to={"create/"} className='w-20 p-2 text-2xl bg-red-600 rounded-sm'>ADD+</Link>
    </div>
   <table className='w-full p-10 bg-black border border-black ' >
    <thead className='border border-white'>
        <tr className='border border-white '>
    <th className='p-3 text-xl border border-white'>Id</th>
    <th className='p-3 text-xl border border-white'>Name</th>
    <th className='p-3 text-xl border border-white'>Username</th>
    <th className='p-3 text-xl border border-white'>Email</th>
    </tr>
    </thead>
    <tbody>
    {users.map(user=>(
        
        <tr key={user.id} className='p-3 border border-white'>
            <td className='p-3 border border-white'>{user.id}</td>
            <td className='p-3 border border-white'>{user.name}</td>
            <td className='p-3 border border-white'>{user.username}</td>
            <td className='p-3 border border-white'>{user.email}</td>
            <td className='text-center '>
            <Link to={`read/${user.id}`}  className='p-1 mx-2 bg-green-600 border border-white rounded-sm '>Read</Link>
            <Link to={`update/${user.id}`} className='p-1 mx-2 bg-yellow-600 border border-white rounded-sm '>Update</Link>
            <button onClick={()=>handleDelete(user.id)} className='p-1 mx-2 bg-pink-600 border border-white rounded-sm '>Delete</button>
            </td>
            </tr>
    ))}
    </tbody>
   </table>
   </div>
  )

  function handleDelete(id){
    const confirmed = confirm("Deleting this User's Record");
    if(confirmed){
        axios.delete("http://localhost:3000/users/" + id)
        .then(()=>{
            location.reload()
        })
    }
}
}

export default Home;