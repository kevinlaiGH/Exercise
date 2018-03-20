// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false (gfedcba)

// return statement is used when we need to export raw data from inside of a function.
// console.log works fine if all we want is to display data
// but when we want to reuse data on another script we need to export it with a return statement

// we want to reverse out string first
// if str=== reverse return true, if not return false

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

module.exports = palindrome;
