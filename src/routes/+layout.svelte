<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { onMount, tick } from 'svelte';
	import { copy, language, languageReady, readLanguage } from '$lib/i18n';
	import '../app.css';
	import '../reskin.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		// Match the prerendered English DOM before restoring a saved preference.
		let saved: 'en' | 'es' = 'en';
		try {
			saved = readLanguage(window.localStorage);
		} catch {
			// Access to the localStorage property itself can also be blocked.
		}
		language.set(saved);
		document.documentElement.lang = saved;
		languageReady.set(true);
		void tick().then(() => document.documentElement.removeAttribute('data-language-pending'));
	});
</script>

<svelte:head>
	<title>{$copy['meta.title']}</title>
	<meta name="description" content={$copy['meta.description']} />
</svelte:head>

{@render children?.()}
