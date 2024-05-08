

function Card(props){
    return(
    <div className="flex w-full mb-9 card h-80">
        <div className="mr-4 image">
        <img src={`/images/${props.img}`} alt="japan" className="rounded-lg max-w-56 h-80"/>
        </div>
        <div className="flex flex-col justify-evenly details h-80">
            <div className="flex items-center location">
                <h4 className="mr-4 text-2xl">{props.country}</h4>
                <a href={props.maplocation} className="underline text-md">View on Google Maps</a>
            </div>
            <div className="text-5xl font-bold title">
                <h1>{props.location}</h1>
            </div>
            <div className="date">
                <p className="text-lg font-bold">{props.date}</p>
            </div>
            <div className="w-1/2 description">
                <p className="text-lg">{props.description}</p>
            </div>
        </div>
    </div>
    )
}

export default Card;