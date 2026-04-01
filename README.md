
CODE Automation Testing Framework
A Playwright + JavaScript based end-to-end (E2E) testing framework designed for the CODE platform (staging environment). 
This project implements the Page Object Model (POM) pattern and utilizes Custom Fixtures for a scalable and maintainable testing architecture.

Follow these steps to set up the environment and run the tests on your local machine.

1. Prerequisites
Ensure you have the following installed:

Node.js (v18 or higher)

VS Code (recommended) + Playwright Test extension

2. Installation
Clone the repository and install the necessary dependencies:
# Install NPM packages
npm install

# Install Playwright browsers
npx playwright install

3. Environment Setup
Create a .env file in the root directory to manage your environment variables (Base URL, credentials, etc.):

BASE_URL=https://staging.code.bg
USER_EMAIL=your_email@example.com
USER_PASSWORD=your_password

Project Structure
The framework is organized into logical layers to separate concerns:
dev-craft/
├── fixtures/
│   └── userFixture.js       # Custom fixtures and Faker.js data generation
├── pages/
│   ├── BasePage.js          # Global methods and shared navigation logic
│   ├── LoginPage.js         # Locators and actions for the Login page
│   └── SignupPage.js        # Locators and actions for the Registration flow
├── tests/
│   └── registration.spec.js # Test scenarios and assertions
├── playwright.config.js     # Global Playwright configuration
└── package.json             # Project dependencies and scripts

🛠 Tech Stack
Playwright – Core automation framework and test runner.

JavaScript (ES6+) – Programming language.

Faker.js – Used within fixtures to generate dynamic test data (emails, names).

Page Object Model (POM) – Design pattern used to enhance test maintenance and reduce code duplication.

Running Tests
You can trigger tests using the following commands in your terminal:

Execution Commands
# Run all tests in headless mode
npx playwright test

# Run a specific test file
npx playwright test tests/registration.spec.js

# Run tests in Headed mode (UI visible)
npx playwright test --headed

# Run a specific test by title
npx playwright test -g "Verify Registration with Join button"


Debugging & Interactive Mode
# Open Playwright UI Mode (Interactive)
npx playwright test --ui

# Run tests in Debug mode
npx playwright test --debug


📊 Reporting
After the test execution finishes, a detailed HTML report is automatically generated.
# View the latest HTML test report
npx playwright show-report

Best Practices
Fixtures: Always use userFixture.js for data injection to keep tests clean.

Locators: Store all selectors in the pages/ directory; never hardcode selectors inside .spec.js files.

Naming: Use descriptive names for test cases to ensure clear reporting.