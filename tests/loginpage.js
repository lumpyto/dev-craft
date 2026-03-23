
export class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.header = page.locator("//h1[text()='Member Login']")
        this.joinHereButton = page.getByText('Join here', { exact: true })
        this.joinButton = page.getByText('Join', { exact: true })
    }
}