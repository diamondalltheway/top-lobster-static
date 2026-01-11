<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import VideoIcon from '$lib/svgs/Video.svelte';
	import BadgeIcon from '$lib/svgs/Badge.svelte';
	import GraduationIcon from '$lib/svgs/Graduation.svelte';
	import BriefcaseIcon from '$lib/svgs/Briefcase.svelte';
	import WordsFadeIn from '$lib/components/WordsFadePullUp.svelte';
	import AnimatedGradientText from '$lib/components/AnimatedGradientText.svelte';
	import { cn } from '$lib/utils';
	let image = '/hunter-coco.jpg';
	let primaryTitleIsReady = $state(false);
	let secondaryTitleIsReady = $state(false);

	onMount(() => {
		setTimeout(() => {
			primaryTitleIsReady = true;
		}, 500);
		setTimeout(() => {
			secondaryTitleIsReady = true;
		}, 1200);
	});
</script>

<div class="mx-auto h-[calc(100vh-10rem)] max-w-screen-xl px-2 sm:px-6 md:mt-16">
	<div class="text-center">
		<div class="group relative mx-auto aspect-square w-3/4 md:w-1/3">
			<div
				transition:blur={{ delay: 200, duration: 600 }}
				class="image-wrapper absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
			>
				<div class="absolute inset-3 overflow-hidden rounded-full">
					<img src="/headshot.jpeg" alt="" class="h-full w-full object-cover" />
				</div>
			</div>

			<div
				transition:blur={{ delay: 200, duration: 600 }}
				class="image-wrapper absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<div class="absolute inset-3 overflow-hidden rounded-full">
					<img src="/hunter-coco.jpg" alt="" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>

		{#if primaryTitleIsReady}
			<WordsFadeIn
				words="Hunter Stevens"
				class="glow space-grotesk mt-6 text-4xl font-extrabold leading-10 tracking-tight text-gray-100 drop-shadow-lg sm:text-5xl sm:leading-none md:text-6xl"
			/>
		{/if}

		{#if secondaryTitleIsReady}
			<WordsFadeIn
				words="Software Engineer"
				class="glow space-grotesk mt-2 text-4xl font-extrabold leading-10 tracking-tight text-gray-100 drop-shadow-lg sm:text-5xl sm:leading-none md:text-6xl"
			/>
		{/if}

		<div
			class="mx-auto mt-3 max-w-md text-base text-neutral-600 sm:text-xl md:mt-5 md:max-w-3xl md:text-xl"
		>
			<div transition:blur={{ delay: 1500, duration: 500 }} class="flex justify-center gap-2">
				<BriefcaseIcon />
				<span
					class="bg-gradient-to-b from-slate-100 via-neutral-300 to-slate-600 bg-clip-text font-semibold text-transparent"
				>
					StruCalc (Software for Structural Engineering)
				</span>
			</div>

			<div transition:blur={{ delay: 2000, duration: 500 }} class="flex justify-center gap-2">
				<GraduationIcon />
				<a href="https://www.uh.edu/" target="_blank">
					<span
						class="bg-gradient-to-b from-slate-100 via-neutral-300 to-slate-600 bg-clip-text font-semibold text-transparent"
					>
						University of Houston <span class="hidden md:inline">(BBA in Marketing)</span>
					</span>
				</a>
				<br />
			</div>

			<div transition:blur={{ delay: 2500, duration: 500 }} class="flex justify-center gap-2">
				<BadgeIcon />
				<a href="https://launchschool.com/courses" target="_blank">
					<span
						class="bg-gradient-to-b from-slate-100 via-neutral-300 to-slate-600 bg-clip-text font-semibold text-transparent"
					>
						Launch School <span class="hidden md:inline">(Core Curriculum Grad)</span>
					</span>
				</a>
			</div>

			<div
				transition:blur={{ delay: 3000, duration: 500 }}
				class="mt-4 flex items-center justify-center gap-2"
			>
				<a href="https://www.youtube.com/@HunterScript/featured" target="_blank" class="my-3">
					<AnimatedGradientText
						class="flex items-center gap-2 rounded-xl bg-white/10 px-1.5 text-xl"
					>
						<span
							class={cn(
								`animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-xl text-transparent`
							)}
						>
							@HunterScript
						</span>
					</AnimatedGradientText>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.image-wrapper::before {
		content: '';
		position: absolute;
		top: -2px; /* Adjust based on desired offset */
		left: -2px; /* Adjust based on desired offset */
		width: calc(100% + 4px); /* Adjust based on desired offset */
		height: calc(100% + 4px); /* Adjust based on desired offset */
		border: 4px dashed #aaabef;
		border-radius: 50%;
		animation: spin 100s linear infinite;
	}

	.image-wrapper img {
		position: relative;
		z-index: 1;
	}
</style>
