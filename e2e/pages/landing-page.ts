import { Page } from "@playwright/test";

export class LandingPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string = "https://mostly.ai") {
        await this.page.goto(url);
    }
}
