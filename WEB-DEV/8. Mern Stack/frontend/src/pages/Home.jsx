import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar"
import Update from './Update';
// import article from '../../../backend/model/article';

function Home() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState(null);

  useEffect(()=>{
    const dataFetching = async ()=>{
      try{
        const response = await fetch("http://localhost:3000/api/articles");
        const json = await response.json();
        if(response.ok) {
          setArticles(json);
        }
      }catch(err){
        console.log(err);
      }
      
    }
    dataFetching();
  },[])
  return (
    <div className="home min-w-full h-[100vh]">
    <NavBar/>
    <div className="posts min-h-[90%] w-full p-10">
    {articles && articles.map(
      article =>(
        <div className="post flex justify-between w-[90%] min-h-[10vh] bg-gray-200 mb-2 p-2 rounded-lg" key={article._id}>
          <div className="content w-[85%] h-full">
          <h1 className='text-2xl'><span className='font-bold'>User :</span>  {article.userName}</h1>
          <h1 className='text-2xl'><span className='font-bold'>Title :</span> {article.title}</h1>
          <p className='text-2xl'><span className='font-bold'>Body :</span> {article.body}</p>
          </div>
          <div className="buttons w-[15%] min-h-full flex justify-between items-center">
          <Link to={`/update/${article._id}`} className='p-2 m-2 text-white bg-gray-600 rounded-lg'>Update</Link>
          <button onClick={()=>handleDelete(article._id)} className='p-2 m-2 text-white bg-orange-600 rounded-lg'>Delete</button>
          </div>
        </div>
      )
    )}
      
    </div>
    </div>
  )

  async function handleDelete(id){
    try{
      const response = await fetch(`http://localhost:3000/api/articles/${id}`,{
        method : "DELETE"
      });
      const json = await response.json();
      if(response.ok){
        console.log(json.message);
        alert("Data deleted")
      }
      else{
        console.log(json.message);
      }
    }
    catch(err){
      console.log(err);
    }
  }
}

export default Home