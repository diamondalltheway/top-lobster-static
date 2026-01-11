<script lang="ts">
	import { blur } from 'svelte/transition';
	import BentoTile from '$lib/components/BentoTile.svelte';
	import { favoritesConfig } from '$lib/config/favorites';

	// Find specific categories for grid placement
	const books = favoritesConfig.categories.find((c) => c.id === 'books')!;
	const movies = favoritesConfig.categories.find((c) => c.id === 'movies')!;
	const shows = favoritesConfig.categories.find((c) => c.id === 'shows')!;
	const places = favoritesConfig.categories.find((c) => c.id === 'places')!;

	let goatExpanded = $state(false);
</script>

<div class="favorites-container mx-auto w-11/12 py-8 md:w-4/5 lg:w-3/4" id="favorites">
	<!-- Animated Header -->
	<div class="mb-10 text-center" transition:blur={{ delay: 100, duration: 400 }}>
		<h2
			class="glow-green space-grotesk inline-block bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg sm:text-5xl"
		>
			Favorites
		</h2>
		<p class="mt-2 text-gray-400">Things I love, all in one place</p>
	</div>

	<!-- Bento Grid -->
	<div class="bento-grid">
		<!-- Books - Large tile spanning 2 rows -->
		<BentoTile category={books} variant="large" gridArea="books" />

		<!-- Movies - Square tile -->
		<BentoTile category={movies} variant="square" gridArea="movies" />

		<!-- TV Shows - Square tile -->
		<BentoTile category={shows} variant="square" gridArea="shows" />

		<!-- Places - Wide panoramic tile -->
		<BentoTile category={places} variant="wide" gridArea="places" />

		<!-- GOAT - Special tile -->
		<button
			class="goat-tile group relative overflow-hidden rounded-2xl border-2 border-amber-400/40 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 transition-all duration-300 hover:border-amber-400/70 hover:shadow-xl hover:shadow-amber-400/10"
			style="grid-area: goat;"
			onmouseenter={() => (goatExpanded = true)}
			onmouseleave={() => (goatExpanded = false)}
			onclick={() => (goatExpanded = !goatExpanded)}
		>
			<!-- Animated shimmer effect -->
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style="animation: shimmer 3s ease-in-out infinite;"
			></div>

			<div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
				<span class="mb-2 text-4xl">{favoritesConfig.goat.icon}</span>
				<h3 class="text-xl font-bold text-amber-400 drop-shadow-sm">
					{favoritesConfig.goat.title}
				</h3>
				<div
					class="mt-3 overflow-hidden transition-all duration-300"
					class:max-h-0={!goatExpanded}
					class:max-h-40={goatExpanded}
					class:opacity-0={!goatExpanded}
					class:opacity-100={goatExpanded}
				>
					<p class="text-2xl font-bold text-gray-100">
						{favoritesConfig.goat.content}
					</p>
				</div>
				{#if !goatExpanded}
					<p class="mt-2 text-sm text-amber-400/60">Hover to reveal</p>
				{/if}
			</div>
		</button>

		<!-- Decorative accent tile -->
		<div
			class="accent-tile relative overflow-hidden rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-indigo-900/30 via-neutral-900 to-emerald-900/30"
			style="grid-area: accent;"
		>
			<!-- Animated gradient orbs -->
			<div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl"></div>
			<div
				class="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl"
			></div>

			<div class="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
				<div class="mb-2 text-4xl opacity-60">
					<span class="inline-block animate-pulse">&#10024;</span>
				</div>
				<p class="text-sm font-medium text-gray-500">More favorites coming soon...</p>
			</div>
		</div>
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
			'goat accent';
		gap: 1rem;
	}

	/* Tablet layout */
	@media (max-width: 1024px) {
		.bento-grid {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'books movies'
				'books shows'
				'places places'
				'goat accent';
		}
	}

	/* Mobile layout - single column */
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

		.accent-tile {
			display: none;
		}
	}

	.goat-tile {
		min-height: 150px;
	}

	.accent-tile {
		min-height: 150px;
	}

	@keyframes shimmer {
		0%,
		100% {
			transform: translateX(-100%);
		}
		50% {
			transform: translateX(100%);
		}
	}

	/* Glow effect for the header */
	.glow-green {
		text-shadow:
			0 0 20px rgba(74, 222, 128, 0.3),
			0 0 40px rgba(74, 222, 128, 0.2);
	}
</style>
