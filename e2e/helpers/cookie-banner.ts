import { Page } from "@playwright/test";

export const closeCookieBanner = async (page: Page) => {
    const cookieAccept = page.locator("#CookieBoxSaveButton");
    await cookieAccept.waitFor({state: "visible"});
    await cookieAccept.click();
}