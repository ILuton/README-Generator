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

![alt text](${screeenshot})

## Credits
${data.contributors}

## License 

## Badges

## Features
${features}

## How to Contribute
${contributing}


## Tests
${data.tests}

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
      type: 'input',
      message: 'Pick a license you would like to include:',
      name: 'license',
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
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
});