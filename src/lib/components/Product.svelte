<script lang="ts">
	import Icon from './Icon.svelte';

	interface Props {
		title?: string;
		description?: string;
		linkURL?: string;
		imgURL?: string;
		icons?: any[];
		legacy?: boolean;
	}

	let {
		title = '',
		description = '',
		linkURL = '',
		imgURL = '',
		icons = [],
		legacy = false
	}: Props = $props();
</script>

<article class="flex flex-col items-start gap-3">
	<div class="relative w-full">
		<img
			src={imgURL}
			alt=""
			class="glow-box aspect-[16/9] w-full rounded-xl bg-surface-muted object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
		/>
		<div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-border-subtle"></div>
	</div>
	<div class="max-w-xl">
		<div class="mb-2 mt-8 flex items-center gap-x-4 text-xs">
			<span
				class="gradient-description my-1 text-lg"
			></span>
		</div>
		<div class="group relative">
			<h3
				class="gradient-title mt-3 p-1 text-2xl font-semibold leading-6"
			>
				<a href={linkURL} target="_blank" class="flex items-center gap-x-2">
					{title}
					{#if legacy}
						<span
							class="inline-flex items-center rounded-md bg-blue-200 px-2 py-1 text-xs font-medium text-blue-700 ring-2 ring-inset ring-blue-500/10"
							>Legacy</span
						>
					{/if}
				</a>
			</h3>
			<p
				class="gradient-description mt-5 line-clamp-3 text-sm leading-6"
			>
				{description}
			</p>
		</div>
		<div class="my-8 grid grid-cols-5 gap-4">
			{#each icons as data}
				<Icon name={data.name} linkURL={data.linkURL} imgURL={data.imgURL} />
			{/each}
		</div>
	</div>
</article>
