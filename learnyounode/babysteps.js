//setting result = 0 so you can add from 0 in the beginning
let result = 0
// make for loop to iterate the array starting from 2

//The Number JavaScript object is a wrapper object allowing you to work with numerical values.
//A Number object is created using the Number() constructor.

for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// var d = new Date('December 17, 1995 03:24:00');
// console.log(Number(d));

