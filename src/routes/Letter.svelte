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
					always my first choice. The developer experience is excellent and it's a dream to use.
					<span class="italic">Rich Harris</span>
					has been a big influence on the way I think about building applications. I admire his first-principles
					thinking and appreciate everything he is doing to push the framework forward.
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
									<li>🔵 Fireship</li>
									<li>🔵 Rich Harris (interviews)</li>
									<li>🔵 Many more...</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<hr class="my-8 border-t-2 border-slate-800" />

				<ul class="mt-8 max-w-2xl space-y-2 text-gray-600">
					<h2 class="space-grotesk mx-auto my-8 text-2xl font-bold tracking-tight text-gray-900">
						The <span class="underline decoration-indigo-600 decoration-wavy underline-offset-8"
							>perfect</span
						> day looks like...
					</h2>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-gray-900">Programming.</strong> Building
							applications gives me energy. <span class="text-xl">⚡️</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-gray-900">Reading in Spanish.</strong> Best way to
							improve overall comprehension. <span class="text-xl">📈</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-gray-900">Barbecuing.</strong> Experimenting with
							new recipies. <span class="text-xl">🔬</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-gray-900">Watching UFC.</strong> Enjoying pure
							competition. <span class="text-xl">🥊 </span></span
						>
					</li>
				</ul>

				<hr class="my-8 border-t-2 border-neutral-800" />

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
					<span class="font-bold text-indigo-500">7+ years</span>
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

	/* Ultra-realistic high-definition parchment texture */
	.glow-box {
		/* Rich warm brown parchment palette */
		--parchment-cream: #e5d9c3;
		--parchment-base: #d1c4a9;
		--parchment-mid: #c4b594;
		--parchment-tan: #b8a682;
		--parchment-brown: #a89570;
		--parchment-dark: #927f5c;
		--parchment-deep: #7a6a4a;

		background:
			/* Ultra-fine grain - high frequency paper fiber texture */
			url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ultrafine'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ultrafine)'/%3E%3C/svg%3E"),
			/* Medium grain layer - visible texture */
				url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='medgrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23medgrain)'/%3E%3C/svg%3E"),
			/* Coarse organic variation */
				url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='coarse'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.015' numOctaves='4' seed='8'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23coarse)'/%3E%3C/svg%3E"),
			/* Sharp horizontal fiber lines - primary grain direction */
				repeating-linear-gradient(
					1deg,
					transparent 0px,
					rgba(100, 72, 44, 0.06) 0.5px,
					transparent 1px,
					transparent 2px
				),
			/* Secondary fiber lines - perpendicular */
				repeating-linear-gradient(
					89deg,
					transparent 0px,
					rgba(90, 65, 40, 0.035) 0.5px,
					transparent 1px,
					transparent 3px
				),
			/* Tertiary diagonal fibers - adds complexity */
				repeating-linear-gradient(
					33deg,
					transparent 0px,
					rgba(85, 60, 38, 0.02) 0.5px,
					transparent 1px,
					transparent 5px
				),
			/* Sharp foxing spots - age marks with defined edges */
				radial-gradient(
					ellipse 6px 5px at 12% 18%,
					rgba(120, 85, 50, 0.18) 0%,
					rgba(110, 78, 45, 0.08) 60%,
					transparent 100%
				),
			radial-gradient(
				ellipse 4px 5px at 8% 42%,
				rgba(115, 82, 48, 0.15) 0%,
				rgba(105, 75, 42, 0.06) 65%,
				transparent 100%
			),
			radial-gradient(
				ellipse 5px 4px at 18% 71%,
				rgba(118, 84, 50, 0.14) 0%,
				rgba(108, 76, 44, 0.05) 60%,
				transparent 100%
			),
			radial-gradient(ellipse 3px 4px at 5% 89%, rgba(112, 80, 46, 0.12) 0%, transparent 100%),
			radial-gradient(
				ellipse 7px 6px at 85% 15%,
				rgba(122, 88, 52, 0.16) 0%,
				rgba(112, 80, 46, 0.07) 55%,
				transparent 100%
			),
			radial-gradient(ellipse 4px 3px at 92% 38%, rgba(116, 83, 49, 0.13) 0%, transparent 100%),
			radial-gradient(
				ellipse 5px 6px at 88% 67%,
				rgba(120, 86, 51, 0.15) 0%,
				rgba(110, 78, 45, 0.06) 60%,
				transparent 100%
			),
			radial-gradient(ellipse 6px 4px at 78% 88%, rgba(118, 84, 50, 0.14) 0%, transparent 100%),
			radial-gradient(ellipse 3px 3px at 35% 8%, rgba(114, 81, 47, 0.11) 0%, transparent 100%),
			radial-gradient(ellipse 4px 5px at 62% 5%, rgba(117, 83, 49, 0.13) 0%, transparent 100%),
			radial-gradient(ellipse 5px 4px at 45% 92%, rgba(119, 85, 50, 0.12) 0%, transparent 100%),
			radial-gradient(ellipse 4px 4px at 28% 35%, rgba(113, 80, 46, 0.1) 0%, transparent 100%),
			radial-gradient(ellipse 3px 4px at 72% 28%, rgba(116, 82, 48, 0.11) 0%, transparent 100%),
			radial-gradient(ellipse 5px 3px at 55% 62%, rgba(115, 81, 47, 0.09) 0%, transparent 100%),
			radial-gradient(ellipse 4px 5px at 38% 78%, rgba(118, 84, 49, 0.12) 0%, transparent 100%),
			radial-gradient(ellipse 3px 3px at 82% 52%, rgba(114, 80, 46, 0.1) 0%, transparent 100%),
			/* Tiny specks and dust particles */
				radial-gradient(circle 1px at 15% 33%, rgba(95, 68, 40, 0.2) 0%, transparent 100%),
			radial-gradient(circle 1px at 67% 19%, rgba(92, 65, 38, 0.18) 0%, transparent 100%),
			radial-gradient(circle 1px at 43% 44%, rgba(98, 70, 42, 0.15) 0%, transparent 100%),
			radial-gradient(circle 1px at 89% 71%, rgba(94, 67, 39, 0.17) 0%, transparent 100%),
			radial-gradient(circle 1px at 22% 86%, rgba(96, 69, 41, 0.16) 0%, transparent 100%),
			radial-gradient(circle 1.5px at 76% 47%, rgba(90, 64, 37, 0.14) 0%, transparent 100%),
			radial-gradient(circle 1px at 51% 73%, rgba(93, 66, 39, 0.15) 0%, transparent 100%),
			radial-gradient(circle 1.5px at 33% 57%, rgba(97, 70, 41, 0.13) 0%, transparent 100%),
			/* Large tonal variations - handling wear zones */
				radial-gradient(ellipse 45% 40% at 18% 28%, rgba(145, 115, 78, 0.14) 0%, transparent 65%),
			radial-gradient(ellipse 38% 45% at 78% 68%, rgba(140, 110, 74, 0.12) 0%, transparent 60%),
			radial-gradient(ellipse 32% 28% at 55% 12%, rgba(138, 108, 72, 0.09) 0%, transparent 55%),
			radial-gradient(ellipse 28% 35% at 88% 22%, rgba(142, 112, 76, 0.1) 0%, transparent 50%),
			radial-gradient(ellipse 40% 25% at 12% 78%, rgba(136, 106, 70, 0.11) 0%, transparent 58%),
			radial-gradient(ellipse 35% 30% at 65% 85%, rgba(144, 114, 77, 0.1) 0%, transparent 55%),
			/* Subtle center luminosity */
				radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255, 252, 245, 0.06) 0%, transparent 65%),
			/* Strong vignette - darkened aged edges */
				radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(90, 65, 42, 0.15) 100%),
			/* Crisp edge shadows */
				linear-gradient(
					90deg,
					rgba(70, 50, 32, 0.12) 0%,
					transparent 3%,
					transparent 97%,
					rgba(70, 50, 32, 0.12) 100%
				),
			linear-gradient(
				180deg,
				rgba(65, 48, 30, 0.1) 0%,
				transparent 2.5%,
				transparent 97.5%,
				rgba(75, 55, 35, 0.14) 100%
			),
			/* Rich base gradient */
				linear-gradient(
					172deg,
					var(--parchment-cream) 0%,
					var(--parchment-base) 12%,
					var(--parchment-mid) 35%,
					var(--parchment-tan) 55%,
					var(--parchment-mid) 75%,
					var(--parchment-brown) 92%,
					var(--parchment-dark) 100%
				) !important;

		background-blend-mode:
			overlay,
			/* ultra-fine grain */ soft-light,
			/* medium grain */ soft-light,
			/* coarse organic */ normal,
			/* horizontal fibers */ normal,
			/* perpendicular fibers */ normal,
			/* diagonal fibers */ normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			/* foxing spots */ normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			/* dust specks */ normal,
			normal,
			normal,
			normal,
			normal,
			normal,
			/* tonal variations */ overlay,
			/* center luminosity */ multiply,
			/* vignette */ normal,
			/* edge shadow h */ normal,
			/* edge shadow v */ normal; /* base gradient */

		/* Refined multi-layer shadow system */
		box-shadow:
			/* Inner surface depth */
			inset 0 0 120px rgba(90, 65, 42, 0.12),
			inset 0 0 60px rgba(80, 58, 38, 0.08),
			inset 0 0 20px rgba(70, 50, 32, 0.05),
			inset 0 1px 2px rgba(60, 42, 28, 0.08),
			inset 0 -1px 2px rgba(50, 36, 24, 0.06),
			inset 1px 0 2px rgba(55, 40, 26, 0.04),
			inset -1px 0 2px rgba(55, 40, 26, 0.04),
			/* Outer depth - realistic paper lift */ 0 0.5px 1px rgba(0, 0, 0, 0.06),
			0 1px 2px rgba(0, 0, 0, 0.06),
			0 2px 4px rgba(0, 0, 0, 0.05),
			0 4px 8px rgba(0, 0, 0, 0.04),
			0 8px 16px rgba(0, 0, 0, 0.03),
			0 16px 32px rgba(0, 0, 0, 0.02);

		/* Weathered border with depth */
		border: 1px solid var(--parchment-brown);
		border-top-color: var(--parchment-tan);
		border-left-color: var(--parchment-tan);
		border-right-color: var(--parchment-dark);
		border-bottom-color: var(--parchment-dark);

		/* Enhanced color treatment */
		filter: contrast(1.04) saturate(0.85) sepia(0.08);

		position: relative;
		overflow: hidden;
	}

	/* Natural creases and fold marks - NOT centered */
	.glow-box::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		background:
			/* Diagonal crease - top left to lower right (like paper was folded at angle) */
			linear-gradient(
				32deg,
				transparent 18%,
				rgba(75, 55, 35, 0.025) 18.3%,
				rgba(55, 40, 25, 0.06) 18.5%,
				rgba(85, 62, 40, 0.03) 18.7%,
				rgba(100, 75, 50, 0.015) 19%,
				transparent 19.5%
			),
			/* Horizontal crease near top - envelope fold */
				linear-gradient(
					180deg,
					transparent 14%,
					rgba(70, 52, 33, 0.02) 14.2%,
					rgba(50, 38, 24, 0.055) 14.4%,
					rgba(80, 60, 38, 0.025) 14.6%,
					transparent 15%
				),
			/* Subtle diagonal wrinkle - lower portion */
				linear-gradient(
					155deg,
					transparent 72%,
					rgba(72, 54, 34, 0.02) 72.2%,
					rgba(52, 40, 26, 0.045) 72.4%,
					rgba(78, 58, 37, 0.02) 72.6%,
					transparent 73%
				),
			/* Small crinkle near right edge */
				linear-gradient(
					95deg,
					transparent 85%,
					rgba(68, 50, 32, 0.03) 85.5%,
					rgba(48, 36, 23, 0.05) 86%,
					rgba(75, 55, 35, 0.025) 86.5%,
					transparent 87.5%
				),
			/* Corner dog-ear shadow - top right */
				radial-gradient(
					ellipse 45px 40px at 100% 0%,
					rgba(85, 62, 40, 0.18) 0%,
					rgba(75, 55, 35, 0.08) 50%,
					transparent 75%
				),
			/* Corner wear - top left */
				radial-gradient(
					ellipse 55px 50px at 0% 0%,
					rgba(95, 70, 45, 0.15) 0%,
					rgba(85, 62, 40, 0.06) 55%,
					transparent 80%
				),
			/* Corner wear - bottom left */
				radial-gradient(
					ellipse 50px 45px at 0% 100%,
					rgba(90, 66, 42, 0.14) 0%,
					rgba(80, 58, 38, 0.05) 50%,
					transparent 75%
				),
			/* Corner wear - bottom right (heaviest - most handled) */
				radial-gradient(
					ellipse 70px 60px at 100% 100%,
					rgba(100, 75, 48, 0.2) 0%,
					rgba(90, 66, 42, 0.1) 45%,
					rgba(80, 58, 38, 0.04) 65%,
					transparent 85%
				),
			/* Sharp edge darkening */
				linear-gradient(
					90deg,
					rgba(65, 48, 30, 0.14) 0%,
					rgba(75, 55, 35, 0.06) 2%,
					transparent 6%,
					transparent 94%,
					rgba(75, 55, 35, 0.06) 98%,
					rgba(65, 48, 30, 0.14) 100%
				),
			linear-gradient(
				180deg,
				rgba(60, 44, 28, 0.12) 0%,
				rgba(70, 52, 33, 0.05) 1.5%,
				transparent 5%,
				transparent 95%,
				rgba(80, 60, 38, 0.08) 98.5%,
				rgba(70, 52, 33, 0.16) 100%
			);
	}

	/* Detailed aging marks and stains */
	.glow-box::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			/* Water stain ring - off-center bottom area */
			radial-gradient(
				ellipse 90px 75px at 72% 82%,
				transparent 35%,
				rgba(130, 100, 65, 0.045) 42%,
				rgba(115, 88, 55, 0.08) 52%,
				rgba(105, 80, 50, 0.06) 62%,
				rgba(120, 92, 58, 0.03) 72%,
				transparent 82%
			),
			/* Secondary water mark - upper left */
				radial-gradient(
					ellipse 55px 45px at 18% 24%,
					transparent 40%,
					rgba(125, 95, 60, 0.035) 50%,
					rgba(110, 82, 52, 0.055) 60%,
					rgba(120, 90, 57, 0.025) 70%,
					transparent 80%
				),
			/* Ink bleed spots with sharp edges */
				radial-gradient(
					ellipse 22px 18px at 32% 48%,
					rgba(88, 65, 40, 0.08) 0%,
					rgba(78, 58, 36, 0.04) 60%,
					transparent 100%
				),
			radial-gradient(
				ellipse 18px 22px at 68% 32%,
				rgba(85, 62, 38, 0.07) 0%,
				rgba(75, 55, 34, 0.035) 55%,
				transparent 100%
			),
			radial-gradient(ellipse 15px 12px at 48% 72%, rgba(82, 60, 37, 0.06) 0%, transparent 100%),
			radial-gradient(
				ellipse 20px 16px at 85% 58%,
				rgba(86, 63, 39, 0.065) 0%,
				rgba(76, 56, 35, 0.03) 60%,
				transparent 100%
			),
			/* Light scratches / surface abrasions */
				linear-gradient(
					78deg,
					transparent 25%,
					rgba(100, 75, 48, 0.015) 25.5%,
					transparent 26%,
					transparent 58%,
					rgba(95, 70, 45, 0.012) 58.3%,
					transparent 58.8%
				),
			linear-gradient(
				112deg,
				transparent 42%,
				rgba(105, 78, 50, 0.018) 42.4%,
				transparent 42.9%,
				transparent 71%,
				rgba(98, 72, 46, 0.014) 71.3%,
				transparent 71.7%
			),
			/* Discoloration patches */
				radial-gradient(ellipse 80px 60px at 25% 65%, rgba(135, 105, 70, 0.06) 0%, transparent 70%),
			radial-gradient(ellipse 70px 55px at 75% 45%, rgba(130, 100, 66, 0.05) 0%, transparent 65%);
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
