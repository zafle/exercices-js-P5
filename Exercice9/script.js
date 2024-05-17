// votre code ici
function checkAge(number) {
    const age = parseInt(number);
    if (age < 18) {
       const message = "Vous êtes mineur.";
    } else if (age >= 18 && age <= 65) {
       const message = "Vous êtes majeur.";
    } else if (age > 65) {
       const message = "Vous êtes senior.";
    }
    return message;
}


export default checkAge;
