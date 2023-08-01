import { type Page } from '@playwright/test';
import { NavBarPage } from './nav-bar-page';


export abstract class Base {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string = "https://mostly.ai") {
        await this.page.goto(url);
    };

    public async navBar(): Promise<NavBarPage> {
        return new NavBarPage(this.page);
    }
}