const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (data) => 

`# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

![alt text](${data.screeenshot})

## Credits
${data.contributors}

## License 
[![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](https://shields.io/)

${data.license}
See file in the directory for more licensing information

## Features
${data.features}

## Contributing
${data.contributing}


## Tests
${data.tests}

## Questions

If you have any other questions you can contact me through github at https://github.com/${data.github}. My profile name is ${data.github}. Or you can email me at: ${data.email}
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
      message: 'Provide instructions for use:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter url or Relative path if you want to include screenshot:',
      name: 'screenshot',
    },
    {
      type: 'input',
      message: 'List people how helped contribute to your project:',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'Pick a license you would like to include:',
      name: 'license',
      choices: ["MIT","Apache-2.0","GPL-3.0","BSD-2","BSD-3","BSD-4"]
    },
    {
      type: 'input',
      message: 'List any features that your project has that you want the user to know about:',
      name: 'features',
    },
    {
     type: 'input',
     message: 'Enter information for others on how to contribute:',
     name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter information on how to run tests for project:',
      name: 'tests',
     },
     {
      type: 'input',
      message: 'Enter your Github Username:',
      name: 'github',
     },
     {
      type: 'input',
      message: 'Enter your Email:',
      name: 'email',
     },
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
});