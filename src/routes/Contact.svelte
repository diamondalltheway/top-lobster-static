<script lang="ts">
	import { copy } from '$lib/i18n';
</script>

<section id="contact" class="contact-section shell" aria-labelledby="contact-title">
	<p class="eyebrow">{$copy['contact.eyebrow']}</p>
	<h2 id="contact-title" class="editorial-title">
		{$copy['contact.title']}<br /><span>{$copy['contact.titleAccent']}</span>
	</h2>
	<p>{$copy['contact.description']}</p>
	<a href="mailto:hunter@toplobster.io" class="surface-button"
		>hunter@toplobster.io <span aria-hidden="true">↗</span></a
	>
	<div class="contact-details">
		<span><span class="status-dot"></span> {$copy['contact.availability']}</span>
		<a href="https://github.com/diamondalltheway" target="_blank" rel="noreferrer">GitHub ↗</a>
		<a href="https://linkedin.com/in/hunterstevens" target="_blank" rel="noreferrer">LinkedIn ↗</a>
	</div>
</section>
