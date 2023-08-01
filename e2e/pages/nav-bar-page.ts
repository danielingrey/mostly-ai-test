import { Locator, Page } from "@playwright/test";

export class NavBarPage {
    readonly page: Page;
    readonly platformLink: Locator;
    readonly syntheticDataLink: Locator;
    readonly resourcesLink: Locator;
    readonly companyLink: Locator;
    readonly pricingLink: Locator;
    readonly searchButton: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.platformLink = page.locator("#-mega-dropdown-3763-16");
        this.syntheticDataLink = page.locator("#-mega-dropdown-3890-16");
        this.resourcesLink = page.locator("#-mega-dropdown-3926-16");
        this.companyLink = page.locator("#-mega-dropdown-3962-16");
        this.pricingLink = page.locator("#-mega-dropdown-3995-16");
        this.searchButton = page.locator("#open-header-search-4002-16-icon");
        this.searchInput = page.locator(".oxy-header-search_search-field");
    }

    async fillInAndSearch(searchTerm: string) {
        await this.searchButton.click();
        await this.searchInput.fill(searchTerm);
        await this.page.keyboard.press("Enter");
    }

}
