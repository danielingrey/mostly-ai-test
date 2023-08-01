import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/landing-page';
import { NavBarPage } from '../pages/nav-bar-page';

test('Step 1: Verify Platform Link', async ({ page }) => {
  const nav = new NavBarPage(page);
  const landingPage = new LandingPage(page);
  await landingPage.goto();

  await expect(nav.platformLink).toBeVisible();
});

test('Step 1: Verify Synthetic Data Link', async ({ page }) => {
  const nav = new NavBarPage(page);
  const landingPage = new LandingPage(page);
  await landingPage.goto();

  await expect(nav.syntheticDataLink).toBeVisible();
});

test('Step 1: Verify Resources Link', async ({ page }) => {
  const nav = new NavBarPage(page);
  const landingPage = new LandingPage(page);
  await landingPage.goto();

  await expect(nav.resourcesLink).toBeVisible();
});

test('Step 1: Verify Company Link', async ({ page }) => {
  const nav = new NavBarPage(page);
  const landingPage = new LandingPage(page);
  await landingPage.goto();

  await expect(nav.companyLink).toBeVisible();
});

test('Step 1: Verify Pricing Link', async ({ page }) => {
  const nav = new NavBarPage(page);
  const landingPage = new LandingPage(page);
  await landingPage.goto();

  await expect(nav.pricingLink).toBeVisible();
});
