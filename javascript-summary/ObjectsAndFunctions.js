
// 1. Closure
function retirement(retirementAge) {
    var a = 'years left until retirement.';
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge -
            age) + a);
    }
}
// retirement age is 66
var retirementStrayaaa = retirement(66);
// Gives same result...
retirementStrayaaa(1991); // 27 years left until retirement
retirement(66)(1991); //27 years left until retirement