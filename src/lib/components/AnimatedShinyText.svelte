<script lang="ts">
  import { cn } from "$lib/utils";

  interface Props {
    shimmerWidth?: number;
    class?: any;
    children?: import('svelte').Snippet;
  }

  let { shimmerWidth = 100, class: className = "", children }: Props = $props();
  
</script>

<p
  style:--shimmer-width="{shimmerWidth}px"
  class={cn(
    "shiny-text mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ",

    // Shimmer effect - disabled on mobile via CSS
    "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

    // Shimmer gradient
    "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

    className
  )}
>
  {#if children}{@render children()}{:else}Shimmer Animation{/if}
</p>

<style>
  /* Disable shimmer animation on mobile for performance */
  @media (max-width: 768px) {
    .shiny-text {
      animation: none !important;
      background-position: 50% 0 !important;
    }
  }
</style>
