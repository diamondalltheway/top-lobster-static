<script lang="ts">
	let {
		name = '',
		linkURL = '',
		imgURL = '',
	}: { name?: string; linkURL?: string; imgURL?: string } = $props();
</script>

<a class="tech-link" href={linkURL} target="_blank" rel="noreferrer" aria-label={name}>
	<img
		class:shadcn-logo={name === 'Shadcn UI'}
		class:dark-mode-logo={['Mapbox', 'Astro', 'Pinecone'].includes(name)}
		src={imgURL}
		alt=""
		width="26"
		height="26"
		loading="lazy"
	/>
	<span class="tech-tooltip" aria-hidden="true">{name}</span>
</a>
