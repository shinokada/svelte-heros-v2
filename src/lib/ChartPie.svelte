<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.18
  export let size = "24";
  export let viewBox: string = '0 0 24 24';
  export let role = "img";
  export let strokeWidth = "1.5";
  export let color = "currentColor";
  export let variation: "solid" | "outline" | "mini"= "outline";

  if(variation === "mini"){
    size = "20"
    viewBox = '0 0 20 20'
  }
  
export let ariaLabel="chart pie" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  fill="none" 
 {viewBox}
  stroke-width={strokeWidth}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
{#if variation === 'outline'}
  <path d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path d="M12 8.99979C11.4477 8.99979 11 8.55207 11 7.99979V2.99979C11 2.4475 11.4503 1.99229 11.997 2.07025C15.0651 2.50777 17.492 4.93467 17.9295 8.00276C18.0075 8.54951 17.5523 8.99979 17 8.99979H12Z" fill="{color}"/> <path d="M8.00297 4.07025C8.54972 3.99229 9 4.4475 9 4.99979V9.99979C9 10.5521 9.44772 10.9998 10 10.9998H15C15.5523 10.9998 16.0075 11.4501 15.9295 11.9968C15.4456 15.3906 12.5275 17.9998 9 17.9998C5.13401 17.9998 2 14.8658 2 10.9998C2 7.47229 4.60923 4.5542 8.00297 4.07025Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 13.5C2.25 8.94365 5.94365 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 18.0563 15.0563 21.75 10.5 21.75C5.94365 21.75 2.25 18.0563 2.25 13.5Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C18.0563 2.25 21.75 5.94365 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5V3Z" fill="{color}"/> 
{/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size = "24";
@prop export let viewBox: string = '0 0 24 24';
@prop export let role = "img";
@prop export let strokeWidth = "1.5";
@prop export let color = "currentColor";
@prop export let variation: "solid" | "outline" | "mini"= "outline";
-->
