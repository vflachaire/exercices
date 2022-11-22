let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
console.log (red + " " + green + " " + blue)

const h2 = document.querySelector("h2");

const body = document.querySelector("body");

h2.innerText = "rgb(" + red + ", " + green + ", " + blue + ")";
body.style.background = `rgb(${red}, ${green}, ${blue})`;

setInterval ( () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    h2.innerText = "rgb(" + red + ", " + green + ", " + blue + ")";
    body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}
,2000)