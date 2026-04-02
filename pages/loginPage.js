import { BasePage } from './basePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.header = page.locator("//h1[text()='Member Login']");
        this.joinHereButton = page.getByText('Join here', { exact: true });
        this.joinButton = page.getByText('Join', { exact: true });
    }

    async open() {
        await this.navigate('/login');
    }

    async clickJoinHere() {
        await this.joinHereButton.click({ force: true });
    }

    async clickJoin() {
        await this.joinButton.click();
    }

    async goToSignupViaJoin() {
        await this.verifyURL('login');
        await expect(this.header).toHaveText("Member Login");
        await this.clickJoin();
        await expect(this.page).toHaveURL(/signup/);
    }

    async goToSignupViaJoinHere() {
        await this.verifyURL('login');
        await expect(this.header).toHaveText("Member Login");
        await this.clickJoinHere();
        await expect(this.page).toHaveURL(/signup/);
    }
}
