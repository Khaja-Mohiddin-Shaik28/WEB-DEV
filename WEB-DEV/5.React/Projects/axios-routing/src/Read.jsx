import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
function Read() {
    const [user, setUser] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        axios.get("http://localhost:3000/users/" + id)
        .then((response)=>{
            setUser(()=>response.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className='w-full h-[100vh] text-white p-4 bg-gray-900 flex-col flex justify-center items-center text-2xl'>
           <table className='p-3 bg-black border border-white'>
            <thead className='p-3 border border-white'>
                <tr className='p-3 border border-white'>
                    <th className='p-3 border border-white'>Id</th>
                    <th className='p-3 border border-white'>Name</th>
                    <th className='p-3 border border-white'>Username</th>
                    <th className='p-3 border border-white'>Email</th>
                </tr>
            </thead>
            <tbody className='p-3 border border-white'>
                <tr className='p-3 border border-white'>
                    <td className='p-3 border border-white'>{user.id}</td>
                    <td className='p-3 border border-white'>{user.name}</td>
                    <td className='p-3 border border-white'>{user.username}</td>
                    <td className='p-3 border border-white'>{user.email}</td>
                </tr>                
            </tbody>
           </table>
           <Link to="/" className='flex ml-[30rem] items-center p-2 mt-5 text-2xl border-gray-700 rounded hover:border-b-[3px] '><span className="material-symbols-outlined">arrow_back  </span>Back</Link>
        </div>
    )
}

export default Read
