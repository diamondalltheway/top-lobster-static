import type { Page } from '@playwright/test';

// Captured from the original English site before localization. Do not regenerate
// this baseline from the translation catalogs: it protects the owner's copy.
export async function collectEnglish(page: Page) {
	return page.evaluate(() => {
		const clean = (value: string | null) => (value ?? '').replace(/\s+/g, ' ').trim();
		const root = document.querySelector('.portfolio')!.cloneNode(true) as HTMLElement;
		root.querySelectorAll('.language-toggle').forEach((node) => node.remove());
		const selectors = [
			'header',
			'#top',
			'.credentials',
			'#testimonials',
			'#about',
			'#tech',
			'#open-source',
			'.featured-product',
			'#products',
			'#ls-section',
			'#favorites',
			'#contact',
			'footer',
		];
		return {
			title: document.title,
			description: document.querySelector('meta[name="description"]')!.getAttribute('content'),
			skipLink: document.querySelector('.skip-link')!.textContent,
			sections: Object.fromEntries(
				selectors.map((selector) => [selector, clean(root.querySelector(selector)!.textContent)])
			),
			labels: Array.from(root.querySelectorAll('[aria-label], img[alt]')).map((element) => ({
				tag: element.tagName,
				label: element.getAttribute('aria-label'),
				alt: element.getAttribute('alt'),
			})),
			links: Array.from(root.querySelectorAll('a')).map((element) => element.getAttribute('href')),
			images: Array.from(root.querySelectorAll('img')).map((element) =>
				element.getAttribute('src')
			),
		};
	});
}
