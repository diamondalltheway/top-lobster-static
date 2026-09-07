<script lang="ts">
	interface Props {
		text?: string;
		href?: string;
		targetBlank?: boolean;
		bgColor?: string;
		bgDepthColor?: string;
		disableLink?: boolean;
	}
	let { text = '', href = '', targetBlank = false, disableLink = false }: Props = $props();
</script>

{#if disableLink}
	<span class="surface-button">{text} <span aria-hidden="true">+</span></span>
{:else}
	<a
		class="surface-button"
		{href}
		target={targetBlank ? '_blank' : undefined}
		rel={targetBlank ? 'noreferrer' : undefined}>{text} <span aria-hidden="true">↗</span></a
	>
{/if}
