let table = document.querySelector("#table")
table.addEventListener("click", handler);
let prevElem = null;
function handler(ev){
   let elem =  ev.target;
   console.log(elem.tagName)
   if(elem.tagName == "TD"){
    if(prevElem != null){
        prevElem.style.background = "";
       }
       elem.style.background = "red";
       prevElem = elem;
   }
}


/* 
table.onclick = function(event) {
  let td = event.target.closest('td'); // (1)

  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)

  highlight(td); // (4)
}; */