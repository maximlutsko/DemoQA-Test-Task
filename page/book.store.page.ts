import type { Page } from 'playwright';

export class BookStorePage {

    private page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    // Locators
    public get bookStoreTxt() {
        return this.page.$('text=Book Store');
    }
    
    public get loginBtn() {
        return this.page.$('button:has-text("Login")');
    }

    public get logoutBtn() {
        return this.page.$('button:has-text("Log out")');
    }

    public get book() {
        return this.page.$('text=Git Pocket Guide');
    }

    public get profileBtn() {
        return this.page.$('li:has-text("Profile")');
    }

    // Methods
    public async clickLoginBtn() {
        const element = await this.loginBtn;
        await element?.click();
    }

    public async clickLogoutBtn() {
        const element = await this.logoutBtn;
        await element?.click();
    }

    public async clickBook() {
        const element = await this.book;
        await element?.click();
    }

    public async clickProfileBtn() {
        const element = await this.profileBtn;
        await element?.click();
    }

}