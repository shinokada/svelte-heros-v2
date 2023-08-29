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
  
export let ariaLabel="device phone mobile" </script>

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
  <path d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path d="M8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H11.25C11.6642 15.5 12 15.8358 12 16.25C12 16.6642 11.6642 17 11.25 17H8.75C8.33579 17 8 16.6642 8 16.25Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.34315 5.34315 1 7 1H13C14.6569 1 16 2.34315 16 4V16C16 17.6569 14.6569 19 13 19H7C5.34315 19 4 17.6569 4 16V4ZM8 2.5V3.25C8 3.66421 8.33579 4 8.75 4H11.25C11.6642 4 12 3.66421 12 3.25V2.5H13C13.8284 2.5 14.5 3.17157 14.5 4V16C14.5 16.8284 13.8284 17.5 13 17.5H7C6.17157 17.5 5.5 16.8284 5.5 16V4C5.5 3.17157 6.17157 2.5 7 2.5H8Z" fill="{color}"/> 
{:else}
  <path d="M10.5 18.75C10.0858 18.75 9.75 19.0858 9.75 19.5C9.75 19.9142 10.0858 20.25 10.5 20.25H13.5C13.9142 20.25 14.25 19.9142 14.25 19.5C14.25 19.0858 13.9142 18.75 13.5 18.75H10.5Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.625 0.75C6.76104 0.75 5.25 2.26104 5.25 4.125V19.875C5.25 21.739 6.76104 23.25 8.625 23.25H15.375C17.239 23.25 18.75 21.739 18.75 19.875V4.125C18.75 2.26104 17.239 0.75 15.375 0.75H8.625ZM7.5 4.125C7.5 3.50368 8.00368 3 8.625 3H9.75V3.375C9.75 3.99632 10.2537 4.5 10.875 4.5H13.125C13.7463 4.5 14.25 3.99632 14.25 3.375V3H15.375C15.9963 3 16.5 3.50368 16.5 4.125V19.875C16.5 20.4963 15.9963 21 15.375 21H8.625C8.00368 21 7.5 20.4963 7.5 19.875V4.125Z" fill="{color}"/> 
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
