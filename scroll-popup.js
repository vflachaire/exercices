// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");
const improvise = document.getElementById("imgImprovise");

const popup = document.getElementById("popup");
console.log(popup);

const closeBtn = document.getElementById("closeBtn");

let popupAppearance = true;

window.addEventListener('scroll', () => {
    //effet sur la navbar
    if (scrollY > 90) {
        navbar.style.height = 40 + "px";
    }
    else {navbar.style.height = 90 + "px";}
   
    //valeur du scroll en pourcentage
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);

    //effet sur l'image
    if (scrollValue > 0.45) {
        improvise.style.transform =  "translateX(0)";
        improvise.style.opacity = 1;
    }

    //effet sur le popup
    if (scrollValue > 0.85 && popupAppearance == true) {
        popup.style.transform =  "translateX(0)";
        popup.style.opacity = 1;
    }
})

closeBtn.addEventListener('click', () => {
    popup.style.transform =  "translateX(500px)";
    popup.style.opacity = 0; 
    popupAppearance = false;
})