// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// .tostring, Math.sign, parseInt
// 1. Convert the int into a string, split, reverse & join
// 2. Convert the string back to integer: The parseInt() function parses a string and returns an integer
//3. times it by Math.sign to get negative number in front of the integer

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
