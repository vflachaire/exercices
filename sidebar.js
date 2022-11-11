// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
const sidebar = document.getElementById("side-bar");
//console.log(sidebar);
const content = document.querySelector(".content")

btn.addEventListener ("click", () => {
    sidebar.classList.toggle("active");
})

content.addEventListener ("click", () => {
    sidebar.classList.remove("active");
})


/*** Ma solution initiale ***/
// const btn = document.getElementById("btn");
// const sidebar = document.getElementById("side-bar");
// const sidebarUL = document.querySelector("ul");
// const btnSpan = document.querySelectorAll(".toggle-btn span");

// sidebarAppearance = false; 
// console.log(btnSpan[0]);

// retrait au click sur la sidebar 
// sidebarUL.addEventListener ("click", () => {
//     sidebar.style.left = -230 + "px";
//     sidebarAppearance = false;
// });

// toggle du bouton 
// btn.addEventListener ("click", () => {
//     if (sidebarAppearance == false) {
//         sidebar.style.left = 0;
//         sidebarAppearance = true;
//         btnSpan[0].style.transform = "rotate(45deg) translate(10px,10px)";
//         btnSpan[0].style.transformOrigin = "center";
//         btnSpan[1].style.opacity = 0;
//         btnSpan[2].style.transform = "rotate(-45deg)translate(10px,-10px)";
//          btnSpan[2].style.transformOrigin = "center";
//     }
//     else {
//         sidebar.style.left = -230 + "px";
//         sidebarAppearance = false;
//         btnSpan[0].style.transform = "rotate(0) translate(0)";
        
//         btnSpan[1].style.opacity = 1;
//         btnSpan[2].style.transform = "rotate(0) translate(0)";
//     }

// })

