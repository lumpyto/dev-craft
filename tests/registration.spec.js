import { test, expect } from "../fixtures/userFixture"
import { LoginPage } from "../pages/loginPage.js";
import { SignupPage } from "../pages/signupPage.js";

test.describe("Data Driven Registration Test", function () {
    let loginPage;
    let signupPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        signupPage = new SignupPage(page);
        await loginPage.open();
    });

    test('Verify Registration with Join button', async ({page, user}) => {

        await loginPage.goToSignupViaJoin();

        await expect(page).toHaveURL(/signup/);

        await signupPage.fillEmail(user.email);
        await expect(signupPage.emailHelpMessage).toHaveText("We will send you a code to verify your email");

        await signupPage.fillPassword(user.password);
        await signupPage.acceptTerms();
        await signupPage.clickRegister();

        await expect (signupPage.verificationMessage).toHaveText("Verification code sent");
        await expect (signupPage.verificationForEmail).toHaveText(` Please enter the code we've justsent to ${user.email}`);

        console.log(`Your email is ${user.email}`);
        console.log(`Your password is ${user.password}`);        

    });

    test.describe("Will use the already registered user from the first test", () => {
    test.describe.configure({ mode: 'serial' });
        let savedUser;

        test('Verify Registration with Join here button', async ({page, user}) => {
            savedUser  = user;
            await loginPage.goToSignupViaJoinHere();

            await expect(page).toHaveURL(/signup/);

            await signupPage.fillEmail(user.email);
            await expect(signupPage.emailHelpMessage).toHaveText("We will send you a code to verify your email");
            await signupPage.fillPassword(user.password);
            await signupPage.acceptTerms();
            await signupPage.clickRegister();

            await expect (signupPage.verificationMessage).toHaveText("Verification code sent");
            await expect (signupPage.verificationForEmail).toHaveText(` Please enter the code we've justsent to ${user.email}`);

            console.log(`Your email is ${user.email}`);
            console.log(`Your password is ${user.password}`);

        });

        test('Registration with already existing email', async ({page}) => {

            await loginPage.goToSignupViaJoinHere();

            await expect(page).toHaveURL(/signup/);

            await signupPage.fillEmail(savedUser.email);
            await signupPage.fillPassword(savedUser.password);
            await signupPage.acceptTerms();
            await signupPage.clickRegister();

            await expect(signupPage.userMessage).toHaveText("User with this email already exist");
            await expect(signupPage.userExistsBanner).toHaveText("User with this email already exist");
        });
    });

    test('Check error messages and fields', async ({page}) => {

        await loginPage.goToSignupViaJoinHere();

        await signupPage.passwordInput.click();
        await expect(signupPage.emailReqiredField).toHaveText("Required field");

        await signupPage.emailInput.click();
        await expect(signupPage.passwordReqiredField).toHaveText("Required field");

        await signupPage.fillTestEmail();
        await signupPage.fillTestPassword();
        await signupPage.clickRegister();

        await expect(signupPage.requiredFieldAlerts).toHaveText("Required field");
        await expect(signupPage.checkboxIcon).toBeVisible();

        await signupPage.acceptTerms();
        await signupPage.clickRegister();
    });
});