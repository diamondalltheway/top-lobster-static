<script lang="ts">
	import { copy } from '$lib/i18n';
</script>

<section id="top" class="hero shell" aria-labelledby="hero-title">
	<div class="hero-copy">
		<a href="#products" class="announcement"
			><span class="status-dot"></span>
			{$copy['hero.announcement']}
			<span aria-hidden="true">›</span></a
		>
		<h1 id="hero-title" class="editorial-title">
			{$copy['hero.title']}<br /><span>{$copy['hero.titleAccent']}</span>
		</h1>
		<p class="hero-description">
			{$copy['hero.description']}
		</p>
		<div class="hero-actions">
			<a href="#products" class="surface-button"
				>{$copy['hero.explore']} <span aria-hidden="true">↗</span></a
			>
			<a href="#about" class="text-link"
				>{$copy['about.eyebrow']} <span aria-hidden="true">›</span></a
			>
		</div>
		<div class="hero-meta">
			<span
				>{$copy['hero.currently']}
				<a href="https://strucalc.com/" target="_blank" rel="noreferrer" class="hover:underline"
					><strong>StruCalc</strong></a
				></span
			><span class="meta-divider"></span><span
				>{$copy['hero.english']} <span class="meta-level">{$copy['hero.native']}</span>
				{$copy['hero.spanish']}
				<span class="meta-level">C1</span></span
			>
		</div>
	</div>
	<div class="hero-visual">
		<div class="portrait-light" aria-hidden="true"></div>
		<div class="portrait-frame">
			<img
				class="portrait-main"
				src="/headshot.jpeg"
				alt="Hunter Stevens"
				width="640"
				height="800"
				fetchpriority="high"
			/>
			<img class="portrait-alternate" src="/hunter-coco.jpg" alt="" width="640" height="800" />
			<div class="portrait-caption">
				<span>{$copy['hero.portraitCaption']}</span>
			</div>
		</div>
		<div class="portrait-note">
			<span class="status-dot"></span>
			{$copy['hero.portraitNote']}
		</div>
	</div>
</section>

<div class="credentials shell" aria-label={$copy['credentials.label']}>
	<p>{$copy['credentials.business']}<br /><span>{$copy['credentials.curiosity']}</span></p>
	<a href="https://www.uh.edu/" target="_blank" rel="noreferrer"
		><img
			class="credential-logo"
			src="/logos/university-of-houston.svg"
			alt=""
			width="36"
			height="36"
		/><span>University of Houston<small>{$copy['credentials.degree']}</small></span></a
	>
	<a href="https://launchschool.com/courses" target="_blank" rel="noreferrer"
		><img
			class="credential-logo"
			src="/logos/launch-school.svg"
			alt=""
			width="36"
			height="36"
		/><span>Launch School<small>{$copy['credentials.graduate']}</small></span></a
	>
	<a href="https://www.youtube.com/@HunterScript/featured" target="_blank" rel="noreferrer"
		><img class="credential-logo" src="/logos/youtube.svg" alt="" width="36" height="36" /><span
			>@HunterScript<small>{$copy['credentials.youtube']}</small></span
		></a
	>
</div>
