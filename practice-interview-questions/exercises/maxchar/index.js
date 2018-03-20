// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common string questions: counting characters and comparing the number of two strings
// 1. what is the most common character in the string?
// 2. Does string A have the same characters as string B?
// 3. Does the given string have any repeated characters in it?

// Steps
// 0. make a new object -> const chars = {}; and a string -> const string = "hello there";
// 1. we can iterate over strings by 'for (let char of 'string')'
// 2. for every character inside there, we will + the char into the property & assign the value of 1
// or if seen the character before, we will +1 to it
// i) if nothing exist right now (!chars[char]) , set chars@char (chars[char]) to 1
// ii) otherwise assume the number is already there, take chars@char and increment by 1

//if charMap@char is greater than max, we gonnna update both max and maxchar
//

// for (let __ in __) is different from for(let __ for __)
// in is for
function maxChar(str) {
    // const string = "hello there";
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;








// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '',

//     for (let char of str) {
//         if (charMap[char]) {
//             char[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }

//     console.log(charMap);
// }

// module.exports = maxChar;
