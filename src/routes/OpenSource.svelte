<script>
	import { onMount } from 'svelte';
	import { animate, stagger, inView } from 'motion';

	const contributions = [
		{
			name: 'Supabase',
			linkURL: 'https://supabase.com/',
			imgURL: 'supabase.png',
			description: 'The open source Firebase alternative with Postgres',
			color: 'emerald',
		},
		{
			name: 'Shadcn UI, Svelte',
			linkURL: 'https://www.shadcn-svelte.com/',
			imgURL: 'shadcn-ui.png',
			description: 'Beautifully designed components for Svelte',
			color: 'neutral',
		},
		{
			name: 'XYFlow',
			linkURL: 'https://xyflow.com/',
			imgURL: 'xy-flow.png',
			description: 'Powerful node-based UIs for React and Svelte',
			color: 'pink',
		},
	];

	onMount(() => {
		inView('#open-source-end', () => {
			setTimeout(() => {
				animate('.os-card', { opacity: 1, y: [40, 0], scale: [0.95, 1] }, { delay: stagger(0.15) });
			}, 200);
		});
	});
</script>

<div class="relative my-24 pb-8 pt-4" id="open-source">
	<!-- Background effects -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-indigo-500/5 to-pink-500/5 rounded-full blur-[100px]"></div>
	</div>

	<div class="relative text-center">
		<!-- Section Header -->
		<div class="mb-12">
			<h2
				id="open-source-title"
				class="glow space-grotesk text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
			>
				Open Source Contributions
			</h2>
			<p class="mt-4 text-lg leading-8 text-txt-muted">I'm always happy to contribute where I can!</p>
		</div>

		<!-- Contribution Cards -->
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each contributions as contribution}
					<a
						href={contribution.linkURL}
						target="_blank"
						rel="noopener noreferrer"
						class="os-card opacity-0 group relative block"
					>
						<!-- Card glow effect -->
						<div class="absolute -inset-0.5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500
							{contribution.color === 'emerald' ? 'bg-gradient-to-b from-emerald-400/40 to-emerald-600/40' : ''}
							{contribution.color === 'neutral' ? 'bg-gradient-to-b from-gray-400/40 to-gray-600/40' : ''}
							{contribution.color === 'pink' ? 'bg-gradient-to-b from-pink-400/40 to-pink-600/40' : ''}
						"></div>

						<!-- Card -->
						<div class="relative flex flex-col items-center p-8 rounded-2xl bg-surface-muted/90 backdrop-blur-sm border transition-all duration-300
							{contribution.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-400/50' : ''}
							{contribution.color === 'neutral' ? 'border-gray-500/20 hover:border-gray-400/50' : ''}
							{contribution.color === 'pink' ? 'border-pink-500/20 hover:border-pink-400/50' : ''}
						">
							<!-- Icon container -->
							<div class="relative mb-6">
								<div class="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
									{contribution.color === 'emerald' ? 'bg-emerald-500/10' : ''}
									{contribution.color === 'neutral' ? 'bg-gray-500/10' : ''}
									{contribution.color === 'pink' ? 'bg-pink-500/10' : ''}
								"></div>
								<img
									class="relative h-20 w-20 rounded-xl object-contain p-2 bg-surface border border-border-subtle group-hover:scale-110 transition-transform duration-300"
									src={contribution.imgURL}
									alt={contribution.name}
								/>
							</div>

							<!-- Text content -->
							<h3 class="text-xl font-bold text-txt space-grotesk mb-2 group-hover:text-heading transition-colors duration-300">
								{contribution.name}
							</h3>
							<p class="text-sm text-txt-muted text-center leading-relaxed">
								{contribution.description}
							</p>

							<!-- Hover indicator -->
							<div class="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300
								{contribution.color === 'emerald' ? 'text-emerald-400' : ''}
								{contribution.color === 'neutral' ? 'text-gray-300' : ''}
								{contribution.color === 'pink' ? 'text-pink-400' : ''}
							">
								<span>View Project</span>
								<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</div>
						</div>
					</a>
				{/each}
			</div>

			<div id="open-source-end"></div>
		</div>
	</div>
</div>
