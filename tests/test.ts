import { expect, test } from '@playwright/test';

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.locator('h1')).toHaveText('Getting Started: Svelte Heros v2 for Svelte 4/5');
});

test('svelte-4/props', async ({ page }) => {
  await page.goto('/guide/svelte-4/props');
  await expect(page.locator('h1')).toHaveText('Svelte Heros v2 for Svelte 4/5: Props');
});

test('guide/svelte-5/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-5/getting-started');
  await expect(page.locator('h1')).toHaveText('Getting Started: Svelte Heros v2 for Svelte Runes');
});

test('guide/svelte-5/props page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-5/props');
  await expect(page.locator('h1')).toHaveText('Svelte Heros v2 for Svelte Runes: Props');
});

test('guide/global-icons page has expected h1', async ({ page }) => {
  await page.goto('/guide/global-icons');
  await expect(page.locator('h1')).toHaveText('Setting Global Icon using setContext');
});

test('guide/custom-icons page has expected h1', async ({ page }) => {
  await page.goto('/guide/global-icons');
  await expect(page.locator('h1')).toHaveText('Setting Global Icon using setContext');
});

test('/outline page has expected h1', async ({ page }) => {
  await page.goto('/outline');
  await expect(page.locator('h1')).toHaveText('Svelte Heros v2: Outline');
});

test('/solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  await expect(page.locator('h1')).toHaveText('Svelte Heros v2: Solid');
});

test('/mini page has expected h1', async ({ page }) => {
  await page.goto('/mini');
  await expect(page.locator('h1')).toHaveText('Svelte Heros v2: Mini');
});

test('/micro page has expected h1', async ({ page }) => {
  await page.goto('/micro');
  await expect(page.locator('h1')).toHaveText('Svelte Heros v2: Micro');
});
