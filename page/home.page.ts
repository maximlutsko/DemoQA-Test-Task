import type { Page } from 'playwright';

export class HomePage {

    private page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    // Locators
        public get bookStoreBtn() {
        return this.page.$('text=Book Store Application');
    }

    // Methods
    public async clickBookStoreBtn() {
        const element = await this.bookStoreBtn;
        await element?.click();
    }

    async open() {
        await this.page.goto('https://demoqa.com/');
    }

}