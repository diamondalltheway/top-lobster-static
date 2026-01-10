<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { createPopper } from '@popperjs/core';

	interface Props {
		name?: string;
		linkURL?: string;
		imgURL?: string;
	}

	let { name = '', linkURL = '', imgURL = '' }: Props = $props();

	let tooltip: HTMLElement = $state();
	let referenceElement: HTMLElement = $state();
	let popperInstance: any = null;
	let tooltipTimeout: ReturnType<typeof setTimeout>;

	function showTooltip() {
		tooltipTimeout = setTimeout(() => {
			tooltip.style.display = 'block';
			popperInstance.update();
		}, 100);
	}

	function hideTooltip() {
		clearTimeout(tooltipTimeout);
		tooltip.style.display = 'none';
	}

	function initializePopper() {
		try {
			popperInstance = createPopper(referenceElement, tooltip, {
				placement: 'top',
			});
			tooltip.style.display = 'none';
		} catch (error) {
			console.error('Popper initialization error:', error);
		}
	}

	function addEventListeners() {
		referenceElement.addEventListener('mouseover', showTooltip);
		referenceElement.addEventListener('mouseout', hideTooltip);
	}

	function removeEventListeners() {
		referenceElement.removeEventListener('mouseover', showTooltip);
		referenceElement.removeEventListener('mouseout', hideTooltip);
	}

	onMount(() => {
		initializePopper();
		addEventListeners();
	});

	onDestroy(() => {
		removeEventListeners();
	});
</script>

<div class="my-2">
	<div
		bind:this={tooltip}
		class="py- glow space-grotesk fixed text-lg font-semibold text-indigo-300"
		style="display: none;"
	>
		{name}
	</div>
	<a bind:this={referenceElement} href={linkURL} target="_blank">
		<img
			class="to hover:motion-preset-shake border-1 col-span-1 mx-auto flex h-14 justify-center rounded-lg border border-slate-500 bg-slate-700 bg-gradient-to-b from-slate-500 object-cover p-2 shadow-md shadow-neutral-700
			{name === 'Docker' || name === 'Zod' ? 'p-0' : 'p-2'}"
			src={imgURL}
			alt=""
		/>
	</a>
</div>
