import { Locator, Page } from "@playwright/test";
import { NavBarPage } from "./nav-bar-page";

export class CompanyBookmarkPage extends NavBarPage {

    readonly contactLink: Locator;
    readonly companyLink: Locator;

    constructor(page: Page) {
        super(page);
        this.contactLink = page.locator("#link-3983-16");
        this.companyLink = page.locator("#-mega-dropdown-3962-16");

    }

    async clickContact() {
        await this.companyLink.hover();
        await this.contactLink.waitFor();
        await this.contactLink.click();
    }
}
