import type { Page } from 'playwright';

export class ProfilePage {

    private page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    // Locators
    public get profileTxt() {
        return this.page.$('text=Profile');
    }

    public get book() {
        return this.page.$('text=Git Pocket Guide');
    }

}