
import { BasePage } from './basePage';

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
}