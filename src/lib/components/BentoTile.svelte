<script lang="ts">
	import type { FavoriteCategory } from '$lib/config/favorites';

	interface Props {
		category: FavoriteCategory;
		variant?: 'large' | 'wide' | 'square';
		gridArea?: string;
	}

	let { category, variant = 'square', gridArea = '' }: Props = $props();

	let isExpanded = $state(false);
	let isMobile = $state(false);

	$effect(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	const previewCount = $derived(variant === 'large' ? 5 : variant === 'wide' ? 6 : 3);
	const previewItems = $derived(category.items.slice(0, previewCount));
	const hiddenItems = $derived(category.items.slice(previewCount));
	const remainingCount = $derived(hiddenItems.length);

	// For wide variant: split items into two columns (top-to-bottom flow)
	const allItems = $derived(isExpanded ? category.items : previewItems);
	const midpoint = $derived(Math.ceil(allItems.length / 2));
	const leftColumnItems = $derived(allItems.slice(0, midpoint));
	const rightColumnItems = $derived(allItems.slice(midpoint));

	function handleMouseEnter() {
		if (!isMobile) isExpanded = true;
	}

	function handleMouseLeave() {
		if (!isMobile) isExpanded = false;
	}

	function handleClick() {
		if (isMobile) isExpanded = !isExpanded;
	}

	// Light mode uses darker greens, dark mode uses lighter greens
	const textColorMap: Record<string, string> = {
		'text-green-300': 'text-green-700 dark:text-green-300',
		'text-green-400': 'text-green-700 dark:text-green-400',
		'text-green-500': 'text-green-700 dark:text-green-500',
		'text-green-600': 'text-green-700 dark:text-green-600',
		'text-green-700': 'text-green-800 dark:text-green-700'
	};

	const borderColorMap: Record<string, string> = {
		'text-green-300': 'border-green-600/40 dark:border-green-300/40',
		'text-green-400': 'border-green-600/40 dark:border-green-400/40',
		'text-green-500': 'border-green-600/40 dark:border-green-500/40',
		'text-green-600': 'border-green-700/40 dark:border-green-600/40',
		'text-green-700': 'border-green-700/40 dark:border-green-700/40'
	};

	const borderExpandedMap: Record<string, string> = {
		'text-green-300': 'border-green-600/60 dark:border-green-300/60',
		'text-green-400': 'border-green-600/60 dark:border-green-400/60',
		'text-green-500': 'border-green-600/60 dark:border-green-500/60',
		'text-green-600': 'border-green-700/60 dark:border-green-600/60',
		'text-green-700': 'border-green-700/60 dark:border-green-700/60'
	};

	const textClass = $derived(textColorMap[category.color] || 'text-green-700 dark:text-green-400');

	const borderClass = $derived(
		isExpanded
			? (borderExpandedMap[category.color] || 'border-green-400/60')
			: (borderColorMap[category.color] || 'border-green-400/40')
	);
</script>

<div
	class="bento-tile group relative overflow-hidden rounded-2xl border-2 bg-surface-muted/80 backdrop-blur-md {borderClass}"
	style:grid-area={gridArea}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	role="button"
	tabindex="0"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
>
	<!-- Subtle gradient overlay -->
	<div
		class="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-700 ease-out"
		class:opacity-0={!isExpanded}
		class:opacity-100={isExpanded}
		style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.06), rgba(16, 185, 129, 0.03), transparent);"
	></div>

	<div class="relative z-10 flex h-full flex-col p-5">
		<!-- Header -->
		<div class="mb-4 flex items-center gap-3">
			<span class="text-3xl">{category.icon}</span>
			<div class="flex-1">
				<h3 class="text-xl font-bold {textClass} drop-shadow-sm">{category.title}</h3>
				<p class="text-sm text-txt-muted">{category.items.length} items</p>
			</div>
			{#if isMobile && remainingCount > 0}
				<svg
					class="h-5 w-5 text-txt-muted transition-transform duration-500 ease-out"
					class:rotate-180={isExpanded}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			{/if}
		</div>

		<!-- Items -->
		{#if variant === 'wide'}
			<!-- Wide variant: Two columns with top-to-bottom flow -->
			<div class="flex-1 grid grid-cols-2 gap-4">
				<!-- Left column -->
				<div class="space-y-2">
					{#each leftColumnItems as item, index}
						<div
							class="flex items-center gap-2 rounded-lg bg-surface/60 px-3 py-2 transition-all duration-300"
							class:opacity-0={index >= Math.ceil(previewCount / 2) && !isExpanded}
							class:translate-y-2={index >= Math.ceil(previewCount / 2) && !isExpanded}
						>
							<span class="text-sm">{category.itemIcon}</span>
							<div class="flex-1 min-w-0">
								<span class="block truncate text-sm font-medium text-heading">{item.name}</span>
								{#if item.subtitle}
									<span class="block truncate text-xs text-txt-muted italic">{item.subtitle}</span>
								{/if}
							</div>
						</div>
					{/each}
				</div>
				<!-- Right column -->
				<div class="space-y-2">
					{#each rightColumnItems as item, index}
						<div
							class="flex items-center gap-2 rounded-lg bg-surface/60 px-3 py-2 transition-all duration-300"
							class:opacity-0={index >= Math.floor(previewCount / 2) && !isExpanded}
							class:translate-y-2={index >= Math.floor(previewCount / 2) && !isExpanded}
						>
							<span class="text-sm">{category.itemIcon}</span>
							<div class="flex-1 min-w-0">
								<span class="block truncate text-sm font-medium text-heading">{item.name}</span>
								{#if item.subtitle}
									<span class="block truncate text-xs text-txt-muted italic">{item.subtitle}</span>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
			<!-- "+X more" when collapsed -->
			{#if remainingCount > 0}
				<div
					class="more-indicator flex items-center justify-center gap-1 pt-2 text-sm {textClass}"
					class:collapsed={!isExpanded}
				>
					<span>+{remainingCount} more</span>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
			{/if}
		{:else}
			<!-- Standard variant: Single column with expandable section -->
			<div class="flex-1 space-y-2">
				<!-- Always visible preview items -->
				{#each previewItems as item}
					<div class="flex items-center gap-2 rounded-lg bg-surface/60 px-3 py-2">
						<span class="text-sm">{category.itemIcon}</span>
						<div class="flex-1 min-w-0">
							<span class="block truncate text-sm font-medium text-heading">{item.name}</span>
							{#if item.subtitle}
								<span class="block truncate text-xs text-txt-muted italic">{item.subtitle}</span>
							{/if}
						</div>
					</div>
				{/each}

				<!-- Expandable hidden items -->
				{#if remainingCount > 0}
					<div class="expandable-section" class:expanded={isExpanded}>
						<div class="expandable-inner space-y-2">
							{#each hiddenItems as item, index}
								<div
									class="item-row flex items-center gap-2 rounded-lg bg-surface/60 px-3 py-2"
									style="transition-delay: {isExpanded ? index * 25 : 0}ms;"
									class:item-visible={isExpanded}
								>
									<span class="text-sm">{category.itemIcon}</span>
									<div class="flex-1 min-w-0">
										<span class="block truncate text-sm font-medium text-heading">{item.name}</span>
										{#if item.subtitle}
											<span class="block truncate text-xs text-txt-muted italic">{item.subtitle}</span>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- "+X more" when collapsed -->
					<div
						class="more-indicator flex items-center justify-center gap-1 pt-2 text-sm {textClass}"
						class:collapsed={!isExpanded}
					>
						<span>+{remainingCount} more</span>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.bento-tile {
		min-height: 180px;
		transition: border-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
					box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Smooth height expansion using grid */
	.expandable-section {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.6s cubic-bezier(0.33, 1, 0.68, 1);
	}

	.expandable-inner {
		overflow: hidden;
	}

	.expandable-section.expanded {
		grid-template-rows: 1fr;
	}

	/* Individual item fade-in */
	.item-row {
		opacity: 0;
		transform: translateY(6px);
		transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
					transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.item-row.item-visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* "+X more" indicator */
	.more-indicator {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
					max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.more-indicator.collapsed {
		opacity: 0.8;
		max-height: 40px;
	}

	/* Subtle glow when expanded */
	.bento-tile:has(.expandable-section.expanded) {
		box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.25),
					0 0 16px rgba(34, 197, 94, 0.06);
	}
</style>
