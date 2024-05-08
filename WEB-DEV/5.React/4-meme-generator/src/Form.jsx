import { useEffect, useState } from "react";



function Form(){

    const [image, imageSetter] = useState([]);
    const [formData, setFormData] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    });
    
    function newImage(){
        const randomIndex = Math.floor( Math.random() * image.length + 1);
        const randomImageUrl = image[randomIndex].url;
        setFormData( (prevFormData)=>{
            return{
                ...prevFormData,
                randomImage : randomImageUrl
            }
        } )
    }
    useEffect( () =>{
        async function fetching(){
        const response = await fetch("https://api.imgflip.com/get_memes")
        const data = await response.json()
        imageSetter( data.data.memes )
    }
    fetching();
 
}, []);

    function textHandler(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormData( (prevFormData) =>{
            return{
                ...prevFormData,
                [name] : value,
            }

        } )
    }

    return(
        <div className="h-[88%]">
        <div className="grid items-center justify-center grid-cols-2 grid-rows-[100px_50px] gap-10 pl-16 pr-32 text-xl h-[35%] form">
            <div className="flex flex-col top-text">
                <label htmlFor="topText" className="mb-1">Top text</label>
                <input type="text" value={formData.topText} onChange={textHandler} name="topText"  id="topText"  placeholder="Top text" className="h-12 pl-5 border border-gray-300 rounded-lg "/>
            </div>
            <div className="flex flex-col bottom-text">
                <label htmlFor="bottomText" className="mb-1">Bottom text</label>
                <input type="text" value={formData.bottomText} onChange={textHandler} name="bottomText"  id="bottomText" placeholder="Bottom text" className="h-12 pl-5 border border-gray-300 rounded-lg" />
            </div>
            <div className="col-span-3 button">
                <button className="flex items-center justify-center w-[97%] h-14 text-white rounded-lg bg-violet-700 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500" onClick={newImage}>Get a new meme image  🖼</button>
            </div>
        </div>
        <div className="flex justify-center w-full h-[60%] image " >
            <div className="relative flex justify-center w-full h-full">
        <img src={formData.randomImage} alt="" className="w-1/2 h-full "/>
        <p className="absolute text-5xl tracking-tight text-white text top-3">{formData.topText}</p>
        <p className="absolute text-5xl tracking-tight text-white text bottom-3">{formData.bottomText}</p>
        </div>
        </div>
        
    </div>
    )
}

export default Form;