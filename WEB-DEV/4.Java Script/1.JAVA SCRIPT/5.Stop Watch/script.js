let minutes = 0;
let seconds = 0;
let hours = 0;
let timerId;
function timer() {
  timerId = setTimeout(function time() {
    seconds++;
    document.getElementById("seconds").innerHTML = seconds;
    if (seconds > 5) {
      minutes++;
      document.getElementById("minutes").innerHTML = minutes;
      secondsReset();
    }
    if (minutes > 2) {
      hours++;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("seconds").innerHTML = seconds;
      minutes = 0;
    }
    timerId = setTimeout(time, 1000);
  }, 1000);
}

function stop(){
  clearTimeout(timerId);
}

function secondsReset() {
  seconds = 0;
  document.getElementById("seconds").innerHTML = seconds;
  clearTimeout(timerId);
}
function reset() {
  seconds = 0;
  document.getElementById("seconds").innerHTML = seconds;
  minutes = 0;
  document.getElementById("minutes").innerHTML = minutes;
  hours = 0;
  document.getElementById("hours").innerHTML = hours;
  clearTimeout(timerId);
}
