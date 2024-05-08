import React from "react";
import ReactDOM from "react-dom/client";
import heroImage from "./assets/heroImage.svg";

function Hero() {
  return (
    <div className="flex flex-col w-full h-full hero">
      <img
        src={heroImage}
        alt="hero-image"
        className="sm:w-[60%] w-[75%] flex place-self-end mr-[10%] h-1/2 pt-12"
      />
      <div className="flex flex-col flex-wrap justify-center pl-10 h-1/2 hero-text">
        <h1 className="text-2xl font-bold sm:text-5xl">Online Experiences</h1>
        <p className="sm:text-xl text-md" >Join unique interactive activities led by </p>
        <p className="sm:text-xl text-md" >one-of-a-kind hosts—all without leaving</p>
        <p className="sm:text-xl text-md" >home</p>
      </div>
    </div>
  );
}

export default Hero;
