#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Welcome To Al-Mustafa Islamic Bank");
let pinAns = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter Your Pin Number",
    },
]);
if (pinAns.pincode === myPin) {
    console.log("Your Pin Code Is Correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What You Want To Do?",
            choices: ["withdraw", "checkbalance", "fastcash"],
        },
    ]);
    // if user select withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please Select Amount",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Sorry!! You Have Insufficient Balance!!!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfuly`);
            console.log(`Your Reamaining Balance Is: ${myBalance}`);
        }
    }
    // if user select checkbalance
    if (operationAns.operation === "checkbalance") {
        console.log(`Your Balance Is: ${myBalance}`);
    }
    // if user select fastcash
    if (operationAns.operation === "fastcash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fast",
                type: "list",
                message: "Please Amount You Want To Withdraw",
                choices: [1000, 3000, 5000],
            },
        ]);
        if (fastCash.fast > myBalance) {
            console.log("Sorry You Have Insufficient Balance");
        }
        else {
            myBalance -= fastCash.fast;
            console.log(`${fastCash.fast} Withdraw Successfuly`);
            console.log(`Your Remaining Balance Is: ${myBalance}`);
        }
    }
}
else {
    console.log("You Entered A Wrong Pin");
}
