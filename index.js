const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, github, linkedin}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Employee Profiles</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Employee Name: ${name}</h1>
          <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
          <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${github}</li>
            <li class="list-group-item">LinkedIn: ${linkedin}</li>
          </ul>
        </div>
    </div>
</body>
</html>`;

inquirer
    .prompt([
    
    ])
    .then((answers) => {
      const generateHTMLPage = generateHTML(answers)

      fs.writeFile('index.html', generateHTMLPage, (err) => 
      err ? console.log(err) : console.log('Employee Profile Page Created!')
      );
    });

    // Test Template for html //
/* <div id="employeeList" class="container mt-4">
    <div class="row">
        <div class="col col-md-4 card bg-primary text-white Employee1" style="width: 18rem;">
            <div class="card-body">
                <h4 id="Name" class="card-title Employee1"></h4>
            </div>
        <ul class="list-group list-group-flush Stats">
            <li class="list-group-item Temp" id="name"></li>
            <li class="list-group-item Wind" id="Wind"></li>
            <li class="list-group-item Humidity" id="Humidity"></li>
        </ul>
    </div> */