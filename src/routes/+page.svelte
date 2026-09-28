<script lang="ts">
	import { copy } from '$lib/i18n';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Letter from './Letter.svelte';
	import TechStack from './TechStack.svelte';
	import Products from './Products.svelte';
	import LaunchSchool from './LaunchSchool.svelte';
	import Contact from './Contact.svelte';
	import Favorites from './Favorites.svelte';
	import Footer from './Footer.svelte';
	import Testimonials from './Testimonials.svelte';
	import OpenSource from './OpenSource.svelte';
</script>

<a href="#main-content" class="skip-link">{$copy['navigation.skip']}</a>
<div class="portfolio">
	<Header />
	<main id="main-content">
		<Hero />
		<Testimonials />
		<Letter />
		<TechStack />
		<OpenSource />
		<Products />
		<LaunchSchool />
		<Favorites />
		<Contact />
	</main>
	<Footer />
</div>
