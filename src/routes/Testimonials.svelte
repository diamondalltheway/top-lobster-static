<script>
	import { animate, stagger, inView } from 'motion';
	import { onMount } from 'svelte';
	const testimonials = [
		{
			text: 'What truly sets Hunter apart is his ability to communicate complex ideas clearly. He is an amazing presenter who ensured all stakeholders understood the progress and technical details. His proactive updates and problem-solving attitude made the collaboration smooth and productive. I highly recommend Hunter for any Svelte or React.js projects. He is a reliable and talented professional who delivers great results. Would definitely work with him again!',
			author: 'David Montes',
			company: 'AfterLib',
			image: 'david-montes.jpg',
		},
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
		inView('#animation-trigger', () => {
			animate('figure', { opacity: 1, y: [25, 0] }, { delay: stagger(0.15) });
		});
	});
</script>

<div class="relative isolate pb-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<h2
				id="testimonials-title"
				class="text-3xl font-bold tracking-tight text-center sm:text-4xl bg-gradient-to-r text-indigo-300 glow space-grotesk"
			>
				Testimonials
			</h2>
		</div>
		<div class="relative isolate mx-auto mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-6xl">
			<div id="animation-trigger" class="h-1 w-full absolute top-[30rem]"></div>
			{#each testimonials as { text, author, company, image }, i}
				<figure
					class="group rounded-2xl bg-gradient-to-tl from-slate-800 to-slate-600 p-6 shadow-lg ring-1 ring-gray-900/5 flex flex-col h-full flex-grow hover:outline-dotted hover:outline-4 outline-indigo-400 outline-offset-4"
				>
					<blockquote class="text-gray-400 font-semibold text-base flex-grow">
						<p>"{text}"</p>
					</blockquote>
					<figcaption class="mt-6 flex items-center gap-x-4">
						<img class="h-10 w-10 rounded-full bg-gray-50 group-hover:motion-preset-shake" src={image} alt="" />
						<div>
							<div class="font-semibold text-gray-300">{author}</div>
							<div class="text-gray-300">{company}</div>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</div>
