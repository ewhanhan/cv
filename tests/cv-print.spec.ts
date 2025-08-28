import { expect, test } from '@playwright/test';
import { TEST_RESUME_DATA } from './test-data';

test.describe('CV Print Functionality', () => {
  test('page renders correctly for print', async ({ page }) => {
    await page.goto('/');

    // Emulate print media
    await page.emulateMedia({ media: 'print' });

    // Check that main content is visible in print mode
    await expect(page.getByRole('heading', { name: TEST_RESUME_DATA.name })).toBeVisible();
    await expect(page.getByText(TEST_RESUME_DATA.location)).toBeVisible();

    // Check that contact info exists (may be hidden in print on some browsers)
    await expect(page.getByText(new RegExp(TEST_RESUME_DATA.contact.email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))).toBeAttached();
    await expect(page.getByText(new RegExp(TEST_RESUME_DATA.contact.tel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))).toBeAttached();
  });

  test('print styles applied correctly', async ({ page }) => {
    await page.goto('/');
    await page.emulateMedia({ media: 'print' });

    // Take a screenshot for visual comparison (useful for debugging)
    await page.screenshot({ path: 'test-results/print-layout.png', fullPage: true });

    // Check that the page content fits within reasonable bounds
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    expect(pageHeight).toBeLessThan(3000); // Reasonable height for print
  });
});
