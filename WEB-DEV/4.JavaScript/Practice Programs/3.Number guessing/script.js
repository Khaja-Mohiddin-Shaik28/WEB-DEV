random_number = Math.floor(Math.random()*10) + 1;
noOfGuesses = 0;
document.getElementById("result").onclick = function(){
   let guessedNumber = document.getElementById("guess").value;
   noOfGuesses++;
   if(random_number == Number(guessedNumber)){
    document.getElementById("myPara").innerHTML = `Congratulations! you have guessed the right number
    After ${noOfGuesses} guesses`;
   }
   else if(guessedNumber>random_number){
    alert("Too large!");
   }   
   else{
    alert("Too small!");
   }
}