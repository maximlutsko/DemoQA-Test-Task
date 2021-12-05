import type { Page } from 'playwright';

export class BookPage {

    private page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    // Locators
    public get addToCollectionBtn() {
        return this.page.$('text=Add To Your Collection');
    }

    // Methods
    public async clickAddToCollectionBtn() {
        const element = await this.addToCollectionBtn;
        await element?.click();
    }

}