import { expect, test } from '@playwright/test';
import { TEST_RESUME_DATA } from './test-data';

test.describe('CV Basic Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(new RegExp(TEST_RESUME_DATA.name));
  });

  test('displays personal information', async ({ page }) => {
    // Check name is displayed in heading
    await expect(
      page.getByRole('heading', { name: TEST_RESUME_DATA.name }),
    ).toBeVisible();

    // Check location is displayed
    await expect(page.getByText(TEST_RESUME_DATA.location)).toBeVisible();

    // Check summary is displayed
    await expect(
      page.getByText(new RegExp(TEST_RESUME_DATA.summary.substring(0, 30))),
    ).toBeVisible();
  });

  test('displays contact information', async ({ page }) => {
    // Check email link
    await expect(
      page.getByRole('link', {
        name: new RegExp(
          TEST_RESUME_DATA.contact.email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        ),
      }),
    ).toBeVisible();

    // Check phone link
    await expect(
      page.getByRole('link', {
        name: new RegExp(
          TEST_RESUME_DATA.contact.tel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        ),
      }),
    ).toBeVisible();
  });

  test('displays social links', async ({ page }) => {
    const githubSocial = TEST_RESUME_DATA.contact.social.find(
      s => s.name === 'GitHub',
    );
    expect(githubSocial).toBeDefined();
    await expect(
      page.getByRole('link', { name: new RegExp(githubSocial!.name) }),
    ).toBeVisible();

    const linkedinSocial = TEST_RESUME_DATA.contact.social.find(
      s => s.name === 'LinkedIn',
    );
    expect(linkedinSocial).toBeDefined();
    await expect(
      page.getByRole('link', { name: new RegExp(linkedinSocial!.name) }),
    ).toBeVisible();
  });

  test('displays education section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Education' }),
    ).toBeVisible();

    const firstEducation = TEST_RESUME_DATA.education.at(0);
    const lastEducation = TEST_RESUME_DATA.education.at(-1);
    expect(firstEducation).toBeDefined();
    expect(lastEducation).toBeDefined();
    await expect(page.getByText(firstEducation!.school).first()).toBeVisible();
    await expect(page.getByText(lastEducation!.degree)).toBeVisible();
  });

  test('displays work experience section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Work Experience' }),
    ).toBeVisible();

    const firstJob = TEST_RESUME_DATA.work.at(0);
    expect(firstJob).toBeDefined();
    await expect(
      page.getByRole('link', { name: new RegExp(firstJob!.company) }),
    ).toBeVisible();
  });

  test('displays skills section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();

    const firstSkill = TEST_RESUME_DATA.skills.at(0);
    const lastSkill = TEST_RESUME_DATA.skills.at(-1);
    expect(firstSkill).toBeDefined();
    expect(lastSkill).toBeDefined();
    await expect(page.getByText(firstSkill!).first()).toBeVisible();
    await expect(page.getByText(lastSkill!).first()).toBeVisible();
  });

  test('displays projects section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();

    const firstProject = TEST_RESUME_DATA.projects.at(0);
    expect(firstProject).toBeDefined();
    await expect(page.getByText(firstProject!.title).first()).toBeVisible();
    await expect(
      page.getByText(firstProject!.description.substring(0, 40)).first(),
    ).toBeVisible();
  });

  test('social links are external links', async ({ page }) => {
    const githubSocial = TEST_RESUME_DATA.contact.social.find(
      s => s.name === 'GitHub',
    );
    expect(githubSocial).toBeDefined();
    const githubLink = page.getByRole('link', {
      name: new RegExp(githubSocial!.name),
    });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', githubSocial!.url);

    const linkedinSocial = TEST_RESUME_DATA.contact.social.find(
      s => s.name === 'LinkedIn',
    );
    expect(linkedinSocial).toBeDefined();
    const linkedinLink = page.getByRole('link', {
      name: new RegExp(linkedinSocial!.name),
    });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', linkedinSocial!.url);
  });
});
