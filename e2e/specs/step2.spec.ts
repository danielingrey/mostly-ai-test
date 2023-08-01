import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/landing-page';
import { NavBarPage } from '../pages/nav-bar-page';
import { SearchResultPage } from '../pages/search-result-page';

test('Step 2: Verify Search Term Not Found', async ({ page }) => {
  const nav = new NavBarPage(page);
  const landingPage = new LandingPage(page);
  const searchPage = new SearchResultPage(page);
  await landingPage.goto();
  await nav.fillInAndSearch("sythetic");

  expect(await searchPage.sorryText.textContent()).toEqual("Sorry, no results for:");
  expect(await searchPage.noResultsText.textContent()).toEqual("sythetic");

});