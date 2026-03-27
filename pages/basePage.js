
import { expect } from '@playwright/test';

export class BasePage {
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://code-staging-web.on.dev-craft.tech';
    }

    async navigate(path) {
        await this.page.goto(`${this.baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
    }

    async verifyURL(text) {
        await expect(this.page).toHaveURL(new RegExp(text));
    }
}