
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/${data.License})

  ## Table of contents
  > - [Description](#description)
  > - [Installation](#installation)
  > - [Usage](#usage)
  > - [Contribution](#contribution)
  > - [Testing](#testing)
  > - [Additional Information](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.install}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Feedback:

  > - GitHub:
  [${data.username}](https://github.com/${data.username})
  > - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
