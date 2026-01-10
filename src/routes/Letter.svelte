<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from '$lib/components/ui/accordion';
	import Button from '$lib/components/Button.svelte';

	let isHovered: boolean = $state(false);

	const goals = [
		{ icon: '✅', text: 'Harry Potter y La Piedra Filosofal (77,325 words)' },
		{ icon: '✅', text: 'Harry Potter y La Camara Secreta (84,799 words)' },
		{ icon: '✅', text: 'Harry Potter y El Prisionero de Azkaban (106,821 words)' },
		{ icon: '✅', text: 'Harry Potter y El Caliz de Fuego (190,858 words)' },
		{ icon: '✅', text: 'Harry Potter y La Orden del Fenix (257,154 words)' },
		{ icon: '🔲', text: 'Harry Potter y El Misterio del Principe (168,923 words)' },
		{ icon: '🔲', text: 'Harry Potter y Las Reliquias de la Muerte (198,227 words)' },
	];
</script>

<div
	role="main"
	onmouseover={() => (isHovered = true)}
	onmouseout={() => (isHovered = false)}
	onfocus={() => (isHovered = true)}
	onblur={() => (isHovered = false)}
	class="glow-box mx-2 my-16 rounded-md bg-gradient-to-b from-neutral-100 to-neutral-300 object-cover p-6 py-32 text-left outline-offset-4 outline-indigo-400 hover:outline-dotted hover:outline-4 lg:px-8"
>
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<p class="text-base font-semibold leading-7 text-indigo-600">Bio</p>
		<h1 class="space-grotesk mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
			Hey there! <span class:wave={isHovered}>👋</span>
		</h1>
		<p class="mt-6 text-xl font-semibold leading-8">
			I am Hunter, from The Woodlands, Texas - just north of Houston. As a software developer, I
			enjoy building applications of all kinds with people from all over the world. 👨🏻‍💻 🌍
		</p>
		<div class="mt-10 max-w-2xl text-lg font-medium">
			<div>
				<p>
					I am a huge fan of <span class="text-lg font-bold text-black">TypeScript. </span>The
					tooling is fantastic, but what really stands out about TypeScript is how it encourages me
					to be more mindful of the code I write.

					<br /><br />

					As far as frameworks go, <span class="text-lg font-bold text-black">🥇 Svelte</span> is
					always my first choice. The developer experience is excellent and it's a dream to use. I
					am also a huge fan of
					<span class="italic">Rich Harris</span>
					and everything he is doing to push the framework forward. Because of that, I created a Sveltekit
					starter template, called
					<a class="font-bold" href="https://github.com/diamondalltheway/sveltetastic">
						Sveltetastic<span class="font-medium">.</span>
					</a>
					<br /><br />
				</p>
				<p>
					The runner-up goes to <span class="text-lg font-bold text-black">🥈 React/Next.js</span>.
					Its strong community and ecosystem are something I highly value.
				</p>
				<br />

				I discovered <span class="text-lg font-bold text-black">Tailwind CSS</span> in 2019 and have
				been exclusively using it ever since. In recent projects, I have been using
				<span class="text-lg font-bold text-black">Shadcn UI</span>, the Tailwind-based component
				library and it's now one of my favorites.

				<div class="flex justify-start">
					<Accordion type="single" collapsible>
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="w-fit  [&>svg]:hidden ">
								<Button
									text={'More'}
									disableLink={true}
									bgColor={'hsl(227, 66%, 55%)'}
									bgDepthColor={'hsl(227, 66%, 25%)'}
								/>
							</AccordionTrigger>
							<AccordionContent
								class="mt-2 rounded-md border-[3px] border-dashed border-indigo-400 p-4"
							>
								<p class="my-4 text-lg font-medium text-black">
									Although TypeScript is my language of choice, I've recently been interested in Go.
									<br /><br />
									In my spare time, I am either working on a project or watching videos about software
									development. Here are some of my favorite channels:
								</p>
								<ul class="text-lg font-medium">
									<li>🔵 ThePrimeagen</li>
									<li>🔵 Theo Browne</li>
									<li>🔵 Matt Pocock</li>
									<li>🔵 Fireship</li>
									<li>🔵 Rich Harris (interviews)</li>
									<li>🔵 Many more...</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<hr class="my-8 border-t-2 border-slate-300" />

				<ul class="mt-8 max-w-2xl space-y-2 text-gray-600">
					<h2 class="space-grotesk mx-auto my-8 text-2xl font-bold tracking-tight text-gray-900">
						The <span class="underline decoration-indigo-600 decoration-wavy underline-offset-8"
							>perfect</span
						> day looks like...
					</h2>
					<li class="flex gap-x-3">
						<svg
							class="mt-1 h-5 w-5 flex-none text-indigo-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
						<span
							><strong class="font-semibold text-gray-900">Programming.</strong> Building
							applications gives me energy. <span class="text-xl">⚡️</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<svg
							class="mt-1 h-5 w-5 flex-none text-indigo-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
						<span
							><strong class="font-semibold text-gray-900">Reading in Spanish.</strong> Best way to
							improve overall comprehension. <span class="text-xl">📈</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<svg
							class="mt-1 h-5 w-5 flex-none text-indigo-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
						<span
							><strong class="font-semibold text-gray-900">Barbecuing.</strong> Experimenting with
							new recipies. <span class="text-xl">🔬</span></span
						>
					</li>
				</ul>

				<hr class="my-8 border-t-2 border-slate-300" />

				<h2 class="space-grotesk mt-8 text-2xl font-bold tracking-tight text-gray-900">
					Notes on Spanish
				</h2>
				<p class="mt-6">
					The Spanish language has been many things to me. It has been a teacher, teaching me <span
						class="caveat text-2xl font-bold text-indigo-500">dedication</span
					>,
					<span class="caveat text-2xl font-bold text-indigo-500">patience</span>, and
					<span class="caveat text-2xl font-bold text-indigo-500">discipline</span>. It has also
					been a vehicle for self-confidence. And after non-stop intense study, Spanish is now a
					part of my identity. I've spent the last
					<span class="font-bold text-indigo-500">6+ years</span>
					living among the Latino community, taking the opportunity to listen, learn and eventually gain
					a deep understanding. <br /><br /> I've integrated many positive aspects of the Latin
					American lifestyle into my own life, with the most important lesson at the top of mind -
					<strong
						class="bg-gradient-to-b from-pink-600 via-red-600 to-fuchsia-700 bg-clip-text text-xl font-black text-transparent"
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
									bgColor={'hsl(227, 66%, 55%)'}
									bgDepthColor={'hsl(227, 66%, 25%)'}
								/>
							</AccordionTrigger>
							<AccordionContent
								class="mt-2 rounded-md border-[3px] border-dashed border-indigo-400 p-4"
							>
								<p class="my-4 text-lg font-medium text-black">
									I was challenged to read 1 million words in Spanish to enhance my overall literacy
									and significantly grow my vocabulary. The complete Harry Potter series totals 1.1
									million words. <span class="font-bold text-indigo-500"
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
