// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer= require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of this project?',
        //validate if user enters a value
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('What is the name of your project?');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Write a short description of this project.',
        //validate if user enters a value
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Enter a description of your project');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'installation',
        message:'Provide installation instructions for your project.',
        //validate if user enters a value
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('how can you install your project');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'How is your project used?',
        //validate if user enters a value
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Provide instructions to use your project');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'contributors',
        message:'List any contributors on this project.',
        //validate if user enters a value
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Contributors, if this is a solo project, leave empty.');
                return false;
            }
        },
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
        message:'Provide instructions to test your project.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Instructions to test your app.');
                return false;
            }
        },
    },
    {
        type:'input',
        name:'email',
        message:'Provide an email for contact.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter your Email');
                return false;
            }
        },

    },
    {
        type:'input',
        name:'github',
        message:'Provide a github username.',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Enter your Github Username');
                return false;
            }
        },
    }

];
inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput)
        return writeToFile('./utils/README.md', generateMarkdown(userInput));
    })

// TODO: Create a function to write README file
function writeToFile(fileInfo, data) {
    return new Promise((res, rej) => {
    fs.writeFile(fileInfo, data, err => {
        if (err) {
            rej(err);
            return;
        }
        res({
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
.then(writeFileResponse => {
    console.log(writeFileResponse);
})


