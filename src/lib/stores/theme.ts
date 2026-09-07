import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const { subscribe, set, update } = writable(true); // default to dark

	return {
		subscribe,
		set,
		toggle: () => {
			update((isDark) => {
				const newValue = !isDark;
				if (browser) {
					try {
						localStorage.setItem('theme', newValue ? 'dark' : 'light');
					} catch {
						/* Theme still works when storage is unavailable. */
					}
					if (newValue) {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
				}
				return newValue;
			});
		},
		init: () => {
			if (browser) {
				let stored: string | null = null;
				try {
					stored = localStorage.getItem('theme');
				} catch {
					/* Use the default theme. */
				}
				const isDark = stored ? stored === 'dark' : true;
				set(isDark);
				if (isDark) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		},
	};
}

export const isDarkMode = createThemeStore();
