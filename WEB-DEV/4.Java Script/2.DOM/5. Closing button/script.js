let elem = document.querySelectorAll(".box");
for(let i = 0; i < elem.length; i++){
  elem[i].insertAdjacentHTML("afterbegin","<button class='button'>[X]</button>");
  elem[i].firstChild.onclick = ()=>elem[i].remove();
}