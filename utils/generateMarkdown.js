// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case 'Creative Commons':
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case 'Boost':
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]"
    case 'Eclipse':
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]"
    case 'GNU':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
    case 'IBM':
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]"
    case 'ISC':
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    case 'Perl':
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache':
      return "https://opensource.org/licenses/Apache-2.0";
    case 'Creative Commons':
      return "http://creativecommons.org/publicdomain/zero/1.0/";
    case 'Boost':
      return "https://www.boost.org/LICENSE_1_0.txt"
    case 'Eclipse':
      return "https://opensource.org/licenses/EPL-1.0"
    case 'GNU':
      return "https://www.gnu.org/licenses/gpl-3.0"
    case 'IBM':
      return "https://opensource.org/licenses/IPL-1.0"
    case 'ISC':
      return "https://opensource.org/licenses/ISC"
    case 'MIT':
      return "https://opensource.org/licenses/MIT"
    case 'Perl':
      return "https://opensource.org/licenses/Artistic-2.0"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    
    ${renderLicenseBadge(license)}${renderLicenseLink(license)}
    `
  } else {
    return
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Installation Instructions

  ${data.install}

  ## Usage Info

  ${data.usage}

  ## How to Contribute

  ${data.cont}

  ## Testing Instructions

  ${data.test}

  ## Questions

  Contact me at my GitHub: github.com/${data.github}  
  or by email: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
