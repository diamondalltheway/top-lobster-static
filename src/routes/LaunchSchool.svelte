<script lang="ts">
	import { onMount } from 'svelte';

	const stats = [
		{ value: 27, label: 'Months' },
		{ value: 935, label: 'Study hours' },
		{ value: 13, label: 'Assessments' },
	];
	let statsElement: HTMLDListElement;
	let displayedValues = $state(stats.map((stat) => stat.value));

	onMount(() => {
		const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (motionPreference.matches || !('IntersectionObserver' in window)) return;

		displayedValues = stats.map(() => 0);
		let frame = 0;
		const finish = () => {
			cancelAnimationFrame(frame);
			displayedValues = stats.map((stat) => stat.value);
			observer.disconnect();
		};
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				const startedAt = performance.now();
				const tick = (now: number) => {
					const progress = Math.min((now - startedAt) / 1600, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					displayedValues = stats.map((stat) => Math.round(stat.value * eased));
					if (progress < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.4 }
		);
		observer.observe(statsElement);
		const handleMotionChange = () => {
			if (motionPreference.matches) finish();
		};
		motionPreference.addEventListener('change', handleMotionChange);
		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			motionPreference.removeEventListener('change', handleMotionChange);
		};
	});
</script>

<section id="ls-section" class="section shell" aria-labelledby="school-title">
	<img src="/logo-ls.png" class="school-logo" alt="Launch School" loading="lazy" />
	<div class="section-heading">
		<h2 id="school-title" class="section-title">A foundation that lasts.</h2>
		<p>Launch School Core Curriculum Graduate. Mastery through first principles.</p>
	</div>
	<dl class="school-stats" bind:this={statsElement}>
		{#each stats as stat, index}<div>
				<dd>
					<span aria-hidden="true">{displayedValues[index]}</span><span class="sr-only"
						>{stat.value}</span
					>
				</dd>
				<dt>{stat.label}</dt>
			</div>{/each}
	</dl>
	<div class="school-reflection panel">
		<h3>Notes on Launch School</h3>
		<p>
			Launch School was one of the hardest things I have ever done. It was also one of the most
			rewarding. During my time at Launch School, I learned much more than syntax and semantics, I
			learned attention to detail and acquired a procedural mindset.
		</p>
		<p>
			The core curriculum begins with first principles, which is by no means an attractive way to
			start, but it highlights the seriousness of the program. A complete understanding of the
			fundamentals is required before touching higher-level abstractions, and this is what makes the
			core curriculum so special.
		</p>
		<a
			class="surface-button"
			href="https://launchschool.com/courses"
			target="_blank"
			rel="noreferrer">View curriculum <span aria-hidden="true">↗</span></a
		>
	</div>
</section>
