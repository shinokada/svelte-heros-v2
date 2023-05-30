<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="square 2 stack" </script>

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
  <path d="M16.5 8.25V6C16.5 4.75736 15.4926 3.75 14.25 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M16.5 8.25H18C19.2426 8.25 20.25 9.25736 20.25 10.5V18C20.25 19.2426 19.2426 20.25 18 20.25H10.5C9.25736 20.25 8.25 19.2426 8.25 18V16.5M16.5 8.25H10.5C9.25736 8.25 8.25 9.25736 8.25 10.5V16.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path d="M16.5 6C16.5 4.34315 15.1569 3 13.5 3H6C4.34315 3 3 4.34315 3 6V13.5C3 15.1569 4.34315 16.5 6 16.5V10.5C6 8.01472 8.01472 6 10.5 6H16.5Z" fill="{color}"/> <path d="M18 7.5C19.6569 7.5 21 8.84315 21 10.5V18C21 19.6569 19.6569 21 18 21H10.5C8.84315 21 7.5 19.6569 7.5 18V10.5C7.5 8.84315 8.84315 7.5 10.5 7.5H18Z" fill="{color}"/> 
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