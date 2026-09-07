<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let menuOpen = $state(false);
	const navItems = [
		{ href: '#products', text: 'Products' },
		{ href: '#tech', text: 'Technologies' },
		{ href: '#open-source', text: 'Open source' },
		{ href: '#favorites', text: 'Favorites' },
	];
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') menuOpen = false;
	}}
/>

<header class="site-header">
	<nav class="site-nav shell" aria-label="Main navigation">
		<a class="wordmark" href="#top" aria-label="Hunter Stevens home">
			<img src="/favicon-blender.png" alt="" width="28" height="28" />
			<span>Hunter Stevens<span class="brand-period">.</span></span>
		</a>
		<div class="desktop-nav">
			{#each navItems as item}<a href={item.href}>{item.text}</a>{/each}
		</div>
		<div class="nav-actions">
			<ThemeToggle />
			<a href="#contact" class="surface-button nav-contact"
				>Get in touch <span aria-hidden="true">↗</span></a
			>
			<button
				class="icon-button menu-toggle"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					aria-hidden="true"
				>
					{#if menuOpen}<path d="m6 6 12 12M6 18 18 6" />{:else}<path d="M4 8h16M4 16h16" />{/if}
				</svg>
			</button>
		</div>
	</nav>
	{#if menuOpen}
		<nav id="mobile-menu" class="mobile-nav shell" aria-label="Mobile navigation">
			{#each navItems as item}<a href={item.href} onclick={() => (menuOpen = false)}
					>{item.text}<span aria-hidden="true">↗</span></a
				>{/each}
			<a href="#contact" onclick={() => (menuOpen = false)}
				>Get in touch <span aria-hidden="true">↗</span></a
			>
		</nav>
	{/if}
</header>
