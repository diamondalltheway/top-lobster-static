<script>
	const contributions = [
		{
			name: 'Supabase',
			linkURL: 'https://supabase.com/',
			imgURL: 'supabase.png',
			description: 'The open source Firebase alternative for shipping apps quickly',
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
</script>

<section id="open-source" class="section shell" aria-labelledby="open-source-title">
	<div class="section-heading">
		<p class="eyebrow">A little give and take</p>
		<h2 id="open-source-title" class="section-title">Better when we build together.</h2>
		<p>Open source powers my work. I'm always happy to contribute where I can.</p>
	</div>
	<div class="contribution-grid">
		{#each contributions as contribution}
			<a class="contribution panel" href={contribution.linkURL} target="_blank" rel="noreferrer">
				<div class="contribution-logo">
					<img
						class:shadcn-logo={contribution.imgURL === 'shadcn-ui.png'}
						src={contribution.imgURL}
						alt=""
						width="26"
						height="26"
						loading="lazy"
					/>
				</div>
				<h3>{contribution.name}</h3>
				<p>{contribution.description}</p>
				<span class="text-link">View project <span aria-hidden="true">↗</span></span>
			</a>
		{/each}
	</div>
</section>
