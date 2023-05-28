<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="arrow long right" </script>

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
  <path d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7197 7.71967C17.0126 7.42678 17.4874 7.42678 17.7803 7.71967L21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L17.7803 16.2803C17.4874 16.5732 17.0126 16.5732 16.7197 16.2803C16.4268 15.9874 16.4268 15.5126 16.7197 15.2197L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L16.7197 8.78033C16.4268 8.48744 16.4268 8.01256 16.7197 7.71967Z" fill="{color}"/> 
{/if}
</svg>
