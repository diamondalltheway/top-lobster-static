<script lang="ts">
	import { copy } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { isDarkMode } from '$lib/stores/theme';
	onMount(() => isDarkMode.init());
</script>

<button
	type="button"
	class="icon-button theme-toggle"
	data-theme={$isDarkMode ? 'dark' : 'light'}
	onclick={() => isDarkMode.toggle()}
	aria-label={$copy[$isDarkMode ? 'theme.light' : 'theme.dark']}
>
	<span class="toggle-scene coast-scene" aria-hidden="true">
		<svg viewBox="0 0 74 30" fill="none" focusable="false">
			<g class="coast-clouds" stroke="currentColor" stroke-linecap="round">
				<path d="M36 8h12m-5 4h14M61 6h5" />
			</g>
			<g class="coast-stars" fill="currentColor">
				<path d="m20 4 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z" />
				<circle cx="9" cy="12" r=".8" /><circle cx="34" cy="6" r=".8" />
			</g>
			<path class="coast-horizon" d="M-8 22Q7 15 23 21T52 20T82 18V35H-8Z" />
			<path class="coast-wave" d="M-8 26Q10 19 27 25T58 24T82 23V35H-8Z" />
			<path class="coast-glint" d="M34 24h9m-4 3h12" stroke="currentColor" stroke-linecap="round" />
		</svg>
	</span>
	<span class="toggle-thumb-position theme-thumb-position" aria-hidden="true">
		<span class="toggle-thumb theme-orbit">
			<svg
				class="theme-sun"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				focusable="false"
			>
				<circle cx="12" cy="12" r="3.5" />
				<path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
			</svg>
			<svg class="theme-moon" viewBox="0 0 24 24" fill="currentColor" focusable="false">
				<path d="M19.8 14.3A8 8 0 0 1 9.7 4.2a8 8 0 1 0 10.1 10.1Z" />
			</svg>
		</span>
	</span>
</button>
