let lists = document.querySelector("#lists");
let listItems = document.querySelectorAll(".list");
lists.addEventListener("click", select);
let  prevSelect = [];
let selectedList = "";
function select(ev){
    prevSelect.push(selectedList);
    selectedList = ev.target;
    if(ev.ctrlKey){
        ev.target.style.background = "green";
    }
    else{
        for(let i = 0; i < listItems.length; i++){
            listItems[i].style.background = ""
        }
        ev.target.style.background = "green";
    }
}