<script lang="ts">
	import { copy } from '$lib/i18n';
	import { onMount } from 'svelte';

	const stats = [
		{ value: 27, label: 'school.months' },
		{ value: 935, label: 'school.hours' },
		{ value: 13, label: 'school.assessments' },
	] as const;
	let statsElement: HTMLDListElement;
	let displayedValues = $state<number[]>(stats.map((stat) => stat.value));

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
		<h2 id="school-title" class="section-title">{$copy['school.heading']}</h2>
		<p>{$copy['school.intro']}</p>
	</div>
	<dl class="school-stats" bind:this={statsElement}>
		{#each stats as stat, index}<div>
				<dd>
					<span aria-hidden="true">{displayedValues[index]}</span><span class="sr-only"
						>{stat.value}</span
					>
				</dd>
				<dt>{$copy[stat.label]}</dt>
			</div>{/each}
	</dl>
	<div class="school-reflection panel">
		<h3>{$copy['school.notes']}</h3>
		<p>
			{$copy['school.experience']}
		</p>
		<p>
			{$copy['school.foundations']}
		</p>
		<a
			class="surface-button"
			href="https://launchschool.com/courses"
			target="_blank"
			rel="noreferrer">{$copy['school.curriculum']} <span aria-hidden="true">↗</span></a
		>
	</div>
</section>
