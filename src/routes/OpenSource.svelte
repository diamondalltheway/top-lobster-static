<script lang="ts">
	import { copy } from '$lib/i18n';
	const contributions = [
		{
			name: 'Supabase',
			linkURL: 'https://supabase.com/',
			imgURL: 'supabase.png',
			description: 'openSource.supabase',
			color: 'emerald',
		},
		{
			name: 'Shadcn UI, Svelte',
			linkURL: 'https://www.shadcn-svelte.com/',
			imgURL: 'shadcn-ui.png',
			description: 'openSource.shadcn',
			color: 'neutral',
		},
		{
			name: 'XYFlow',
			linkURL: 'https://xyflow.com/',
			imgURL: 'xy-flow.png',
			description: 'openSource.xyflow',
			color: 'pink',
		},
	] as const;
</script>

<section id="open-source" class="section shell" aria-labelledby="open-source-title">
	<div class="section-heading">
		<p class="eyebrow">{$copy['openSource.eyebrow']}</p>
		<h2 id="open-source-title" class="section-title">{$copy['openSource.heading']}</h2>
		<p>{$copy['openSource.intro']}</p>
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
				<p>{$copy[contribution.description]}</p>
				<span class="text-link"
					>{$copy['openSource.project']} <span aria-hidden="true">↗</span></span
				>
			</a>
		{/each}
	</div>
</section>
