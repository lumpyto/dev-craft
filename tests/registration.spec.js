import { test, expect } from "../fixtures/userFixture"
import { LoginPage } from "./loginpage.js";
import { SignupPage } from "./signupPage.js";
import testdata from "../testdata.json"

test.describe("Data Driven Registration Test", function () {
    const baseUrl = 'https://code-staging-web.on.dev-craft.tech/login'

    test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    });

    test('Verify Registration with Join button', async ({page, user}) => {

        const loginPage = new LoginPage(page);

        await expect(page).toHaveURL(/login/);
        await expect(loginPage.header).toHaveText("Member Login");
        await loginPage.joinButton.click();

        const signupPage = new SignupPage(page);
        await expect(page).toHaveURL(/signup/);
        await expect(signupPage.header).toHaveText('REGISTRATION');

        await signupPage.email.fill(user.email);
        await expect(signupPage.emailFieldMessage).toHaveText("We will send you a code to verify your email");

        await signupPage.password.fill(user.password);
        await signupPage.checkBox.click();
        await page.waitForTimeout(2000);
        await signupPage.registerButton.click();

        await expect (signupPage.verificationCodeForm).toHaveText("Verification code sent");
        await expect (signupPage.verificationForEmail).toHaveText(` Please enter the code we've justsent to ${user.email}`);

        console.log(`Your email is ${user.email}`);
        console.log(`Your password is ${user.password}`);

    });

    test.describe("Will use the already registered user from the first test", () => {
    test.describe.configure({ mode: 'serial' });
        let savedUser;

        test('Verify Registration with Join here button', async ({page, user}) => {
            savedUser  = user;
            const loginPage = new LoginPage(page);

            await expect(page).toHaveURL(/login/);
            await expect(loginPage.header).toHaveText("Member Login");
            await loginPage.joinHereButton.click({ force: true });

            const signupPage = new SignupPage(page);
            await expect(page).toHaveURL(/signup/);
            await expect(signupPage.header).toHaveText('REGISTRATION');

            await signupPage.email.fill(user.email);
            await expect(signupPage.emailFieldMessage).toHaveText("We will send you a code to verify your email");

            await signupPage.password.fill(user.password);
            await signupPage.checkBox.click();
            await page.waitForTimeout(2000);
            await signupPage.registerButton.click();

            await expect (signupPage.verificationCodeForm).toHaveText("Verification code sent");
            await expect (signupPage.verificationForEmail).toHaveText(` Please enter the code we've justsent to ${user.email}`);

            console.log(`Your email is ${user.email}`);
            console.log(`Your password is ${user.password}`);

        });

        test('Registration with already existing email', async ({page}) => {

            const loginPage = new LoginPage(page);

            await expect(page).toHaveURL(/login/);
            await expect(loginPage.header).toHaveText("Member Login");
            await loginPage.joinHereButton.click({ force: true });

            const signupPage = new SignupPage(page);
            await expect(page).toHaveURL(/signup/);
            await expect(signupPage.header).toHaveText('REGISTRATION');

            await signupPage.email.fill(savedUser.email);
            await expect(signupPage.emailFieldMessage).toHaveText("We will send you a code to verify your email");

            await signupPage.password.fill(savedUser.password);
            await signupPage.checkBox.click();
            await page.waitForTimeout(2000);
            await signupPage.registerButton.click();

            await expect(signupPage.userBanner).toHaveText("User with this email already exist");
            await expect(signupPage.userPopup).toHaveText("User with this email already exist");
        });
    });

    test('Check error messages and fields', async ({page}) => {

        const loginPage = new LoginPage(page);

        await expect(page).toHaveURL(/login/);
        await expect(loginPage.header).toHaveText("Member Login");
        await loginPage.joinHereButton.click({ force: true });

        const signupPage = new SignupPage(page);
        await expect(page).toHaveURL(/signup/);
        await expect(signupPage.header).toHaveText('REGISTRATION');

        await signupPage.password.click();
        await expect(signupPage.emailAlert).toHaveText("Required field");
        await signupPage.email.click();
        await expect(signupPage.passwordAlert).toHaveText("Required field");
        await signupPage.email.fill(testdata.user1.email);
        await signupPage.password.fill(testdata.user1.password);
        await signupPage.registerButton.click();
        await expect(signupPage.checkboxAlert).toHaveText("Required field");
        await expect(signupPage.checkboxIcon).toBeVisible();
    });
});