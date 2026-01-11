<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import FeaturedProduct from './FeaturedProduct.svelte';

	const campaign_hero_icons = [
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
		{ name: 'Bun', linkURL: 'https://bun.sh', imgURL: 'bun.svg' },
		{ name: 'Vite.js', linkURL: 'https://vitejs.dev/', imgURL: 'vite.png' },
		{
			name: 'Pinecone',
			linkURL: 'https://www.pinecone.io',
			imgURL: 'https://yepcode.io/docs/img/integrations/icons/pinecone.svg',
		},
		{ name: 'Replicate', linkURL: 'https://replicate.com', imgURL: 'replicate.jpg' },
		{ name: 'Cloudinary', linkURL: 'https://cloudinary.com/', imgURL: 'cloudinary.png' },
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'Shadcn UI', linkURL: 'https://ui.shadcn.com/', imgURL: '/shadcn-ui.png' },
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
	];

	const air_mailer_icons = [
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
		{ name: 'Bun', linkURL: 'https://bun.sh', imgURL: 'bun.svg' },
		{ name: 'Vite.js', linkURL: 'https://vitejs.dev/', imgURL: 'vite.png' },
		{ name: 'Supabase', linkURL: 'https://supabase.com', imgURL: '/supabase.png' },
		{
			name: 'PostgreSQL',
			linkURL: 'https://www.postgresql.org/',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		},
		{ name: 'Prisma', linkURL: 'https://www.prisma.io/', imgURL: '/prisma.png' },
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'Shadcn UI', linkURL: 'https://ui.shadcn.com/', imgURL: '/shadcn-ui.png' },
		{ name: 'Mapbox', linkURL: 'https://www.mapbox.com/', imgURL: 'mapbox.png' },
		{
			name: 'Stripe',
			linkURL: 'https://stripe.com/',
			imgURL: 'https://www.solodev.com/file/2e7ff4de-48b3-11ed-bb2e-0eaef3759f5f/stripe-icon.png',
		},
		{ name: 'Lucia Auth', linkURL: 'https://lucia-auth.com/', imgURL: 'lucia.png' },
		{ name: 'Vitest', linkURL: 'https://vitest.dev/', imgURL: 'vite-test.png' },
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
	];

	const up_scout_icons = [
		{
			name: 'TypeScript',
			linkURL: 'https://www.typescriptlang.org/',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		},
		{
			name: 'React',
			linkURL: 'https://reactjs.org/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		},
		{
			name: 'Next.js',
			linkURL: 'https://nextjs.org/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		},
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
		{ name: 'DaisyUI', linkURL: 'https://daisyui.com/', imgURL: 'daisy-ui.png' },
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
	];

	const data_forest_icons = [
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
		{ name: 'Vite.js', linkURL: 'https://vitejs.dev/', imgURL: 'vite.png' },
		{
			name: 'MongoDB',
			linkURL: 'https://www.mongodb.com/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
		},
		{
			name: 'Firebase',
			linkURL: 'https://firebase.google.com/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
		},
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'Mapbox', linkURL: 'https://www.mapbox.com/', imgURL: 'mapbox.png' },
		{
			name: 'Heroku',
			linkURL: 'https://heroku.com/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
		},
	];

	const chat_node_icons = [
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
		{ name: 'Vite.js', linkURL: 'https://vitejs.dev/', imgURL: 'vite.png' },
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
		{ name: 'DaisyUI', linkURL: 'https://daisyui.com/', imgURL: 'daisy-ui.png' },
		{
			name: 'Stripe',
			linkURL: 'https://stripe.com/',
			imgURL: 'https://www.solodev.com/file/2e7ff4de-48b3-11ed-bb2e-0eaef3759f5f/stripe-icon.png',
		},
		{ name: 'Lucia Auth', linkURL: 'https://lucia-auth.com/', imgURL: 'lucia.png' },
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
	];

	const vertical_spanish_icons = [
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
		{ name: 'Vite.js', linkURL: 'https://vitejs.dev/', imgURL: 'vite.png' },
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
		{
			name: 'Algolia',
			linkURL: 'https://www.algolia.com/',
			imgURL:
				'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/12_Algolia_logo_logos-512.png',
		},
		{ name: 'Contentful', linkURL: 'https://www.contentful.com/', imgURL: 'contentful.png' },
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
	];
</script>

<FeaturedProduct />

<div id="products" class="py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2
				class="glow space-grotesk bg-gradient-to-r text-3xl font-bold tracking-tight text-heading sm:text-4xl"
			>
				Public Products
			</h2>
			<p class="mt-2 text-lg leading-8 text-txt-muted">
				Here are a few of public facing products that I have worked on.
			</p>
		</div>

		<!-- Products -->
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<Product
				title="VerticalSpanish.com"
				description="Vertical Spanish allows Spanish students to study spanish verbs in a world that inspires. Conjugators are notorious for being overpopulated with ads, but not here!"
				linkURL="https://verticalspanish.com"
				imgURL="landscape.png"
				icons={vertical_spanish_icons}
			/>

			<Product
				title="CampaginHero.io"
				description="CampaignHero.io is a search/discovery platform for 14,200 email designs. It leverages vector databases to enable semantic and image-based search."
				linkURL="https://CampaginHero.io"
				imgURL="ch-demo.png"
				icons={campaign_hero_icons}
			/>

			<Product
				title="AirMailer.io"
				description="AirMailer.io allows marketers to generate mailing list with just a few clicks. I like to think of it as a vending machine for addresses. (94 Million Addresses)"
				linkURL="https://airmailer.io"
				imgURL="airmailer_ss.png"
				icons={air_mailer_icons}
				legacy={true}
			/>

			<Product
				title="UpScout.io"
				description="Messaging and filtering system for UpWork. We allow freelancers to filter out the noise and focus on the jobs that matter. Sit back and let the jobs come to you."
				linkURL="https://upscout.io"
				imgURL="upscout_ss.png"
				icons={up_scout_icons}
				legacy={true}
			/>

			<Product
				title="DataForest.io"
				description="DataForest.io allows marketers to market geotarget homeowners. Think, Google Maps for homeowner + propery data."
				linkURL="https://dataforest.io"
				imgURL="dataforest_ss.png"
				icons={data_forest_icons}
				legacy={true}
			/>
		</div>
	</div>
</div>
