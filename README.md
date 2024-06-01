# Cypress Automation Framework

This repository contains an advanced Cypress automation framework for testing the personal website of Santiago Madriz. The framework includes comprehensive tests for different sections and functionalities of the site, as well as accessibility checks.

## Project Structure

cypress-automation-framework/
├── cypress/
│   ├── e2e/
│   │   ├── home.cy.js
│   │   ├── navigation.cy.js
│   │   ├── sections.cy.js
│   │   ├── accessibility.cy.js
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js
│   │   └── index.js
│   └── plugins/
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cypress-automation-framework.git

2.	Navigate to the project directory:
    ```bash
    cd cypress-automation-framework

3.	Install the dependencies:
    ```bash
    npm install

4.	Install cypress-axe for accessibility testing:
    ```bash
    npm install cypress-axe --save-dev