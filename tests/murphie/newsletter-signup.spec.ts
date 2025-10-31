import { test, expect } from '@playwright/test';
import { smartClick, smartFill, smartWait } from '../../.murphie/helpers/autonomy';

test('newsletter signup', async ({ page }) => {
  // TODO: Replace stub with AI-generated steps
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
