#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your sentence to count the word "
    }
]);
const word = answers.sentence.trim().split(" ");
console.log(`Your sentence word count is ${word.length}`);
