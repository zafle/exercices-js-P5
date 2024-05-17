// votre code ici
function checkAge(number) {
    const age = parseInt(number);
    const message = "";
    if (age < 18) {
        message = "Vous êtes mineur.";
    } else if (age >= 18 && age <= 65) {
        message = "Vous êtes majeur.";
    } else if (age > 65) {
        message = "Vous êtes senior.";
    }
    return message;
}


export default checkAge;
