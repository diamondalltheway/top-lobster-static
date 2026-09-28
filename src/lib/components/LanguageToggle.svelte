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
		<svg class="language-map" viewBox="0 0 74 30" fill="none" focusable="false">
			<g class="map-lines" stroke="currentColor" stroke-width=".7">
				<ellipse cx="37" cy="15" rx="29" ry="22" /><ellipse cx="37" cy="15" rx="14" ry="22" />
				<path d="M0 15h74M4 5Q37 17 70 5M4 25Q37 13 70 25" />
			</g>
			<path class="map-route" d="M14 23Q27 3 58 10" stroke="currentColor" stroke-dasharray="2 3" />
			<path class="map-plane" d="m34 13 10-4-4 10-2-4-4-2Z" fill="currentColor" />
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
