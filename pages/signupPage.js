
// import { BasePage } from '../pages/basePage';

// export class SignupPage extends BasePage {
//     constructor(page) {
//         super(page);

//         this.page = page
//         this.header = page.getByText('REGISTRATION')
//         this.email = page.locator("//input[@aria-label='E-mail address']")
//         this.emailAlert = page.locator("//div[@role='alert' and text()='Required field']").nth(0)
//         this.password = page.locator("//input[@aria-label='Password']")
//         this.passwordAlert = page.locator("//div[@role='alert' and text()='Required field']").nth(1)
//         this.checkBox = page.locator("//*[name()='path' and contains(@d,'M19,3H5C3.')]")
//         this.checkboxAlert = page
//             .locator('.q-field, label')
//             .filter({ hasText: 'Required field' })
//             .locator('.q-field__bottom')
//             .getByRole('alert')
//             .last();

//         this.checkboxIcon = page.locator("//i[@class='q-icon text-negative']")
//         this.registerButton = page.locator("//span[text()=' Register ']")

//         this.emailFieldMessage = page.getByText('We will send you a code to verify your email')
//         this.verificationCodeForm = page.locator("//div[text()='Verification code sent']")
//         this.verificationForEmail = page.locator("//div[@class='roboto text-h5 q-pt-lg q-pb-md text-center']")

//         this.userBanner = page.locator("//div[text()='User with this email already exist']")
//         this.existinguserBanner = page.locator("//div['.q-banner__content col text-body2' and text()='User with this email already exist']")
//         this.invalidcredentialsBanner = page.getByRole('alert', { name: /Invalid credentials/i })

//     }
//     async open() {
//         await this.navigate('/signup');
//     }
// }

import { BasePage } from './basePage';
import testdata from '../testdata/testdata.json'

export class SignupPage extends BasePage {
    constructor(page) {
        super(page);

        // Locators
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.getByLabel('Password');
        this.termsCheckbox = page.locator('svg path[d*="M19,3H5C3."]');
        this.registerButton = page.getByRole('button', { name: 'Register' });

        // Alerts
        this.emailReqiredField = page.getByText('Required field').first();
        this.passwordReqiredField = page.getByText('Required field').nth(1);
        this.requiredFieldAlerts = page
            .locator('.q-field, label')
            .filter({ hasText: 'Required field' })
            .locator('.q-field__bottom')
            .getByRole('alert')
            .last();
        this.invalidCredentialsAlert = page.getByRole('alert', { name: /Invalid credentials/i });
        this.userMessage = page.locator("//div[text()='User with this email already exist']")
        this.userExistsBanner = page.locator("//div['.q-banner__content col text-body2' and text()='User with this email already exist']");
        this.checkboxIcon = page.locator("//i[@class='q-icon text-negative']")

        // Messages
        this.emailHelpMessage = page.getByText('We will send you a code to verify your email');
        this.verificationMessage = page.getByText('Verification code sent');
        this.verificationForEmail = page.locator("//div[@class='roboto text-h5 q-pt-lg q-pb-md text-center']")
    }

    async open() {
        await this.navigate('/signup');
    }

    async fillEmail(email) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
    }

    async fillTestEmail() {
    await this.emailInput.click();
    await this.emailInput.fill(testdata.user2.email);
    }

    async fillPassword(password) {
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
    }

    async fillTestPassword() {
        await this.passwordInput.click();
        await this.passwordInput.fill(testdata.user2.password);
    }

    async acceptTerms() {
        await this.termsCheckbox.click();
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async register(email, password) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.acceptTerms();
        await this.clickRegister();
    }
}