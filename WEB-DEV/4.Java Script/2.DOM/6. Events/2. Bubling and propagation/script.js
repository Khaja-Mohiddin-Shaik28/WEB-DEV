let main = document.querySelector("#m");
let div = document.querySelector("#d");
let para = document.querySelector("#p");

para.addEventListener("click",(ev)=>{
//    ev.stopPropagation()

    console.log("para");
},true)
div.addEventListener("click",(ev)=>{
    console.log("div");
    ev.stopImmediatePropagation()
},true)
div.addEventListener("click",(ev)=>{
    console.log("div2");
},true)
main.addEventListener("click",()=>console.log("main"),true)



