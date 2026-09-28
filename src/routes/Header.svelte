<script lang="ts">
	import { copy } from '$lib/i18n';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let menuOpen = $state(false);
	const navItems = [
		{ href: '#products', text: 'navigation.products' },
		{ href: '#tech', text: 'navigation.technologies' },
		{ href: '#open-source', text: 'navigation.openSource' },
		{ href: '#favorites', text: 'favorites.heading' },
	] as const;
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') menuOpen = false;
	}}
/>

<header class="site-header">
	<nav class="site-nav shell" aria-label={$copy['navigation.main']}>
		<a class="wordmark" href="#top" aria-label={$copy['navigation.home']}>
			<img src="/favicon-blender.png" alt="" width="28" height="28" />
			<span>Hunter Stevens<span class="brand-period">.</span></span>
		</a>
		<div class="desktop-nav">
			{#each navItems as item}<a href={item.href}>{$copy[item.text]}</a>{/each}
		</div>
		<div class="nav-actions">
			<ThemeToggle />
			<LanguageToggle />
			<a href="#contact" class="surface-button nav-contact"
				>{$copy['navigation.contact']} <span aria-hidden="true">↗</span></a
			>
			<button
				class="icon-button menu-toggle"
				aria-label={$copy[menuOpen ? 'navigation.close' : 'navigation.open']}
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
		<nav id="mobile-menu" class="mobile-nav shell" aria-label={$copy['navigation.mobile']}>
			{#each navItems as item}<a href={item.href} onclick={() => (menuOpen = false)}
					>{$copy[item.text]}<span aria-hidden="true">↗</span></a
				>{/each}
			<a href="#contact" onclick={() => (menuOpen = false)}
				>{$copy['navigation.contact']} <span aria-hidden="true">↗</span></a
			>
		</nav>
	{/if}
</header>
