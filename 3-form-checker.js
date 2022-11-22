

const form = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
//console.log(inputs);
//const pseudo = document.getElementById("pseudo");

let pseudo;
let email;
let password;
let confirm;

const affichError = ((identifiant, message,validation) => {
  console.log(identifiant);
  const container = document.querySelector("." + identifiant + "-container");
  const span = document.querySelector("." + identifiant + "-container > span");
  //console.log(span);
  if (validation == false) {
    container.classList.add("error");
    span.textContent = message;
  }
  else {
    container.classList.remove("error");
    span.textContent = "";
  }
})

const pseudoCheck = ((value) => {
  const pseudoContainer = document.querySelector(".pseudo-container");
  const pseudoSpan = document.querySelector(".pseudo-container > span");
  if (value.length > 0 && (value.length < 3 || value.length > 20) ) {
    affichError("pseudo","La longueur du pseudo soit être comprise entre 3 et 20 caractères",false);
    pseudo = null;
  }
  else  if (!value.match(/^[a-zA-Z0-9-._]*$/) ) {
    affichError("pseudo","Le pseudo ne doit pas contenir de caractères spéciaux",false);
    pseudo = null;
  }
  else {
    affichError("pseudo","",true);
    pseudo = value;
  }
} )

const emailCheck = ((value) => {
  const emailContainer = document.querySelector(".email-container");
  const spanEmail = document.querySelector(".email-container > span");

  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    affichError("email","Vérifiez votre email",false);
    email = null;
  }
  else {
    affichError("email","",true);
    email = value;
  }
})

const passwordCheck = ((value) => {
  const progressBar = document.getElementById("progress-bar");
  console.log(value);

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  )
      {
        affichError("password","Le mot de passe doit contenir 8 caractères minimum, dont une majuscule, un chiffre et un caractère spécial",false);
        passordValue = null;
        progressBar.classList.add("progressRed");
      }
  else if (value.length < 12){
    affichError ("password", "", true);
    progressBar.classList.add("progressBlue");
    password = value;
  }
  else if (value.length >= 12){
    affichError ("password", "", true);
    progressBar.classList.add("progressGreen");
    password = value;
  }
  // console.log("pW = " + password);
  // console.log("cV = " + confirm);

  if ((confirm == true) && confirm != password) {
    affichError("confirm","les deux mots de passe doivent être identiques",false);
    confirm = false;
  }
  else if (confirm == false) {
    confirmCheck (password);
  }

})

const confirmCheck = ((value) => {

 if ((value)  && !(password == value)) {
    affichError("confirm","les deux mots de passe doivent être identiques",false);
    confirm = false;
  }
  else {
    affichError("confirm", "", true);
    confirm = true;
  }
})


inputs.forEach( input => {
    //console.log(input.id);
    input.addEventListener ('input', (e) => {
      switch (input.id) {
        case 'pseudo':
          pseudoCheck(input.value);
          break;
        case 'email':
          emailCheck(input.value);
          break;
        case 'password':
          passwordCheck(input.value);
          break;
        case 'confirm':
          confirmCheck(input.value);
        default:
          null;
      }
  })
  }
)

form.addEventListener ("submit", (e) => {
  e.preventDefault();
  if ((pseudo) && (email) && (password) && (confirm)) {
    const data = {
      pseudo,
      email,
      password
    }
    console.log(data);
  }
}

)







/*
Correction de l'exercice
*/

// const form = document.querySelector("form");
// const inputs = document.querySelectorAll(
//   'input[type="text"], input[type="password"]'
// );
// const progressBar = document.getElementById("progress-bar");
// let pseudo, email, password, confirmPass;

// const errorDisplay = (tag, message, valid) => {
//   const container = document.querySelector("." + tag + "-container");
//   const span = document.querySelector("." + tag + "-container > span");

//   if (!valid) {
//     container.classList.add("error");
//     span.textContent = message;
//   } else {
//     container.classList.remove("error");
//     span.textContent = message;
//   }
// };

// const pseudoChecker = (value) => {
//   if (value.length > 0 && (value.length < 3 || value.length > 20)) {
//     errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
//     pseudo = null;
//   } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//     errorDisplay(
//       "pseudo",
//       "Le pseudo ne doit pas contenir de caractères spéciaux"
//     );
//     pseudo = null;
//   } else {
//     errorDisplay("pseudo", "", true);
//     pseudo = value;
//   }
// };

// const emailChecker = (value) => {
//   if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
//     errorDisplay("email", "Le mail n'est pas valide");
//     email = null;
//   } else {
//     errorDisplay("email", "", true);
//     email = value;
//   }
// };

// const passwordChecker = (value) => {
//   progressBar.classList = "";

//   if (
//     !value.match(
//       /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
//     )
//   ) {
//     errorDisplay(
//       "password",
//       "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
//     );
//     progressBar.classList.add("progressRed");
//     password = null;
//   } else if (value.length < 12) {
//     progressBar.classList.add("progressBlue");
//     errorDisplay("password", "", true);
//     password = value;
//   } else {
//     progressBar.classList.add("progressGreen");
//     errorDisplay("password", "", true);
//     password = value;
//   }
//   if (confirmPass) confirmChecker(confirmPass);
// };

// const confirmChecker = (value) => {
//   if (value !== password) {
//     errorDisplay("confirm", "Les mots de passe ne correspondent pas");
//     confirmPass = false;
//   } else {
//     errorDisplay("confirm", "", true);
//     confirmPass = true;
//   }
// };

// inputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     switch (e.target.id) {
//       case "pseudo":
//         pseudoChecker(e.target.value);
//         break;
//       case "email":
//         emailChecker(e.target.value);
//         break;
//       case "password":
//         passwordChecker(e.target.value);
//         break;
//       case "confirm":
//         confirmChecker(e.target.value);
//         break;
//       default:
//         nul;
//     }
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (pseudo && email && password && confirmPass) {
//     const data = {
//       pseudo,
//       email,
//       password,
//     };
//     console.log(data);

//     inputs.forEach((input) => (input.value = ""));
//     progressBar.classList = "";

//     pseudo = null;
//     email = null;
//     password = null;
//     confirmPass = null;
//     alert("Inscription validée !");
//   } else {
//     alert("veuillez remplir correctement les champs");
//   }
// });
