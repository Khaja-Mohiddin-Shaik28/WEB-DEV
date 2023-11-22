function cpuChoiceFunction() {
  const cpurandomChoiceNumber = Math.floor(Math.random() * 3 + 1);
  if (cpurandomChoiceNumber == 1) {
    return "Rock";
  } else if (cpurandomChoiceNumber == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
function green() {
  let result = document.getElementById("result");
  result.style.color = "lawngreen";
}
function red() {
  let result = document.getElementById("result");
  result.style.color = "red";
}
function yellow() {
  let result = document.getElementById("result");
  result.style.color = "yellow";
}
function game() {
  let cpuChoiceValue = cpuChoiceFunction();
  let userChoiceCheck = document.querySelector("input[name='choice']:checked");
  if (userChoiceCheck) {
    let userChoiceValue = userChoiceCheck.value;
    if (userChoiceValue == "rock" && cpuChoiceValue == "Rock") {
      document.getElementById("result").innerHTML = "Game Tied!!!";
      yellow();
    } else if (userChoiceValue == "rock" && cpuChoiceValue == "Paper") {
      red();
      document.getElementById("result").innerHTML = "You Lost!!!";
    } else if (userChoiceValue == "rock" && cpuChoiceValue == "Scissors") {
      green();
      document.getElementById("result").innerHTML = "You Won!!!";
    } else if (userChoiceValue == "paper" && cpuChoiceValue == "Paper") {
      document.getElementById("result").innerHTML = "Game Tied!!!";
      yellow();
    } else if (userChoiceValue == "paper" && cpuChoiceValue == "Rock") {
      green();
      document.getElementById("result").innerHTML = "You Won!!!";
    } else if (userChoiceValue == "paper" && cpuChoiceValue == "Scissors") {
      red();
      document.getElementById("result").innerHTML = "You Lost!!!";
    } else if (userChoiceValue == "scissors" && cpuChoiceValue == "Scissors") {
      document.getElementById("result").innerHTML = "Game Tied!!!";
      yellow();
    } else if (userChoiceValue == "scissors" && cpuChoiceValue == "Paper") {
      green();
      document.getElementById("result").innerHTML = "You Won!!!";
    } else if (userChoiceValue == "scissors" && cpuChoiceValue == "Rock") {
      red();
      document.getElementById("result").innerHTML = "You Lost!!!";
    }
    document.getElementById("cpuChoice").innerHTML = cpuChoiceValue;
  } else {
    alert("Select one option!!!");
  }
}
