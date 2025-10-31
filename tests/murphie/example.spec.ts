import { test, expect } from 'playwright/test';
import { smartClick, smartFill } from '../../.murphie/helpers/autonomy';

test('murphie example', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
