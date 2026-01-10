<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import Favorite from '$lib/components/Favorite.svelte';
	import { favoritesConfig } from '$lib/config/favorites';
</script>

<div class="mx-auto w-11/12 text-white md:w-3/5" id="favorites">
	<h2
		class="glow-green space-grotesk text-center text-3xl font-extrabold leading-9 text-green-400 sm:text-4xl sm:leading-10"
	>
		Favorites
	</h2>
	<Accordion.Root>
		{#each favoritesConfig.categories as category}
			<Accordion.Item value={category.id}>
				<Accordion.Trigger class="hover:no-underline">
					<span class="text-lg font-medium {category.color}">
						{category.icon} {category.title}
					</span>
				</Accordion.Trigger>
				<Accordion.Content>
					<dd class="p-2">
						<ol class="ml-6 list-decimal text-base leading-6 text-gray-400">
							{#each category.items as item}
								<Favorite
									itemIcon={category.itemIcon}
									name={item.name}
									subtitleIcon={category.subtitleIcon}
									subtitle={item.subtitle}
								/>
							{/each}
						</ol>
					</dd>
				</Accordion.Content>
			</Accordion.Item>
		{/each}

		<!-- GOAT Section -->
		<Accordion.Item value="goat">
			<Accordion.Trigger class="hover:no-underline">
				<span class="text-lg font-medium {favoritesConfig.goat.color}">
					{favoritesConfig.goat.icon} {favoritesConfig.goat.title}
				</span>
			</Accordion.Trigger>
			<Accordion.Content>
				<dd class="mt-2 pr-12">
					<p class="ml-4 text-xl font-bold text-gray-200">{favoritesConfig.goat.content}</p>
				</dd>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
