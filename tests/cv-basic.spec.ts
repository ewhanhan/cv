import { expect, test } from '@playwright/test';
import { TEST_RESUME_DATA } from './test-data';

test.describe('CV Basic Functionality', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(new RegExp(TEST_RESUME_DATA.name));
  });

  test('displays personal information', async ({ page }) => {
    await page.goto('/');

    // Check name is displayed in heading
    await expect(page.getByRole('heading', { name: TEST_RESUME_DATA.name })).toBeVisible();

    // Check location is displayed
    await expect(page.getByText(TEST_RESUME_DATA.location)).toBeVisible();

    // Check summary is displayed
    await expect(page.getByText(new RegExp(TEST_RESUME_DATA.summary.substring(0, 30)))).toBeVisible();
  });

  test('displays contact information', async ({ page }) => {
    await page.goto('/');

    // Check email link
    await expect(page.getByRole('link', { name: new RegExp(TEST_RESUME_DATA.contact.email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) })).toBeVisible();

    // Check phone link
    await expect(page.getByRole('link', { name: new RegExp(TEST_RESUME_DATA.contact.tel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) })).toBeVisible();
  });

  test('displays social links', async ({ page }) => {
    await page.goto('/');

    // Check GitHub link
    const githubSocial = TEST_RESUME_DATA.contact.social.find(s => s.name === 'GitHub')!;
    await expect(page.getByRole('link', { name: new RegExp(githubSocial.name) })).toBeVisible();

    // Check LinkedIn link
    const linkedinSocial = TEST_RESUME_DATA.contact.social.find(s => s.name === 'LinkedIn')!;
    await expect(page.getByRole('link', { name: new RegExp(linkedinSocial.name) })).toBeVisible();
  });

  test('displays education section', async ({ page }) => {
    await page.goto('/');

    // Check education section exists
    await expect(page.getByText('Education')).toBeVisible();

    // Check university entries
    const firstEducation = TEST_RESUME_DATA.education[0];
    const lastEducation = TEST_RESUME_DATA.education[TEST_RESUME_DATA.education.length - 1];
    await expect(page.getByText(firstEducation.school).first()).toBeVisible();
    await expect(page.getByText(lastEducation.degree)).toBeVisible();
  });

  test('displays work experience section', async ({ page }) => {
    await page.goto('/');

    // Check work section exists
    await expect(page.getByText('Work Experience')).toBeVisible();

    // Check first work experience company
    const firstJob = TEST_RESUME_DATA.work[0];
    await expect(page.getByRole('link', { name: new RegExp(firstJob.company) })).toBeVisible();
  });

  test('social links are external links', async ({ page }) => {
    await page.goto('/');

    // Check GitHub link exists and has proper href
    const githubSocial = TEST_RESUME_DATA.contact.social.find(s => s.name === 'GitHub')!;
    const githubLink = page.getByRole('link', { name: new RegExp(githubSocial.name) });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', githubSocial.url);

    // Check LinkedIn link exists and has proper href
    const linkedinSocial = TEST_RESUME_DATA.contact.social.find(s => s.name === 'LinkedIn')!;
    const linkedinLink = page.getByRole('link', { name: new RegExp(linkedinSocial.name) });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', linkedinSocial.url);
  });

  test('page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that content is still visible on mobile
    await expect(page.getByRole('heading', { name: TEST_RESUME_DATA.name })).toBeVisible();
    await expect(page.getByText(TEST_RESUME_DATA.location)).toBeVisible();
  });
});
