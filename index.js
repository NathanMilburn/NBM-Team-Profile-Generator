// Pull from classes for each role
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./src/createhtml");
const teamMembers = [];

function startGenerator() {
  managerInfo();
}

function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the full name of the team manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);
      addMembers();
    });
}

function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
      data.name, 
      data.id, 
      data.email, 
      data.github
      );
      teamMembers.push(engineer);
      addMembers();
    });
}

function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern currently attend?",
      },
    ])
    .then((data) => {
      const intern = new Intern(
      data.name, 
      data.id, 
      data.email, 
      data.school
      );
      teamMembers.push(intern);
      addMembers();
    });
}

function addMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "select_role",
        message: "Would you like to add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((data) => {
      if (data.select_role === "Engineer") {
        engineerInfo();
      } else if (data.select_role === "Intern") {
        internInfo();
      } else {
        finishHtml();
      }
    });
}

function finishHtml() {
  fs.writeFileSync(outputPath, render(teamMembers));
}

startGenerator();


