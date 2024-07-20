import { useEffect, useState } from 'react'

function App() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
useEffect(()=>{
getImages()
},[])
  const getImages = async ()=>{
    try{
      const response = await fetch("http://localhost:3000/api/getImage")
      const json = await response.json();
      if(response.ok){
        setImages(json.images); 
      }
    }
    catch(err){
      console.log(err);
    }
  }
  async function upload(){
    const formData = new FormData();
    formData.append("file", file)
    const response =  await fetch("http://localhost:3000/api/upload",{
      method : "POST",
      body: formData,
    })
    const json = await response.json();
    if(response.ok){
      console.log(json);
    }
    else{
      console.log(json);
    }
  }

  

  return (
   <div className="">
    <input type="file" onChange={(e)=> setFile(e.target.files[0])} name="file" id="file" />
    <button onClick={upload}>upload</button>
    {images && images.map(image => (
      <img src={`http://localhost:3000/images/` + image.name} width={"500px"} height={"500px"}  alt="" />
    ))}
   </div>
  )
}

export default App
