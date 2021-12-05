import type { Page } from 'playwright';

export class LoginPage {

    private page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    // Locators
    public get loginTxt() {
        return this.page.$('text=Login');
    }

    public get loginBtn() {
        return this.page.$('button:has-text("Login")');
    }

    public get usernameFld() {
        return this.page.$('#userName');
    }

    public get passwordFld() {
        return this.page.$('[placeholder="Password"]');
    }

    // Methods
    public async enterUsername(username: string) {
        const element = await this.usernameFld;
        await element?.fill(username);
    }

    public async enterPassword(password: string) {
        const element = await this.passwordFld;
        await element?.fill(password);
    }

    public async clickLoginBtn() {
        const element = await this.loginBtn;
        await element?.click();
    }

}