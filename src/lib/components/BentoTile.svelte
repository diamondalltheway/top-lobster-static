<script lang="ts">
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
				<h3 class="text-xl font-bold text-heading drop-shadow-sm">{category.title}</h3>
				<p class="text-base text-txt-muted">{category.items.length} favorites</p>
			</div>
		</header>

		{#if variant === 'wide'}
			<ul class="flex-1 columns-1 gap-2 sm:columns-2 lg:columns-3">
				{#each category.items as item}
					<li class="mb-2 flex break-inside-avoid items-center gap-3 rounded-lg bg-surface/60 px-3 py-2.5">
						<span class="text-base" aria-hidden="true">{category.itemIcon}</span>
						<div class="min-w-0 flex-1">
							<span class="block text-base font-medium leading-6 text-heading">{item.name}</span>
							{#if item.subtitle}
								<span class="block text-sm leading-5 text-txt-muted">{item.subtitle}</span>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<ul class="flex-1 space-y-2">
				{#each category.items as item}
					<li class="flex items-center gap-3 rounded-lg bg-surface/60 px-3 py-2.5">
						<span class="text-base" aria-hidden="true">{category.itemIcon}</span>
						<div class="min-w-0 flex-1">
							<span class="block text-base font-medium leading-6 text-heading">{item.name}</span>
							{#if item.subtitle}
								<span class="block text-sm leading-5 text-txt-muted">{item.subtitle}</span>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>
