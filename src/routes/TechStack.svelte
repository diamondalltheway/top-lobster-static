<script lang="ts">
	import { copy } from '$lib/i18n';
	import Icon from '$lib/components/Icon.svelte';
	const technologies = [
		{
			name: 'TypeScript',
			linkURL: 'https://www.typescriptlang.org/',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		},
		{
			name: 'JavaScript',
			linkURL: 'https://en.wikipedia.org/wiki/JavaScript',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		},
		{
			name: 'Node.js',
			linkURL: 'https://nodejs.org/en',
			imgURL: 'node.png',
		},
		{
			name: 'Bun',
			linkURL: 'https://bun.sh',
			imgURL: 'bun.svg',
		},
		{
			name: 'Fastify',
			linkURL: 'https://www.fastify.io/',
			imgURL: 'fastify.png',
		},
		{
			name: 'Svelte',
			linkURL: 'https://svelte.dev/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
		},
		{
			name: 'React',
			linkURL: 'https://react.dev/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		},
		{
			name: 'Alpine.js',
			linkURL: 'https://alpinejs.dev/',
			imgURL: 'alpine.png',
		},
		{
			name: 'Next.js',
			linkURL: 'https://nextjs.org/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		},
		{
			name: 'Astro',
			linkURL: 'https://astro.build/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
		},
		{
			name: 'Vite.js',
			linkURL: 'https://vitejs.dev/',
			imgURL: 'vite.png',
		},
		{
			name: 'Supabase',
			linkURL: 'https://supabase.com/',
			imgURL: 'supabase.png',
		},
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
			name: 'IndexedDB',
			linkURL: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
			imgURL: 'indexeddb.png',
		},
		{
			name: 'Pinecone',
			linkURL: 'https://pinecone.io',
			imgURL: 'https://yepcode.io/docs/img/integrations/icons/pinecone.svg',
		},
		{
			name: 'Drizzle',
			linkURL: 'https://www.drizzle.team/',
			imgURL: 'drizzle.png',
		},
		{
			name: 'MySQL',
			linkURL: 'https://www.mysql.com/',
			imgURL: 'mysql.png',
		},
		{
			name: 'HTML',
			linkURL: 'https://en.wikipedia.org/wiki/HTML5',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
		},
		{
			name: 'CSS',
			linkURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		},
		{
			name: 'Tailwind CSS',
			linkURL: 'https://tailwindcss.com/',
			imgURL:
				'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg',
		},
		{
			name: 'Shadcn UI',
			linkURL: 'https://ui.shadcn.com/',
			imgURL: 'shadcn-ui.png',
		},
		{
			name: 'Daisy UI',
			linkURL: 'https://daisyui.com/',
			imgURL: 'daisy-ui.png',
		},
		{
			name: 'Vitest',
			linkURL: 'https://vitest.dev/',
			imgURL: 'vite-test.png',
		},
		{
			name: 'Playwright',
			linkURL: 'https://playwright.dev/',
			imgURL: 'playwright.webp',
		},
		{
			name: 'Jest',
			linkURL: 'https://jestjs.io/',
			imgURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
		},
		{
			name: 'Zod',
			linkURL: 'https://zod.dev/',
			imgURL: 'zod.webp',
		},
		{
			name: 'Docker',
			linkURL: 'https://docker.com/',
			imgURL: 'docker.png',
		},
		{
			name: 'ValKey',
			linkURL: 'https://valkey.io/',
			imgURL: 'valkey.png',
		},
		{
			name: 'Vercel',
			linkURL: 'https://vercel.com/',
			imgURL: 'vercel.png',
		},
		{
			name: 'Netlify',
			linkURL: 'https://www.netlify.com/',
			imgURL: 'netlify.png',
		},
		{
			name: 'Google Cloud Platform',
			linkURL: 'https://cloud.google.com/',
			imgURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
		},
		{
			name: 'Mapbox',
			linkURL: 'https://www.mapbox.com/',
			imgURL: 'mapbox.png',
		},
		{
			name: 'Stripe',
			linkURL: 'https://stripe.com/',
			imgURL: '/stripe.webp',
		},
		{
			name: 'Cloudinary',
			linkURL: 'https://cloudinary.com/',
			imgURL: 'cloudinary.png',
		},
		{
			name: 'Replicate',
			linkURL: 'https://replicate.com',
			imgURL: 'replicate.jpg',
		},
		{
			name: 'Google Drive API',
			linkURL: 'https://developers.google.com/drive/api/guides/about-sdk',
			imgURL: 'google-drive.png',
		},
		{
			name: 'Lucia Auth',
			linkURL: 'https://lucia-auth.com/',
			imgURL: 'lucia.png',
		},
		{
			name: 'Driver.js',
			linkURL: 'https://driverjs.com/',
			imgURL: 'driver.png',
		},
	];
</script>

<section id="tech" class="section shell" aria-labelledby="tech-title">
	<div class="section-heading">
		<p class="eyebrow">{$copy['tech.eyebrow']}</p>
		<h2 id="tech-title" class="section-title">{$copy['tech.heading']}</h2>
		<p>{$copy['tech.description']}</p>
	</div>
	<div class="tech-panel panel">
		<ul class="tech-grid">
			{#each technologies as tech}<li>
					<Icon name={tech.name} linkURL={tech.linkURL} imgURL={tech.imgURL} />
				</li>{/each}
		</ul>
	</div>
</section>
