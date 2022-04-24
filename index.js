const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (data) => 

`# ${data.title}

## Description

${data.description}

## Table of Contents

## Installation
${install}

## Usage
${usage}

## Credits
${contributors}

## Badges

## Features

## How to Contribute

`



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your Project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter description of your project:',
      name: 'description',
    },
    {
     type: 'input',
     message: 'Please enter installation instructions:',
     name: 'install',
    },
    {
     type: 'input',
     message: 'Enter other contributors on this project:',
     name: 'contributors',
    },
    {
        type: 'input',
        message: 'Provide instructions for use:',
        name: 'usage',
       },
    {
     type: 'input',
     message: 'Enter other contributors on this project:',
     name: 'contributors',
    },
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
});