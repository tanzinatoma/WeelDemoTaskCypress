# WeelDemoTaskCypress - Signup Form Validation

## Overview
This project is a Cypress-based test automation suite for validating the signup functionality of a web application. It follows the Page Object Model (POM) for better test maintainability and readability.

## Tech Stack
- Cypress
- JavaScript
- Chai

## Features Covered
- Signup with a valid work email and password.
- Restricting signup with non-work emails (e.g., Gmail, Yahoo, Hotmail).
- Password validation checks (minimum 8 characters, special character, number, uppercase & lowercase).
- Form field validation (empty fields display error messages upon clicking outside the input).
- Button activation and deactivation based on form input validity.

## Project Structure
```
Cypress-Demo-Task/
│── cypress/
│   ├── e2e/ 
│   │   ├── pages/                  # Page Object Model for signup page
│   │   │   ├── loginpage.cy.js       
│   │   │   ├── personalinfopage.cy.js
│   │   │   ├── signuppage.cy.js 
│   │   ├── tests/
│   │   │   ├── signuptest.cy.js     
│   │   ├── fixtures/               # Test Data for signup page workflow
│   │   │   ├── personalinfo.json
│   │   │   ├── signupdata.json
│   │   ├── support/               
│   │   │   ├── commands.js
│   │   │   ├── e2e.js
│── cypress.config.js               # Cypress configuration
│── package-lock.json               # Project dependencies
│── package.json                    
│── README.md                       # Project documentation
```

## Installation & Setup
### Prerequisites
Need to have the following installed:
- Node.js 
- npm 
- Cypress

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cypress-demo-task.git
   cd cypress-demo-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Open Cypress Test Runner:
   ```sh
   npx cypress open
   ```
4. Run tests in headless mode:
   ```sh
   npx cypress run
   ```

