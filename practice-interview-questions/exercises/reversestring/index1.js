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
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;