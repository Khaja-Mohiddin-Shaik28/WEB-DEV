import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [userDetails, setUserDetails] = useState({
    email : "",
    password : ""
  });
  const [statusMessage,setStatus] = useState("");
  const navigate = useNavigate();
  async function handleLogin(e){
    try{
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/login",{
      method : "POST",
      headers : {
        "Content-Type" :  "application/json"
      },
      body : JSON.stringify(userDetails),
      credentials: "include"
    });
    const res = await response.json();
    console.log(res)
    if(response.ok){
      setStatus(prev => res.status);
      if(res.status === "Logged in"){
        navigate("/dashboard");
      }
      else{
        console.log(res.status);
      }
    }
  }
  catch(err){
    console.log(err);
  }
  }
  return (
    <div className="h-[100vh] min-w-full bg-gray-200">
      <h1 className='pt-12 h-[20%] text-4xl font-bold text-center'>Login Page</h1>
    <div className="create-form h-[80%] min-w-full flex  justify-center ">
      <form onSubmit={handleLogin} className='flex flex-col  w-[30%] justify-center bg-white rounded-md  h-[80%] p-8'>
        <label htmlFor="email" className='mb-2 ml-10 text-xl font-semibold'>Email : </label>
        <input type="text" required={true} value={userDetails.email} onChange={(e)=>setUserDetails((prevDetails)=> prevDetails =  {...prevDetails, email : e.target.value})} name='email'  className='w-[80%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <label htmlFor="password" className='mb-2 ml-10 text-xl font-semibold '>Password : </label>
        <input type="password" required={true} value={userDetails.password} onChange={(e)=>setUserDetails((prevDetails)=> prevDetails =  {...prevDetails, password : e.target.value})} name='password'  className='w-[80%] mb-4 border text-xl ml-10 border-black border-solid rounded-sm'/>
        <button type='submit'  className='p-2 mb-4 text-xl text-white rounded-lg ml-36 w-28 bg-slate-800'>Login</button>
        <Link to="/forgotpassword" className='text-blue-800 ml-36'>forgot password?</Link>
        {statusMessage != "Logged in" && <p className='text-2xl font-semibold text-center text-red-600'>{statusMessage}</p>}
      </form>
    </div>
    </div>
  )
}

export default Login