// 1. We don't know the name is, until the function is invoked

var sayName = function (name) {
    console.log('Hello, ' + name);
};

sayName('Kevin');

// 2a. implicit binding says that when you call a function sayName() or when a funcrtion is invoked,
// look to the left of the dot (me), that is what the 'this' keyword is referring to.
var me = {
    name: 'Kevin',
    age: 25,
    sayName: function () {
        console.log(this.name);
    }
}

me.sayName();

// 2b.

var sayNameMixin = function (obj) {
    obj.sayName = function () {
        console.log(this.name);
    }
}
var me = {
    name: 'Kevin',
    age: 'age'
}

var you = {
    name: 'Bernie',
    age: ''

}

sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();

// -------------------------------------------------------

var Person = function (name, age) {
    return {
        name: name,
        age: age,
        sayName: function () {
            console.log(this.name);
        },
        mother: 'Lauren',
        sayName: function () {
            console.log(this.name);
        }
    }
}

var jim = Person('Jim', 42);
jim.sayName();
jim.mother.sayName();