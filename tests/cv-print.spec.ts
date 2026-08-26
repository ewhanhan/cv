import { expect, test } from '@playwright/test';
import { TEST_RESUME_DATA } from './test-data';

// A4 at 96 DPI: 210mm x 297mm.
const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

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
    // Printing lays the page out at paper width, never at the device viewport,
    // so the height below is only meaningful once the viewport matches A4.
    // Measured at a phone width the same content reflows to ~2300px and the
    // assertion reports a page overflow that would never reach paper.
    await page.setViewportSize({ width: A4_WIDTH, height: A4_HEIGHT });

    // Take a screenshot for visual comparison (useful for debugging)
    await page.screenshot({
      path: 'test-results/print-layout.png',
      fullPage: true,
    });

    const maxTwoA4Pages = A4_HEIGHT * 2;
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    expect(
      pageHeight,
      `print layout is ${pageHeight}px tall at ${A4_WIDTH}px wide, exceeding the ${maxTwoA4Pages}px budget for two A4 pages`,
    ).toBeLessThan(maxTwoA4Pages);
  });
});
