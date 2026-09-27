<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from '$lib/components/ui/accordion';
	import Check from '$lib/svgs/Check.svelte';

	const goals = [
		{ icon: '✅', text: 'Harry Potter y La Piedra Filosofal (77,325 words)' },
		{ icon: '✅', text: 'Harry Potter y La Camara Secreta (84,799 words)' },
		{ icon: '✅', text: 'Harry Potter y El Prisionero de Azkaban (106,821 words)' },
		{ icon: '✅', text: 'Harry Potter y El Caliz de Fuego (190,858 words)' },
		{ icon: '✅', text: 'Harry Potter y La Orden del Fenix (257,154 words)' },
		{ icon: '✅', text: 'Harry Potter y El Misterio del Principe (168,923 words)' },
		{ icon: '🔲', text: 'Harry Potter y Las Reliquias de la Muerte (198,227 words)' },
	];
</script>

<section id="about" class="letter-panel" aria-labelledby="about-title">
	<div class="mx-auto max-w-3xl text-base leading-7 text-txt-secondary">
		<p class="eyebrow">A little about me</p>
		<h2
			id="about-title"
			class="space-grotesk mt-2 text-3xl font-bold tracking-tight text-txt sm:text-4xl"
		>
			Hey there! <span>👋</span>
		</h2>
		<p class="mt-6 text-xl font-semibold leading-8">
			I am Hunter, from The Woodlands, Texas - just north of Houston. As a software engineer, I
			enjoy building applications of all kinds with people from all over the world. 👨🏻‍💻 🌍
		</p>
		<div class="mt-10 max-w-2xl text-lg font-normal">
			<div>
				<p>
					I am a huge fan of <span class="text-lg font-bold text-txt">TypeScript.</span>&nbsp;The
					tooling is fantastic, but what really stands out about TypeScript is how it encourages me
					to be more mindful of the code I write.

					<br /><br />

					As far as frameworks go, <span class="text-lg font-bold text-txt">🥇 Svelte</span> is
					always my first choice. The developer experience is excellent and it's a dream to use.
					<span class="italic">Rich Harris</span>
					has been a big influence on the way I think about building applications. I admire his first-principles
					thinking and appreciate everything he is doing to push the framework forward.
					<br /><br />
				</p>
				<p>
					The runner-up goes to <span class="text-lg font-bold text-txt">🥈 React/Next.js</span>.
					Its strong community and ecosystem are something I highly value.
				</p>
				<br />

				I discovered <span class="text-lg font-bold text-txt">Tailwind CSS</span> in 2019 and have
				been exclusively using it ever since. In recent projects, I have been using
				<span class="text-lg font-bold text-txt">Shadcn UI</span>, the Tailwind-based component
				library and it's now one of my favorites.

				<br /><br />
				At the end of the day, I have a lot of respect for getting to the finish line. There's something
				deeply satisfying about taking an idea from concept to completion.

				<div class="flex justify-start">
					<Accordion type="single">
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="letter-disclosure">
								<span>More</span>
								<span class="disclosure-icon" aria-hidden="true">
									<svg
										width="14"
										height="14"
										viewBox="0 0 16 16"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
									>
										<path d="M3 8h10" />
										<path class="disclosure-plus-vertical" d="M8 3v10" />
									</svg>
								</span>
							</AccordionTrigger>
							<AccordionContent class="mt-2 rounded-xl border border-heading/30 bg-surface/70 p-4">
								<p class="my-4 text-lg font-normal text-txt">
									Although TypeScript is my language of choice, I've recently been interested in Go.
									<br /><br />
									In my spare time, I am either working on a project or listening to podcasts / watching
									videos about software development. Here are some of my favorite podcasts/channels:
								</p>
								<ul class="text-lg font-normal">
									<li>🔵 Syntax</li>
									<li>🔵 The Standup</li>
									<li>🔵 The Primeagen</li>
									<li>🔵 Theo Browne</li>
									<li>🔵 Ben Davis</li>
									<li>🔵 Matt Pocock</li>
									<li>🔵 Notes on Work (Caleb Porzio)</li>
									<li>🔵 Front-End Fire</li>
									<li>🔵 Nerd Snipe</li>
									<li>🔵 Fireship</li>
									<li>🔵 Rich Harris (interviews)</li>
									<li>🔵 Many more...</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<hr class="my-10 border-border-subtle" />

				<h3 class="space-grotesk mx-auto my-8 text-2xl font-bold tracking-tight text-txt">
					The <span
						class="underline decoration-[hsl(15_62%_60%)] decoration-wavy underline-offset-8"
						>perfect</span
					> day looks like...
				</h3>
				<ul class="mt-8 max-w-2xl space-y-3 text-txt-secondary">
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">Programming.</strong> Building applications
							gives me energy. <span class="text-xl">⚡️</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">Reading in Spanish.</strong> Best way to
							improve overall comprehension. <span class="text-xl">📈</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">Barbecuing.</strong> Experimenting with new
							recipes. <span class="text-xl">🔬</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">Watching UFC.</strong> Enjoying pure
							competition. <span class="text-xl">🥊 </span></span
						>
					</li>
				</ul>

				<hr class="my-10 border-border-subtle" />

				<h3 class="space-grotesk mt-8 text-2xl font-bold tracking-tight text-txt">
					Notes on Spanish
				</h3>
				<p class="mt-6">
					The Spanish language has been many things to me. It has been a teacher, teaching me <span
						class="caveat text-2xl font-bold text-[hsl(15_62%_60%)]">dedication</span
					>,
					<span class="caveat text-2xl font-bold text-[hsl(15_62%_60%)]">patience</span>, and
					<span class="caveat text-2xl font-bold text-[hsl(15_62%_60%)]">discipline</span>. It has
					also been a vehicle for self-confidence. And after non-stop intense study, Spanish is now
					a part of my identity.

					<br /><br />

					I've spent the last
					<span class="font-bold text-heading">8+ years</span>
					living among the Latino community, taking the opportunity to listen, learn and eventually gain
					a deep understanding. <br /><br /> I've integrated many positive aspects of the Latin
					American lifestyle into my own life, with the most important lesson at the top of mind -
					<strong class="text-xl font-black text-heading">Love life</strong>
					<span class="p-2 text-xl">❤️</span>

					<br /><br />
				</p>
				<div class="flex justify-start">
					<Accordion type="single">
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="letter-disclosure">
								<span>Spanish Goals</span>
								<span class="disclosure-icon" aria-hidden="true">
									<svg
										width="14"
										height="14"
										viewBox="0 0 16 16"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
									>
										<path d="M3 8h10" />
										<path class="disclosure-plus-vertical" d="M8 3v10" />
									</svg>
								</span>
							</AccordionTrigger>
							<AccordionContent class="mt-2 rounded-xl border border-heading/30 bg-surface/70 p-4">
								<p class="my-4 text-lg font-normal text-txt">
									I was challenged to read 1 million words in Spanish to enhance my overall literacy
									and significantly grow my vocabulary. The complete Harry Potter series totals 1.1
									million words. <span class="font-bold text-heading">Challenge Accepted. 😎</span>
								</p>
								<ul class="space-y-2">
									{#each goals as { icon, text }}
										<li class="mt-2 flex items-center gap-2 text-lg">
											<span>{icon}</span>
											<span>{text}</span>
										</li>
									{/each}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	</div>
</section>
