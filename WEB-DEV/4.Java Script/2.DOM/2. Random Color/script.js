let heading = document.querySelector(".heading");
let elem =heading.firstElementChild;
setInterval(
    ()=>{
        const letters = '0123456789ABCDEF';
            let randomColor = '#';
            for (let i = 0; i < 6; i++) {
                randomColor += letters[Math.floor(Math.random() * 16)];
            }
            elem.style.color = randomColor;
    },1000
)