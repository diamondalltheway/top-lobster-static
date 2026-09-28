<script lang="ts">
	import { copy } from '$lib/i18n';
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
			imgURL: '/stripe.webp',
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
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'DaisyUI', linkURL: 'https://daisyui.com/', imgURL: 'daisy-ui.png' },
		{
			name: 'Stripe',
			linkURL: 'https://stripe.com/',
			imgURL: '/stripe.webp',
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
		{
			name: 'IndexedDB',
			linkURL: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
			imgURL: 'indexeddb.png',
		},
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{ name: 'Vercel', linkURL: 'https://vercel.com/', imgURL: 'vercel.png' },
	];
</script>

<FeaturedProduct />

<div id="products" class="section">
	<div class="shell">
		<div class="section-heading mx-auto max-w-2xl">
			<h2 class="section-title">{$copy['products.heading']}</h2>
			<p class="mt-2 text-lg leading-8 text-txt-muted">
				{$copy['products.intro']}
			</p>
		</div>

		<section class="product-group" aria-labelledby="live-products-title">
			<h3 id="live-products-title" class="product-group-title">{$copy['products.live']}</h3>
			<div class="product-grid product-grid-live">
				<Product
					title="VerticalSpanish.com"
					description={$copy['products.verticalSpanish']}
					linkURL="https://verticalspanish.com"
					imgURL="vertical-spanish-homepage.jpg"
					icons={vertical_spanish_icons}
				/>

				<Product
					title="Flow Editor"
					description={$copy['products.flowEditor']}
					linkURL="https://verticalspanish.com/flow-editor"
					imgURL="flow-editor.png"
				/>
			</div>
		</section>

		<section class="product-group" aria-labelledby="legacy-products-title">
			<h3 id="legacy-products-title" class="product-group-title">{$copy['products.legacy']}</h3>
			<div class="product-grid product-grid-legacy">
				<Product
					title="CampaginHero.io"
					description={$copy['products.campaignHero']}
					linkURL="https://CampaginHero.io"
					imgURL="ch-demo.png"
					icons={campaign_hero_icons}
					legacy={true}
				/>

				<Product
					title="AirMailer.io"
					description={$copy['products.airMailer']}
					linkURL="https://airmailer.io"
					imgURL="airmailer_ss.png"
					icons={air_mailer_icons}
					legacy={true}
				/>

				<Product
					title="UpScout.io"
					description={$copy['products.upScout']}
					linkURL="https://upscout.io"
					imgURL="upscout_ss.png"
					icons={up_scout_icons}
					legacy={true}
				/>

				<Product
					title="DataForest.io"
					description={$copy['products.dataForest']}
					linkURL="https://dataforest.io"
					imgURL="df-demo.png"
					icons={data_forest_icons}
					legacy={true}
				/>
			</div>
		</section>
	</div>
</div>
