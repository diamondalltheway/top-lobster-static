<script lang="ts">
	import { blur } from 'svelte/transition';
	import BentoTile from '$lib/components/BentoTile.svelte';
	import { favoritesConfig } from '$lib/config/favorites';

	const books = favoritesConfig.categories.find((c) => c.id === 'books')!;
	const movies = favoritesConfig.categories.find((c) => c.id === 'movies')!;
	const shows = favoritesConfig.categories.find((c) => c.id === 'shows')!;
	const places = favoritesConfig.categories.find((c) => c.id === 'places')!;

	let goatExpanded = $state(false);
</script>

<div class="favorites-container mx-auto w-11/12 py-8 md:w-4/5 lg:w-3/4" id="favorites">
	<!-- Header -->
	<div class="mb-10 text-center" transition:blur={{ delay: 100, duration: 400 }}>
		<h2
			class="glow-green space-grotesk inline-block bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 dark:from-green-300 dark:via-emerald-400 dark:to-green-500 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg sm:text-5xl"
		>
			Favorites
		</h2>
		<p class="mt-2 text-txt-muted">Things I love, all in one place</p>
	</div>

	<!-- Bento Grid -->
	<div class="bento-grid">
		<BentoTile category={books} variant="large" gridArea="books" />
		<BentoTile category={movies} variant="square" gridArea="movies" />
		<BentoTile category={shows} variant="square" gridArea="shows" />
		<BentoTile category={places} variant="wide" gridArea="places" />

		<!-- GOAT tile -->
		<button
			class="goat-tile group relative overflow-hidden rounded-2xl border-2 border-amber-500/50 dark:border-favorites-amber/40 bg-gradient-to-br from-surface-muted via-surface to-surface-muted p-6"
			style="grid-area: goat;"
			onmouseenter={() => (goatExpanded = true)}
			onmouseleave={() => (goatExpanded = false)}
			onclick={() => (goatExpanded = !goatExpanded)}
		>
			<div
				class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-favorites-amber/5 via-transparent to-favorites-amber/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
			></div>

			<div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
				<span class="mb-2 text-4xl">{favoritesConfig.goat.icon}</span>
				<h3 class="text-xl font-bold text-amber-600 dark:text-favorites-amber drop-shadow-sm">
					{favoritesConfig.goat.title}
				</h3>
				<div class="goat-reveal mt-3" class:expanded={goatExpanded}>
					<p class="text-2xl font-bold text-txt">
						{favoritesConfig.goat.content}
					</p>
				</div>
				<p
					class="mt-2 text-sm text-amber-600/60 dark:text-favorites-amber/60 transition-opacity duration-500"
					class:opacity-0={goatExpanded}
				>
					<span class="hidden md:inline">Hover to reveal</span>
					<span class="md:hidden">Click to reveal</span>
				</p>
			</div>
		</button>
	</div>
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		grid-template-rows: auto auto auto auto;
		grid-template-areas:
			'books movies'
			'books shows'
			'places places'
			'goat goat';
		gap: 1rem;
	}

	@media (max-width: 1024px) {
		.bento-grid {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'books movies'
				'books shows'
				'places places'
				'goat goat';
		}
	}

	@media (max-width: 768px) {
		.bento-grid {
			grid-template-columns: 1fr;
			grid-template-areas:
				'books'
				'movies'
				'shows'
				'places'
				'goat';
			gap: 0.75rem;
		}
	}

	.goat-tile {
		min-height: 120px;
		transition: border-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
					box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.goat-tile:hover {
		border-color: rgba(251, 191, 36, 0.6);
		box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.25),
					0 0 16px rgba(251, 191, 36, 0.08);
	}

	/* Smooth reveal using grid */
	.goat-reveal {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.6s cubic-bezier(0.33, 1, 0.68, 1);
		overflow: hidden;
	}

	.goat-reveal > p {
		overflow: hidden;
	}

	.goat-reveal.expanded {
		grid-template-rows: 1fr;
	}

	.glow-green {
		text-shadow:
			0 0 20px rgba(74, 222, 128, 0.3),
			0 0 40px rgba(74, 222, 128, 0.2);
	}
</style>
