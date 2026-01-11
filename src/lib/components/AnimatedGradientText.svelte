<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		class?: any;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<button
	class={cn(
		'animated-btn group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium transition-all duration-300',
		className
	)}
>
	<!-- Pulsing glow -->
	<div class="glow absolute -inset-1 rounded-[inherit] opacity-70 blur-xl"></div>
	<div class="glow-intense absolute -inset-0.5 rounded-[inherit] opacity-50 blur-md"></div>

	<!-- Border gradient -->
	<div class="gradient-border absolute inset-0 rounded-[inherit]"></div>

	<!-- Inner background -->
	<div class="absolute inset-[1.5px] rounded-[inherit] bg-black/90"></div>

	<!-- Content -->
	<span class="relative z-10">
		{#if children}{@render children()}{:else}Gradient{/if}
	</span>
</button>

<style>
	.animated-btn {
		--c1: #ff6b2b;
		--c2: #a855f7;
		--c3: #06b6d4;
	}

	.animated-btn:hover {
		transform: scale(1.02);
	}

	.animated-btn:hover .glow {
		opacity: 1;
	}

	.animated-btn:hover .glow-intense {
		opacity: 0.8;
	}

	.glow,
	.glow-intense {
		background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3), var(--c2), var(--c1));
		background-size: 300% 100%;
		animation:
			flow 4s ease-in-out infinite,
			pulse 2s ease-in-out infinite;
		transition: opacity 0.3s ease;
	}

	.gradient-border {
		background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3), var(--c2), var(--c1));
		background-size: 300% 100%;
		animation: flow 4s ease-in-out infinite;
	}

	.gradient-border::before {
		content: '';
		position: absolute;
		inset: 1.5px;
		border-radius: inherit;
		background: black;
	}

	@keyframes flow {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.5;
			filter: blur(12px);
		}
		50% {
			opacity: 0.8;
			filter: blur(18px);
		}
	}
</style>
