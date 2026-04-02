# dev-craft Registration Automation Framework

Automated tests for the **first step** of the registration flow (Step 1) on the dev-craft platform.

This project was developed as part of a technical assessment to demonstrate automation skills and best practices using Playwright.

## Tech Stack

- **Playwright** – End-to-end testing framework
- **JavaScript**
- **Page Object Model (POM)** – for better maintainability and readability
- **Custom Test Fixtures** – using Faker.js for dynamic test data
- **GitHub Actions** – Continuous Integration pipeline

## Scope

All tests are strictly limited to **Registration Step 1** as defined in the assignment:
- Navigation from the Login page (via "Join" and "Join here")
- Email and Password form filling
- Terms & Conditions acceptance
- Verification code popup appearance

**Out of scope:** Step 2 (Personal Info), Step 3 (Payment Details), and Step 4 (Proof of Employment).

## Project Structure

```bash
dev-craft-registration-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD
├── fixtures/
│   └── userFixture.js              # Custom fixture with Faker
├── pages/
│   ├── basePage.js
│   ├── loginPage.js
│   └── signupPage.js               # Page Object for registration form
├── testdata/
│   └── testdata.json
├── tests/
│   └── registration.spec.js        # Main test scenarios
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Automated Test Cases

```Happy Path```

- Successful registration using Join button from Login page
- Successful registration using Join here link from Login page
- Verification code popup appears with correct email address displayed

```Negative & Validation Scenarios```

- Registration attempt with already existing email
- Required field error messages for Email and Password
- Terms & Conditions checkbox validation


## Getting Started
    Prerequisites

- Node.js 18+
- Google Chrome (or any supported browser)


## Installation

```bash
git clone <your-repository-url>
cd dev-craft-registration-automation
npm install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run only registration tests
npx playwright test registration.spec.js

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run with specific browser
npx playwright test --project=chromium
```

## View HTML Report
- After test execution, open the interactive report:

```bash
npx playwright show-report
```

## Key Practices Applied

- Clean Page Object Model implementation with BasePage inheritance
- Reusable custom fixture for generating unique user data using Faker.js
- Separation of test data and test logic (testdata.json)
- Proper use of test.describe.configure({ mode: 'serial' }) for dependent tests
- Clear and maintainable locator strategies
- Configured CI pipeline with GitHub Actions


## Roadmap / TODO

- Expand automation coverage based on testCases.md
- Add environment configuration support via .env files
- Integrate Allure reporting
- Enable parallel test execution
- Add accessibility and visual regression testing


## Author

- Lyubomir Angelov Petrov
- Automation Test Engineer
- Last updated: April 02, 2026
- Status: In Development
- Scope: Registration Step 1 only


