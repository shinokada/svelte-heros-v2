import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Svelte Heros v2');
});

test('Mini page has expected h1', async ({ page }) => {
  await page.goto('/mini');
  expect(await page.textContent('h1')).toBe('Svelte Heros v2: Mini');
});

test('Micro page has expected h1', async ({ page }) => {
  await page.goto('/micro');
  expect(await page.textContent('h1')).toBe('Svelte Heros v2: Micro');
});

test('Outline page has expected h1', async ({ page }) => {
  await page.goto('/outline');
  expect(await page.textContent('h1')).toBe('Svelte Heros v2: Outline');
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  expect(await page.textContent('h1')).toBe('Svelte Heros v2: Solid');
});
