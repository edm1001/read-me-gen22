// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of this project?'
    },
    {
        type:'input',
        name:'description',
        message:'Write a short description of this project.'
    },
    {
        type:'input',
        name:'Installation',
        message:'Provide installation instructions for your project.'
    },
    {
        type:'input',
        name:'Usage',
        message:'How is this project used?'
    },
    {
        type:'input',
        name:'Contributors',
        message:'List any contributors on this project.'
    },
    {
        type:'list',
        name:'license',
        message:'Which licenses are needed for this project?',
        choices: ['MIT', 'Apache', 'agpl', 'N/A']
    },
    {
        type:'input',
        name:'test',
        message:'Provide instructions to test your project.'
    },
    {
        type:'input',
        name:'email',
        message:'Provide an email for contact.'
    },
    {
        type:'input',
        name:'github',
        message:'Provide a github username.'
    }

];
inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput)
        return writeToFile('./utils/README.md', generateMarkdown(userInput));
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
    fs.writeToFile('./dist/generated-README.md', fileContent, err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'Your README file has been created succesfully'
        });
    });
});
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readMeInfo => {
    return generateMarkdown(readMeInfo);
})
.then(readMePage => {
    return writeToFile(readMePage);
})
.then(writeFileResponse => {
})
.catch(err => {
});
