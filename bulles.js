
// let compteur = 0;
// const nbKill = document.querySelector('h3');

// setInterval ( () => {
//     const newBubble = document.createElement('div');
//     newBubble.classList.add('bulle');
//     document.body.appendChild(newBubble);

//     const sizeBubble = Math.random() * 200 + 100 + "px";
//     newBubble.style.width = sizeBubble;
//     newBubble.style.height = sizeBubble;

//     newBubble.style.top = Math.random() * 100 + 50 + "%";
//     newBubble.style.left = Math.random() * 100  + "%";
//     newBubble.style.setProperty('--left', Math.random() * 120 - 10 + "%");

//     setTimeout ( () => {newBubble.remove()},6000);
//     newBubble.addEventListener ('click', () => {
//         newBubble.remove();
//         compteur++;
//         nbKill.textContent = compteur;;
//     }
//     )

// }, 1000)

function  makeFeuille() {
    //création de la div 'feuille'
    const newFeuille = document.createElement('div');
    newFeuille.classList.add('feuille');
    document.body.appendChild(newFeuille);

    // choix random de l'image de la feuille
    const chiffreFeuille = Math.trunc(Math.random() * 100) % 3 + 1 ;
    const imgFeuille = document.createElement('img');
    imgFeuille.src = './feuille' + chiffreFeuille + '.png';
    newFeuille.appendChild(imgFeuille);

    //taille de la feuille  et du div
    const sizeFeuille = Math.random() * 100 + 50 + "px";
    imgFeuille.style.maxWidth = sizeFeuille;
    imgFeuille.style.height = "auto";
    newFeuille.style.maxWidth = sizeFeuille;
    newFeuille.style.height = "auto";

    //sens de rotation de la feuille
    const minusPlus = Math.random() > 0.5 ? 1 : -1;  
    const degreRotation = Math.random() * 720;
    newFeuille.style.setProperty('--rotation', minusPlus *  degreRotation + "deg");

    // position d'apparition des feuilles
    newFeuille.style.left = Math.random() * 100  + "%";
    newFeuille.style.setProperty('--left', Math.random() * 120 - 10 + "%");

    //suppression de la feuille
    setTimeout ( () => {newFeuille.remove()},30000);
    newFeuille.addEventListener ('click', () => {
        newFeuille.remove();
    })
}
setInterval (makeFeuille, 500);