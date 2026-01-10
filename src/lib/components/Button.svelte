<script lang="ts">
	interface Props {
		text?: string;
		href?: string;
		targetBlank?: boolean;
		bgColor?: string;
		bgDepthColor?: string;
		disableLink?: boolean;
	}

	let {
		text = '',
		href = '',
		targetBlank = false,
		bgColor = '',
		bgDepthColor = '',
		disableLink = false
	}: Props = $props();
</script>

<a
	{href}
	target={targetBlank ? '_blank' : ''}
	onclick={(e) => {
		if (disableLink) {
			e.preventDefault();
		}
	}}
>
	<button class="pushable font-bold" style="background: {bgDepthColor}">
		<span class="front" style="background: {bgColor};">{text}</span>
	</button>
</a>

<style>
	.pushable {
		background: hsl(340, 97%, 38%);
		border-radius: 12px;
		border: none;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
	}
	.front {
		display: block;
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 1rem;
		background: hsl(349, 98%, 58%);
		color: white;
		transform: translateY(-3px);
	}

	.pushable:active .front {
		transform: translateY(-2px);
	}

	a:hover,
	button,
	button:hover {
		text-decoration: none;
	}
</style>
