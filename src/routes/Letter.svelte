<script lang="ts">
	import RichText from '$lib/components/RichText.svelte';
	import { copy } from '$lib/i18n';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from '$lib/components/ui/accordion';
	import Check from '$lib/svgs/Check.svelte';

	const goals = [
		{
			icon: '✅',
			text: 'about.goal1',
		},
		{
			icon: '✅',
			text: 'about.goal2',
		},
		{
			icon: '✅',
			text: 'about.goal3',
		},
		{
			icon: '✅',
			text: 'about.goal4',
		},
		{
			icon: '✅',
			text: 'about.goal5',
		},
		{
			icon: '✅',
			text: 'about.goal6',
		},
		{
			icon: '🔲',
			text: 'about.goal7',
		},
	] as const;
</script>

{#snippet typescript()}<span class="text-lg font-bold text-txt">TypeScript.</span>{/snippet}
{#snippet svelte()}<span class="text-lg font-bold text-txt">🥇 Svelte</span>{/snippet}
{#snippet richHarris()}<span class="italic">Rich Harris</span>{/snippet}
{#snippet react()}<span class="text-lg font-bold text-txt">🥈 React/Next.js</span>{/snippet}
{#snippet tailwind()}<span class="text-lg font-bold text-txt">Tailwind CSS</span>{/snippet}
{#snippet shadcn()}<span class="text-lg font-bold text-txt">Shadcn UI</span>{/snippet}
{#snippet perfect()}<span
		class="underline decoration-[hsl(15_62%_60%)] decoration-wavy underline-offset-8"
		>{$copy['about.perfect']}</span
	>{/snippet}
{#snippet dedication()}<span class="caveat text-2xl font-bold text-[hsl(15_62%_60%)]"
		>{$copy['about.dedication']}</span
	>{/snippet}
{#snippet patience()}<span class="caveat text-2xl font-bold text-[hsl(15_62%_60%)]"
		>{$copy['about.patience']}</span
	>{/snippet}
{#snippet discipline()}<span class="caveat text-2xl font-bold text-[hsl(15_62%_60%)]"
		>{$copy['about.discipline']}</span
	>{/snippet}
{#snippet years()}<span class="font-bold text-heading">{$copy['about.years']}</span>{/snippet}
{#snippet loveLife()}<strong class="text-xl font-black text-heading"
		>{$copy['about.loveLife']}</strong
	>{/snippet}

<section id="about" class="letter-panel" aria-labelledby="about-title">
	<div class="mx-auto max-w-3xl text-base leading-7 text-txt-secondary">
		<p class="eyebrow">{$copy['about.eyebrow']}</p>
		<h2
			id="about-title"
			class="space-grotesk mt-2 text-3xl font-bold tracking-tight text-txt sm:text-4xl"
		>
			{$copy['about.greeting']} <span>👋</span>
		</h2>
		<p class="mt-6 text-xl font-semibold leading-8">
			{$copy['about.intro']}
		</p>
		<div class="mt-10 max-w-2xl text-lg font-normal">
			<div>
				<p>
					<RichText text={$copy['about.typescript']} parts={{ typescript }} />

					<br /><br />

					<RichText text={$copy['about.frameworks']} parts={{ svelte, richHarris }} />
					<br /><br />
				</p>
				<p>
					<RichText text={$copy['about.react']} parts={{ react }} />
				</p>
				<br />

				<RichText text={$copy['about.tailwind']} parts={{ tailwind, shadcn }} />

				<br /><br />
				{$copy['about.finish']}

				<div class="flex justify-start">
					<Accordion type="single">
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="letter-disclosure">
								<span>{$copy['about.more']}</span>
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
									{$copy['about.go']}
									<br /><br />
									{$copy['about.podcasts']}
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
									<li>{$copy['about.interviews']}</li>
									<li>{$copy['about.manyMore']}</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<hr class="my-10 border-border-subtle" />

				<h3 class="space-grotesk mx-auto my-8 text-2xl font-bold tracking-tight text-txt">
					<RichText text={$copy['about.perfectDay']} parts={{ perfect }} />
				</h3>
				<ul class="mt-8 max-w-2xl space-y-3 text-txt-secondary">
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">{$copy['about.programming']}</strong>
							{$copy['about.programmingDetail']} <span class="text-xl">⚡️</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">{$copy['about.reading']}</strong>
							{$copy['about.readingDetail']} <span class="text-xl">📈</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">{$copy['about.barbecue']}</strong>
							{$copy['about.barbecueDetail']} <span class="text-xl">🔬</span></span
						>
					</li>
					<li class="flex gap-x-3">
						<Check />
						<span
							><strong class="font-semibold text-txt">{$copy['about.ufc']}</strong>
							{$copy['about.ufcDetail']} <span class="text-xl">🥊 </span></span
						>
					</li>
				</ul>

				<hr class="my-10 border-border-subtle" />

				<h3 class="space-grotesk mt-8 text-2xl font-bold tracking-tight text-txt">
					{$copy['about.spanishNotes']}
				</h3>
				<p class="mt-6">
					<RichText
						text={$copy['about.spanishIdentity']}
						parts={{ dedication, patience, discipline }}
					/>

					<br /><br />

					<RichText text={$copy['about.latinoCommunity']} parts={{ years }} /> <br /><br />
					<RichText text={$copy['about.latinLifestyle']} parts={{ loveLife }} />
					<span class="p-2 text-xl">❤️</span>

					<br /><br />
				</p>
				<div class="flex justify-start">
					<Accordion type="single">
						<AccordionItem value="goals" class="border-none">
							<AccordionTrigger class="letter-disclosure">
								<span>{$copy['about.spanishGoals']}</span>
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
									{$copy['about.challenge']}
									<span class="font-bold text-heading">{$copy['about.challengeAccepted']}</span>
								</p>
								<ul class="space-y-2">
									{#each goals as { icon, text }}
										<li class="mt-2 flex items-center gap-2 text-lg">
											<span>{icon}</span>
											<span>{$copy[text]}</span>
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
