<script>
	import { animate, stagger, inView } from 'motion';
	import { onMount } from 'svelte';

	const featuredTestimonial = {
		text: 'What truly sets Hunter apart is his ability to communicate complex ideas clearly. He is an amazing presenter who ensured all stakeholders understood the progress and technical details. His proactive updates and problem-solving attitude made the collaboration smooth and productive. I highly recommend Hunter for any Svelte or React.js projects. He is a reliable and talented professional who delivers great results. Would definitely work with him again!',
		author: 'David Montes',
		company: 'AfterLib',
		image: 'david-montes.jpg',
	};

	const testimonials = [
		{
			text: "Hunter has been great to work with on the ChatNode web app. He's reliable, quick to solve problems, and always brings a lot of thought to the project. He has great communication skills too! It's been awesome to have him on the team, and he's helped bring many features to ChatNode.",
			author: 'Sacha Dumay',
			company: 'Chatnode.ai',
			image: 'sacha.jpg',
		},
		{
			text: 'We had a pleasure working together and successfully completed the project. Hunter is skilled professional who adhered to our requirements and delivered great results.',
			author: 'Michael Makedonsky',
			company: 'Agatha Global Tech',
			image: '/michael.png',
		},
		{
			text: "Hunter was an absolute pleasure working with. He has very strong work ethics, very responsive and communicative. He's done a great job and fit in really well with the team.",
			author: 'Josh Yang',
			company: 'MLytica',
			image: 'josh.jpg',
		},
	];

	onMount(() => {
		inView('#testimonials-trigger', () => {
			animate('.featured-card', { opacity: 1, y: [50, 0], scale: [0.95, 1] }, { duration: 0.6 });
			animate(
				'.testimonial-card',
				{ opacity: 1, y: [40, 0] },
				{ delay: stagger(0.15, { start: 0.3 }) }
			);
		});
	});
</script>

<div class="relative isolate overflow-hidden py-20 lg:py-28">
	<!-- Background effects -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[100px]"
		></div>
		<div
			class="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[80px]"
		></div>
		<div
			class="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px]"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto mb-16 max-w-xl text-center">
			<h2
				id="testimonials-title"
				class="glow space-grotesk text-3xl font-bold tracking-tight text-indigo-300 sm:text-4xl lg:text-5xl"
			>
				Testimonials
			</h2>
			<p class="mt-4 text-lg text-gray-400">What clients and collaborators have to say</p>
			<!-- Star rating -->
			<div class="mt-6 flex items-center justify-center gap-2">
				<div class="flex gap-1">
					{#each Array(5) as _, i}
						<svg class="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
					{/each}
				</div>
				<span class="ml-2 text-sm text-gray-400">5.0 from clients</span>
			</div>
		</div>

		<div
			id="testimonials-trigger"
			class="pointer-events-none absolute top-[20rem] h-1 w-full"
		></div>

		<!-- Featured Testimonial -->
		<div class="featured-card mx-auto mb-12 max-w-4xl opacity-0">
			<div class="group relative">
				<!-- Animated gradient border -->
				<div
					class="animate-gradient-slow absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<!-- Card -->
				<div class="relative rounded-3xl bg-neutral-900 p-8 lg:p-12">
					<!-- Grid pattern overlay -->
					<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-30">
						<div
							class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"
						></div>
					</div>

					<!-- Content -->
					<div class="relative">
						<!-- Large quote mark -->
						<svg
							class="absolute -left-2 -top-2 h-16 w-16 text-indigo-500/20"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path
								d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
							/>
						</svg>

						<blockquote class="relative z-10">
							<p class="text-xl font-medium leading-relaxed text-gray-200 lg:text-2xl">
								"{featuredTestimonial.text}"
							</p>
						</blockquote>

						<!-- Author -->
						<div class="mt-10 flex items-center gap-6">
							<div class="relative">
								<div
									class="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60 blur"
								></div>
								<img
									class="relative h-16 w-16 rounded-full object-cover ring-4 ring-neutral-800"
									src={featuredTestimonial.image}
									alt={featuredTestimonial.author}
								/>
							</div>
							<div>
								<div class="space-grotesk text-xl font-bold text-white">
									{featuredTestimonial.author}
								</div>
								<div class="text-indigo-400">{featuredTestimonial.company}</div>
							</div>
							<div class="ml-auto hidden gap-1 sm:flex">
								{#each Array(5) as _}
									<svg class="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Other Testimonials -->
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
			{#each testimonials as { text, author, company, image }, i}
				<figure class="testimonial-card group relative h-full opacity-0">
					<!-- Glow on hover -->
					<div
						class="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-indigo-500/30 to-purple-500/30 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"
					></div>

					<!-- Card -->
					<div
						class="relative flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50"
					>
						<!-- Stars -->
						<div class="mb-4 flex gap-0.5">
							{#each Array(5) as _}
								<svg class="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>

						<!-- Quote -->
						<blockquote class="flex-grow">
							<p class="text-sm leading-relaxed text-gray-400">
								"{text}"
							</p>
						</blockquote>

						<!-- Author -->
						<figcaption class="mt-6 flex items-center gap-3 border-t border-neutral-800 pt-4">
							<img
								class="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-700 transition-all duration-300 group-hover:ring-indigo-500/50"
								src={image}
								alt={author}
							/>
							<div>
								<div
									class="text-sm font-semibold text-white transition-colors group-hover:text-indigo-300"
								>
									{author}
								</div>
								<div class="text-xs text-gray-500">{company}</div>
							</div>
						</figcaption>
					</div>
				</figure>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes gradient-slow {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
	.animate-gradient-slow {
		background-size: 200% 200%;
		animation: gradient-slow 6s ease infinite;
	}
</style>
