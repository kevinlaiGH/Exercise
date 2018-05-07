let request = require('request');

let apiKey = 'c9debf57eb998aae724e6b675b87fe4c';
let city = 'sydney';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;



request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(message);
    }
});