<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	let isHoveredLS: boolean = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div class="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-24">
	<img src="logo-ls.png" class="mx-auto w-3/4 md:w-1/3 my-4" alt="" />
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl glow-red space-grotesk">
			Core Curriculum Graduate
		</h2>
	</div>
	<dl class="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
		<div class="flex flex-col">
			<dt class="order-2 mt-2 text-lg font-medium leading-6 text-red-400">Months</dt>
			<dd class="order-1 text-5xl font-bold tracking-tight text-red-50 glow-red">27</dd>
		</div>
		<div class="mt-10 flex flex-col sm:mt-0">
			<dt class="order-2 mt-2 text-lg font-medium leading-6 text-red-400">Study Hours</dt>
			<dd class="order-1 text-5xl font-bold tracking-tight text-red-50 glow-red">935</dd>
		</div>
		<div class="mt-10 flex flex-col sm:mt-0">
			<dt class="order-2 mt-2 text-lg font-medium leading-6 text-red-400">Assessments</dt>
			<dd class="order-1 text-5xl font-bold tracking-tight text-red-50 glow-red">13</dd>
		</div>
	</dl>

	<!-- Reflection on LS -->
	<div
		onmouseover={() => (isHoveredLS = true)}
		onmouseout={() => (isHoveredLS = false)}
		class="bg-white mt-8 lg:mx-48 px-6 py-8 rounded-md bg-gradient-to-b from-neutral-100 to-neutral-300 hover:outline-dotted hover:outline-4 outline-red-400 outline-offset-4 glow-box-red"
	>
		<h2 class="mt-4 text-2xl font-bold tracking-tight text-gray-900 space-grotesk">
			Notes on Launch School
		</h2>
		<p class="my-6 text-gray-600">
			Launch School was one of the hardest things I have ever done. It was also one of the most
			rewarding. During my time at Launch School, I learned much more than syntax and semantics, I
			learned attention to detail and acquired a procedural mindset.
			<br /><br />
			The core curriculum begins with first principles, which is by no means an attractive way to start,
			but it highlights the seriousness of the program. A complete understanding of the fundamentals
			is required before touching higher-level abstractions, and this is what makes the core curriculum
			so special.
			<span class="text-xl" class:hithere={isHoveredLS}>🎉</span>
		</p>
		<Button
			text={'View Curriculum'}
			href={'https://launchschool.com/courses'}
			targetBlank={true}
			bgColor={'hsl(349, 98%, 58%)'}
			bgDepthColor={'hsl(340, 97%, 38%)'}
		/>
	</div>
</div>
