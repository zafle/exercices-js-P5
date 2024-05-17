// votre code ici
function checkAge(number) {
    const age = parseInt(number);
    let message = "";
    if (age < 18) {
       message = "Vous êtes mineur.";
    } else if (age >= 18 && age <= 65) {
       message = "Vous êtes majeur.";
    } else if (age > 65) {
       message = "Vous êtes senior.";
    }
    alert(message);
}
checkAge(25);

export default checkAge;
