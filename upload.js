const container = document.querySelector(".container");
const file = document.getElementById("file");

file.addEventListener("change", (e) => {
    let imgUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imgUrl);
    container.style.backgroundImage = `url(${imgUrl})`;
})