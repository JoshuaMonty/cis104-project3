"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieName, rating;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setmovieName();
        rating();
        printrating();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}
function rating() {
    rating = 0;
    if (rating > 0) {

    }
}
function printrating() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${movieName}'s rating: \$${rating}.`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}