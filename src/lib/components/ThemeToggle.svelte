<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let isDark = $state(true);
	let mounted = $state(false);

	onMount(() => {
		const stored = localStorage.getItem('theme');
		isDark = stored ? stored === 'dark' : true;
		mounted = true;
	});

	function toggle() {
		isDark = !isDark;
		if (browser) {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
</script>

<button
	onclick={toggle}
	class="relative flex h-9 w-9 items-center justify-center rounded-full
		   bg-surface-muted border border-border-subtle
		   hover:border-heading transition-all duration-300
		   focus:outline-none focus:ring-2 focus:ring-heading/50"
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if mounted}
		<!-- Sun icon (shown in dark mode - click to go light) -->
		<svg
			class="h-5 w-5 text-amber-400 transition-all duration-300 absolute
				   {isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>

		<!-- Moon icon (shown in light mode - click to go dark) -->
		<svg
			class="h-5 w-5 text-heading transition-all duration-300 absolute
				   {!isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	{:else}
		<!-- Placeholder while mounting to prevent layout shift -->
		<div class="h-5 w-5"></div>
	{/if}
</button>
