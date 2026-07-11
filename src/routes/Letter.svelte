<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from '$lib/components/ui/accordion';
	import Button from '$lib/components/Button.svelte';
	import Check from '$lib/svgs/Check.svelte';

	let isHovered: boolean = $state(false);

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

<div
	role="main"
	onmouseover={() => (isHovered = true)}
	onmouseout={() => (isHovered = false)}
	onfocus={() => (isHovered = true)}
	onblur={() => (isHovered = false)}
	class="letter-panel mx-2 my-20 rounded-[2rem] p-6 py-20 text-left sm:p-10 sm:py-24 lg:px-8"
>
	<div class="mx-auto max-w-3xl text-base leading-7 text-txt-secondary">
		<p class="text-base font-semibold leading-7 text-heading">/ Bio</p>
		<h1 class="space-grotesk mt-2 text-3xl font-bold tracking-tight text-txt sm:text-4xl">
			Hey there! <span class:wave={isHovered}>👋</span>
		</h1>
		<p class="mt-6 text-xl font-semibold leading-8">
			I am Hunter, from The Woodlands, Texas - just north of Houston. As a software developer, I
			enjoy building applications of all kinds with people from all over the world. 👨🏻‍💻 🌍
		</p>
		<div class="mt-10 max-w-2xl text-lg font-medium">
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
				At the end of the day, I have a
				lot of respect for getting to the finish line.
				There's something deeply satisfying about taking an idea from concept to completion.

				<div class="flex justify-start">
					<Accordion type="single" collapsible>
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="w-fit  [&>svg]:hidden ">
								<Button
									text={'More'}
									disableLink={true}
									bgColor={'hsl(var(--heading))'}
									bgDepthColor={'hsl(236, 55%, 30%)'}
								/>
							</AccordionTrigger>
							<AccordionContent
								class="mt-2 rounded-xl border border-heading/30 bg-surface/70 p-4"
							>
								<p class="my-4 text-lg font-medium text-txt">
									Although TypeScript is my language of choice, I've recently been interested in Go.
									<br /><br />
									In my spare time, I am either working on a project or listening to podcasts / watching
									videos about software development. Here are some of my favorite podcasts/channels:
								</p>
								<ul class="text-lg font-medium">
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

				<ul class="mt-8 max-w-2xl space-y-3 text-txt-secondary">
					<h2 class="space-grotesk mx-auto my-8 text-2xl font-bold tracking-tight text-txt">
						The <span class="underline decoration-heading decoration-wavy underline-offset-8"
							>perfect</span
						> day looks like...
					</h2>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">Programming.</strong> Building
							applications gives me energy. <span class="text-xl">⚡️</span></span
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
							><strong class="font-semibold text-txt">Barbecuing.</strong> Experimenting with
							new recipes. <span class="text-xl">🔬</span></span
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

				<h2 class="space-grotesk mt-8 text-2xl font-bold tracking-tight text-txt">
					Notes on Spanish
				</h2>
				<p class="mt-6">
					The Spanish language has been many things to me. It has been a teacher, teaching me <span
						class="caveat text-2xl font-bold text-heading">dedication</span
					>,
					<span class="caveat text-2xl font-bold text-heading">patience</span>, and
					<span class="caveat text-2xl font-bold text-heading">discipline</span>. It has also
					been a vehicle for self-confidence. And after non-stop intense study, Spanish is now a
					part of my identity.
					
					<br /><br />
					
					I've spent the last
					<span class="font-bold text-heading">8+ years</span>
					living among the Latino community, taking the opportunity to listen, learn and eventually gain
					a deep understanding. <br /><br /> I've integrated many positive aspects of the Latin
					American lifestyle into my own life, with the most important lesson at the top of mind -
					<strong
						class="text-xl font-black text-heading"
						>Love life</strong
					>
					<span class="p-2 text-xl">❤️</span>

					<br /><br />
				</p>
				<div class="flex justify-start">
					<Accordion type="single" collapsible>
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="w-fit  [&>svg]:hidden ">
								<Button
									text={'Spanish Goals'}
									disableLink={true}
									bgColor={'hsl(var(--heading))'}
									bgDepthColor={'hsl(236, 55%, 30%)'}
								/>
							</AccordionTrigger>
							<AccordionContent
								class="mt-2 rounded-xl border border-heading/30 bg-surface/70 p-4"
							>
								<p class="my-4 text-lg font-medium text-txt">
									I was challenged to read 1 million words in Spanish to enhance my overall literacy
									and significantly grow my vocabulary. The complete Harry Potter series totals 1.1
									million words. <span class="font-bold text-heading"
										>Challenge Accepted. 😎</span
									>
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
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Roboto+Mono&family=Roboto:wght@400;900&family=Space+Grotesk:wght@500&display=swap');

	.letter-panel {
		background:
			radial-gradient(circle at 12% 0%, hsl(var(--heading) / 0.18), transparent 30rem),
			radial-gradient(circle at 92% 88%, hsl(var(--heading-accent) / 0.12), transparent 28rem),
			linear-gradient(135deg, hsl(var(--surface-elevated) / 0.97), hsl(var(--surface-muted) / 0.94));
		background-size: 140% 140%, 150% 150%, 100% 100%;
		box-shadow:
			inset 0 1px hsl(var(--text-primary) / 0.05),
			0 0 0 1px hsl(var(--heading) / 0.04),
			0 28px 80px -40px hsl(var(--heading) / 0.34);
		border: 1px solid hsl(var(--border-subtle));
		isolation: isolate;
		position: relative;
		overflow: hidden;
		animation: letter-aurora 12s ease-in-out infinite;
		transition: border-color 400ms ease, box-shadow 400ms ease;
		will-change: background-position, box-shadow;
	}

	.letter-panel:hover {
		border-color: hsl(var(--heading) / 0.34);
		box-shadow:
			inset 0 1px hsl(var(--text-primary) / 0.06),
			0 0 0 1px hsl(var(--heading) / 0.08),
			0 30px 92px -36px hsl(var(--heading) / 0.46);
	}

	.letter-panel > * {
		position: relative;
		z-index: 1;
	}

	.letter-panel::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		z-index: 0;
		background:
			linear-gradient(hsl(var(--heading) / 0.045) 1px, transparent 1px),
			linear-gradient(90deg, hsl(var(--heading) / 0.045) 1px, transparent 1px);
		background-size: 32px 32px;
		mask-image: linear-gradient(to bottom, black, transparent 75%);
	}

	.letter-panel::after {
		content: '';
		position: absolute;
		inset: 0 auto 0 0;
		width: 4px;
		pointer-events: none;
		background: linear-gradient(to bottom, transparent, hsl(var(--heading)), transparent);
		opacity: 0.8;
		animation: letter-spine 7s ease-in-out infinite;
	}

	@keyframes letter-aurora {
		0%, 100% {
			background-position: 0% 0%, 100% 100%, 0 0;
		}
		50% {
			background-position: 18% 12%, 82% 76%, 0 0;
		}
	}

	@keyframes letter-spine {
		0%, 100% {
			opacity: 0.55;
			filter: drop-shadow(0 0 5px hsl(var(--heading) / 0.25));
		}
		50% {
			opacity: 1;
			filter: drop-shadow(0 0 12px hsl(var(--heading) / 0.65));
		}
	}

	@media (max-width: 768px) {
		.wave {
			animation: none !important;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.letter-panel,
		.letter-panel::after {
			animation: none;
		}
	}

	.wave {
		animation-name: wave-animation;
		animation-duration: 3s;
		animation-iteration-count: 1;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		} /* The following five values can be played with to make the waving more or less extreme */
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}
</style>
