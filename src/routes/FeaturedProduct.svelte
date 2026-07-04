<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	const title = 'DataForest.io';
	const summary = 'A map-first address product for direct mail in Colombia.';
	const description = [
		'DataForest starts with a simple observation: direct mail is only useful when businesses can reach real homes in the exact places they care about. In Colombia, that address layer has historically been hard to buy, hard to verify, and hard to operationalize.',
		'I built DataForest around the map because the product is geographic at its core. Users can inspect coverage, search apartments or addresses, choose a market area, and leave with campaign-ready data instead of another spreadsheet cleanup project.',
		'Behind the interface is a focused data preparation flow: official-source Colombian address data is filtered, normalized, deduplicated, geocoded, and packaged into campaign-ready exports.',
	];
	const linkURL = 'https://dataforest.io';
	const imgURL = 'dataforest-screenshot.png';
	const imgURL2x = 'dataforest-screenshot@2x.png';
	const stats = [
		{
			value: '10M+',
			label: 'addresses in process',
			description: 'A national data asset built for precise geographic campaigns.',
		},
		{
			value: 'Map-first',
			label: 'selection flow',
			description: 'Users buy addresses from the same interface they use to understand coverage.',
		},
		{
			value: 'CSV',
			label: 'export workflow',
			description: 'Campaign-ready downloads for operators who need usable data quickly.',
		},
	];
	const highlights = [
		{
			title: 'Geospatial explorer',
			description: 'A Mapbox workflow where visual selection, coverage review, and exports stay connected.',
		},
		{
			title: 'Export-focused workflow',
			description: 'Users can move from market exploration to campaign-ready CSV data without spreadsheet cleanup.',
		},
		{
			title: 'Prepared address data',
			description: 'Raw public data becomes normalized, deduplicated, geocoded, and packaged for real campaigns.',
		},
	];
	const icons = [
		{
			name: 'TypeScript',
			linkURL: 'https://www.typescriptlang.org/',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		},
		{
			name: 'Svelte',
			linkURL: 'https://svelte.dev/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
		},
		{ name: 'Node.js', linkURL: 'https://nodejs.org/en', imgURL: 'node.png' },
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'Vitest', linkURL: 'https://vitest.dev/', imgURL: 'vite-test.png' },
		{ name: 'Playwright', linkURL: 'https://playwright.dev/', imgURL: 'playwright.webp' },
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
		{ name: 'Shadcn UI', linkURL: 'https://ui.shadcn.com/', imgURL: 'shadcn-ui.png' },
		{ name: 'Mapbox', linkURL: 'https://www.mapbox.com/', imgURL: 'mapbox.png' },
		{ name: 'Lucia Auth', linkURL: 'https://lucia-auth.com/', imgURL: 'lucia.png' },
		{
			name: 'Stripe',
			linkURL: 'https://stripe.com/',
			imgURL: '/stripe.webp',
		},
	];
</script>

<section class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-4xl text-center">
		<p class="space-grotesk text-sm font-semibold uppercase text-heading">
			Featured Product: DataForest.io
		</p>
		<h2
			class="glow space-grotesk mt-3 text-4xl font-bold text-heading sm:text-5xl lg:text-6xl"
		>
			The address infrastructure Colombia needs.
		</h2>

		<p class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-txt-muted sm:text-xl">
			A focused product system: geospatial UX, data preparation, and export workflows in one
			working platform.
		</p>
	</div>

	<div class="mt-10">
		<a
			href={linkURL}
			target="_blank"
			rel="noreferrer"
			class="group block overflow-hidden rounded-lg"
		>
			<img
				src={imgURL}
				srcset={`${imgURL} 1x, ${imgURL2x} 2x`}
				alt="DataForest.io map interface showing verified address points and a checkout cart"
				decoding="async"
				class="glow-box aspect-[2254/1178] w-full rounded-lg bg-product-image-bg object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.01]"
			/>
		</a>
	</div>

	<div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
		<div>
			<h3 class="gradient-title space-grotesk p-1 text-3xl font-semibold sm:text-4xl">
				<a href={linkURL} target="_blank" rel="noreferrer" class="inline-flex items-center">
					{title}
				</a>
			</h3>
			<p class="mt-4 text-xl font-semibold leading-8 text-txt">
				{summary}
			</p>
			<div class="mt-6 max-w-3xl space-y-4 text-base leading-7 text-txt-secondary">
				{#each description as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<div class="mt-8">
				<h4 class="space-grotesk text-sm font-semibold uppercase text-heading">What I built</h4>
				<div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
					{#each highlights as highlight}
						<div class="rounded-lg border border-border-subtle bg-surface-elevated/70 p-4">
							<div class="font-semibold text-txt">{highlight.title}</div>
							<p class="mt-2 text-sm leading-6 text-txt-muted">{highlight.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
				{#each stats as stat}
					<div class="rounded-lg border border-border-subtle bg-surface-muted/70 p-4">
						<div class="space-grotesk text-2xl font-bold text-heading">{stat.value}</div>
						<div class="mt-1 text-sm font-semibold uppercase text-txt">{stat.label}</div>
						<p class="mt-2 text-sm leading-6 text-txt-muted">{stat.description}</p>
					</div>
				{/each}
			</div>

			<div class="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
				{#each icons as data}
					<Icon name={data.name} linkURL={data.linkURL} imgURL={data.imgURL} />
				{/each}
			</div>
		</div>
	</div>
</section>
