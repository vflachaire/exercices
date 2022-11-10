const boutons = document.querySelectorAll('#calculatrice div');
const resultat = document.getElementById('resultat');
let calcul = "";

console.log(boutons);

for (let i = 0; i < boutons.length; i++) {
    //console.log(boutons[i]);
    boutons[i].addEventListener ('click', () => {
        if (boutons[i].id == "clear") { 
            calcul = "";
            resultat.innerHTML = calcul;
         }
        else if (boutons[i].id == "egale") {
            resultat.innerHTML = eval(calcul);
            calcul="";
        }
        else {
            calcul += boutons[i].innerText;
            resultat.innerHTML = calcul;
        }
       
    })
} 



