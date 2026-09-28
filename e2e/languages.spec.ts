import { test, expect, type Page } from '@playwright/test';
import original from './fixtures/english-original.json' with { type: 'json' };
import { collectEnglish } from './helpers/english-baseline';

const headerToggle = (page: Page) => page.locator('.site-header .language-toggle');
const footerToggle = (page: Page) => page.locator('.site-footer .language-toggle');

test.beforeEach(async ({ page }) => {
	await page.clock.install({ time: new Date('2026-09-28T12:00:00Z') });
	await page.emulateMedia({ reducedMotion: 'reduce' });
	// External logos must not make behavior checks depend on third-party hosts.
	await page.route(/^https:\/\//, (route) => route.abort());
});

async function openAllEnglishCopy(page: Page) {
	await page.getByRole('button', { name: 'More', exact: true }).click();
	await page.getByRole('button', { name: 'Spanish Goals', exact: true }).click();
	await expect(page.getByText('Challenge Accepted. 😎')).toBeVisible();
}

test('preserves all original English through a language round trip', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	page.on('console', (message) => {
		if (/hydration/i.test(message.text())) errors.push(message.text());
	});
	await page.setViewportSize({ width: 1440, height: 1000 });
	await page.goto('/');
	await expect(headerToggle(page)).toBeEnabled();
	await openAllEnglishCopy(page);
	expect(await collectEnglish(page)).toEqual(original.desktop);
	await headerToggle(page).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
	await expect(page.getByRole('button', { name: 'Más', exact: true })).toHaveAttribute(
		'aria-expanded',
		'true'
	);
	await expect(page.getByRole('button', { name: 'Metas con el español' })).toHaveAttribute(
		'aria-expanded',
		'true'
	);
	await expect(page.getByText('Reto aceptado. 😎')).toBeVisible();
	await expect(page.getByText('Harry Potter y la cámara secreta (84.799 palabras)')).toBeVisible();
	await expect(page.locator('.testimonial-set').first().locator('blockquote')).toHaveCount(6);
	await expect(page.locator('.testimonial-set').first()).toContainText(
		'Lo que realmente distingue a Hunter'
	);
	await expect(page.locator('.testimonial-clone')).toContainText(
		'Lo que realmente distingue a Hunter'
	);
	await expect(page.locator('#products')).toContainText('14.200 diseños');
	await expect(page.locator('#favorites')).toContainText('El principito');
	await expect(page.locator('#favorites')).toContainText('Soy muy apegado a mi lugar de origen');
	await expect(page).toHaveTitle('Hunter Stevens • Ingeniero de software');
	await expect(page.locator('meta[name="description"]')).toHaveCount(1);
	await expect(page.locator('meta[name="description"]')).toHaveAttribute(
		'content',
		/un toque humano/
	);
	await expect(page.locator('.site-header .theme-toggle')).toHaveAccessibleName(
		'Cambiar al modo claro'
	);
	await expect(page.locator('.product-image').first()).toHaveAccessibleName(
		'Visitar VerticalSpanish.com'
	);
	await expect(page.locator('.product-image img').first()).toHaveAttribute(
		'alt',
		'Vista previa del proyecto VerticalSpanish.com'
	);
	await expect(footerToggle(page)).toHaveAttribute('data-language', 'es');
	await footerToggle(page).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	expect(await collectEnglish(page)).toEqual(original.desktop);
	expect(errors).toEqual([]);
});

test('preserves original mobile copy and the open menu while switching', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 900 });
	await page.goto('/');
	await openAllEnglishCopy(page);
	await page.getByRole('button', { name: 'Open menu', exact: true }).click();
	expect(await collectEnglish(page)).toEqual(original.mobile);
	await headerToggle(page).click();
	await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
		'aria-expanded',
		'true'
	);
	await headerToggle(page).click();
	expect(await collectEnglish(page)).toEqual(original.mobile);
	await page.keyboard.press('Escape');
	await expect(page.locator('#mobile-menu')).toHaveCount(0);
});

test('English is the default for Spanish browsers and explicit choices persist', async ({
	page,
}) => {
	await page.addInitScript(() => Object.defineProperty(navigator, 'language', { value: 'es-CO' }));
	await page.goto('/');
	await expect(headerToggle(page)).toBeEnabled();
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await headerToggle(page).click();
	await page.reload();
	await expect(headerToggle(page)).toBeEnabled();
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
	await expect(page.locator('.portfolio')).toBeVisible();
	await expect(page.locator('html')).not.toHaveAttribute('data-language-pending');
	await headerToggle(page).click();
	await page.reload();
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	expect(await page.evaluate(() => localStorage.getItem('language'))).toBe('en');
});

test('handles invalid preferences and blocked storage', async ({ page }) => {
	await page.addInitScript(() => localStorage.setItem('language', 'invalid'));
	await page.goto('/');
	await expect(headerToggle(page)).toBeEnabled();
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await page.evaluate(() =>
		Object.defineProperty(window, 'localStorage', {
			get() {
				throw new DOMException('Blocked', 'SecurityError');
			},
		})
	);
	await headerToggle(page).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
	await headerToggle(page).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await page.addInitScript(() =>
		Object.defineProperty(window, 'localStorage', {
			get() {
				throw new DOMException('Blocked', 'SecurityError');
			},
		})
	);
	await page.reload();
	await expect(headerToggle(page)).toBeEnabled();
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await headerToggle(page).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('language and theme are independent in all four combinations', async ({ page }) => {
	await page.goto('/');
	const theme = page.locator('.site-header .theme-toggle');
	await headerToggle(page).click();
	await expect(page.locator('html')).toHaveClass('dark');
	await theme.click();
	await expect(page.locator('html')).not.toHaveClass('dark');
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
	await headerToggle(page).click();
	await expect(page.locator('html')).not.toHaveClass('dark');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await theme.click();
	await expect(page.locator('html')).toHaveClass('dark');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await headerToggle(page).click();
	await theme.click();
	await page.reload();
	await expect(headerToggle(page)).toBeEnabled();
	await expect(page.locator('html')).not.toHaveClass('dark');
	await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('keyboard switching retains focus and respects reduced motion', async ({ page }) => {
	await page.goto('/');
	await expect(headerToggle(page)).toBeEnabled();
	await headerToggle(page).focus();
	await page.keyboard.press('Enter');
	await expect(headerToggle(page)).toBeFocused();
	await expect(headerToggle(page)).toHaveAccessibleName('Switch to English');
	await expect(headerToggle(page)).toHaveAttribute('lang', 'en');
	await expect(page.locator('.language-orbit > span').first()).toHaveCSS(
		'transition-duration',
		'0s'
	);
	expect(await page.evaluate(() => window.scrollY)).toBe(0);
	await page.keyboard.press('Space');
	await expect(headerToggle(page)).toHaveAccessibleName('Cambiar a español');
	await expect(headerToggle(page)).toBeFocused();
});

test('keeps testimonial playback state while switching', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'no-preference' });
	await page.goto('/');
	await page.getByRole('button', { name: 'Pause testimonials' }).click();
	await headerToggle(page).click();
	await expect(page.getByRole('button', { name: 'Reanudar testimonios' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(page.getByRole('button', { name: 'Testimonio siguiente' })).toBeEnabled();
});

test('English remains readable without JavaScript', async ({ browser }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();
	await page.goto('http://127.0.0.1:4174/');
	await expect(page.locator('#hero-title')).toHaveText('Software witha human touch.');
	await expect(page.locator('.portfolio')).toBeVisible();
	await expect(headerToggle(page)).toBeDisabled();
	await context.close();
});

test('startup concealment expires if hydration fails', async ({ page }) => {
	await page.addInitScript(() => localStorage.setItem('language', 'es'));
	await page.route('**/_app/**/*.js', (route) => route.abort());
	await page.goto('/');
	await page.clock.runFor(1600);
	await expect(page.locator('.portfolio')).toBeVisible();
	await expect(page.locator('html')).not.toHaveAttribute('data-language-pending');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

for (const width of [320, 375, 768, 1024, 1440]) {
	test(`both languages fit at ${width}px in both themes`, async ({ page }) => {
		await page.setViewportSize({ width, height: 1000 });
		await page.goto('/');
		await page.evaluate(() => document.fonts.ready);
		for (const lang of ['en', 'es']) {
			if (lang === 'es') await headerToggle(page).click();
			for (const theme of ['dark', 'light']) {
				await page.evaluate((theme) => {
					const button = document.querySelector<HTMLButtonElement>('.site-header .theme-toggle')!;
					if (button.dataset.theme !== theme) button.click();
				}, theme);
				await expect(headerToggle(page)).toBeVisible();
				const overflow = await page.evaluate(() => {
					const selectors = [
						'.site-nav',
						'#hero-title',
						'.hero-description',
						'.hero-actions',
						'.contact-section',
						'.credentials',
						'.footer-links',
					];
					return selectors.filter((selector) => {
						const element = document.querySelector<HTMLElement>(selector)!;
						const bounds = element.getBoundingClientRect();
						return (
							bounds.left < -1 ||
							bounds.right > innerWidth + 1 ||
							element.scrollWidth > element.clientWidth + 2
						);
					});
				});
				expect(overflow, `${lang}/${theme}`).toEqual([]);
				expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
					width
				);
			}
		}
	});
}
