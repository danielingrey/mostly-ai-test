import { Locator, Page } from "@playwright/test";

export class SearchResultPage {
    readonly sorryText: Locator;
    readonly noResultsText: Locator;

    constructor(page: Page) {
        this.sorryText = page.locator("#headline-274-1315");
        this.noResultsText = page.locator("#code_block-275-1315 > span.inner");
    }
}