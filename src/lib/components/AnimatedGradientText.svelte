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
	<div class="inner-background absolute inset-[1.5px] rounded-[inherit] bg-surface/95"></div>

	<!-- Content -->
	<span class="relative z-10">
		{#if children}{@render children()}{:else}Gradient{/if}
	</span>
</button>

<style>
	.animated-btn {
		--c1: hsl(var(--heading));
		--c2: hsl(var(--heading-accent));
		--c3: hsl(var(--heading));
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
			flow 8s ease-in-out infinite,
			pulse 6s ease-in-out infinite;
		transition: opacity 0.3s ease;
	}

	.gradient-border {
		background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3), var(--c2), var(--c1));
		background-size: 300% 100%;
		animation: flow 8s ease-in-out infinite;
	}

	.gradient-border::before {
		content: '';
		position: absolute;
		inset: 1.5px;
		border-radius: inherit;
		background: hsl(var(--surface));
	}

	/* Keep the atmospheric treatment in dark mode, but use a crisp pill in light mode. */
	:global(:root:not(.dark)) .animated-btn {
		box-shadow: 0 8px 20px -14px hsl(var(--heading) / 0.45);
	}

	:global(:root:not(.dark)) .animated-btn .glow,
	:global(:root:not(.dark)) .animated-btn .glow-intense {
		display: none;
	}

	:global(:root:not(.dark)) .animated-btn .gradient-border {
		background: hsl(var(--heading) / 0.48);
		animation: none;
	}

	:global(:root:not(.dark)) .animated-btn .inner-background {
		background: hsl(var(--surface-muted));
	}

	/* Disable animations on mobile for performance */
	@media (max-width: 768px) {
		.glow,
		.glow-intense {
			animation: none;
			background-position: 50% 50%;
		}

		.gradient-border {
			animation: none;
			background-position: 50% 50%;
		}
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
