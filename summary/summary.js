// 1. Push Method: add items to the end of an array, returns to new length

let fruits = ['🍌', '🍊', '🍎', '🍋'];

fruits.push['🍇'] // 🍌, 🍊, 🍎, 🍋, 🍇

// 2. Pop() Method:  removes last element of an array and returns that element

let fruits = ['🍌', '🍊', '🍎', '🍋'];

fruits.pop() // 🍌, 🍊, 🍎

// 3. Find Method: find an element in an array

function BiggerThan(element) {
    return element >= 15;
}

[12, 5, 8, 130, 44].find(BiggerThan); //130

//4. Filter Method: Filters an array based on callback returning true or false.
// If callback returns true it willbe included in the result

var name = ['Kevin', 'Ka Ming', 'Lai'];
const output = names.filter(t => t.length > 3);
console.log(output);
// output['Kevin', 'Ka Ming']

// 5. Sort Method: The Sort Method sorts the items of an array.
// By default, the sort() method sorts the values as strings in alphabetical order and ascending order.

let fruits = ['Banana', 'Orange', 'Apple', "Mango"];
fruits.sort();
// output = Apple, Banana, Mango, Orange




