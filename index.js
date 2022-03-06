const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "ourteam.html");

const render = require("./lib/createhtml");

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
    .then((val) => {
      const manager = new Manager(
        val.name,
        val.id,
        val.email,
        val.officeNumber
      );
      console.log(manager);
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
    .then((val) => {
      const engineer = new Engineer(
      val.name, 
      val.id, 
      val.email, 
      val.github
      );
      console.log(engineer);
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
    .then((val) => {
      const intern = new Intern(
      val.name, 
      val.id, 
      val.email, 
      val.school
      );
      teamMembers.push(intern);
      console.log(intern);
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
    .then((val) => {
      if (val.select_role === "Engineer") {
        engineerInfo();
      } else if (val.select_role === "Intern") {
        internInfo();
      } else {
        finishHtml();
      }
    });
}

function finishHtml() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
}
startGenerator();

