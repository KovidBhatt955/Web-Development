let intervalID = null;
let clickCount = 0;
const display = document.getElementById("number-display");
const btn = document.getElementById('toggle-btn');

function startChanging() {
    intervalId = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        display.textContent = randomNum;
    }, 100);
}

function stopChanging() {
    clearInterval(intervalId);
    intervalId = null;
}

btn.addEventListener('click', () => {
  clickCount++;
  
  if (clickCount % 2 !== 0) {
    stopChanging();
  } else {
    startChanging();
  }
});

startChanging();
