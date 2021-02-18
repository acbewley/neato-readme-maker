const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "install"
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution Guidelines:",
        name: "cont"
    },
    {
        type: "input",
        message: "Test Instructions:",
        name: "test"
    },
    {
        type: "input",
        message: "License:",
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", response)
    })
}

// Function call to initialize app
init();
