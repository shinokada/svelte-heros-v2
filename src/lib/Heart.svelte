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
  
export let ariaLabel="heart" </script>

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
  <path d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path d="M9.65298 16.9149L9.6476 16.9121L9.62912 16.9024C9.61341 16.8941 9.59102 16.8822 9.56238 16.8667C9.50511 16.8358 9.42281 16.7907 9.31906 16.732C9.11164 16.6146 8.81794 16.4425 8.46663 16.2206C7.76556 15.7777 6.82731 15.1314 5.88539 14.3197C4.04447 12.7332 2 10.3523 2 7.5C2 5.01472 4.01472 3 6.5 3C7.9144 3 9.17542 3.65238 10 4.67158C10.8246 3.65238 12.0856 3 13.5 3C15.9853 3 18 5.01472 18 7.5C18 10.3523 15.9555 12.7332 14.1146 14.3197C13.1727 15.1314 12.2344 15.7777 11.5334 16.2206C11.1821 16.4425 10.8884 16.6146 10.6809 16.732C10.5772 16.7907 10.4949 16.8358 10.4376 16.8667C10.409 16.8822 10.3866 16.8941 10.3709 16.9024L10.3524 16.9121L10.347 16.9149L10.3453 16.9158C10.13 17.03 9.87 17.03 9.65529 16.9161L9.65298 16.9149Z" fill="{color}"/> 
{:else}
  <path d="M11.645 20.9107L11.6384 20.9071L11.6158 20.8949C11.5965 20.8844 11.5689 20.8693 11.5336 20.8496C11.4629 20.8101 11.3612 20.7524 11.233 20.6769C10.9765 20.5261 10.6132 20.3039 10.1785 20.015C9.31074 19.4381 8.15122 18.5901 6.9886 17.5063C4.68781 15.3615 2.25 12.1751 2.25 8.25C2.25 5.32194 4.7136 3 7.6875 3C9.43638 3 11.0023 3.79909 12 5.0516C12.9977 3.79909 14.5636 3 16.3125 3C19.2864 3 21.75 5.32194 21.75 8.25C21.75 12.1751 19.3122 15.3615 17.0114 17.5063C15.8488 18.5901 14.6893 19.4381 13.8215 20.015C13.3868 20.3039 13.0235 20.5261 12.767 20.6769C12.6388 20.7524 12.5371 20.8101 12.4664 20.8496C12.4311 20.8693 12.4035 20.8844 12.3842 20.8949L12.3616 20.9071L12.355 20.9107L12.3523 20.9121C12.1323 21.0289 11.8677 21.0289 11.6477 20.9121L11.645 20.9107Z" fill="{color}"/> 
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
