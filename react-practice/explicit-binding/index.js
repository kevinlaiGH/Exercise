// Explicit binding with
// .call, .apply and .bind

var sayName = function (lang1, lang2, lang3) {
    console.log('My name is' + stacy.name + 'and I know ' + lang1 + ',' + lang2 + ',and' + lang3);
};

var stacy = {
    name: 'Stacy',
    age: 34
};

var languages = ['Javascript', 'Ruby on Rails', 'Python']

// sayName.call(stacy, languages[0], languages[1], languages[2], languages[3]);

// sayName.apply(stacy, langauges);

var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newFn();