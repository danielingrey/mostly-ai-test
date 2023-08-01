import { Locator, Page } from "@playwright/test";
import { NavBarPage } from "./nav-bar-page";

export class CompanyBookmarkPage extends NavBarPage {

    readonly contactLink: Locator;

    constructor(page: Page) {
        super(page);
        this.contactLink = page.locator("#link-3983-16");
    }

    async goto() {
        super.companyLink.hover();
    }
}
