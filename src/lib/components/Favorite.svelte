<script lang="ts">
	interface Props {
		itemIcon?: string;
		name?: string;
		subtitleIcon?: string;
		subtitle?: string;
	}

	let { itemIcon = '', name = '', subtitleIcon = '', subtitle = '' }: Props = $props();
</script>

<li class="border-b border-neutral-800 py-2">
	<div class="grid grid-cols-2 gap-3">
		<p class="flex items-center font-bold text-indigo-300">
			<span
				class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-neutral-500 bg-neutral-700 p-1"
				>{itemIcon}</span
			>
			<span class="flex-1 px-2">{name}</span>
		</p>
		{#if subtitleIcon}
			<p class="hidden items-center text-neutral-100 md:flex">
				<span
					class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-neutral-500 bg-neutral-700 p-1"
					>{subtitleIcon}</span
				>
				<span class="flex-1 px-2 italic">{subtitle}</span>
			</p>
		{/if}
	</div>
</li>
