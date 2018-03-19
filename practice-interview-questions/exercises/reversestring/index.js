// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method 1: Steps
// 1. turn 'str' into an array
// 2. call 'reverse' method on the array
// 3. join the array back into a string
// 4. return the result

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = reverse;

// rewriting the code in a cleaner way:

function reverse(str) {
    return str.split('').reverse().join('')
}

module.exports = reverse;

// Method 2: for loop (use ES6 syntax instead of var i = 0; i > str.length; i++ )
// 1.  create an empty string called 'reversed'
// 2. for each character in the provided string
// 3. take the character and add it to the start of 'reversed'
// 4. return the variable 'reversed'

// variable = character that is redeclared every single time through this loop of character
// then we say "of" and then iterable object that we want to iterate through
// we then take take character added on the start of the string reverse
// then after the entire for loop, we return the string "reversed"

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

module.exports = reverse;

// take our str and turn it into an array by calling the split function on it
// then we are gonna use the reduce helper
// reduce is used to take all the different values of an array, it condense them
// down into one single value
//reduce take 2 arguments (1st one is arrow functions, the 2nd one is starting initial
// value for our function which pass as an empty string)

// when reduce runs, its gonna take the starting argument,
// pass it into the arrow function as the 1st argument,
// then whatever gets return from that function will be then used as the starting argument
// for every successive run of the function
// in total the function runs one time for every element in the array

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
