<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	const title = 'DataForest.io (Colombia)';
	const description =
		"DataForest.io is Colombia's first comprehensive address database platform, revolutionizing direct marketing in a country where it was previously impossible. With over 10 million verified addresses across major cities like Bogotá, Medellín, Cali, and Cartagena, the platform enables businesses to perform precise geographic segmentation, execute localized marketing campaigns, and access instant CSV downloads. Unlike other countries, Colombia lacked accessible address systems for businesses until now. DataForest.io transforms raw government data into verified, ready-to-use addresses through AI-powered filtering, human verification, and real-time validation, making direct marketing finally achievable for Colombian businesses.";
	const linkURL = 'https://dataforest.io';
	const imgURL = 'df-feature.png';
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
		{ name: 'Supabase', linkURL: 'https://supabase.com', imgURL: 'supabase.png' },
		{
			name: 'PostgreSQL',
			linkURL: 'https://www.postgresql.org/',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		},
		{ name: 'Prisma', linkURL: 'https://www.prisma.io/', imgURL: 'prisma.png' },
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
		{ name: 'Shadcn UI', linkURL: 'https://ui.shadcn.com/', imgURL: 'shadcn-ui.png' },
		{ name: 'Mapbox', linkURL: 'https://www.mapbox.com/', imgURL: 'mapbox.png' },
		{ name: 'Lucia Auth', linkURL: 'https://lucia-auth.com/', imgURL: 'lucia.png' },
		{
			name: 'Stripe',
			linkURL: 'https://stripe.com/',
			imgURL: 'https://www.solodev.com/file/2e7ff4de-48b3-11ed-bb2e-0eaef3759f5f/stripe-icon.png',
		},
	];
</script>

<div class="mx-auto my-8 max-w-7xl px-6 lg:px-8">
	<h2
		class="glow space-grotesk bg-gradient-to-r text-center text-3xl font-bold tracking-tight text-heading sm:text-4xl"
	>
		Featured Product
	</h2>

	<p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-txt-muted">
		DataForest.io is the result of years spent solving Colombia's core marketing challenge: the lack
		of accessible address data.
	</p>
</div>

<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
	<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
		<!-- Text Content - Left Side -->
		<div class="flex flex-col">
			<div class="group relative ml-2">
				<h3
					class="gradient-title mt-3 p-1 text-4xl font-semibold leading-10"
				>
					<a href={linkURL} target="_blank" class="flex items-center gap-x-2">
						{title}
					</a>
				</h3>
				<p
					class="gradient-description mt-5 text-lg leading-6"
				>
					{description}
				</p>
			</div>
			<div class="mt-8 grid max-w-lg grid-cols-6 gap-3">
				{#each icons as data}
					<Icon name={data.name} linkURL={data.linkURL} imgURL={data.imgURL} />
				{/each}
			</div>
		</div>

		<!-- Image - Right Side -->
		<div class="relative w-full">
			<img
				src={imgURL}
				alt=""
				class="glow-box aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
			/>
			<div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
		</div>
	</div>
</div>
