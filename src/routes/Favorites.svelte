<script lang="ts">
	import BentoTile from '$lib/components/BentoTile.svelte';
	import { favoritesConfig } from '$lib/config/favorites';

	const books = favoritesConfig.categories.find((c) => c.id === 'books')!;
	const movies = favoritesConfig.categories.find((c) => c.id === 'movies')!;
	const shows = favoritesConfig.categories.find((c) => c.id === 'shows')!;
	const places = favoritesConfig.categories.find((c) => c.id === 'places')!;

</script>

<div class="favorites-container mx-auto max-w-7xl px-6 py-8 lg:px-8" id="favorites">
	<!-- Header -->
	<div class="mb-10 text-center">
		<h2
			class="glow space-grotesk text-heading text-4xl font-extrabold drop-shadow-lg sm:text-5xl"
		>
			Favorites
		</h2>
		<p class="mt-2 text-base text-txt-muted">Things I love, all in one place</p>
	</div>

	<!-- Bento Grid -->
	<div class="bento-grid">
		<BentoTile category={books} variant="large" gridArea="books" />
		<BentoTile category={movies} variant="square" gridArea="movies" />
		<BentoTile category={shows} variant="square" gridArea="shows" />
		<BentoTile category={places} variant="wide" gridArea="places" />

		<!-- Static GOAT tile -->
		<article
			class="relative min-h-[120px] overflow-hidden rounded-2xl border-2 border-heading/25 bg-gradient-to-br from-surface-muted via-surface to-surface-muted p-6"
			style="grid-area: goat;"
		>
			<div
				class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-favorites-amber/5 via-transparent to-favorites-amber/5"
			></div>

			<div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
				<span class="mb-2 text-4xl">{favoritesConfig.goat.icon}</span>
				<h3 class="text-xl font-bold text-heading drop-shadow-sm">
					{favoritesConfig.goat.title}
				</h3>
				<p class="mt-3 text-lg font-semibold text-txt">
					{favoritesConfig.goat.content}
				</p>
			</div>
		</article>
	</div>
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-areas:
			'books movies shows'
			'places places places'
			'goat goat goat';
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

</style>
