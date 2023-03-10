const inquirer = require('inquirer');
const fs = require('fs');



function init() {
  // TODO: Manager function
  function addManager() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `Please enter manager's name:`
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter email:'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter office number:'
      }
    ])
      .then((data) => {
        console.log(data)
        teamBuilder();
      })
  }
  // TODO: Engineer function
  function addEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `Please enter engineer's name:`
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter email:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter GitHub username:'
      }
    ])
      .then((data) => {
        console.log(data)
        teamBuilder();
      })
  };
  
  // TODO: Intern function
  function addIntern() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `Please enter intern's name:`,
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter email:'
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter school:'
      }
    ])
    .then((data) => {
      console.log(data)
      teamBuilder();
    })
  };

  function teamBuilder() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'memberChoice',
        message: 'What member would you like to add?',
        choices: ['Engineer', 'Intern', 'None']
      }
    ])
    .then((data) => {
      if (data.memberChoice === 'Engineer') {
        addEngineer();
      } else if (data.memberChoice === 'Intern') {
        addIntern();
      } else {
        return
      }
    })
  };

  addManager();
}


init();