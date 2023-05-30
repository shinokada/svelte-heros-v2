<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="arrows pointing in" </script>

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
  <path d="M9 9L9 4.5M9 9L4.5 9M9 9L3.75 3.75M9 15L9 19.5M9 15L4.5 15M9 15L3.75 20.25M15 9H19.5M15 9V4.5M15 9L20.25 3.75M15 15H19.5M15 15L15 19.5M15 15L20.25 20.25" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L8.25 7.18934L8.25 4.5C8.25 4.08579 8.58579 3.75 9 3.75C9.41421 3.75 9.75 4.08579 9.75 4.5L9.75 9C9.75 9.41421 9.41421 9.75 9 9.75H4.5C4.08579 9.75 3.75 9.41421 3.75 9C3.75 8.58579 4.08579 8.25 4.5 8.25L7.18934 8.25L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967ZM20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L16.8107 8.25H19.5C19.9142 8.25 20.25 8.58579 20.25 9C20.25 9.41421 19.9142 9.75 19.5 9.75H15C14.5858 9.75 14.25 9.41421 14.25 9V4.5C14.25 4.08579 14.5858 3.75 15 3.75C15.4142 3.75 15.75 4.08579 15.75 4.5V7.18934L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967ZM3.75 15C3.75 14.5858 4.08579 14.25 4.5 14.25L9 14.25C9.41421 14.25 9.75 14.5858 9.75 15V19.5C9.75 19.9142 9.41421 20.25 9 20.25C8.58579 20.25 8.25 19.9142 8.25 19.5L8.25 16.8107L4.28033 20.7803C3.98744 21.0732 3.51256 21.0732 3.21967 20.7803C2.92678 20.4874 2.92678 20.0126 3.21967 19.7197L7.18934 15.75H4.5C4.08579 15.75 3.75 15.4142 3.75 15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H19.5C19.9142 14.25 20.25 14.5858 20.25 15C20.25 15.4142 19.9142 15.75 19.5 15.75H16.8107L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L15.75 16.8107V19.5C15.75 19.9142 15.4142 20.25 15 20.25C14.5858 20.25 14.25 19.9142 14.25 19.5L14.25 15Z" fill="{color}"/> 
{/if}
</svg>


<!--
  @component
  [Go to Document](https://svelte-heros-v2.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop strokeWidth = "1.5"
  @prop color="currentColor";
  @prop variation: "solid" | "outline" = "outline";
  @prop viewBox: string = '0 0 24 24';
-->