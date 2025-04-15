import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe('Landing Page UI', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('Correct title displays', async ({ page }) => {
    await expect(page).toHaveTitle('Chook Time - Chicken Cooking Calculator');
  });

  test('Weight input box displays', async ({ page }) => {
    await expect(page.locator('input[placeholder="Enter weight"]')).toBeVisible();
  });

  test('Unit input box displays', async ({ page }) => {
    await expect(page.getByText('Unit')).toBeVisible();
  });

  test('Facebook sharing option displays', async ({ page }) => {
    await expect(page.locator('a[href*="facebook.com/sharer"]')).toBeVisible();
  });

  test('WhatsApp sharing option displays', async ({ page }) => {
    await expect(page.locator('a[href*="api.whatsapp.com/send"]')).toBeVisible();
  });

  test('Instagram sharing option displays', async ({ page }) => {
    await expect(page.locator('a[href*="www.instagram.com/"]')).toBeVisible();
  });

});


