<script>
	import { blur } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';

	let mobileOpen = $state(false);

	const navItems = [
		{ href: '#tech', text: 'Technologies' },
		{ href: '#open-source', text: 'Open Source' },
		{ href: '#products', text: 'Products' },
		{ href: '#contact', text: 'Contact' },
		{ href: '#favorites', text: 'Favorites' },
	];
</script>

<nav class="relative m-4 flex items-center justify-center">
	<div
		transition:blur={{ duration: 2000 }}
		class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
	>
		<div class="flex w-full items-center justify-between md:w-auto">
			<div class="-mr-2 flex items-center md:hidden">
				<button
					onclick={() => (mobileOpen = !mobileOpen)}
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-200 focus:text-gray-500 focus:outline-none"
				></button>
			</div>
		</div>

		<ul
			class="flex rounded-full bg-white/90 px-2 text-sm font-bold text-indigo-500 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
		>
			<li class="relative flex items-center px-1 py-1 transition hover:text-indigo-700">
				Native: <span class="mx-1 text-xl">🇺🇸</span>
			</li>
			<li class="relative flex items-center px-1 py-1 transition hover:text-indigo-700">
				C1: <span class="mx-1 text-xl">🇪🇸</span>
			</li>
		</ul>
	</div>

	<nav class="pointer-events-auto hidden md:block">
		<ul
			class="flex rounded-full bg-white/90 px-3 text-sm font-bold text-indigo-500 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
		>
			{#each navItems as { href, text }}
				<li>
					<a
						class="hover:motion-preset-expand hover:motion-preset-confetti relative block px-3 py-2 transition hover:text-indigo-700"
						{href}
					>
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div
		transition:blur={{ duration: 2000 }}
		class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
	>
		<a
			href="https://github.com/diamondalltheway"
			target="_blank"
			class="ml-6 text-gray-600 hover:text-gray-700"
		>
			<svg
				class="mx-6 h-8 w-8 rounded-full bg-indigo-200 text-indigo-500"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					fill-rule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		<span class="inline-flex rounded-md">
			<Button
				text={'Contact'}
				href={'#contact'}
				targetBlank={false}
				bgColor={'hsl(227, 66%, 55%)'}
				bgDepthColor={'hsl(227, 66%, 25%)'}
			/>
		</span>
	</div>
</nav>
