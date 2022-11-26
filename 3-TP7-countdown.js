const form = document.querySelector("form");
const countdown = document.getElementById("countdown");
const startValue = document.getElementById("start-value");

const displayCountdown = ((sec) => {
    let minutes = Math.floor(sec / 60);
    let secondes = sec % 60;
    countdown.innerText = minutes + " : " + secondes;
})

const activeCountdown = ((secondsCountdown) => {
    setInterval(() => {
        if (secondsCountdown > 0) countdownValue -- ;
        displayCountdown(countdownValue)
    }, 1000);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let start = startValue.value * 60;
    let countdownValue = start;
    console.log(countdownValue);
    activeCountdown(start);
})

