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

	const previewCount = $derived(variant === 'large' ? 5 : variant === 'wide' ? 4 : 3);
	const previewItems = $derived(category.items.slice(0, previewCount));
	const hiddenItems = $derived(category.items.slice(previewCount));
	const remainingCount = $derived(hiddenItems.length);

	function handleMouseEnter() {
		if (!isMobile) isExpanded = true;
	}

	function handleMouseLeave() {
		if (!isMobile) isExpanded = false;
	}

	function handleClick() {
		if (isMobile) isExpanded = !isExpanded;
	}

	const borderColorMap: Record<string, string> = {
		'text-green-300': 'border-green-300/40',
		'text-green-400': 'border-green-400/40',
		'text-green-500': 'border-green-500/40',
		'text-green-600': 'border-green-600/40',
		'text-green-700': 'border-green-700/40'
	};

	const borderExpandedMap: Record<string, string> = {
		'text-green-300': 'border-green-300/60',
		'text-green-400': 'border-green-400/60',
		'text-green-500': 'border-green-500/60',
		'text-green-600': 'border-green-600/60',
		'text-green-700': 'border-green-700/60'
	};

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
				<h3 class="text-xl font-bold {category.color} drop-shadow-sm">{category.title}</h3>
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
					class="more-indicator flex items-center justify-center gap-1 pt-2 text-sm {category.color}"
					class:collapsed={!isExpanded}
				>
					<span>+{remainingCount} more</span>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
			{/if}
		</div>
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
