import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'svelte/compiler';
import { en } from './en';
import { es } from './es';
import { formatMessage, readLanguage, type MessageKey } from './index';

const untranslatedByDesign = new Set([
	'featured.addressCount',
	'featured.csvValue',
	'favorites.books.happiness',
	'favorites.books.launchPad',
	'favorites.books.tocqueville',
	'favorites.books.grammar',
	'favorites.shows.severance',
	'favorites.shows.lineOfDuty',
	'favorites.shows.dexter',
	'favorites.shows.cheers',
	'favorites.shows.yuyu',
	'favorites.shows.trueDetective',
	'favorites.shows.fargo',
	'favorites.places.woodlands',
	'favorites.places.medellin',
	'favorites.places.denver',
	'favorites.places.papagayo',
	'favorites.places.lima.note',
	'favorites.places.atacama',
	'favorites.places.jardin',
	'favorites.places.paracas',
	'favorites.places.leyva',
	'favorites.places.santaMarta',
	'favorites.places.retiro',
	'favorites.places.cartagena',
]);

describe('translation integrity', () => {
	it('has a nonempty Spanish entry and identical placeholders for every English message', () => {
		expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
		for (const key of Object.keys(en) as MessageKey[]) {
			expect(es[key].trim(), key).not.toBe('');
			const placeholders = (message: string) =>
				message.match(/\{[a-zA-Z][a-zA-Z0-9]*\}/g)?.sort() ?? [];
			expect(placeholders(es[key]), key).toEqual(placeholders(en[key]));
			if (en[key] === es[key])
				expect(untranslatedByDesign.has(key), `Unreviewed English: ${key}`).toBe(true);
		}
	});

	it('interpolates plain text without changing literal dollar signs or markup', () => {
		expect(formatMessage(es['products.visit'], { title: 'A $& <B>' })).toBe('Visitar A $& <B>');
		expect(formatMessage(es['favorites.count'], { count: 15 })).toBe('15 favoritos');
	});

	it('defaults safely when preferences are absent, invalid, or blocked', () => {
		for (const value of [null, '', 'fr', 'ES', 'en'])
			expect(readLanguage({ getItem: () => value })).toBe('en');
		expect(readLanguage({ getItem: () => 'es' })).toBe('es');
		expect(
			readLanguage({
				getItem: () => {
					throw new Error('Blocked');
				},
			})
		).toBe('en');
	});

	it('leaves only explicitly reviewed names and identifiers hardcoded in active markup', () => {
		const allowed = new Set([
			'hunter@toplobster.io',
			'GitHub ↗',
			'LinkedIn ↗',
			'dataforest.io',
			'Hunter Stevens.',
			'Hunter Stevens',
			'StruCalc',
			'C1',
			'University of Houston',
			'Launch School',
			'@HunterScript',
			'TypeScript.',
			'🥇 Svelte',
			'Rich Harris',
			'🥈 React/Next.js',
			'Tailwind CSS',
			'Shadcn UI',
			'🔵 Syntax',
			'🔵 The Standup',
			'🔵 The Primeagen',
			'🔵 Theo Browne',
			'🔵 Ben Davis',
			'🔵 Matt Pocock',
			'🔵 Notes on Work (Caleb Porzio)',
			'🔵 Front-End Fire',
			'🔵 Nerd Snipe',
			'🔵 Fireship',
			'VerticalSpanish.com',
			'Flow Editor',
			'CampaginHero.io',
			'AirMailer.io',
			'UpScout.io',
			'DataForest.io',
			'ES',
			'EN',
		]);
		const files = readdirSync('src/routes')
			.filter((file) => file.endsWith('.svelte'))
			.map((file) => `src/routes/${file}`);
		files.push(
			...[
				'ThemeToggle',
				'LanguageToggle',
				'Product',
				'BentoTile',
				'TestimonialCard',
				'RichText',
			].map((file) => `src/lib/components/${file}.svelte`)
		);
		for (const file of files) {
			function walk(value: unknown, attribute?: string) {
				if (!value || typeof value !== 'object') return;
				const node = value as Record<string, unknown>;
				if (node.type === 'Attribute') attribute = node.name as string;
				if (
					node.type === 'Text' &&
					typeof node.data === 'string' &&
					/[a-zA-Z]/.test(node.data) &&
					(!attribute || ['aria-label', 'alt', 'title', 'description'].includes(attribute))
				) {
					expect(allowed.has(node.data.trim()), `${file}: ${node.data.trim()}`).toBe(true);
				}
				for (const child of Object.values(node)) {
					if (Array.isArray(child)) child.forEach((item) => walk(item, attribute));
					else if (child && typeof child === 'object') walk(child, attribute);
				}
			}
			walk(parse(readFileSync(file, 'utf8')).html);
		}
	});
});
