<script>
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';

	const positions = [
		{ name: 'Contract Positions', icon: '📝' },
		{ name: 'Consulting Positions', icon: '💼' },
	];

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/huntermacias',
			icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z',
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/hunterstevens',
			icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
		},
	];

	// Floating shapes data - subtle dots and small shapes
	const floatingShapes = [
		{ type: 'dot', size: 4, x: '8%', y: '25%', delay: 0 },
		{ type: 'dot', size: 3, x: '92%', y: '20%', delay: 0.5 },
		{ type: 'dot', size: 5, x: '5%', y: '65%', delay: 1 },
		{ type: 'dot', size: 3, x: '88%', y: '70%', delay: 1.5 },
		{ type: 'ring', size: 40, x: '12%', y: '45%', delay: 0.3 },
		{ type: 'ring', size: 30, x: '85%', y: '45%', delay: 0.8 },
	];

	onMount(() => {
		inView('#contact-card', () => {
			animate('#contact-card', { opacity: 1, y: [40, 0], scale: [0.95, 1] }, { duration: 0.6 });
		});

		// Animate floating shapes - very subtle movement
		floatingShapes.forEach((_, i) => {
			const el = document.querySelector(`#floating-shape-${i}`);
			if (el) {
				animate(
					el,
					{
						y: [0, -8, 0],
						opacity: [0.15, 0.3, 0.15]
					},
					{
						duration: 6 + i * 0.8,
						repeat: Infinity,
						delay: floatingShapes[i].delay
					}
				);
			}
		});
	});
</script>

<div id="contact" class="relative py-20 lg:py-28 overflow-hidden">
	<!-- Background effects -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<!-- Main glow -->
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[120px]"></div>
		<!-- Secondary glow -->
		<div class="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]"></div>
	</div>

	<!-- Floating Shapes - subtle dots and rings -->
	{#each floatingShapes as shape, i}
		<div
			id="floating-shape-{i}"
			class="absolute pointer-events-none opacity-0"
			style="left: {shape.x}; top: {shape.y};"
		>
			{#if shape.type === 'dot'}
				<div
					class="rounded-full bg-indigo-400/40"
					style="width: {shape.size}px; height: {shape.size}px;"
				></div>
			{:else if shape.type === 'ring'}
				<div
					class="rounded-full border border-indigo-400/20"
					style="width: {shape.size}px; height: {shape.size}px;"
				></div>
			{/if}
		</div>
	{/each}

	<div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<h2
				class="glow space-grotesk text-3xl font-extrabold leading-9 text-heading sm:text-4xl lg:text-5xl"
			>
				Contact
			</h2>
		</div>

		<!-- Contact Card -->
		<div id="contact-card" class="opacity-0 mx-auto max-w-2xl">
			<div class="relative group">
				<!-- Animated gradient border -->
				<div class="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-3xl opacity-50 group-hover:opacity-80 blur-sm transition-all duration-500 animate-gradient-xy"></div>
				<div class="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-3xl opacity-70 animate-gradient-xy"></div>

				<!-- Glass Card -->
				<div class="relative rounded-3xl bg-surface-muted/90 backdrop-blur-xl p-8 lg:p-12 border border-border-subtle shadow-2xl transition-colors">
					<!-- Inner glow effects -->
					<div class="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
						<div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-heading/30 to-transparent"></div>
						<div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-heading/5 blur-3xl"></div>
					</div>

					<!-- Content -->
					<div class="relative text-center">
						<!-- Heading -->
						<h3 class="text-2xl lg:text-3xl font-extrabold text-txt space-grotesk">
							Feel free to reach out!
						</h3>
						<p class="mt-2 text-txt-muted">I'd love to hear from you</p>

						<!-- Email -->
						<a
							href="mailto:hunter@toplobster.io"
							class="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-surface/50 border border-heading/20 hover:border-heading/50 hover:bg-surface transition-all duration-300 group/email hover:scale-[1.02]"
						>
							<div class="p-2 rounded-lg bg-heading/15 group-hover/email:bg-heading/25 transition-colors">
								<svg class="w-5 h-5 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<span class="text-lg font-semibold text-txt-secondary group-hover/email:text-txt transition-colors">hunter@toplobster.io</span>
							<svg class="w-4 h-4 text-txt-muted group-hover/email:text-heading group-hover/email:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>

						<!-- Divider with Available for -->
						<div class="mt-10 flex items-center gap-4">
							<div class="flex-1 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
							<h4 class="text-xs font-semibold uppercase tracking-widest text-txt-muted">
								Available for
							</h4>
							<div class="flex-1 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
						</div>

						<!-- Positions -->
						<div class="mt-6 flex flex-wrap justify-center gap-3">
							{#each positions as position}
								<div class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface/50 border border-border-subtle hover:border-border-strong transition-all duration-300 cursor-default">
									<span class="text-xl">{position.icon}</span>
									<span class="text-sm font-medium text-txt-secondary">{position.name}</span>
								</div>
							{/each}
						</div>

						<!-- Social Links -->
						<div class="mt-12 pt-8 border-t border-border-subtle">
							<p class="text-sm text-txt-muted mb-6">Connect with me</p>
							<div class="flex justify-center gap-4">
								{#each socialLinks as social}
									<a
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										class="group/social relative p-4 rounded-xl bg-surface/50 border border-border-subtle hover:border-heading/40 transition-all duration-300 hover:scale-105"
										aria-label={social.name}
									>
										<svg class="relative w-6 h-6 text-txt-muted group-hover/social:text-heading transition-colors" fill="currentColor" viewBox="0 0 24 24">
											<path d={social.icon} />
										</svg>
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes gradient-xy {
		0%, 100% {
			background-position: 0% 0%;
		}
		25% {
			background-position: 100% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		75% {
			background-position: 0% 100%;
		}
	}

	.animate-gradient-xy {
		background-size: 400% 400%;
		animation: gradient-xy 10s ease infinite;
	}
</style>
