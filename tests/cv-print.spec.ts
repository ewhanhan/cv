import { expect, test } from '@playwright/test';
import { TEST_RESUME_DATA } from './test-data';

test.describe('CV Print Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.emulateMedia({ media: 'print' });
  });

  test('page renders correctly for print', async ({ page }) => {
    // Check that main content is visible in print mode
    await expect(
      page.getByRole('heading', { name: TEST_RESUME_DATA.name }),
    ).toBeVisible();
    await expect(page.getByText(TEST_RESUME_DATA.location)).toBeVisible();

    // Check that contact info exists (may be hidden in print on some browsers)
    await expect(
      page.getByText(
        new RegExp(
          TEST_RESUME_DATA.contact.email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        ),
      ),
    ).toBeAttached();
    await expect(
      page.getByText(
        new RegExp(
          TEST_RESUME_DATA.contact.tel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        ),
      ),
    ).toBeAttached();
  });

  test('print layout fits within two A4 pages', async ({ page }) => {
    // Take a screenshot for visual comparison (useful for debugging)
    await page.screenshot({
      path: 'test-results/print-layout.png',
      fullPage: true,
    });

    // A4 page at 96 DPI is ~1123px tall; allow up to 2 pages
    const maxTwoA4Pages = 1123 * 2;
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    expect(pageHeight).toBeLessThan(maxTwoA4Pages);
  });
});
