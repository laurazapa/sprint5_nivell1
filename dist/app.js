"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// API urls
const APIurl = 'https://icanhazdadjoke.com/';
const myInit = {
    headers: { 'Accept': 'application/json' }
};
// https://tenor.com/view/celery-gif-11290748
/*******************************************/
// EXERCISE 1: get jokes 
// get button to call next joke and add click event
const nextJokeButton = document.getElementById('nextJokeButton');
nextJokeButton === null || nextJokeButton === void 0 ? void 0 : nextJokeButton.addEventListener('click', nextJoke);
// function that fetches the API to get a joke
function nextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        // // FETCH
        // fetch(APIurl, myInit)
        //     .then(response => response.json())
        //     .then(joke => {
        //         console.log(joke.joke);
        //         let jokep = document.getElementById('joketext');
        //         jokep!.innerHTML = joke.joke;
        //     });
        // // ASYNC/AWAIT
        let response = yield fetch(APIurl, myInit);
        let joke = yield response.json();
        let jokep = document.getElementById('joketext');
        jokep.innerHTML = joke.joke;
    });
}
/****************************************** */
// EXERCISE 3: scores
//create joke class
class Joke {
    //construct
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}
const reportAcudits = [];
const ratingButtons = document.querySelectorAll('.rateButton');
for (let ratingButton of ratingButtons) {
    ratingButton.addEventListener('click', vauleJoke);
}
function vauleJoke(event) {
    var _a;
    let idButtonPressed = event.target.id;
    let score = 0;
    switch (idButtonPressed) {
        case 'badButton':
            score = 1;
            break;
        case 'normalButton':
            score = 2;
            break;
        case 'goodButton':
            score = 3;
            break;
        default:
            return 'No button pressed';
    }
    let joke = (_a = document.getElementById('joketext')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    let date = (new Date()).toISOString();
    let newJoke = new Joke(joke, score, date);
    reportAcudits.push(newJoke);
    console.log(reportAcudits);
}
//# sourceMappingURL=app.js.map