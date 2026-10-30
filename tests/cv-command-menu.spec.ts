import { expect, test } from '@playwright/test';

test.describe('CV Command Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens, closes and reopens with the keyboard shortcut', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog', { name: 'Command Menu' });

    // The shortcut listener attaches on hydration, so retry until it registers.
    await expect(async () => {
      await page.keyboard.press('ControlOrMeta+j');
      await expect(dialog).toBeVisible({ timeout: 2000 });
    }).toPass();
    await expect(page.getByRole('option', { name: 'Print' })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();

    await page.keyboard.press('ControlOrMeta+j');
    await expect(dialog).toBeVisible();
  });
});
