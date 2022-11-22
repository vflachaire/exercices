
const lowercase = "azertyuiopqsdfghjklmwxcvbn"
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = "&\"'(-_)=~#{[|`\\^@]}$£¤*µ!§:/;.,?<>";
let generatrice = "";
let newPassword = "";
const passwordOutput = document.getElementById("password-output");


const passwordGenerate = () => {
  let newPassword = ""; //reset
  let generatrice = ""; //reset


  if (document.getElementById ("lowercase").checked == true) generatrice += lowercase;
  if (document.getElementById ("uppercase").checked == true) generatrice += uppercase;
  if (document.getElementById ("numbers").checked == true) generatrice += numbers;
  if (document.getElementById ("symbols").checked == true) generatrice += symbols;

  if (generatrice == "") {
    alert("Veuillez choisir au moins un type de caractères");
    return;
  }

  const passwordLength = document.getElementById("password-length").value;
   console.log(passwordLength);
  // console.log(Math.floor((Math.random() * passwordLength)));
  for (let i=0; i < passwordLength; i++ ) {
     newPassword += generatrice[Math.floor((Math.random() * generatrice.length))];
     console.log(newPassword);
  }
  document.getElementById("password-output").value = newPassword;
  document.getElementById("password-output").select();
  document.execCommand("copy");
  document.getElementById("generateButton").textContent = "Copié !";

  setTimeout(() => {
    document.getElementById("generateButton").textContent = "Générer mot de passe"
  }, 2000);
} 
generateButton.addEventListener ('click', () => {
  passwordGenerate();
  
})