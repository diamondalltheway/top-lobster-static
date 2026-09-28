<script lang="ts">
	import { copy } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { testimonials } from '$lib/config/testimonials';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	let viewport: HTMLDivElement;
	let firstSet: HTMLUListElement;
	let paused = $state(false);
	let reducedMotion = $state(false);
	let hovering = false;
	let focusing = false;
	let dragging = false;
	let dragX = 0;
	let dragScroll = 0;

	function move(direction: number) {
		paused = true;
		const step = firstSet.children[0].getBoundingClientRect().width + 32;
		if (!reducedMotion && direction < 0 && viewport.scrollLeft < step)
			viewport.scrollLeft += firstSet.offsetWidth;
		viewport.scrollBy({ left: direction * step, behavior: reducedMotion ? 'instant' : 'smooth' });
	}
	function startDrag(event: PointerEvent) {
		if (event.pointerType !== 'mouse') {
			paused = true;
			return;
		}
		dragging = true;
		paused = true;
		dragX = event.clientX;
		dragScroll = viewport.scrollLeft;
		viewport.setPointerCapture(event.pointerId);
		event.preventDefault();
	}
	function drag(event: PointerEvent) {
		if (dragging) viewport.scrollLeft = dragScroll + dragX - event.clientX;
	}

	onMount(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updatePreference = () => {
			reducedMotion = preference.matches;
		};
		updatePreference();
		preference.addEventListener('change', updatePreference);
		let visible = false;
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
		});
		observer.observe(viewport);
		let previous = 0;
		let frame: number;
		function tick(time: number) {
			const elapsed = Math.min(time - previous, 50);
			previous = time;
			if (
				visible &&
				!document.hidden &&
				!paused &&
				!reducedMotion &&
				!hovering &&
				!focusing &&
				!dragging
			) {
				const period = firstSet.offsetWidth;
				viewport.scrollLeft = (viewport.scrollLeft + (elapsed * period) / 90000) % period;
			}
			frame = requestAnimationFrame(tick);
		}
		frame = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			preference.removeEventListener('change', updatePreference);
		};
	});
</script>

<section id="testimonials" class="testimonials-section" aria-labelledby="testimonials-title">
	<div class="section-heading shell">
		<h2 id="testimonials-title" class="section-title">{$copy['testimonials.heading']}</h2>
		<p>
			{$copy['testimonials.intro']}<br class="hidden sm:block" />
			{$copy['testimonials.introPeople']}
		</p>
	</div>
	<!-- A focusable scroll region provides native and arrow-key access to the complete quotes. -->
	<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
	<div
		class="testimonial-viewport"
		bind:this={viewport}
		role="region"
		aria-label={$copy['testimonials.region']}
		tabindex="0"
		onmouseenter={() => (hovering = true)}
		onmouseleave={() => {
			hovering = false;
			dragging = false;
		}}
		onfocusin={() => (focusing = true)}
		onfocusout={() => (focusing = false)}
		onpointerdown={startDrag}
		onpointermove={drag}
		onpointerup={() => (dragging = false)}
		onpointercancel={() => (dragging = false)}
		onwheel={() => (paused = true)}
		onkeydown={(event) => {
			if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
				event.preventDefault();
				move(event.key === 'ArrowRight' ? 1 : -1);
			}
		}}
	>
		<div class="testimonial-track">
			<ul class="testimonial-set" bind:this={firstSet}>
				{#each testimonials as testimonial}<li><TestimonialCard {testimonial} /></li>{/each}
			</ul>
			<ul class="testimonial-set testimonial-clone" aria-hidden="true" inert>
				{#each testimonials as testimonial}<li><TestimonialCard {testimonial} /></li>{/each}
			</ul>
		</div>
	</div>
	<div class="testimonial-controls shell">
		<span>{$copy['testimonials.from']}</span>
		<div>
			<button
				class="icon-button"
				aria-label={$copy['testimonials.previous']}
				onclick={() => move(-1)}>←</button
			>
			{#if !reducedMotion}<button
					class="icon-button pause-control"
					aria-label={$copy[paused ? 'testimonials.play' : 'testimonials.pause']}
					aria-pressed={paused}
					onclick={() => (paused = !paused)}
				>
					{#if paused}<svg
							width="14"
							height="14"
							viewBox="0 0 16 16"
							fill="currentColor"
							aria-hidden="true"><path d="m4 2 9 6-9 6z" /></svg
						>{:else}<svg
							width="14"
							height="14"
							viewBox="0 0 16 16"
							fill="currentColor"
							aria-hidden="true"><path d="M4 2h2v12H4zM10 2h2v12h-2z" /></svg
						>{/if}
				</button>{/if}
			<button class="icon-button" aria-label={$copy['testimonials.next']} onclick={() => move(1)}
				>→</button
			>
		</div>
	</div>
</section>
