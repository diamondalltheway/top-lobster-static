<script lang="ts">
	import type { testimonials } from '$lib/config/testimonials';
	let { testimonial }: { testimonial: (typeof testimonials)[number] } = $props();
	const monograms: Record<string, string> = {
		AfterLib: 'a.',
		'Chatnode.ai': 'cn',
		'Agatha Global Tech': 'A',
		MLytica: 'M',
		StruCalc: 'S',
	};
</script>

<figure class="testimonial-card">
	<blockquote>“{testimonial.text}”</blockquote>
	<figcaption>
		<div class="testimonial-avatars" aria-hidden="true">
			<span class="company-avatar">{monograms[testimonial.company]}</span>
			<img src={testimonial.image} alt="" width="40" height="40" loading="lazy" />
		</div>
		<div class="testimonial-author">
			<span>{testimonial.author}</span><span>{testimonial.company} · {testimonial.badge}</span>
		</div>
	</figcaption>
</figure>
