<script lang="ts">
  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";

  interface Props {
    words?: string;
    wrapperFramerProps?: any;
    framerProps?: any;
    class?: any;
  }

  let {
    words = 'Pull Up',
    wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  },
    framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
    class: className = ""
  }: Props = $props();

  let isMobile = $state(false);

  onMount(() => {
    isMobile = window.matchMedia('(max-width: 768px)').matches;
  });

  let wordSplit = words.split(" ");
</script>

<!-- On mobile: render text directly without Motion animations -->
{#if isMobile}
  <h1
    class={cn(
      "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
      className
    )}
  >
    {#each wordSplit as word}
      <span class="inline-block pr-[8px]">
        {#if word === ""}
          <span>&nbsp;</span>
        {:else}
          {word}
        {/if}
      </span>
    {/each}
  </h1>
{:else}
  <!-- Desktop: use Motion animations -->
  <Motion
    variants={wrapperFramerProps}
    initial="hidden"
    animate="show"
  >
    {#snippet children({ motion })}
      <h1
        class={cn(
          "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
          className
        )}
        use:motion
      >
        {#each wordSplit as word, i}
          <Motion variants={framerProps} >
            {#snippet children({ motion })}
              <span class="inline-block pr-[8px]" use:motion>
                {#if word === ""}
                  <span>&nbsp;</span>
                {:else}
                  {word}
                {/if}
              </span>
            {/snippet}
          </Motion>
        {/each}
      </h1>
    {/snippet}
  </Motion>
{/if}
