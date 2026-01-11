<script lang="ts">
	import { blur } from 'svelte/transition';
	import type { FavoriteCategory, FavoriteItem } from '$lib/config/favorites';

	interface Props {
		category: FavoriteCategory;
		variant?: 'large' | 'wide' | 'square';
		gridArea?: string;
	}

	let { category, variant = 'square', gridArea = '' }: Props = $props();

	let isExpanded = $state(false);
	let tileElement: HTMLDivElement;
	let isMobile = $state(false);

	// Check if mobile on mount
	$effect(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	// Get preview items based on variant
	const previewCount = $derived(variant === 'large' ? 5 : variant === 'wide' ? 4 : 3);
	const previewItems = $derived(category.items.slice(0, previewCount));
	const remainingCount = $derived(category.items.length - previewCount);

	function handleMouseEnter() {
		if (!isMobile) {
			isExpanded = true;
		}
	}

	function handleMouseLeave() {
		if (!isMobile) {
			isExpanded = false;
		}
	}

	function handleClick() {
		if (isMobile) {
			isExpanded = !isExpanded;
		}
	}

	function handleBackdropClick() {
		isExpanded = false;
	}

	// Get border color class based on category color
	const borderColorMap: Record<string, string> = {
		'text-green-300': 'border-green-300/40 hover:border-green-300/60',
		'text-green-400': 'border-green-400/40 hover:border-green-400/60',
		'text-green-500': 'border-green-500/40 hover:border-green-500/60',
		'text-green-600': 'border-green-600/40 hover:border-green-600/60',
		'text-green-700': 'border-green-700/40 hover:border-green-700/60'
	};

	const glowColorMap: Record<string, string> = {
		'text-green-300': 'shadow-green-300/20',
		'text-green-400': 'shadow-green-400/20',
		'text-green-500': 'shadow-green-500/20',
		'text-green-600': 'shadow-green-600/20',
		'text-green-700': 'shadow-green-700/20'
	};

	const borderClass = $derived(borderColorMap[category.color] || 'border-green-400/40');
	const glowClass = $derived(glowColorMap[category.color] || 'shadow-green-400/20');
</script>

<!-- Backdrop when expanded on mobile -->
{#if isExpanded && isMobile}
	<button
		class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
		transition:blur={{ duration: 200 }}
		onclick={handleBackdropClick}
		aria-label="Close expanded tile"
	></button>
{/if}

<div
	bind:this={tileElement}
	class="bento-tile group relative overflow-hidden rounded-2xl border-2 bg-neutral-900/80 backdrop-blur-md transition-all duration-300 ease-out {borderClass}"
	class:expanded={isExpanded}
	class:z-50={isExpanded}
	class:shadow-2xl={isExpanded}
	class:{glowClass}={isExpanded}
	style:grid-area={gridArea}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	role="button"
	tabindex="0"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
>
	<!-- Gradient border glow effect -->
	<div
		class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05), transparent);"
	></div>

	<!-- Content container -->
	<div class="relative z-10 flex h-full flex-col p-5">
		<!-- Header -->
		<div class="mb-4 flex items-center gap-3">
			<span class="text-3xl">{category.icon}</span>
			<div class="flex-1">
				<h3 class="text-xl font-bold {category.color} drop-shadow-sm">{category.title}</h3>
				<p class="text-sm text-gray-400">{category.items.length} items</p>
			</div>
		</div>

		<!-- Items container -->
		<div class="flex-1 space-y-2">
			{#if isExpanded}
				<!-- Expanded: Show all items with staggered animation -->
				<div
					class="scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-transparent max-h-[60vh] space-y-2 overflow-y-auto pr-2"
				>
					{#each category.items as item, index}
						<div
							class="item-row flex items-center gap-2 rounded-lg bg-neutral-800/50 px-3 py-2 transition-all duration-200 hover:bg-neutral-700/50"
							style="animation: fadeSlideIn 0.3s ease-out {index * 0.03}s both;"
						>
							<span class="text-base">{category.itemIcon}</span>
							<div class="flex-1 min-w-0">
								<span class="block truncate text-sm font-medium text-indigo-300">{item.name}</span>
								{#if item.subtitle && category.subtitleIcon}
									<span class="block truncate text-xs text-gray-400">
										{category.subtitleIcon} {item.subtitle}
									</span>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<!-- Collapsed: Show preview items -->
				{#each previewItems as item, index}
					<div
						class="flex items-center gap-2 rounded-lg bg-neutral-800/30 px-3 py-2 transition-colors"
					>
						<span class="text-sm">{category.itemIcon}</span>
						<span class="flex-1 truncate text-sm text-gray-300">{item.name}</span>
					</div>
				{/each}

				{#if remainingCount > 0}
					<div
						class="mt-3 flex items-center justify-center gap-1 text-sm {category.color} opacity-80"
					>
						<span>+{remainingCount} more</span>
						<svg
							class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	.bento-tile {
		min-height: 200px;
	}

	.bento-tile.expanded {
		transform: scale(1.02);
		box-shadow:
			0 25px 50px -12px rgba(0, 0, 0, 0.5),
			0 0 30px rgba(34, 197, 94, 0.15);
	}

	@media (max-width: 768px) {
		.bento-tile.expanded {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) scale(1);
			width: 90vw;
			max-width: 400px;
			max-height: 80vh;
			z-index: 50;
		}
	}

	@keyframes fadeSlideIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Custom scrollbar for expanded view */
	.scrollbar-thin::-webkit-scrollbar {
		width: 6px;
	}

	.scrollbar-thin::-webkit-scrollbar-track {
		background: transparent;
	}

	.scrollbar-thin::-webkit-scrollbar-thumb {
		background: rgba(82, 82, 91, 0.5);
		border-radius: 3px;
	}

	.scrollbar-thin::-webkit-scrollbar-thumb:hover {
		background: rgba(82, 82, 91, 0.8);
	}
</style>
