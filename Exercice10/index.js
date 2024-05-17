//votre code ici
function printNumbers(n) {
    const number = parseInt(n);
    const numbers = [];
    let i = 1;
    for (i = 1; i <= number; i++) {
        numbers += i;
    }
    let numbersToString = numbers.join(' ');
    return numbersToString;
}
export default printNumbers;
