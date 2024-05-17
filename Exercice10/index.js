//votre code ici
function printNumbers(n) {
    const number = parseInt(n);
    let numbers = [];
    let i = 1;
    for (i = 1; i <= number; i++) {
        numbers.push(i);
    }
    let numbersToString = numbers.join(' ');
    return numbersToString;
}
export default printNumbers;
