#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magentaBright("\n \t Hello! Welcome to syeda's todo List App \n"));
while (conditions) {
    const addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright.bold("Enter you New task")
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.greenBright.bold(`${addTask.task} is added inYour To-Do-List Successfully!`));
    const AddMoreTask = await inquirer.prompt([
        {
            name: "AddMore",
            type: "confirm",
            message: chalk.red.bold("Do You Want To Add More Task ?"),
            default: false
        }
    ]);
    conditions = AddMoreTask.AddMore;
}
console.log("Your Updated To-Do-List:", todoList);
