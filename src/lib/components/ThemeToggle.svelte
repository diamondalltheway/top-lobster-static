<script lang="ts">
	import { onMount } from 'svelte';
	import { isDarkMode } from '$lib/stores/theme';
	onMount(() => isDarkMode.init());
</script>

<button
	type="button"
	class="icon-button theme-toggle"
	data-theme={$isDarkMode ? 'dark' : 'light'}
	onclick={() => isDarkMode.toggle()}
	aria-label={$isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
>
	<span class="theme-orbit" aria-hidden="true">
		<svg
			class="theme-sun"
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-linecap="round"
		>
			<circle class="theme-sun-core" cx="12" cy="12" r="4" />
			<path
				class="theme-sun-rays"
				d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
			/>
		</svg>
		<svg
			class="theme-moon"
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M19.8 14.3A8 8 0 0 1 9.7 4.2a8 8 0 1 0 10.1 10.1Z" />
			<path class="theme-star" d="M18 3v4m-2-2h4M21 9v2m-1-1h2" />
		</svg>
	</span>
</button>
