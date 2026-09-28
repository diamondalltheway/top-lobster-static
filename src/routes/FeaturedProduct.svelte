<script lang="ts">
	import { copy } from '$lib/i18n';
	import Icon from '$lib/components/Icon.svelte';

	const title = 'DataForest.io';
	const summary = 'featured.summary' as const;
	const description = ['featured.background', 'featured.map', 'featured.preparation'] as const;
	const linkURL = 'https://dataforest.io';
	const imgURL = 'dataforest-hero.png';
	const stats = [
		{
			value: 'featured.addressCount',
			label: 'featured.addressLabel',
			description: 'featured.addressDescription',
		},
		{
			value: 'featured.mapValue',
			label: 'featured.mapLabel',
			description: 'featured.mapDescription',
		},
		{
			value: 'featured.csvValue',
			label: 'featured.csvLabel',
			description: 'featured.csvDescription',
		},
	] as const;
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

<section class="featured-product section shell">
	<div class="section-heading mx-auto max-w-4xl">
		<p class="eyebrow">{$copy['featured.eyebrow']}</p>
		<h2 class="section-title">{$copy['featured.heading']}</h2>

		<p class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-txt-muted sm:text-xl">
			{$copy['featured.intro']}
		</p>
	</div>

	<div class="mt-10 flow-root">
		<div class="mx-auto mb-8 max-w-lg lg:float-right lg:mb-6 lg:ml-10 lg:w-[46%] lg:max-w-[560px]">
			<a href={linkURL} target="_blank" rel="noreferrer" class="product-frame group block">
				<div class="frame-toolbar" aria-hidden="true">
					<i></i><i></i><i></i><span>dataforest.io</span>
				</div>
				<img
					src={imgURL}
					alt={$copy['featured.imageAlt']}
					width="1470"
					height="1251"
					decoding="async"
					class="glow-box h-auto w-full bg-product-image-bg transition-transform duration-500 group-hover:scale-[1.01]"
				/>
			</a>
		</div>

		<h3 class="gradient-title space-grotesk p-1 text-3xl font-semibold sm:text-4xl">
			<a href={linkURL} target="_blank" rel="noreferrer" class="inline-flex items-center">
				{title}
			</a>
		</h3>
		<p class="mt-4 text-xl font-semibold leading-8 text-txt">
			{$copy[summary]}
		</p>
		<div class="mt-6 space-y-4 text-base leading-7 text-txt-secondary">
			{#each description as paragraph}
				<p>{$copy[paragraph]}</p>
			{/each}
		</div>
	</div>

	<div class="mt-10 space-y-8 border-t border-border-subtle pt-8">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each stats as stat}
				<div class="rounded-lg border border-border-subtle bg-surface-muted/70 p-5 sm:p-6">
					<div class="space-grotesk text-3xl font-normal text-heading">{$copy[stat.value]}</div>
					<div class="mt-1 text-xs font-medium text-txt">{$copy[stat.label]}</div>
					<p class="mt-3 text-sm leading-6 text-txt-muted">{$copy[stat.description]}</p>
				</div>
			{/each}
		</div>

		<div
			class="flex flex-col gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:gap-8"
		>
			<h4 class="eyebrow shrink-0">{$copy['featured.builtWith']}</h4>
			<div class="flex flex-wrap gap-3">
				{#each icons as data}
					<Icon name={data.name} linkURL={data.linkURL} imgURL={data.imgURL} />
				{/each}
			</div>
		</div>
	</div>
</section>
