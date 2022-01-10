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