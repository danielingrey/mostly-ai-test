import { Locator, Page } from "@playwright/test";

export interface ContactForm {
    firstName: string;
    lastName: string;
    businessEmail: string;
    mobile: string;
    yourOrganization: string;
    country: string;
    howDidYouHearAboutUs: string;
    description: string;
    marketingCheckbox: boolean;
}

export class ContactPage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly businessEmailInput: Locator;
    readonly mobileInput: Locator;
    readonly yourOrganizationInput: Locator;
    readonly countryDropdown: Locator;
    readonly howDidYouHearAboutUsInput: Locator;
    readonly description: Locator;
    readonly marketingCheckbox: Locator;
    readonly sendMessageButton: Locator;

    constructor(page: Page) {
        this.firstNameInput = page.locator("[name='firstname']");
        this.lastNameInput = page.locator("[name='lastname']");
        this.businessEmailInput = page.locator("[name='email']");
        this.mobileInput = page.locator("[name='mobilephone']");
        this.yourOrganizationInput = page.locator("[name='company']");
        this.countryDropdown = page.locator("[name='country']");
        this.howDidYouHearAboutUsInput = page.locator("[name='how_did_you_hear_about_mostly_ai___free_text']");
        this.description = page.locator("[name='message']");
        this.marketingCheckbox = page.locator("[name='LEGAL_CONSENT.subscription_type_5594858']");
        this.sendMessageButton = page.locator("[value='SEND MESSAGE']");
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);

    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async fillBusinessEmail(email: string) {
        await this.businessEmailInput.fill(email);
    }

    async fillMobile(mobile: string) {
        await this.mobileInput.fill(mobile);
    }

    async fillYourOrganization(org: string) {
        await this.yourOrganizationInput.fill(org);

    }

    async selectCountry(country: string) {
        await this.countryDropdown.selectOption(country);
    }

    async fillHowDidYouHearAboutUs(how: string) {
        await this.howDidYouHearAboutUsInput.fill(how);
    }

    async fillDescription(description: string) {
        await this.description.fill(description);
    }

    async selectMarketingOffers(check: boolean) {
        if(check) {
            await this.marketingCheckbox.check();
        }
    }

    async fillInContactDetails(contactDetails: ContactForm) {
        this.fillFirstName(contactDetails.firstName);
        this.fillLastName(contactDetails.lastName);
        this.fillBusinessEmail(contactDetails.businessEmail);
        this.fillMobile(contactDetails.mobile);
        this.fillYourOrganization(contactDetails.yourOrganization);
        this.selectCountry(contactDetails.country);
        this.fillHowDidYouHearAboutUs(contactDetails.howDidYouHearAboutUs);
        this.fillDescription(contactDetails.description);
        this.selectMarketingOffers(contactDetails.marketingCheckbox);
    }

}