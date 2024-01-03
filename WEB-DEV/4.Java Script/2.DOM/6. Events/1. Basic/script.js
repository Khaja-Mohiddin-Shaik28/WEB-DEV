document.addEventListener("DOMContentLoaded",init)

function init(){

    // Button
    button.addEventListener("click", buttonClicked)
    
    function buttonClicked(event){
        console.log(`${event.type}`);
    }

    // Link
    link.addEventListener("click", linkClicked);
    function linkClicked(ev){
        ev.preventDefault();
        console.log(`${ev.type} ${ev.target}`);
    }
    // Typing
    text.addEventListener("input", typing);
    function typing(event){
        console.log(event.type, event.target.value);
    }
    text.addEventListener("change", changed);
    function changed(event){
        console.log(event.type, event.target.value);
    }
    text.addEventListener("blur",ev=> console.log("hello"));
    
}
let button = document.querySelector("#btn");
let link = document.querySelector("#lnk");
let text = document.querySelector("#txt");