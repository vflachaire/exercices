let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Python", "Java", "C++"],
        admin: false,
    },
    {
        pseudo: "Clara",
        age: 29,
        technos: ["Javascript", "CSS", "HTML"],
        admin: false,
    },
    {
        pseudo: "Denis",
        age: 43,
        technos: ["PHP", "React", "C-Sharp"],
        admin: true,
    },
]

const target = document.getElementById("target");
const prenom = document.getElementById("prenom");
let i = 0;// parcours le tableau technos 
let j = 0;// parcours l'objet date
let k = 0;//parcours les lettres
let efface = false;

const affiche = () => {

    // console.log("j = " + j);
    // console.log("i = " + i);
    // console.log("k = " + k);

    setTimeout ( () => { 
        if (efface == true) { //effacement des lettres
            if (k > 0) {
                target.lastChild.remove();
                k--;
            }
            else { // k = 0, on stoppe l'effacement 
                efface = false;
            }
            affiche();
        }
        else if (j < data.length) {
            
            if (k < data[j].technos[i].length ) {
                target.innerHTML += "<span>" + data[j].technos[i][k] + "</span>";
                prenom.innerHTML = data[j].pseudo + " ";
                k++;
                affiche();
            }
            else if (k == data[j].technos[i].length) { 
                efface = true; // activation de l'effacement  
                i++; // passage au mot suivant
            
                if (i == data[j].technos.length) { // passage au data suivant
                    j++;
                    i = 0;
                }
                if (j < data.length) { //laisse le dernier mot affiché
                    setTimeout( () => { // pause à la fin d'affichage du mot
                        affiche();
                    },2000)
                }    
            }
        }
        
    }, 100)
}

affiche();


