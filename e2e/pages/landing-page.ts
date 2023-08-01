import { Page } from "@playwright/test";
import { Base } from "./base";

export class LandingPage extends Base {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await super.goto("https://mostly.ai/");
    }
}
