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

// 8. Delete - It deletes an item from the array but the problem with delete is that it creates an void.(empty)


// 9. Shift - The shift() method removes the first item of an array, and returns that item.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

// output = Orange,Apple,Mango

// 10. Map is a property on every array in Javascript and allows you "map" over an array, modified each item in that array,
// returns you a new array after each item in the array has been modified

var numbers = [1, 2, 3];
var numbersPlusTen = numbers.map(function (num) {
    return num + 10;
});
console.log(numberPlusTen) // 11,12,13









