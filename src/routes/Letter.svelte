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

	/* Ultra-realistic parchment texture effect */
	.glow-box {
		/* Warm brown parchment palette */
		--parchment-base: #d4c4a8;
		--parchment-light: #e8dcc8;
		--parchment-mid: #c9b896;
		--parchment-dark: #b8a584;
		--parchment-shadow: #a08968;
		--parchment-deep: #8b7355;

		background:
			/* Fine grain noise - simulates paper fiber texture */
			url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E"),
			/* Coarse texture overlay - larger scale variation */
			url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='coarse'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.02' numOctaves='3' seed='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23coarse)'/%3E%3C/svg%3E"),
			/* Horizontal fiber lines - animal skin grain direction */
			repeating-linear-gradient(
				2deg,
				transparent 0px,
				transparent 1px,
				rgba(120, 90, 60, 0.04) 1px,
				rgba(120, 90, 60, 0.04) 2px,
				transparent 2px,
				transparent 4px
			),
			/* Cross-hatched fibers for depth */
			repeating-linear-gradient(
				88deg,
				transparent 0px,
				transparent 2px,
				rgba(100, 75, 50, 0.025) 2px,
				rgba(100, 75, 50, 0.025) 3px,
				transparent 3px,
				transparent 6px
			),
			/* Diagonal stress lines - subtle creasing */
			repeating-linear-gradient(
				35deg,
				transparent 0px,
				transparent 80px,
				rgba(90, 70, 45, 0.015) 80px,
				rgba(90, 70, 45, 0.02) 81px,
				transparent 81px,
				transparent 200px
			),
			/* Foxing spots - age spots scattered across */
			radial-gradient(ellipse 8px 6px at 15% 25%, rgba(130, 95, 60, 0.12) 0%, transparent 100%),
			radial-gradient(ellipse 5px 7px at 78% 18%, rgba(115, 85, 55, 0.1) 0%, transparent 100%),
			radial-gradient(ellipse 6px 5px at 88% 42%, rgba(125, 90, 58, 0.08) 0%, transparent 100%),
			radial-gradient(ellipse 4px 4px at 25% 67%, rgba(120, 88, 55, 0.09) 0%, transparent 100%),
			radial-gradient(ellipse 7px 5px at 65% 78%, rgba(118, 86, 54, 0.11) 0%, transparent 100%),
			radial-gradient(ellipse 3px 4px at 42% 12%, rgba(122, 89, 56, 0.07) 0%, transparent 100%),
			radial-gradient(ellipse 5px 6px at 92% 85%, rgba(128, 92, 58, 0.1) 0%, transparent 100%),
			radial-gradient(ellipse 4px 3px at 8% 88%, rgba(116, 84, 52, 0.08) 0%, transparent 100%),
			/* Large tonal variations - areas of wear and handling */
			radial-gradient(ellipse 40% 35% at 20% 30%, rgba(160, 130, 95, 0.15) 0%, transparent 70%),
			radial-gradient(ellipse 35% 40% at 75% 65%, rgba(150, 120, 85, 0.12) 0%, transparent 65%),
			radial-gradient(ellipse 30% 25% at 50% 15%, rgba(145, 115, 80, 0.08) 0%, transparent 60%),
			radial-gradient(ellipse 25% 30% at 85% 20%, rgba(155, 125, 90, 0.1) 0%, transparent 55%),
			radial-gradient(ellipse 35% 20% at 15% 75%, rgba(148, 118, 83, 0.11) 0%, transparent 60%),
			/* Center highlight - slight translucency effect */
			radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 250, 240, 0.08) 0%, transparent 70%),
			/* Heavy vignette - aged darkened edges */
			radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(100, 75, 50, 0.12) 100%),
			/* Edge shadows - simulates curled/lifted edges */
			linear-gradient(90deg, rgba(80, 60, 40, 0.08) 0%, transparent 4%, transparent 96%, rgba(80, 60, 40, 0.08) 100%),
			linear-gradient(180deg, rgba(80, 60, 40, 0.06) 0%, transparent 3%, transparent 97%, rgba(80, 60, 40, 0.1) 100%),
			/* Base parchment gradient with color depth */
			linear-gradient(
				175deg,
				var(--parchment-light) 0%,
				var(--parchment-base) 15%,
				var(--parchment-mid) 50%,
				var(--parchment-base) 85%,
				var(--parchment-dark) 100%
			) !important;

		background-blend-mode:
			overlay,      /* fine grain */
			soft-light,   /* coarse texture */
			normal,       /* horizontal fibers */
			normal,       /* cross fibers */
			normal,       /* diagonal stress */
			normal, normal, normal, normal, normal, normal, normal, normal,  /* foxing spots */
			normal, normal, normal, normal, normal,  /* tonal variations */
			overlay,      /* center highlight */
			normal,       /* vignette */
			normal,       /* edge shadow horizontal */
			normal,       /* edge shadow vertical */
			normal;       /* base gradient */

		/* Multi-layer shadows for 3D depth and realism */
		box-shadow:
			/* Inner shadows - surface depth */
			inset 0 0 100px rgba(100, 75, 50, 0.1),
			inset 0 0 40px rgba(90, 65, 40, 0.08),
			inset 0 2px 4px rgba(80, 55, 35, 0.06),
			inset 0 -2px 4px rgba(60, 45, 30, 0.04),
			/* Outer shadows - lifted paper effect */
			0 1px 1px rgba(0, 0, 0, 0.04),
			0 2px 4px rgba(0, 0, 0, 0.06),
			0 4px 8px rgba(0, 0, 0, 0.06),
			0 8px 16px rgba(0, 0, 0, 0.05),
			0 16px 32px rgba(0, 0, 0, 0.04);

		/* Aged, weathered border */
		border: 1px solid var(--parchment-shadow);
		border-top-color: var(--parchment-mid);
		border-left-color: var(--parchment-mid);

		/* Subtle color adjustments for authenticity */
		filter: contrast(1.03) saturate(0.88) sepia(0.05);

		position: relative;
		overflow: hidden;
	}

	/* Worn edges and fold lines overlay */
	.glow-box::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		background:
			/* Vertical fold line - center crease */
			linear-gradient(
				90deg,
				transparent 49%,
				rgba(90, 70, 45, 0.03) 49.5%,
				rgba(70, 55, 35, 0.05) 50%,
				rgba(90, 70, 45, 0.03) 50.5%,
				transparent 51%
			),
			/* Horizontal fold line */
			linear-gradient(
				180deg,
				transparent 48%,
				rgba(85, 65, 42, 0.025) 49%,
				rgba(65, 50, 32, 0.04) 50%,
				rgba(85, 65, 42, 0.025) 51%,
				transparent 52%
			),
			/* Corner wear - top left */
			radial-gradient(ellipse 60px 50px at 0% 0%, rgba(100, 80, 55, 0.12) 0%, transparent 70%),
			/* Corner wear - top right */
			radial-gradient(ellipse 50px 60px at 100% 0%, rgba(95, 75, 50, 0.1) 0%, transparent 65%),
			/* Corner wear - bottom left */
			radial-gradient(ellipse 55px 45px at 0% 100%, rgba(90, 70, 48, 0.11) 0%, transparent 60%),
			/* Corner wear - bottom right */
			radial-gradient(ellipse 65px 55px at 100% 100%, rgba(105, 82, 55, 0.13) 0%, transparent 70%),
			/* Edge darkening all around */
			linear-gradient(90deg, rgba(80, 60, 40, 0.1) 0%, transparent 8%, transparent 92%, rgba(80, 60, 40, 0.1) 100%),
			linear-gradient(180deg, rgba(75, 55, 38, 0.08) 0%, transparent 6%, transparent 94%, rgba(85, 65, 45, 0.12) 100%);
	}

	/* Water stain and aging marks */
	.glow-box::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			/* Old water stain ring - bottom right area */
			radial-gradient(
				ellipse 100px 80px at 82% 75%,
				transparent 40%,
				rgba(140, 110, 70, 0.04) 50%,
				rgba(120, 90, 55, 0.07) 60%,
				rgba(100, 75, 45, 0.05) 70%,
				transparent 80%
			),
			/* Smaller water mark - upper area */
			radial-gradient(
				ellipse 50px 40px at 25% 20%,
				transparent 45%,
				rgba(130, 100, 65, 0.03) 55%,
				rgba(110, 85, 52, 0.05) 65%,
				transparent 75%
			),
			/* Ink absorption areas - darker spots */
			radial-gradient(ellipse 30px 25px at 35% 55%, rgba(95, 72, 45, 0.06) 0%, transparent 100%),
			radial-gradient(ellipse 25px 20px at 70% 35%, rgba(90, 68, 42, 0.05) 0%, transparent 100%),
			/* Slight discoloration streaks */
			linear-gradient(
				95deg,
				transparent 20%,
				rgba(120, 95, 65, 0.02) 30%,
				transparent 35%,
				rgba(115, 90, 60, 0.015) 60%,
				transparent 65%
			);
		opacity: 0.9;
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
