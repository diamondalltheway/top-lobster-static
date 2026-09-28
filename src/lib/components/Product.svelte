<script lang="ts">
	import { copy, formatMessage } from '$lib/i18n';
	import Icon from './Icon.svelte';
	interface Props {
		title?: string;
		description?: string;
		linkURL?: string;
		imgURL?: string;
		icons?: { name: string; linkURL: string; imgURL: string }[];
		legacy?: boolean;
	}
	let {
		title = '',
		description = '',
		linkURL = '',
		imgURL = '',
		icons = [],
		legacy = false,
	}: Props = $props();
</script>

<article class="product-card">
	<a
		href={linkURL}
		target="_blank"
		rel="noreferrer"
		class="product-image"
		aria-label={formatMessage($copy['products.visit'], { title })}
	>
		<img src={imgURL} alt={formatMessage($copy['products.preview'], { title })} loading="lazy" />
	</a>
	<h4>
		<a href={linkURL} target="_blank" rel="noreferrer"
			>{title}<span aria-hidden="true">↗</span>{#if legacy}<span class="legacy-badge"
					>{$copy['products.legacyBadge']}</span
				>{/if}</a
		>
	</h4>
	<p>{description}</p>
	<div class="product-technologies">
		{#each icons as data}<Icon
				name={data.name}
				linkURL={data.linkURL}
				imgURL={data.imgURL}
			/>{/each}
	</div>
</article>
