let box = document.querySelector(".box");   
box.addEventListener("click", coordinates);

function coordinates(event){
    console.log(`clientX : ${event.clientX}`);
    console.log(`pageX : ${event.pageX}`);
    console.log(`screenX : ${event.screenX}`);
    console.log(`offsetX : ${event.offsetX}`);
}