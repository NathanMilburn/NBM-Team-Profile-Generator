const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, role, idNumber, officeNumber, email, github }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/825c894de9.js" crossorigin="anonymous"></script>
    <title>Employee Profiles</title>
</head>
<header>
    <div class="shadow-lg jumbotron jumbotron-fluid w-100">
        <div>
            <h1 class="display-4">Our Employees</h1>
        </div>
    </div>
</header>
<body>
    <div class="row w-100">
    <div class="col=12 card">
        <div class="card-header">
            <h2 class="card-title">${name}</h2>
            <h2 class="card-title"><i class="fas fa-glasses mr-2"></i>${role}</h2>
        </div>    
        <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">ID: ${idNumber}</li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">GitHub: ${github}</li>
                </ul>
        </div>
    </div>
</div> 
</body>
</html>`;

// inquirer
//     .prompt([

//     ])
//     .then((answers) => {
//       const generateHTMLPage = generateHTML(answers)

//       fs.writeFile('index.html', generateHTMLPage, (err) =>
//       err ? console.log(err) : console.log('Employee Profile Page Created!')
//       );
//     });

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
        message: "What is the team manager's employee ID?",
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
    });
}

function addMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "what_type",
        message: "Would you like to add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "No more members to add"],
      },
    ])
    .then((val) => {
      if (val.what_type === "Engineer") {
        engineerInfo();
      } else if (val.what_type === "Intern") {
        internInfo();
      } else {
        createDocument();
      }
    });
}
