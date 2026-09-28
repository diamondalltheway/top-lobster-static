<script lang="ts">
	import type { Snippet } from 'svelte';
	let { text, parts }: { text: string; parts: Record<string, Snippet> } = $props();
	// Messages control sentence order; the caller owns the safe, styled markup.
	const segments = $derived(text.split(/(\{[a-zA-Z][a-zA-Z0-9]*\})/g));
</script>

{#each segments as segment}{#if segment.startsWith('{') && parts[segment.slice(1, -1)]}{@render parts[
			segment.slice(1, -1)
		]()}{:else}{segment}{/if}{/each}
