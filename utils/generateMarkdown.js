// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
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
