const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');
const {writeFile} = require('./utils/generate-ReadMe.js');
const fs = require('fs');

const promptUser =()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name:'username',
            message: 'Please enter your GitHub username. (required)',
            validate: usernameInput=>{
                if(usernameInput){
                    return true;
                }else{
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'name',
            message: 'What is the name of your Project? (Required)',
            validate: nameInput=>{
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                    return false
                }
            }
        },
        {
            type:'input',
            name:'Description',
            message:'Please enter a description about your project. (required)',
            validate: descriptionInput =>{
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type:'confirm',
            name:'confirmTable',
            message:'Would you like to include a Table of Contents?',
            default: true
        },
        {
            type:'confirm',
            name:'confirmInstall',
            message:'Does your project require the user to follow Installation instructions?',
            default: true
        },
        {
            type:'input',
            name:'installation',
            message:'Enter the steps for installing your project.',
            when:({confirmInstall}) => {
                if(confirmInstall){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'usage',
            message: 'Please Provide instructions and examples of how your project can be used. (required)',
            validate: usageInput =>{
                if (usageInput){
                    return true;
                } else {
                    console.log('Please enter usage description!');
                    return false;
                }
            }
        },
        {
          type:'input',
          name:'contributing',
          message:'If applicable, Please explain how others can contribute to your project.',  
        },
        {
           type:'input',
           name:'test',
           message: 'If applicable, please provide tests for your project and examples on how to run them.' 
        },
        {
            type: 'list',
            name:'license',
            message: 'Select a license you would like your project to have. (required)',
            choices:['MIT', 'GNU', 'Apache'],
            default:['MIT'],
            validate: licenseInput =>{
                if(licenseInput){
                    return true;
                } else{
                    console.log('Please select a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message:'Please provide an email address that questions about your project can be directed to. (required)',
            validate: questionInput=>{
                if(questionInput){
                    return true;
                } else {
                    console.log('Please enter an Email address!')
                    return false;
                }
            }
        }
    ]);
};


        promptUser()
    .then(answers=>{
        return generateReadMe(answers);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML)
    })
    .catch(err=>{
        console.log(err);
    })