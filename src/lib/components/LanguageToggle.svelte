<script lang="ts">
	import { language, languageReady, setLanguage } from '$lib/i18n';
	const target = $derived($language === 'en' ? 'es' : 'en');
	const label = $derived(target === 'es' ? 'Cambiar a español' : 'Switch to English');
</script>

<button
	type="button"
	class="icon-button language-toggle"
	data-language={$language}
	lang={target}
	aria-label={label}
	title={label}
	disabled={!$languageReady}
	onclick={() => setLanguage(target)}
>
	<span class="toggle-scene language-scene" aria-hidden="true">
		<svg
			class="language-globe"
			viewBox="0 0 74 30"
			fill="none"
			stroke="currentColor"
			stroke-width=".75"
			focusable="false"
		>
			<g class="globe-latitudes">
				<circle cx="37" cy="15" r="26" />
				<path d="M11 15h52M13 5Q37 13 61 5M13 25Q37 17 61 25" />
			</g>
			<g class="globe-meridians globe-meridians-en">
				<path d="M37-11C13-8 13 38 37 41M37-11C45-8 45 38 37 41M37-11C69-6 69 36 37 41" />
			</g>
			<g class="globe-meridians globe-meridians-es">
				<path d="M37-11C5-6 5 36 37 41M37-11C29-8 29 38 37 41M37-11C61-8 61 38 37 41" />
			</g>
		</svg>
	</span>
	<span class="language-label language-label-en" aria-hidden="true">EN</span>
	<span class="language-label language-label-es" aria-hidden="true">ES</span>
	<span class="toggle-thumb-position language-thumb-position" aria-hidden="true">
		<span class="toggle-thumb language-orbit">
			<span class="language-en">EN</span>
			<span class="language-es">ES</span>
		</span>
	</span>
</button>
