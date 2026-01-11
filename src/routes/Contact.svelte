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

	onMount(() => {
		inView('#contact-card', () => {
			animate('#contact-card', { opacity: 1, y: [40, 0], scale: [0.95, 1] }, { duration: 0.6 });
		});
	});
</script>

<div id="contact" class="relative py-20 lg:py-28">
	<!-- Background effects -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
	</div>

	<div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<h2
				class="glow space-grotesk text-3xl font-extrabold leading-9 text-indigo-300 sm:text-4xl lg:text-5xl"
			>
				Contact
			</h2>
		</div>

		<!-- Contact Card -->
		<div id="contact-card" class="opacity-0 mx-auto max-w-2xl">
			<div class="relative group">
				<!-- Glow effect -->
				<div class="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

				<!-- Card -->
				<div class="relative rounded-3xl bg-gradient-to-b from-neutral-100 to-neutral-200 p-8 lg:p-12 border-2 border-transparent hover:border-indigo-400/50 transition-all duration-300 shadow-2xl">
					<!-- Content -->
					<div class="relative text-center">
						<!-- Heading -->
						<h3 class="text-2xl lg:text-3xl font-extrabold text-gray-900 space-grotesk">
							Feel free to reach out!
						</h3>

						<!-- Email -->
						<a
							href="mailto:hunter@toplobster.io"
							class="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-indigo-50 border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-100 transition-all duration-300 group/email"
						>
							<svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span class="text-lg font-bold text-gray-700 group-hover/email:text-indigo-600 transition-colors">hunter@toplobster.io</span>
						</a>

						<!-- Divider with Available for -->
						<div class="mt-10 flex items-center gap-4">
							<div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
							<h4 class="text-sm font-semibold uppercase tracking-wider text-indigo-600">
								Available for
							</h4>
							<div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
						</div>

						<!-- Positions -->
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							{#each positions as position}
								<div class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm">
									<span class="text-xl">{position.icon}</span>
									<span class="text-sm font-medium text-gray-700">{position.name}</span>
								</div>
							{/each}
						</div>

						<!-- Social Links -->
						<div class="mt-10 pt-8 border-t border-gray-200">
							<p class="text-sm text-gray-500 mb-4">Connect with me</p>
							<div class="flex justify-center gap-4">
								{#each socialLinks as social}
									<a
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										class="group/social p-3 rounded-xl bg-gray-100 hover:bg-indigo-100 border border-gray-200 hover:border-indigo-300 transition-all duration-300"
										aria-label={social.name}
									>
										<svg class="w-6 h-6 text-gray-600 group-hover/social:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
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
