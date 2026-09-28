<script lang="ts">
	import { copy } from '$lib/i18n';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<footer class="site-footer shell">
	<div>
		<a href="#top" class="wordmark"
			><img src="/favicon-blender.png" alt="" width="24" height="24" /><span>Hunter Stevens.</span
			></a
		>
		<p class="mt-3">© {new Date().getFullYear()} {$copy['footer.copyright']}</p>
	</div>
	<div class="footer-links">
		<a href="https://github.com/diamondalltheway" target="_blank" rel="noreferrer">GitHub ↗</a><a
			href="https://linkedin.com/in/hunterstevens"
			target="_blank"
			rel="noreferrer">LinkedIn ↗</a
		><ThemeToggle /><LanguageToggle />
	</div>
</footer>
