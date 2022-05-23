const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'none') {
    return `
    [${license}](${findalinkforlicensebadge})
      `;
    } else {
      return '';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'none') {
    return `
    [${license}](findalinkfor a opensource license${license})
      `;
    } else {
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return `
    [${license}]
    ${renderLicenseLink}(license)
      `;
    } else {
      return ' ';
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  # ${data.title}

  
  ## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contribution)
* [Tests](#Tests)
* [Question](#Question)
* [License](#license)
## Table of Contents

## Description 
${data.description}


---
## Installation
${data.installation}
---
## Usage
${data.usage}

Provide intructions on how to use your app.
---
## Contributors
${data.contributors}

---
## Tests
${data.test}
Provide examples on how to run the tests.
---
## License

Provide a license to choose what other users can do with your project
---
## Question
${data.question}
Contact me through either:
[GitHub](https://github.com/${data.github})
[Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
