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

// 6. Slice Method: The Slice () method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, and ends at,
// but does not include the given end argument.

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', "Mango"];
fruits.slice(1, 3);

// output = Orange, Lemon

// 7. Splice() method adds/removes items to/from an array, and returns the removed items

var fruits = ['Banana', 'Orange', 'Apple', "Mango"];
fruits.splice(2, 0, 'Lemon', 'Kiwi')

// output = Banana, Orange, Lemon, Kiwi, Apple, Mango


