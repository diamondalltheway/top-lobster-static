<script lang="ts">
	import '../app.css';
	import '../reskin.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
