
const generateInstall = installText =>{
    if(!installText){
        return '';
    }

    return `
## Installation
${installText}
    `
}

const generateContribute =contributeText=>{
    if(!contributeText){
        return '';
    }

    return `
## Contributing
${contributeText}
    `
}

const generateTest = testText=>{
    if(!testText){
        return ''
    }

    return `
## Test
${testText}
    `
}

const generateToC =(tableText, installation, contributing, test, required)=>{
    if(!tableText){
        return '';
    } else{

    let tocDraft = `
## Table of Contents   
    `
    if(installation){
        tocDraft += `
* [Installation](#Installation)`
    };

    tocDraft+=`
* [Usage](#Usage)
* [License](#License)`;

    if(contributing){
        tocDraft += `
* [Contributing](#Contributing)`
    };

    if(test){
        tocDraft+=`
* [Test](#Test)`
    };

    tocDraft += `
* [Questions](#Questions)`;

    return tocDraft;
    }
}
    
module.exports = answers =>{
    const{confirmTable, installation, contributing, test, ...required} = answers;

    return `
# ${required.name}
![license](https://img.shields.io/badge/License-${required.license}-blue)
## Description
${required.Description}
${generateToC(confirmTable, installation, contributing, test, required)}
${generateInstall(installation)}
## Usage
${required.usage}
## License
This project is licensed under ${required.license}
${generateContribute(contributing)}
${generateTest(test)}
## Questions 
Click on my username to be directed to my GitHub profile. [${required.username}](https://github.com/${required.username})
    
If you have any questions about this project, please feel free to reach out via email at ${required.questions}
`
};