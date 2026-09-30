<script lang="ts">
  import { onMount } from 'svelte';
  import { isAnalyticsExcluded, setAnalyticsExcluded } from '$lib/analytics-opt-out';
  let lang = $state<'en' | 'es'>('en');
  let ready = $state(false);
  let excluded = $state(false);
  let result = $state<'saved' | 'session-only' | 'failed' | ''>('');
  const text = {
    en: {
      title: 'Exclude this browser from analytics',
      explanation: 'Confirm below to exclude future visits and client events from Vercel Web Analytics on this site in this browser.',
      scope: 'This preference applies only to this browser profile and this site’s origin. Set it again on each site, device, or new browser profile. Clearing site data removes the preference. Past analytics are unchanged.',
      active: 'This browser is excluded.', inactive: 'This browser is not excluded.',
      confirm: 'Exclude this browser', undo: 'Undo exclusion', home: 'Return to site',
      saved: 'Preference saved.', session: 'Storage is unavailable. Exclusion works for this open page and navigation, but will not survive a reload. Enable site storage and confirm again to save it.',
      failed: 'The browser could not remove the saved preference. Exclusion may still be active. Enable site storage and try again.',
      loading: 'Checking this browser…'
    },
    es: {
      title: 'Excluir este navegador de las estadísticas',
      explanation: 'Confirma abajo para excluir las futuras visitas y los eventos del navegador de Vercel Web Analytics en este sitio y en este navegador.',
      scope: 'Esta preferencia solo se aplica a este perfil de navegador y al origen de este sitio. Actívala en cada sitio, dispositivo o perfil nuevo. Al borrar los datos del sitio, se elimina la preferencia. Las estadísticas anteriores no cambian.',
      active: 'Este navegador está excluido.', inactive: 'Este navegador no está excluido.',
      confirm: 'Excluir este navegador', undo: 'Deshacer exclusión', home: 'Volver al sitio',
      saved: 'Preferencia guardada.', session: 'El almacenamiento no está disponible. La exclusión funciona en esta página abierta y al navegar, pero no se conservará al recargar. Habilita el almacenamiento del sitio y confirma de nuevo para guardarla.',
      failed: 'El navegador no pudo eliminar la preferencia guardada. La exclusión puede seguir activa. Habilita el almacenamiento del sitio e inténtalo de nuevo.',
      loading: 'Comprobando este navegador…'
    }
  };
  let copy = $derived(text[lang]);
  onMount(() => {
    const refresh = () => { excluded = isAnalyticsExcluded(); };
    refresh();
    ready = true;
    window.addEventListener('storage', refresh);
    return () => window.removeEventListener('storage', refresh);
  });
  function update(value: boolean) {
    result = setAnalyticsExcluded(value);
    excluded = isAnalyticsExcluded();
  }
</script>

<svelte:head>
  <title>{copy.title}</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="analytics-preference" lang={lang}>
  <nav aria-label="Language / Idioma">
    <button aria-pressed={lang === 'en'} onclick={() => lang = 'en'}>English</button>
    <button aria-pressed={lang === 'es'} onclick={() => lang = 'es'}>Español</button>
  </nav>
  <h1>{copy.title}</h1>
  <p>{copy.explanation}</p>
  <p>{copy.scope}</p>
  <p role="status" aria-live="polite">
    {ready ? (excluded ? copy.active : copy.inactive) : copy.loading}
    {#if result === 'saved'} {copy.saved}{/if}
    {#if result === 'session-only'} {copy.session}{/if}
    {#if result === 'failed'} {copy.failed}{/if}
  </p>
  <div class="actions">
    <button disabled={!ready || (excluded && result !== 'session-only')} onclick={() => update(true)}>{copy.confirm}</button>
    <button disabled={!ready || !excluded} onclick={() => update(false)}>{copy.undo}</button>
  </div>
  <a href="/">{copy.home}</a>
</main>

<style>
  .analytics-preference { box-sizing: border-box; width: min(100%, 44rem); margin: 4rem auto; padding: 1.5rem; font-family: system-ui, sans-serif; line-height: 1.6; }
  h1 { font-size: clamp(1.7rem, 5vw, 2.4rem); line-height: 1.2; margin: 1.5rem 0; }
  p { margin: 1rem 0; }
  nav, .actions { display: flex; flex-wrap: wrap; gap: .75rem; margin: 1.5rem 0; }
  button { font: inherit; color: inherit; background: transparent; border: 1px solid currentColor; border-radius: .5rem; padding: .65rem 1rem; min-height: 44px; cursor: pointer; }
  button:disabled { opacity: .55; cursor: default; }
  button:focus-visible, a:focus-visible { outline: 3px solid #537cf5; outline-offset: 4px; }
  nav button[aria-pressed='true'] { font-weight: 700; border-width: 2px; }
  a { text-decoration: underline; }
</style>
