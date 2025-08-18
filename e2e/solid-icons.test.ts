import { expect, test } from '@playwright/test';
const title = 'Solid Icons - Svelte Heros v2';
const description = 'Easily Find & Copy SVG Icon name for Your Project';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros-v2';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/solid');
});

test('Solid Icons page has expected h1, meta title', async ({ page }) => {
	await expect(page.getByRole('heading', { name: title })).toBeVisible();
});

test('Solid Icons page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle(title);
});

test('Solid Icons page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute('content', description);
});

test('Solid Icons page has expected meta og', async ({ page }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', title);
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute('content', description);
	const metaOgUrl = page.locator('meta[property="og:url"]');
	await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/icons');
	const metaOgImage = page.locator('meta[property="og:image"]');
	await expect(metaOgImage).toHaveAttribute('content', imgUrl);
});

test('Solid Icons page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', title);
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute('content', description);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute('content', imgUrl);
});
