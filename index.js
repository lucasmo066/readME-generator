const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');
const {writeFile} = require('./utils/generate-ReadMe.js');
const fs = require('fs');