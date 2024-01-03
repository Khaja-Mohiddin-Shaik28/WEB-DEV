// keydown, keyup, keypress

let randomText = document.querySelector('#randomKeyText');
randomText.innerHTML = randomGenerator();

let score = 0;

function randomGenerator(){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let size = alphabets.length;
    let randomIndex = Math.floor(Math.random() * size);
    let alphabet = alphabets[randomIndex];
    return alphabet;
}

document.addEventListener("keydown", gameStart);
function gameStart(event){
    let keyPressed = event.key.toUpperCase();
    if(keyPressed == randomText.innerHTML){
        score++;
        updateScore(score);
    }
    else{
        score--;
        updateScore(score);
    }
    randomText.innerHTML = randomGenerator();
}

function updateScore(score){
    let scoreText = document.querySelector("#score");
    scoreText.innerHTML = `Score is : ${score}`;
}
