// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");
const improvise = document.getElementById("imgImprovise");
const popup = document.querySelector(".pop-up");
const buttonPopup = querySelector(".button-container input");
console.log(improvise);

window.addEventListener('scroll', () => {
    //let scrollWindow = scrollY;
    //console.log(scrollWindow);
    if (scrollY > 90) {
        navbar.styles.height = 40 + "px";
    }
    
    if (scrollY > 300) {
        improvise.styles.transform =  translateX(0);
        improvise.styles.opacity = 1;
    }

    if (scrollY > 1000) {
        improvise.styles.transform =  translateX(0);
        improvise.styles.opacity = 1;
    }
})

buttonPopup.addEventListener('click', () => {
    buttonPopup.styles.opacity =  0;
    buttonPopup.styles.transform = "translateX(400px)";
    buttonPopup.remove();
})