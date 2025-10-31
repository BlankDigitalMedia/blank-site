import { expect, Locator, Page } from 'playwright/test';

export async function smartClick(locator: Locator) {
  try { await locator.click(); return; } catch {}
  try { await locator.first().click(); return; } catch {}
  const page = (locator as any).page() as Page;
  const text = await locator.first().innerText().catch(() => undefined);
  if (text) await page.getByRole('button', { name: text }).first().click();
}

export async function smartFill(locator: Locator, value: string) {
  try { await locator.fill(value); return; } catch {}
  try { await locator.first().fill(value); return; } catch {}
  const page = (locator as any).page() as Page;
  const placeholder = await locator.getAttribute('placeholder').catch(() => undefined);
  if (placeholder) await page.getByPlaceholder(placeholder).fill(value);
}

export async function smartWait(page: Page, selector: string) {
  await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
}
