// A recursive function is a function which calls itself.

// For example, this recursive function will take an array of words,
// and return an array of those words, uppercased.
function toUpperArray(items) {
    if (!items.length) return []             // end condition
    var head = items[0]                      // item to operate on
    head = head.toUpperCase()                // perform action
    var tail = items.slice(1)                // next
    return [head].concat(toUpperArray(tail)) // recursive step
}

toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']

module.exports = toUpperArray;