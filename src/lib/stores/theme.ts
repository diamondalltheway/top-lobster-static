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
					localStorage.setItem('theme', newValue ? 'dark' : 'light');
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
				const stored = localStorage.getItem('theme');
				const isDark = stored ? stored === 'dark' : true;
				set(isDark);
				if (isDark) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		}
	};
}

export const isDarkMode = createThemeStore();
