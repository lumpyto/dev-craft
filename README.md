Installation & Setup:
1. Clone the repository:
git clone <your-repository-url>
cd <project-folder>
2. Install dependencies:
npm install
3. Install Playwright Browsers:
npx playwright install

Project Structure
tests/ — Contains test specifications (e.g., registration.spec.js).

fixtures/userFixture.js — Custom Playwright fixture extending the base test to include faker for dynamic data generation.

pages/ — Page Object Model classes (LoginPage.js, SignupPage.js) encapsulating UI selectors and actions.

testdata.json — Static JSON data used for data-driven testing scenarios.

Running Tests
Run all tests in Headless mode:
npx playwright test
Run all tests in Headed mode:
npx playwright test --headed

Key Architecture Details
Custom Fixtures
The project leverages userFixture.js to extend the standard Playwright test and expect. It integrates @faker-js/faker to provide localized and randomized user data (names, emails, passwords) directly into the tests, ensuring data isolation.

Page Object Model (POM)
Selectors are managed within the LoginPage and SignupPage classes. This ensures that UI changes only require updates in the Page Object classes rather than the test scripts themselves.

Reporting
After running tests, a detailed HTML report is generated. To view the report, run:
npx playwright show-report



