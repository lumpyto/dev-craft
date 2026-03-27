
import { BasePage } from '../pages/basePage';

export class SignupPage extends BasePage {
    constructor(page) {
        super(page);

        this.page = page
        this.header = page.getByText('REGISTRATION')
        this.email = page.locator("//input[@aria-label='E-mail address']")
        this.emailAlert = page.locator("//div[@role='alert' and text()='Required field']").nth(0)
        this.password = page.locator("//input[@aria-label='Password']")
        this.passwordAlert = page.locator("//div[@role='alert' and text()='Required field']").nth(1)
        this.checkBox = page.locator("//*[name()='path' and contains(@d,'M19,3H5C3.')]")
        this.checkboxAlert = page
            .locator('.q-field, label')
            .filter({ hasText: 'Required field' })
            .locator('.q-field__bottom')
            .getByRole('alert')
            .last();

        this.checkboxIcon = page.locator("//i[@class='q-icon text-negative']")
        this.registerButton = page.locator("//span[text()=' Register ']")

        this.emailFieldMessage = page.getByText('We will send you a code to verify your email')
        this.verificationCodeForm = page.locator("//div[text()='Verification code sent']")
        this.verificationForEmail = page.locator("//div[@class='roboto text-h5 q-pt-lg q-pb-md text-center']")

        this.userBanner = page.locator("//div[text()='User with this email already exist']")
        this.existinguserBanner = page.locator("//div['.q-banner__content col text-body2' and text()='User with this email already exist']")
        this.invalidcredentialsBanner = page.getByRole('alert', { name: /Invalid credentials/i })

    }
    async open() {
        await this.navigate('/signup');
    }
}