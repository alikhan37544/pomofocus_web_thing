// JavaScript
let minutes = 25;
let seconds = 0;
let intervalId = null;

function updateDisplay() {
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

document.getElementById("start").addEventListener("click", function () {
  if (intervalId !== null) return; // prevent multiple intervals
  intervalId = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(intervalId);
        intervalId = null;
        alert("Time is up!");
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  minutes = 25;
  seconds = 0;
  updateDisplay();
});

updateDisplay();
