// Advance javascript

// 1. Closure: an inner function has always access to the variables and parameters of its outer function, evne after the outer function has returned
function retirement(retirementAge) {
    var a = 'years left until retirement.';
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge -
            age) + a);
    }
}
// retirement age is 66
var retirementAustralia = retirement(66);
var retirementHongKong = retirement(70);
// Gives same result...
retirementAustralia(1991); // 27 years left until retirement
retirement(66)(1991); //27 years left until retirement

retirementHongKong(1991);



