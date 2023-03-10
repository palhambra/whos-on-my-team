const inquirer = require('inquirer');
const fs = require('fs');



function init() {
// TODO: Manager function
function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee id'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter email'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter office number'
    }
  ])
  .then((data) => {
    console.log(data)
  })
}
addManager();
// TODO: Engineer function
// TODO: Intern function
}


init();