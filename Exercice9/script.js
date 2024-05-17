// votre code ici
function checkAge(number) {
    const age = parseInt(number);
    if (age < 18) {
        alert("Vous êtes mineur.");
    } else if (age >= 18 && age <= 65) {
        alert("Vous êtes majeur.");
    } else if (age > 65) {
        alert("Vous êtes senior.");
    }
}


export default checkAge;
