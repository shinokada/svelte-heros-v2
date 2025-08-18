import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Svelte Heros V2', level: 1 })).toBeVisible();
});

test('index page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle('Svelte Heros V2');
});

test('index page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute('content', 'Hero icon v2 components for Svelte');
});

test('index page has expected meta keywords', async ({ page }) => {
	const metaKeywords = page.locator('meta[name="keywords"]');
	await expect(metaKeywords).toHaveAttribute(
		'content',
		'Svelte, Runes, Sveltekit, Hero icons, svg icons, icons'
	);
});

test('index page has expected meta og', async ({ page }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', 'Svelte Heros V2');
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute('content', 'Hero icon v2 components for Svelte');
	const metaOgUrl = page.locator('meta[property="og:url"]');
	await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
	const metaOgImage = page.locator('meta[property="og:image"]');
	await expect(metaOgImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/svelte-heros-v2'
	);
});

test('index page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', 'Svelte Heros V2');
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute(
		'content',
		'Hero icon v2 components for Svelte'
	);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/svelte-heros-v2'
	);
});
