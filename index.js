const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = [];

function startGenerator() {
  managerInfo();
  generateHtml();
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
      teamMembers.push(manager);
      // updateHTML();
      addMembers();
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
        // updateHTML();
        finishHtml();
      }
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
      const engineer = new Engineer(val.name, val.id, val.email, val.github);
      teamMembers.push(engineer);
      // updateHTML();
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
      const intern = new Intern(val.name, val.id, val.email, val.school);
      teamMembers.push(intern);
      // updateHTML();
      addMembers();
    });
}

function generateHtml() {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
  </head>
  <body>
    <div class="shadow-lg jumbotron jumbotron-fluid w-100">
      <div class="d-flex justify-content-center container">
        <h1 class="display-4">Our Employees</h1>
      </div>
    </div>
      <div class="container">
          <div class="row">`;
  fs.writeFile("ourTeam.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function finishHtml() {
  const html = ` </div>
  </div>
  
</body>
</html>`;

  fs.appendFile("ourTeam.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("end");
}

startGenerator();

// Test function for appending to the html file //
// function updateHTML(member) {
//   const name = member.getName();
//   const role = member.getRole();
//   const id = member.getId();
//   const email = member.getEmail();
//   let data = "";
//   if (role === "Manager") {
//     const officeNumber = member.getOfficeNumber();
//     data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Manager</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">Employee ID: ${id}</li>
//                 <li class="list-group-item">Email: ${email}</li>
//                 <li class="list-group-item">Office #: ${officeNumber}</li>
//             </ul>
//             </div>
//         </div>`;
//   } else if (role === "Engineer") {
//     const gitHub = member.getGithub();
//     data = `<div class="col-6">
//       <div class="card mx-auto mb-3" style="width: 18rem">
//       <h5 class="card-header">${name}<br /><br />Engineer</h5>
//       <ul class="list-group list-group-flush">
//           <li class="list-group-item">ID: ${id}</li>
//           <li class="list-group-item">Email Address: ${email}</li>
//           <li class="list-group-item">GitHub: ${gitHub}</li>
//       </ul>
//       </div>
//   </div>`;
//   } else {
//     const school = member.getSchool();
//     data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Intern</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">School: ${school}</li>
//             </ul>
//             </div>
//         </div>`;
//   }
//   console.log("adding team member");
//   fs.appendFile("ourTeam.html", data, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }
