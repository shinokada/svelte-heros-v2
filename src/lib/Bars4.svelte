<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="bars 4" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none" 
 {viewBox}
  stroke-width={strokeWidth}
  on:click
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
>
{#if variation === 'outline'}
  <path d="M3.75 5.25H20.25M3.75 9.75H20.25M3.75 14.25H20.25M3.75 18.75H20.25" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25C21 5.66421 20.6642 6 20.25 6H3.75C3.33579 6 3 5.66421 3 5.25ZM3 9.75C3 9.33579 3.33579 9 3.75 9H20.25C20.6642 9 21 9.33579 21 9.75C21 10.1642 20.6642 10.5 20.25 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75ZM3 14.25C3 13.8358 3.33579 13.5 3.75 13.5H20.25C20.6642 13.5 21 13.8358 21 14.25C21 14.6642 20.6642 15 20.25 15H3.75C3.33579 15 3 14.6642 3 14.25ZM3 18.75C3 18.3358 3.33579 18 3.75 18H20.25C20.6642 18 21 18.3358 21 18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75Z" fill="{color}"/> 
{/if}
</svg>
