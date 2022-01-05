const palindromes = function (input) {
    //turn input into an array
    let array = Array.from(input);
    //make an array with only the letters in lower case
    let reduced = array.filter(char => char.toUpperCase() != char.toLowerCase());
    reduced = reduced.map(ele => ele.toLowerCase());
    //make a reverse array
    let revArray = reduced.map(ele => ele);
    revArray.reverse();
    //compare arrays and return if true
    return equals(reduced, revArray);

};

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

// Do not edit below this line
module.exports = palindromes;
