import React from "react";
import ReactDOM from "react-dom/client";



function Card(props){
    let badge;
    if( props.openSpots === 0 ){
        badge = "SOLD OUT";
    }else if( props.location == "Online" ){
        badge = "ONLINE";
    }
console.log(props)
    return(
            <div className="min-w-[15%] h-full pl-10 relative">
             <img src={`/${props.coverImg}`} alt={props.coverImg} />
             {badge &&  <p className="absolute p-1 text-xs font-semibold bg-white rounded-md top-1 left-11">{badge}</p>}

            <p className="reviews">{props.stats.rating} <span className="text-gray-500">({props.stats.reviewCount}) .{props.location}</span> </p>
            <p className="title">{props.title}</p>
            <p className="price">From ${props.price} / person</p>
            </div>
    )
}

export default Card;