#! /usr/bin/env node
import inquirer from 'inquirer';
// 1) computer will generate random number -Done
// 2) User input for guessing game -Done
// 3) compare input with computer generated number and show result -Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess the number between 1 to 6: ",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you are guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
