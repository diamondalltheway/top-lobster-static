<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { animate, stagger, inView } from 'motion';
	import { onMount } from 'svelte';

	let isHoveredLS: boolean = $state(false);

	const stats = [
		{ value: '27', label: 'Months', icon: '📅' },
		{ value: '935', label: 'Study Hours', icon: '⏱️' },
		{ value: '13', label: 'Assessments', icon: '✓' }
	];

	onMount(() => {
		const isMobile = window.matchMedia('(max-width: 768px)').matches;
		inView('#ls-section', () => {
			if (isMobile) {
				// On mobile, show elements immediately without delays
				animate('.stat-card', { opacity: 1, y: 0, scale: 1 }, { duration: 0.2 });
				animate('.ls-reflection', { opacity: 1, y: 0 }, { duration: 0.2 });
			} else {
				animate('.stat-card', { opacity: 1, y: [40, 0], scale: [0.9, 1] }, { delay: stagger(0.15) });
				animate('.ls-reflection', { opacity: 1, y: [30, 0] }, { delay: 0.5 });
			}
		});
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div id="ls-section" class="relative mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:py-28">
	<!-- Background glow effect -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]"></div>
	</div>

	<div class="relative">
		<!-- Logo with enhanced styling -->
		<div class="flex justify-center mb-8">
			<div class="relative group">
				<div class="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-400/10 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<!-- Light mode background for logo visibility -->
				<div class="absolute -inset-4 rounded-2xl bg-neutral-800/90 dark:bg-transparent transition-colors duration-300"></div>
				<img src="logo-ls.png" class="relative w-64 md:w-80 drop-shadow-2xl" alt="Launch School Logo" />
			</div>
		</div>

		<!-- Title -->
		<div class="mx-auto max-w-4xl text-center mb-12">
			<h2 class="text-3xl font-bold tracking-tight text-txt sm:text-4xl lg:text-5xl glow-red space-grotesk">
				Core Curriculum Graduate
			</h2>
		</div>

		<!-- Stats Cards -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
			{#each stats as stat, i}
				<div class="stat-card opacity-0 group relative">
					<div class="absolute -inset-0.5 bg-gradient-to-b from-red-400/50 to-red-600/50 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
					<div class="relative flex flex-col items-center p-8 rounded-2xl bg-surface-muted/90 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
						<span class="text-3xl mb-3">{stat.icon}</span>
						<dd class="text-5xl sm:text-6xl font-bold tracking-tight text-txt glow-red space-grotesk">{stat.value}</dd>
						<dt class="mt-3 text-lg font-medium text-launchschool-red">{stat.label}</dt>
					</div>
				</div>
			{/each}
		</div>

		<!-- Reflection Card -->
		<div
			onmouseover={() => (isHoveredLS = true)}
			onmouseout={() => (isHoveredLS = false)}
			class="ls-reflection opacity-0 relative max-w-3xl mx-auto group"
		>
			<!-- Glow effect behind card -->
			<div class="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-red-400/20 to-red-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

			<div class="relative rounded-2xl bg-launchschool-notes p-8 lg:p-10 border-2 border-transparent hover:border-red-400/60 transition-all duration-300 shadow-2xl">
				<h2 class="text-2xl lg:text-3xl font-bold tracking-tight text-txt space-grotesk flex items-center gap-3">
					<span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10">
						<svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
						</svg>
					</span>
					Notes on Launch School
				</h2>

				<div class="mt-6 space-y-4 text-txt-secondary leading-relaxed text-lg">
					<p>
						Launch School was one of the hardest things I have ever done. It was also one of the most
						rewarding. During my time at Launch School, I learned much more than syntax and semantics, I
						learned attention to detail and acquired a procedural mindset.
					</p>
					<p>
						The core curriculum begins with first principles, which is by no means an attractive way to start,
						but it highlights the seriousness of the program. A complete understanding of the fundamentals
						is required before touching higher-level abstractions, and this is what makes the core curriculum
						so special.
						<span class="text-xl inline-block ml-1" class:hithere={isHoveredLS}>🎉</span>
					</p>
				</div>

				<div class="mt-8 flex items-center gap-4">
					<Button
						text={'View Curriculum'}
						href={'https://launchschool.com/courses'}
						targetBlank={true}
						bgColor={'hsl(349, 98%, 58%)'}
						bgDepthColor={'hsl(340, 97%, 38%)'}
					/>
					<span class="hidden md:inline text-sm text-txt-muted">Mastery-based learning</span>
				</div>
			</div>
		</div>
	</div>
</div>
