<script lang="ts">
	import { copy, formatMessage } from '$lib/i18n';
	import type { FavoriteCategory } from '$lib/config/favorites';

	interface Props {
		category: FavoriteCategory;
		variant?: 'large' | 'wide' | 'square';
		gridArea?: string;
	}

	let { category, variant = 'square', gridArea = '' }: Props = $props();
</script>

<article
	class="relative min-h-[180px] overflow-hidden rounded-2xl border-2 border-heading/25 bg-surface-muted/80 backdrop-blur-md"
	style:grid-area={gridArea}
>
	<div
		class="pointer-events-none absolute inset-0 rounded-[inherit]"
		style="background: linear-gradient(135deg, hsl(var(--heading) / 0.07), hsl(var(--heading-accent) / 0.025), transparent);"
	></div>

	<div class="relative z-10 flex h-full flex-col p-5">
		<header class="mb-4 flex items-center gap-3">
			<span class="text-3xl" aria-hidden="true">{category.icon}</span>
			<div class="min-w-0 flex-1">
				<h3 class="text-xl font-bold text-heading drop-shadow-sm">{$copy[category.titleKey]}</h3>
				<p class="text-base text-txt-muted">
					{formatMessage($copy['favorites.count'], { count: category.items.length })}
				</p>
			</div>
		</header>

		{#if variant === 'wide'}
			<ol role="list" class="places-list flex-1 columns-1 gap-2 sm:columns-2 lg:columns-3">
				{#each category.items as item, index}
					<li
						class="mb-2 flex break-inside-avoid items-center gap-3 rounded-lg bg-surface/60 px-3 py-2.5"
					>
						<span class="favorite-number" aria-hidden="true">{index + 1}</span>
						<div class="min-w-0 flex-1">
							<span class="block text-base font-medium leading-6 text-heading"
								>{$copy[item.nameKey]}</span
							>
							{#if item.subtitle || item.subtitleKey}
								<span class="block text-sm leading-5 text-txt-muted"
									>{item.subtitleKey ? $copy[item.subtitleKey] : item.subtitle}</span
								>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		{:else}
			<ol role="list" class="flex-1 space-y-2">
				{#each category.items as item, index}
					<li class="flex items-center gap-3 rounded-lg bg-surface/60 px-3 py-2.5">
						<span class="favorite-number" aria-hidden="true">{index + 1}</span>
						<div class="min-w-0 flex-1">
							<span class="block text-base font-medium leading-6 text-heading"
								>{$copy[item.nameKey]}</span
							>
							{#if item.subtitle || item.subtitleKey}
								<span class="block text-sm leading-5 text-txt-muted"
									>{item.subtitleKey ? $copy[item.subtitleKey] : item.subtitle}</span
								>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		{/if}
	</div>
</article>
