import { test, expect } from '@playwright/test';

test('initializes production analytics once and queues the initial pageview', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await page.route('**/_vercel/insights/script.js', (route) =>
		route.fulfill({ contentType: 'application/javascript', body: '' })
	);
	await page.goto('/');

	const analytics = page.locator('head script[src="/_vercel/insights/script.js"]');
	await expect(analytics).toHaveCount(1);
	await expect(analytics).toHaveAttribute('data-sdkn', '@vercel/analytics/sveltekit');
	await expect(analytics).toHaveAttribute('data-disable-auto-track', '1');
	await expect
		.poll(() =>
			page.evaluate(() => ({
				mode: window.vam,
				pageviews: window.vaq?.filter(([event]) => event === 'pageview'),
			}))
		)
		.toEqual({ mode: 'production', pageviews: [['pageview', { route: '/', path: '/' }]] });

	await page.locator('.site-header .language-toggle').click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
	await expect(analytics).toHaveCount(1);
	expect(errors).toEqual([]);
});
