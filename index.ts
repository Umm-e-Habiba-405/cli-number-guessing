#! /user/bin/env node 
import inquirer from "inquirer";

// 1)computer will generate will a random number  

// 2) User input for guessing number

// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random()* 6 +1);
console.log("Welcome to  number guessing game ");


const answers = await inquirer.prompt([
{
    name :"userGuessdNumber",
    type: "number",
    message: "Plesae guess a number between one to six :",

}
]);
if(answers.userGuessdNumber=== randomNumber){
    console.log("Congratulations! you guessed right number.");
}
else{
    console.log("you gueesed wrong number");
}