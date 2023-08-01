import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/landing-page';
import { CompanyBookmarkPage } from '../pages/company-bookmark-page';
import { ContactPage } from '../pages/contact-page';
import { closeCookieBanner } from '../helpers/cookie-banner';

test('Step 3: Fill In Contact Details', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const companyBookmarkPage = new CompanyBookmarkPage(page);
    const contactPage = new ContactPage(page);

    await landingPage.goto();

    await closeCookieBanner(page);

    await companyBookmarkPage.clickContact();

    await contactPage.fillInContactDetails({
        firstName: "Joe",
        lastName: "Bloggs",
        businessEmail: "joe.bloggs@gmail.com",
        mobile: "01234567890",
        yourOrganization: "Bloggs' Dogs",
        country: "United Kingdom",
        howDidYouHearAboutUs: "Google",
        description: "Lorem ipsum dolor sit amet",
        marketingCheckbox: true
    });
    
    await contactPage.sendMessageButton.hover();

});
