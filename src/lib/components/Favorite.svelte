<script lang="ts">
	interface Props {
		icon1?: string;
		col_1?: string;
		icon2?: string;
		col_2?: string;
	}

	let {
		icon1 = '',
		col_1 = '',
		icon2 = '',
		col_2 = ''
	}: Props = $props();
</script>

<li class="border-b border-slate-800 py-2">
	<div class="grid grid-cols-2 gap-3">
		<p class="flex items-center font-bold text-indigo-300">
			<span
				class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-600 bg-slate-800 p-1"
				>{icon1}</span
			>
			<span class="flex-1 px-2">{col_1}</span>
		</p>
		{#if icon2}
			<p class="hidden items-center text-slate-100 md:flex">
				<span
					class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-600 bg-slate-800 p-1"
					>{icon2}</span
				>
				<span class="flex-1 px-2 italic">{col_2}</span>
			</p>
		{/if}
	</div>
</li>
