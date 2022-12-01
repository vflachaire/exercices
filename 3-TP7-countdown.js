const form = document.querySelector("form");
const countdown = document.getElementById("countdown");
const startValue = document.getElementById("start-value");
const h1 = document.querySelector ("h1");
let countdownValue;

let activeCountdown; 

const displayCountdown = (() => {
    if (countdownValue > 0) countdownValue -- ;
    let minutes = Math.floor(countdownValue / 60);
    let secondes = countdownValue % 60;
    countdown.innerText = minutes + " : " + secondes;
    console.log(countdownValue);
})




form.addEventListener("submit", (e) => {
    if (activeCountdown) {clearInterval(activeCountdown)};
    e.preventDefault();
    if (isNaN(startValue.value)) {
        h1.innerText = "Indiquez un nombre !"
    }
    else {

        let start = startValue.value * 60;
        countdownValue = start;
        console.log(countdownValue);
        
       activeCountdown =  setInterval(() => 
        {
            if (countdownValue <= 0)
            clearInterval(activeCountdown);
            if (countdownValue > 0)            countdownValue -- ;
            let minutes = Math.floor(countdownValue / 60);
            let secondes = countdownValue % 60;
            if (secondes < 10 ) secondes = `0${secondes}`
            countdown.innerText = `${minutes} : ${secondes}`;
            console.log(countdownValue);
        },100);
    }

    // h1.addEventListener ("click",() => {
    //     console.log("clear");
    //     clearInterval(activeCountdown);
    // })
})

