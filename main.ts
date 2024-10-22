#! /usr/bin/evn node

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

//we will push the task in this array

let todoList: string[] = [];

// while Loop to run the program
let loopCondition = true;

//welCome message
console.log(chalk.magentaBright("\n\t\t -------- W E L C O M E T0 -------- \t\t\n"));
console.log(chalk.magenta("\t\t-------- T O D O L I S T - A P P L I C A T I O N -------- \t\t\n"));

//In this loop user will ask user for adding task
while (loopCondition){
    let addTodo = await inquirer.prompt([
      {
        type: "input",
        name: "appendTask",
        message: chalk.greenBright("Enter your task you want to add ... \n"),
      },
      {
        type: "confirm",
        name: "confirmation",
        message: chalk.blueBright(
          "Are you sure you want to add this to your todo list? \n"
        ),
        default: true,
      },
      {
        type: "confirm",
        name: "moreTask",
        message: chalk.redBright.bold("Do you want to add more tasks to your todo list? \n"),
        default: false,
      },
    ]);

    // if user won't add any todos then it will show this message
    if (addTodo.confirmation) {
      chalk.magenta(addTodo.add) && chalk.blueBright(addTodo.add) && todoList.push(addTodo.add);

      console.log(`\nTask added to your todo list.`);
    } else {
      console.log("\nTask not added to your todo list.");
    }

    if (!addTodo.moreTask) {
      loopCondition = false;
    }

    console.log("\n--- Your Todo List ---\n");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
    console.log("----------------------");
}