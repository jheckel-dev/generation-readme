
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");






const questions = [
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe the nature of your project?",
        name: "description"
    },
    {
        type: "list",
        message: "Are you using any unique licenses for this project?",
        default: "(Use Arrow Keys to Navigate)",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BDS 3", "NONE"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should we run to install your dependencies?",
        default: "npm i",
        name: "install"
    },
    {
        type: "input",
        message: "How are we running tests fot this project?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "Is there anything the user needs to know about using this repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "Does the user need to know anytning about contributing to this repo?",
        name: "contribution"
    },
];





function init() {
    inquirer.prompt(questions).then(function (data) {
        const markdown = generateMarkdown(data)
        fs.writeFile("createdmarkdown.md", markdown, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("File written to createdmarkdown.md");
        })
    })
}






// Function call to initialize app
init();
