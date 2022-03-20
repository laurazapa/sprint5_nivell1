// API urls
const APIurl = 'https://icanhazdadjoke.com/';
const myInit = {
        headers: {'Accept':'application/json'}
};

// https://tenor.com/view/celery-gif-11290748


/*******************************************/
// EXERCISE 1: get jokes 

// get button to call next joke and add click event
const nextJokeButton = document.getElementById('nextJokeButton');
nextJokeButton?.addEventListener('click', nextJoke);

// function that fetches the API to get a joke
async function nextJoke(){

    // // FETCH
    // fetch(APIurl, myInit)
    //     .then(response => response.json())
    //     .then(joke => {
    //         console.log(joke.joke);
    //         let jokep = document.getElementById('joketext');
    //         jokep!.innerHTML = joke.joke;
    //     });

    // // ASYNC/AWAIT
    let response = await fetch(APIurl, myInit);
    let joke = await response.json();
    let jokep = document.getElementById('joketext');
    jokep!.innerHTML = joke.joke;

}

/****************************************** */
// EXERCISE 3: scores

//create joke class
class Joke {
    //properties
    public joke: String;
    public score: Number;
    public date: String;

    //construct
    constructor(joke: String, score: Number, date: String){
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}

const reportAcudits: Joke[] = [];

const ratingButtons = document.querySelectorAll('.rateButton');
for(let ratingButton of ratingButtons){
    ratingButton.addEventListener('click', vauleJoke);
}

function vauleJoke(event: any){
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
    let joke = document.getElementById('joketext')?.innerHTML;
    let date = (new Date()).toISOString();
    let newJoke = new Joke(joke!, score, date);
    reportAcudits.push(newJoke);

    console.log(reportAcudits);

}