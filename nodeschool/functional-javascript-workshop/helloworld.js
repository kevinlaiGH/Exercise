//Write a function that takes an input string and returns it uppercased.

function upperCaser(input) {
    return input.toUpperCase()
}

module.exports = upperCaser

//the same as this:

module.exports = function (input) {
    return input.toUpperCase()
}

