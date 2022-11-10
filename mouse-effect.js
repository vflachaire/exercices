const mouses = document.querySelectorAll(".mouse");
console.log(mouses);


window.addEventListener("mousemove", (e) => {
    mouses.forEach(mouse => {
        mouse.style.top = e.y + "px";
        mouse.style.left = e.x + "px";
    })
})