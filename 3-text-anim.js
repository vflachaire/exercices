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
        technos: ["PHP", "React", "C-sharp"],
        admin: true,
    },
]

const target = document.getElementById("target");
let i = 0; let j = 0;

const affiche = () => {
    console.log(i + " - " + j);
    setTimeout ( () => { 
        if (i < data[j].technos.length ) {
            target.innerHTML += data[j].technos[i];
            i++;
            if (i == data[j].technos.length && j < data.length ) {
                j++
                i = 0;
            }
            affiche();
        }
    }, 1000)
}

affiche();


