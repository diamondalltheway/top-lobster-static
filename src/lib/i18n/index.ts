import { derived, writable } from 'svelte/store';
import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';
export type MessageKey = keyof typeof en;
export type Messages = Record<MessageKey, string>;

export const catalogs: Record<Locale, Messages> = { en, es };
export const language = writable<Locale>('en');
export const languageReady = writable(false);
export const copy = derived(language, ($language) => catalogs[$language]);

export function readLanguage(storage: Pick<Storage, 'getItem'>): Locale {
	try {
		return storage.getItem('language') === 'es' ? 'es' : 'en';
	} catch {
		return 'en';
	}
}

export function setLanguage(value: Locale) {
	language.set(value);
	if (typeof document !== 'undefined') document.documentElement.lang = value;
	if (typeof window !== 'undefined') {
		try {
			window.localStorage.setItem('language', value);
		} catch {
			// Switching remains available when storage is blocked or full.
		}
	}
}

/** Plain-text interpolation for attributes; rich copy uses Svelte snippets. */
export function formatMessage(message: string, values: Record<string, string | number>) {
	return message.replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, (token, name: string) =>
		Object.hasOwn(values, name) ? String(values[name]) : token
	);
}
